import React, { useState, useMemo, useEffect } from 'react';
import Lottie from "lottie-react";
import { Search, ShoppingBag, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/component/ProductCard';
import BackgroundImage from '@/component/bg';
import { PrinterScannerData } from '@/lib/printer-scanner-product.jsx';

import loadingAnimation from '../assets/loading-animation.json';

import masterBg from '../assets/master-bg.png';

const PrintersScanners = () => {
    const products = useMemo(() => [...PrinterScannerData], []);

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const productsPerPage = 9;

    // Get unique categories
    // const categories = useMemo(() => {
    //     const uniqueCategories = new Set(products.map(product => product.category));
    //     return ['all', ...Array.from(uniqueCategories)].sort();
    // }, [products]);

     // Get unique categories
     const categories = useMemo(() => {
        return ['All', '3D Printer', 'Resin 3D Printer', '3D Scanner'];
    }, []);

    // Preload images with AbortController
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const loadImages = async () => {
            const startTime = Date.now();
            const minLoadTime = 500; // 0.5 seconds in milliseconds

            try {
                const imageUrls = products.map(product => product.image);
                await Promise.all(
                    imageUrls.map(url => {
                        return new Promise((resolve, reject) => {
                            const img = new Image();
                            img.onload = resolve;
                            img.onerror = reject;
                            img.src = url;
                        });
                    })
                );

                if (!signal.aborted) {
                    const elapsedTime = Date.now() - startTime;
                    if (elapsedTime < minLoadTime) {
                        // Wait for remaining time to reach 3 seconds
                        await new Promise(resolve =>
                            setTimeout(resolve, minLoadTime - elapsedTime)
                        );
                    }
                    setImagesLoaded(true);
                }
            } catch (error) {
                console.error('Error preloading images:', error);
                if (!signal.aborted) {
                    const elapsedTime = Date.now() - startTime;
                    if (elapsedTime < minLoadTime) {
                        // Wait for remaining time to reach 3 seconds even on error
                        await new Promise(resolve =>
                            setTimeout(resolve, minLoadTime - elapsedTime)
                        );
                    }
                    setImagesLoaded(true);
                }
            }
        };

        loadImages();

        return () => controller.abort();
    }, [products]);

    // Memoized filtered products
    const filteredProducts = useMemo(() => {
        const searchLower = searchTerm.toLowerCase();
        return products.filter(product => {
            const matchesSearch =
                product.name.toLowerCase().includes(searchLower) ||
                product.description.toLowerCase().includes(searchLower);
            const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory, products]);

    // Get current products for pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page on search
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setSearchParams({ category });
        setCurrentPage(1);
        setIsDropdownOpen(false);
    };

    // Pagination component
    const Pagination = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }

        return (
            <div className="flex justify-center items-center space-x-2 mt-8">
                <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 disabled:opacity-50"
                >
                    <ChevronLeft className="h-5 w-5 text-amber-800" />
                </Button>

                <div className="flex space-x-2">
                    {pageNumbers.map(number => (
                        <Button
                            key={number}
                            onClick={() => handlePageChange(number)}
                            className={`w-10 h-10 rounded-full font-serif transition-all duration-300 
                                ${currentPage === number
                                    ? 'bg-amber-600 text-white hover:bg-amber-700'
                                    : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
                        >
                            {number}
                        </Button>
                    ))}
                </div>

                <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 disabled:opacity-50"
                >
                    <ChevronRight className="h-5 w-5 text-amber-800" />
                </Button>
            </div>
        );
    };

    if (!imagesLoaded) {
        return (
            <div className="h-screen flex items-center justify-center bg-amber-50">
                <div className="w-48 h-48 lg:w-96 lg:h-96">
                    <Lottie animationData={loadingAnimation} loop={true} autoplay={true} />
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-amber-50 to-white overflow-auto">
            <div className="z-0">
                <BackgroundImage bgImage={masterBg} />
            </div>
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header Section */}
                <div className="text-center pt-4 mb-16">
                    <ShoppingBag className="mx-auto mb-4 text-amber-800" size={40} />
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-amber-900">
                        Exquisite Collection
                    </h1>
                    <div className="w-24 h-1 bg-amber-800 mx-auto mb-4 rounded-full" />
                    <p className="text-amber-700 italic text-lg">Discover our carefully curated selection</p>
                </div>

                {/* Search Section */}
                <div className="max-w-2xl mx-auto mb-12 sticky top-4 z-10">
                    <div className="flex flex-col sm:flex-row gap-4 p-6 bg-white rounded-lg shadow-lg backdrop-blur-sm bg-opacity-90">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600" size={20} />
                            <input
                                type="text"
                                placeholder="Search our collection..."
                                className="w-full pl-10 pr-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Categories Section */}
                <div className="mb-12">
                    {/* Mobile Dropdown */}
                    <div className="md:hidden relative">
                        <Button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full bg-amber-100 text-amber-800 hover:bg-amber-200 font-serif py-3 px-6 rounded-lg flex justify-between items-center"
                        >
                            <span>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</span>
                            <ChevronDown className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </Button>
                        {isDropdownOpen && (
                            <div className="absolute z-20 w-full mt-2 bg-white rounded-lg shadow-lg">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => handleCategorySelect(category)}
                                        className={`w-full text-left px-6 py-3 hover:bg-amber-50 font-serif
                                            ${selectedCategory === category ? 'bg-amber-100 text-amber-800' : 'text-amber-700'}`}
                                    >
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Desktop Categories */}
                    <div className="hidden md:flex flex-wrap justify-center gap-4">
                        {categories.map(category => (
                            <Button
                                key={category}
                                onClick={() => handleCategorySelect(category)}
                                className={`px-6 py-2 rounded-full font-serif transition-all duration-300 
                                    ${selectedCategory === category
                                        ? 'bg-amber-600 text-white hover:bg-amber-700'
                                        : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentProducts.map(product => (
                        <ProductCard key={product.id} product={product} pathname="printers-scanners" />
                    ))}
                </div>

                {/* Pagination */}
                {filteredProducts.length > productsPerPage && <Pagination />}

                {/* No Results Message */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-16">
                        <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
                            <p className="text-amber-800 font-serif text-xl">No items found in our collection matching your criteria.</p>
                            <p className="text-amber-600 mt-2 italic">Please try adjusting your search.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PrintersScanners;
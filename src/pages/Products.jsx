import React, { useState, useMemo, useEffect } from 'react';
import Lottie from "lottie-react";
import { Search, ShoppingBag, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/component/ProductCard';
import BackgroundImage from '@/component/bg';

import { SpicesData } from '@/lib/spices';
import { FruitsData } from '@/lib/fruits';
import { RiceData } from '@/lib/rice';
import { FabricsData } from '@/lib/fabrics';
import { CoconutData } from '@/lib/coconut';
import { DetergentBleachData } from '@/lib/detergent';
import { PrinterScannerData } from '@/lib/printer-scanner-product';

import loadingAnimation from '../assets/loading-animation.json';
import masterBg from '../assets/master-bg.png';

const Product = () => {
    // Combine all product data
    const products = useMemo(() => [
        ...SpicesData,
        ...FruitsData,
        ...RiceData,        
        ...FabricsData,
        ...CoconutData,
        ...DetergentBleachData,
        ...PrinterScannerData
    ], []);

    // State management
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const productsPerPage = 9;

    // Memoized categories
    const categories = useMemo(() => (
        // TODO: Add Synthetic Fabrics, Blended Fabrics (when will need)
        ['All', 'Spices', 'Fruits', 'Rice', 'Coconut', 'Natural Fabrics', 'Detergent', 'Bleach', '3D Printer', 'Resin 3D Printer', '3D Scanner']
        // ['All', 'Spices', 'Fruits', 'Rice', 'Coconut', 'Natural Fabrics', 'Synthetic Fabrics', 'Blended Fabrics', 'Detergent', 'Bleach', '3D Printer', 'Resin 3D Printer', '3D Scanner']
    ), []);

    // Image preloading with AbortController
    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;

        const loadImages = async () => {
            try {
                const startIndex = (currentPage - 1) * productsPerPage;
                const visibleProducts = products.slice(startIndex, startIndex + productsPerPage);
                
                await Promise.all(
                    visibleProducts.map(({ image }) => 
                        Promise.race([
                            new Promise((resolve, reject) => {
                                const img = new Image();
                                img.onload = resolve;
                                img.onerror = reject;
                                img.src = image;
                            }),
                            new Promise((_, reject) => 
                                setTimeout(() => reject(new Error('Image load timeout')), 2000)
                            )
                        ]).catch(err => {
                            console.warn(`Failed to load image ${image}:`, err);
                            return null;
                        })
                    )
                );

                if (!signal.aborted) {
                    setImagesLoaded(true);
                }
            } catch (error) {
                console.error('Error preloading images:', error);
                if (!signal.aborted) {
                    setImagesLoaded(true); 
                }
            }
        };

        loadImages();
        return () => controller.abort();
    }, [products, currentPage, productsPerPage]);

    // Memoized filtered products
    const filteredProducts = useMemo(() => {
        const searchLower = searchTerm.toLowerCase();
        return products.filter(product => (
            (product.name.toLowerCase().includes(searchLower) || 
             product.description.toLowerCase().includes(searchLower)) &&
            (selectedCategory === 'All' || product.category === selectedCategory)
        ));
    }, [searchTerm, selectedCategory, products]);

    // Update category from URL params
    useEffect(() => {
        const category = searchParams.get('category') || 'All';
        setSelectedCategory(category);
        setCurrentPage(1);
    }, [searchParams]);

    // Pagination calculations
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const currentProducts = filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    // Event handlers
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        const productsGrid = document.getElementById('products-grid');
        if (productsGrid) {
            const y = productsGrid.getBoundingClientRect().top + window.pageYOffset - 120;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setSearchParams({ category });
        setCurrentPage(1);
        setIsDropdownOpen(false);
    };

    // Pagination component
    const Pagination = () => {
        const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

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
                <div className="text-center mb-16">
                    <ShoppingBag className="mx-auto mb-4 text-amber-800" size={40} />
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-amber-900">
                        Exquisite Collection
                    </h1>
                    <div className="w-24 h-1 bg-amber-800 mx-auto mb-4 rounded-full" />
                    <p className="text-amber-700 italic text-lg">Discover our carefully curated selection</p>
                </div>

                {/* Search Section */}
                <div className="sticky top-0 pt-4 pb-2 z-20">
                    <div className="max-w-2xl mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4 p-6 bg-white/95 rounded-lg shadow-lg backdrop-blur-sm">
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
                </div>

                {/* Categories Section */}
                <div className="my-8">
                    {/* Mobile Dropdown */}
                    <div className="md:hidden relative">
                        <Button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full bg-amber-100 text-amber-800 hover:bg-amber-200 font-serif py-3 px-6 rounded-lg flex justify-between items-center"
                        >
                            <span>{selectedCategory}</span>
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
                                        {category}
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
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div id="products-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentProducts.map(product => (
                        <ProductCard key={product.id} product={product} pathname={ product.category === 'Detergent' || product.category === 'Bleach' ? 'detergent-bleach' : product.category === '3D Printer' || product.category === 'Resin 3D Printer' || product.category === '3D Scanner' ? 'printers-scanners' : 'product'} />
                    ))}
                </div>

                {/* Pagination */}
                {filteredProducts.length > productsPerPage && (
                    <div className="mt-12 mb-8">
                        <Pagination />
                    </div>
                )}

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

export default Product;
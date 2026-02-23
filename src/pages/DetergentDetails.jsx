import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import {
    ChevronRight,
    Shield,
    MessageSquare,
    Star,
    Zap
} from 'lucide-react';
import { DetergentBleachDetailedData } from "@/lib/detergent";

import loadingAnimation from '../assets/loading-animation.json';

const dataTemplate = [...DetergentBleachDetailedData];

const DetergentBleachDetails = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleInquiryClick = () => {
        navigate('/contact#inquiry');
    };

    const handleLearnMoreClick = () => {
        navigate('#learn-more');
    };

    useEffect(() => {
        const loadProductData = async () => {
            try {
                const formattedName = name.replace(/\+/g, ' ');
                const productData = dataTemplate.find(
                    product => product.name &&
                        product.name.toLowerCase() === formattedName.toLowerCase()
                );

                if (productData) {
                    setData(productData);
                } else {
                    console.error('Product not found:', formattedName);
                    navigate('/detergent-bleach', { replace: true });
                }
            } catch (error) {
                console.error('Error loading product:', error);
                navigate('/detergent-bleach', { replace: true });
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 300);
            }
        };

        loadProductData();
    }, [name, navigate]);

    // Animation variants
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    if (isLoading || !data) {
        return (
            <div className="h-screen flex items-center justify-center bg-amber-50">
                <div className="w-48 h-48 lg:w-96 lg:h-96">
                    <Lottie animationData={loadingAnimation} loop={true} autoplay={true} />
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-[#F0F7FF] to-white overflow-hidden font-serif">
            <div className="relative z-10">
                {/* Header section with responsive typography */}
                <motion.header 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-6 sm:pb-12 md:pb-16 px-4 sm:px-6 text-center"
                >
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#1E40AF] tracking-wide">
                            {data.mainHeadings[0]}
                        </h1>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-[#3B82F6] mt-2 sm:mt-4">
                            {data.mainHeadings[1]}
                        </h2>
                        <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
                            {data.subHeadings.map((heading, index) => (
                                <React.Fragment key={index}>
                                    <span className="text-sm sm:text-base md:text-lg text-[#2563EB] tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                                        {heading}
                                    </span>
                                    {index < data.subHeadings.length - 1 && (
                                        <span className="hidden sm:block text-sm sm:text-base md:text-lg text-[#2563EB]">•</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </motion.header>

                {/* Product Section */}
                <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div 
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
                        >
                            {/* Product Image */}
                            <motion.div
                                variants={fadeInUp}
                                className="relative max-w-2xl mx-auto px-2 sm:px-4 lg:px-6"
                            >
                                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white/50 backdrop-blur-sm p-2 sm:p-4 shadow-xl">
                                    <img
                                        src={data.img}
                                        alt={data.productTitle}
                                        className="w-full h-auto rounded-xl sm:rounded-2xl"
                                        loading="eager"
                                    />

                                    {/* Floating Specs - Responsive positioning */}
                                    <div className="hidden md:block">
                                        <motion.div 
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="absolute -right-2 lg:-right-4 top-1/3 bg-white/90 backdrop-blur-md shadow-lg p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-[#3B82F6]/20"
                                        >
                                            <Star className="w-5 h-5 lg:w-6 lg:h-6 text-[#3B82F6] mb-2" />
                                            <p className="text-[#3B82F6] text-xs lg:text-sm font-medium">Precision</p>
                                            <p className="text-xl lg:text-2xl xl:text-3xl font-bold text-[#1E40AF]">High</p>
                                        </motion.div>
                                        <motion.div 
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="absolute -left-2 lg:-left-4 bottom-1/4 bg-white/90 backdrop-blur-md shadow-lg p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-[#3B82F6]/20"
                                        >
                                            <Star className="w-5 h-5 lg:w-6 lg:h-6 text-[#3B82F6] mb-2" />
                                            <p className="text-[#3B82F6] text-xs lg:text-sm font-medium">Build Quality</p>
                                            <p className="text-xl lg:text-2xl xl:text-3xl font-bold text-[#1E40AF]">Premium</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Product Details */}
                            <motion.div
                                variants={fadeInUp}
                                className="space-y-8 sm:space-y-10 lg:space-y-12"
                            >
                                <div className="space-y-4 sm:space-y-6">
                                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E40AF]">
                                        {data.productTitle}
                                    </h3>
                                    <p className="text-base sm:text-lg text-[#1F2937] leading-relaxed">
                                        {data.productDescription}
                                    </p>
                                </div>

                                {/* Features Grid */}
                                <motion.div 
                                    variants={staggerContainer}
                                    className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6"
                                >
                                    {[
                                        { icon: Shield, label: "Quality", value: "Premium Grade" },
                                        { icon: Zap, label: "Performance", value: "High Speed" },
                                        { icon: Star, label: "Build", value: "Industrial" },
                                        { icon: Star, label: "Rating", value: "5.0/5.0" }
                                    ].map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            variants={fadeInUp}
                                            className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#3B82F6]/20"
                                        >
                                            <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#3B82F6] mb-2 sm:mb-3" />
                                            <p className="text-xs sm:text-sm text-[#3B82F6] font-medium">{feature.label}</p>
                                            <p className="text-sm sm:text-base text-[#1E40AF] font-bold mt-1">{feature.value}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* CTAs */}
                                <motion.div 
                                    variants={fadeInUp}
                                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6"
                                >
                                    <button
                                        onClick={handleInquiryClick}
                                        className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-[#2563EB] text-white rounded-xl font-medium flex items-center justify-center gap-2 group shadow-lg hover:bg-[#1E40AF] transition-all duration-300"
                                    >
                                        <MessageSquare className="w-5 h-5" />
                                        <span>Inquiry</span>
                                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button
                                        onClick={handleLearnMoreClick}
                                        className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 border-2 border-[#2563EB] text-[#1E40AF] rounded-xl font-medium hover:bg-[#2563EB]/10 transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <span>Learn More</span>
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Versatile Uses Section */}
                <section id="learn-more" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white/20 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-center text-[#1E40AF] mb-8 sm:mb-12 md:mb-16"
                        >
                            {data.versatileUsesLabel}
                        </motion.h3>
                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                        >
                            {data.versatileUses.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="bg-white/80 shadow-lg rounded-2xl p-8 border border-[#3B82F6]/20 backdrop-blur-sm"
                                >
                                    <benefit.icon className="w-12 h-12 text-[#3B82F6] mb-4" />
                                    <h4 className="text-xl font-bold text-[#1E40AF] mb-3">{benefit.title}</h4>
                                    <p className="text-[#1F2937] leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-center text-[#1E40AF] mb-8 sm:mb-12 md:mb-16"
                        >
                            {data.whyChooseOurPowderLabel}
                        </motion.h2>

                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                        >
                            {data.whyChooseOurPowder.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="bg-white/80 shadow-lg rounded-2xl p-8 border border-[#3B82F6]/20 backdrop-blur-sm"
                                >
                                    <div className="flex items-center mb-4">
                                        <feature.icon className="w-8 h-8 text-[#3B82F6] mr-4" />
                                        <h3 className="text-xl font-bold text-[#1E40AF]">
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <p className="text-[#1F2937] leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Video Section */}
                {data.videoLink && (
                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white/20 backdrop-blur-sm"
                    >
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-center text-[#1E40AF] mb-8 sm:mb-12 md:mb-16">
                                Product Video
                            </h2>
                            <div className="aspect-w-16 aspect-h-9 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                                <iframe
                                    src={data.videoLink.replace('watch?v=', 'embed/')}
                                    title="Product Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-[200px] sm:h-[350px] md:h-[500px] rounded-xl sm:rounded-2xl"
                                ></iframe>
                            </div>
                        </div>
                    </motion.section>
                )}
            </div>
        </div>
    );
};

export default DetergentBleachDetails;

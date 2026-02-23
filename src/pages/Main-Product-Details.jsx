import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Award,
    ChevronRight,
    Leaf,
    Package,
    Shield,    
} from 'lucide-react';

import loadingAnimation from '../assets/loading-animation.json';
import BackgroundImage from "../component/bg";

import { SpicesColorData, SpicesDetailedData } from "@/lib/spices";
import { FruitsColorData, FruitsDetailedData } from "@/lib/fruits";
import { RiceColorData, RiceDetailedData } from "@/lib/rice";
import { FabricsColorData, FabricsDetailedData } from "@/lib/fabrics";
import { CoconutColorData, CoconutDetailedData } from "@/lib/coconut";

const dataTemplate = [
    ...SpicesDetailedData,
    ...FruitsDetailedData,
    ...RiceDetailedData,
    ...FabricsDetailedData,
    ...CoconutDetailedData
]

const colorPaletteTemplate = [
    ...SpicesColorData,
    ...FruitsColorData,
    ...RiceColorData,
    ...FabricsColorData,
    ...CoconutColorData
];

const MainProductDetails = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [colorPalette, setColorPalette] = useState(null);

    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    useEffect(() => {
        // Find product by name
        const formattedName = name.replace(/\+/g, ' ');
        const productData = dataTemplate.find(product => product.name && product.name.toLowerCase() === formattedName.toLowerCase());
        const colorPaletteData = colorPaletteTemplate.find(color => color.name && color.name.toLowerCase() === formattedName.toLowerCase());

        if (productData) {
            setData(productData);
            setColorPalette(colorPaletteData);
        } else {
            // Redirect to main products page or show error page
            navigate('/products');
        }        
    }, [name, navigate]);    

    if (!data || !colorPalette) {
        return (
            <div className="h-screen flex items-center justify-center bg-amber-50">
                <div className="w-48 h-48 lg:w-96 lg:h-96">
                    <Lottie animationData={loadingAnimation} loop={true} autoplay={true} />
                </div>
            </div>
        );
    }

    const advancedFloatAnimation = {
        initial: {
            y: 0,
            rotate: 0,
            scale: 1
        },
        animate: {
            y: [0, -15, -10, 0, 5],
            rotate: [0, 2, -2, 0],
            scale: [1, 1.02, 0.98, 1],
            transition: {
                y: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                },
                rotate: {
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                },
                scale: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                }
            }
        },
        hover: {
            scale: 1.05,
            rotate: 3,
            transition: {
                duration: 0.3
            }
        },
        tap: {
            scale: 0.95,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <div style={{ backgroundColor: colorPalette.background.main }} className="relative min-h-screen overflow-hidden font-serif">
            {data.bgImage && <BackgroundImage bgImage={data.bgImage} />}

            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none">
                <motion.div
                    style={{ 
                        y: backgroundY,
                        backgroundColor: colorPalette.background.element1
                    }}
                    className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-50"
                />
                <motion.div
                    style={{ 
                        y: backgroundY,
                        backgroundColor: colorPalette.background.element2
                    }}
                    className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-50"
                />

                {/* Keep existing floating images */}
                {data.vector1 && (
                    <motion.div
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        whileTap="tap"
                        variants={advancedFloatAnimation}
                        className="absolute top-20 left-10 w-32 h-32 opacity-75"
                    >
                        <img src={data.vector1} alt="Decorative banana" className="w-full h-full" />
                    </motion.div>
                )}
                {data.vector2 && (
                    <motion.div
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        whileTap="tap"
                        variants={advancedFloatAnimation}
                        className="absolute bottom-20 right-10 w-32 h-32 opacity-75"
                    >
                        <img src={data.vector2} alt="Decorative banana" className="w-full h-full" />
                    </motion.div>
                )}
            </div>

            <div className="relative z-10">
                {/* Header section */}
                <motion.header
                    className="pt-28 sm:pt-24 md:pt-24 lg:pt-32 pb-6 sm:pb-16 md:pb-20 px-4 sm:px-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <div className="max-w-5xl mx-auto">
                        <motion.h1
                            style={{ color: colorPalette.text.mainHeadings.primary }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold tracking-wide"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            {data.mainHeadings[0]}
                        </motion.h1>
                        <motion.h2
                            style={{ color: colorPalette.text.mainHeadings.secondary }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold mt-2 sm:mt-4"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            {data.mainHeadings[1]}
                        </motion.h2>
                        <motion.div
                            className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <span style={{ color: colorPalette.text.subHeadings }} className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase">{data.subHeadings[0]}</span>
                            <span style={{ color: colorPalette.text.subHeadings }} className="hidden sm:block text-base sm:text-lg md:text-xl tracking-[0.3em]">•</span>
                            <span style={{ color: colorPalette.text.subHeadings }} className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase">{data.subHeadings[1]}</span>
                            <span style={{ color: colorPalette.text.subHeadings }} className="hidden sm:block text-base sm:text-lg md:text-xl tracking-[0.3em]">•</span>
                            <span style={{ color: colorPalette.text.subHeadings }} className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase">{data.subHeadings[2]}</span>
                        </motion.div>
                    </div>
                </motion.header>

                {/* Product Section */}
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            {/* Product Image */}
                            <motion.div
                                className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <div className="relative rounded-3xl overflow-hidden bg-white/50 p-2 sm:p-4 lg:p-6">
                                    <motion.img
                                        src={data.img}
                                        alt="Product"
                                        className="w-full h-auto rounded-xl sm:rounded-2xl"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                    />

                                    {/* Floating Specs */}
                                    <div className="hidden md:block">
                                        <motion.div
                                            style={{ borderColor: `${colorPalette.text.floatingSpecs.primary}20` }}
                                            className="absolute -right-2 lg:-right-4 top-1/3 bg-white/90 shadow-lg p-4 lg:p-6 rounded-xl lg:rounded-2xl border"
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.6 }}
                                        >
                                            <p style={{ color: colorPalette.text.floatingSpecs.primary }} className="text-xs lg:text-sm font-medium">Purity Level</p>
                                            <p style={{ color: colorPalette.text.floatingSpecs.secondary }} className="text-2xl lg:text-3xl font-bold">99.9%</p>
                                        </motion.div>
                                        <motion.div
                                            style={{ borderColor: `${colorPalette.text.floatingSpecs.primary}20` }}
                                            className="absolute -left-2 lg:-left-4 bottom-1/4 bg-white/90 shadow-lg p-4 lg:p-6 rounded-xl lg:rounded-2xl border"
                                            initial={{ x: -50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.8 }}
                                        >
                                            <p style={{ color: colorPalette.text.floatingSpecs.primary }} className="text-xs lg:text-sm font-medium">Quality Grade</p>
                                            <p style={{ color: colorPalette.text.floatingSpecs.secondary }} className="text-2xl lg:text-3xl font-bold">Premium</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Product Details */}
                            <motion.div
                                className="space-y-12"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <div className="space-y-6">
                                    <h3 style={{ color: colorPalette.text.productTitle }} className="text-5xl font-serif font-bold">{data.productTitle}</h3>
                                    <p style={{ color: colorPalette.text.productDescription }} className="text-lg leading-relaxed">
                                        {data.productDescription}
                                    </p>
                                </div>

                                {/* Features Grid */}
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { icon: Shield, label: "Quality", value: "Premium Grade" },
                                        { icon: Award, label: "Certified", value: "100% Organic" },
                                        { icon: Leaf, label: "Source", value: "Natural" },
                                        { icon: Package, label: "Packaging", value: "Airtight Seal" }
                                    ].map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            style={{ borderColor: `${colorPalette.text.floatingSpecs.primary}20` }}
                                            className="bg-white/80 backdrop-blur-sm shadow-md rounded-2xl p-6 border"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.03 }}
                                        >
                                            <feature.icon style={{ color: colorPalette.text.floatingSpecs.primary }} className="w-8 h-8 mb-3" />
                                            <p style={{ color: colorPalette.text.floatingSpecs.primary }} className="text-sm font-medium">{feature.label}</p>
                                            <p style={{ color: colorPalette.text.floatingSpecs.secondary }} className="font-bold mt-1">{feature.value}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTAs */}
                                <div className="flex gap-6 pt-6">
                                    <motion.button
                                        style={{ 
                                            backgroundColor: colorPalette.buttons.orderNow.background,
                                            color: 'white'
                                        }}
                                        className="px-10 py-4 rounded-xl font-medium flex items-center gap-2 group shadow-lg transition-colors"
                                        whileHover={{ 
                                            scale: 1.05,
                                            backgroundColor: colorPalette.buttons.orderNow.hover
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => navigate('/contact#inquiry')}
                                    >
                                        Inquiry Now
                                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                    <motion.button
                                        style={{ 
                                            borderColor: colorPalette.buttons.learnMore.border,
                                            color: colorPalette.buttons.learnMore.text
                                        }}
                                        className="px-10 py-4 border-2 rounded-xl font-medium transition-colors"
                                        whileHover={{ 
                                            scale: 1.05,
                                            backgroundColor: `${colorPalette.buttons.learnMore.hover}1a`
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => navigate('#learn-more')}
                                    >
                                        Learn More
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Health Benefits Section */}
                <section id="learn-more" className="py-20 px-6 bg-white/30">
                    <motion.div
                        className="max-w-7xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ color: colorPalette.text.productTitle }} className="text-4xl font-serif font-bold text-center mb-16">
                            Health Benefits
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {data.healthBenefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    style={{ borderColor: `${colorPalette.text.floatingSpecs.primary}20` }}
                                    className="bg-white/80 shadow-lg rounded-2xl p-8 border"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{
                                        scale: 1.03,
                                        backgroundColor: "rgba(255, 255, 255, 0.9)"
                                    }}
                                >
                                    <benefit.icon style={{ color: colorPalette.text.floatingSpecs.primary }} className="w-12 h-12 mb-4" />
                                    <h4 style={{ color: colorPalette.text.productTitle }} className="text-xl font-bold mb-3">{benefit.title}</h4>
                                    <p style={{ color: colorPalette.text.productDescription }} className="leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Versatile Uses */}
                <section className="py-20 px-6 bg-white/20">
                    <motion.div
                        className="max-w-7xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ color: colorPalette.text.productTitle }} className="text-4xl font-serif font-bold text-center mb-16">
                            {data.versatileUsesLabel}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {data.versatileUses.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    style={{ borderColor: `${colorPalette.text.floatingSpecs.primary}20` }}
                                    className="bg-white/80 shadow-lg rounded-2xl p-8 border"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{
                                        scale: 1.03,
                                        backgroundColor: "rgba(255, 255, 255, 0.9)"
                                    }}
                                >
                                    <benefit.icon style={{ color: colorPalette.text.floatingSpecs.primary }} className="w-12 h-12 mb-4" />
                                    <h4 style={{ color: colorPalette.text.productTitle }} className="text-xl font-bold mb-3">{benefit.title}</h4>
                                    <p style={{ color: colorPalette.text.productDescription }} className="leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Why Choose Our Product */}
                <section className="py-20 px-6 bg-white/30">
                    <div className="max-w-7xl mx-auto">
                        <h2 style={{ color: colorPalette.text.productTitle }} className="text-4xl font-serif font-bold text-center mb-16">
                            {data.whyChooseOurPowderLabel}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {data.whyChooseOurPowder.map((feature, index) => (
                                <div
                                    key={index}
                                    style={{ borderColor: `${colorPalette.text.floatingSpecs.primary}20` }}
                                    className="bg-white/80 shadow-lg rounded-2xl p-8 border hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="flex items-center mb-4">
                                        <feature.icon style={{ color: colorPalette.text.floatingSpecs.primary }} className="w-8 h-8 mr-4" />
                                        <h3 style={{ color: colorPalette.text.productTitle }} className="text-xl font-bold">
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <p style={{ color: colorPalette.text.productDescription }} className="leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                {data.video && data.video.length > 0 && (
                    <section className="py-20 px-6 bg-white/20">
                        <div className="max-w-7xl mx-auto">
                            <h2 style={{ color: colorPalette.text.productTitle }} className="text-4xl font-serif font-bold text-center mb-16">
                                {data.videoLabel}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {data.video.map((videoSrc, index) => (
                                    <div key={index} className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-xl">
                                        <iframe
                                            src={videoSrc}
                                            title={`Product Video ${index + 1}`}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="absolute top-0 left-0 w-full h-full"
                                        ></iframe>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default MainProductDetails;
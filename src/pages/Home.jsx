import React, { useState, useEffect } from 'react';
import Hero from '../component/Hero';
import HeroMobile from '../component/HeroMobile';
import { ShoppingBag, MapPin, Phone, Mail, Clock } from 'lucide-react';
import BackgroundImage from '@/component/bg';
import masterBg from '../assets/master-bg.png';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import loadingAnimation from '../assets/loading-animation.json';
// import WorldMap from '../component/WorldMap';
import ManufacturingPartners from '@/component/ManufacturingPartners';
import { Helmet } from 'react-helmet-async';

import pro1 from '../assets/1.png'
import pro2 from '../assets/1121basmati-steam.png'
import pro3 from '../assets/1.png'
import pro4 from '../assets/Fabrics/Cotton-fabric-1.jpeg'
import pro5 from '../assets/Fabrics/Cotton-Linen-Fabric-1.jpeg'
import pro6 from '../assets/Fabrics/Nylon-Fabric-1.jpeg'
import pro7 from '../assets/brown-coconut.png'

import logo from '../assets/Logo/KLNLogo.png'


// Add global styles for smooth scrolling and hide scrollbar but keep functionality
const scrollbarStyles = `
  <style>
    html {
      scroll-behavior: smooth;
    }
    
    body {
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }
    
    /* Hide scrollbar for IE, Edge and Firefox */
    * {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  </style>
`;

// Insert styles into document head
document.head.insertAdjacentHTML('beforeend', scrollbarStyles);

const Home = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);
   

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const loadImages = async () => {
            const startTime = Date.now();
            const minLoadTime = 500; // 0.5 seconds minimum loading time

            try {
                const imageUrls = [pro1, pro2, pro3, pro4, pro5, pro6, pro7];
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
                        await new Promise(resolve =>
                            setTimeout(resolve, minLoadTime - elapsedTime)
                        );
                    }
                    setImagesLoaded(true);
                }
            }
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        loadImages();

        return () => {
            window.removeEventListener('resize', handleResize);
            controller.abort();
        };
    }, []);

    if (!imagesLoaded) {
        return (
            <div className="h-screen flex items-center justify-center bg-amber-50">
                <div className="w-48 h-48 lg:w-96 lg:h-96">
                    <Lottie animationData={loadingAnimation} loop={true} autoplay={true} />
                </div>
            </div>
        );
    }

    const productPreviews = [
        {
            title: "Spices",
            mainImage: pro1,
            description: "Our premium spices collection includes garlic powder, chili powder, turmeric powder and more for bold flavors.",
            path: "Spices"
        },
        {
            title: "Rice",
            mainImage: pro2,
            description: "Premium rice varieties including 1121 Basmati Steam, IR 64 Rice, and Golden Sella for perfect meals.",
            path: "Rice"
        },
        {
            title: "Detergent",
            mainImage: pro3,
            description: "High quality detergents including powder and liquid formulations for all your cleaning needs.",
            path: "Detergent"
        },
        {
            title: "Natural Fabric",
            mainImage: pro4,
            description: "Sustainable natural fabrics including cotton, hemp, coir and more for eco-friendly textiles.",
            path: "Natural+Fabric"
        },
        {
            title: "Blended Fabric",
            mainImage: pro5,
            description: "Quality blended fabrics like poly-cotton, cotton-linen, and hemp-cotton for versatile applications.",
            path: "Blended+Fabric"
        },
        {
            title: "Synthetic Fabric",
            mainImage: pro6,
            description: "High-performance synthetic fabrics including polyester, nylon, and spandex for specialized applications.",
            path: "Synthetic+Fabric"
        },
        {
            title: "Coconut",
            mainImage: pro7,
            description: "Our premium mature coconuts are hand-selected at peak ripeness, with rich creamy flesh and high oil content. Each coconut is quality-checked for optimal maturity and flavor. Perfect for coconut milk, oil extraction, or fresh consumption.",
            path: "Coconut"
        }

    ];

    const handleProductClick = (productPath) => {
        navigate(`/products?category=${productPath}`);
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Our Location",
            details: ["B-701, Silver Coin,", "opposite Uttran Power House", "Chorasi, Surat – 394105"],
            color: "text-blue-600"
        },
        {
            icon: Phone,
            title: "Phone Number",
            details: ["+91 79843 33872", "+44 74421 09245"],
            color: "text-green-600"
        },
        {
            icon: Mail,
            title: "Email Address",
            details: ["klninternational.pvt.ltd@gmail.com"],
            color: "text-red-600"
        },
        {
            icon: Clock,
            title: "Business Hours",
            details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
            color: "text-purple-600"
        }
    ];

    const InfoCard = ({ icon: Icon, title, details, color }) => (
        <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-amber-100">
            <div className={`${color} mb-4`}>
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-serif font-semibold text-[#0c73af] mb-2">
                {title}
            </h3>
            {details.map((detail, index) => (
                <p key={index} className="text-amber-700">
                    {detail}
                </p>
            ))}
        </div>
    );

    return (
        <>
            <Helmet>
                <title>KLN International - Global Agricultural Products & Textiles</title>
                <meta name="description" content="KLN International delivers premium agricultural products, spices, rice, fabrics, and more worldwide. Discover our sustainable farming practices and exceptional quality control." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="KLN International - Global Agricultural Products & Textiles" />
                <meta property="og:description" content="Premium agricultural products, spices, rice, and textiles with worldwide delivery. Quality and sustainability guaranteed." />
                <meta property="og:image" content={logo} />

                {/* Twitter */}
                <meta name="twitter:card" content={logo} />
                <meta name="twitter:title" content="KLN International - Global Agricultural Products" />
                <meta name="twitter:description" content="Premium agricultural products, spices, rice, and textiles with worldwide delivery. Quality and sustainability guaranteed." />

                {/* Additional SEO tags */}
                <meta name="keywords" content="agricultural products, spices, rice, textiles, fabric, global delivery, sustainable farming, KLN International" />
                <link rel="canonical" href="https://www.kln-international.com/" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "KLN International",
                        "description": "Global supplier of premium agricultural products and textiles",
                        "url": "https://www.kln-international.com/",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+91 79843 33872",
                            "contactType": "customer service",
                            "availableLanguage": ["English"]
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "B-701, Silver Coin, opposite Uttran Power House",
                            "addressLocality": "Chorasi, Surat",
                            "postalCode": "394105",
                            "addressCountry": "IN"
                        }
                    })}
                </script>
            </Helmet>

            <main className="relative min-h-screen bg-gradient-to-b from-amber-50 to-white">
                <div className="z-0">
                    <BackgroundImage bgImage={masterBg} />
                </div>

                <div className="relative z-10">
                    <header>
                        {isMobile ? <HeroMobile /> : <Hero />}
                    </header>

                    {/* about us */}
                    <section
                        aria-label="About KLN International"
                        className="py-20 bg-amber-50 bg-opacity-90"
                    >
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-[#0c73af]">About KLN International</h2>
                                <div className="w-24 h-1 bg-[#006dad] mx-auto mb-4 rounded-full" />
                            </div>
                            <div className="max-w-3xl mx-auto text-center">
                                <p className="text-lg text-amber-800 mb-8">
                                    We are passionate about bringing the finest quality agricultural products to the International market. Our commitment to sustainable farming practices and exceptional quality control ensures that we deliver only the best products to our customers.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* world map */}
                    {/* <WorldMap /> */}

                    {/* our products */}
                    <section
                        aria-label="Our Products"
                        className="py-20"
                    >
                        <div className="container mx-auto">
                            <div className="text-center mb-16">
                                <ShoppingBag className="mx-auto mb-4 text-[#0c73af]" size={40} />
                                <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-[#0c73af]">Our Products</h2>
                                <div className="w-24 h-1 bg-[#006dad] mx-auto mb-4 rounded-full" />
                            </div>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                loop={true}
                                speed={3000}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper"
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 20
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                        spaceBetween: 30
                                    }
                                }}
                            >
                                {productPreviews.map((product, index) => (
                                    <SwiperSlide key={index}>
                                        <motion.div
                                            className="bg-white rounded-xl overflow-hidden shadow-lg border-2 my-10 border-amber-100 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                            whileHover={{ scale: 1.02 }}
                                            onClick={() => handleProductClick(product.path)}
                                        >
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={product.mainImage}
                                                    alt={product.title}
                                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent" />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-2xl font-serif font-bold mb-3 text-[#0c73af]">{product.title}</h3>
                                                <div className="w-16 h-0.5 bg-amber-200 mb-4" />
                                                <p className="text-amber-700 line-clamp-2">{product.description}</p>
                                            </div>
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </section>

                    {/* client testimonials */}
                    {/* <section
                        aria-label="Client Testimonials"
                        className="py-20 bg-amber-50 bg-opacity-90"
                    >
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-[#0c73af]">What Our Clients Say</h2>
                                <div className="w-24 h-1 bg-[#006dad] mx-auto mb-4 rounded-full" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-amber-100">
                                    <p className="text-amber-700 mb-4">"Outstanding quality and reliable service. KLN International has been our trusted supplier for years."</p>
                                    <p className="font-serif font-bold text-[#0c73af]">- John Smith, Food Processing Co.</p>
                                </div>
                                <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-amber-100">
                                    <p className="text-amber-700 mb-4">"Their commitment to quality and sustainability sets them apart in the industry."</p>
                                    <p className="font-serif font-bold text-[#0c73af]">- Sarah Johnson, International Foods Ltd.</p>
                                </div>
                                <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-amber-100">
                                    <p className="text-amber-700 mb-4">"Excellent products backed by exceptional customer service. Highly recommended!"</p>
                                    <p className="font-serif font-bold text-[#0c73af]">- Michael Chen, Asian Markets Inc.</p>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    {/* get in touch */}
                    <section
                        aria-label="Contact Information"
                        className="py-20 bg-amber-50 bg-opacity-90"
                    >
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-[#0c73af]">Get In Touch</h2>
                                <div className="w-24 h-1 bg-[#006dad] mx-auto mb-4 rounded-full" />
                                <p className="text-amber-700 text-lg max-w-2xl mx-auto px-4">
                                    Have questions about our products or services? We're here to help and would love to hear from you.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                {contactInfo.map((info, index) => (
                                    <InfoCard key={index} {...info} />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* our manufacturing partners */}
                    <section
                        aria-label="Manufacturing Partners"
                        // className="py-20 bg-gradient-to-b from-white to-amber-50/30"
                        className="py-20"
                    >
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-[#0c73af]">
                                    Our Manufacturing Partners
                                </h2>
                                <div className="w-24 h-1 bg-[#006dad] mx-auto mb-4 rounded-full" />
                                <p className="text-amber-800 text-lg max-w-2xl mx-auto px-4">
                                    Collaborating with industry leaders to deliver excellence
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                <ManufacturingPartners />
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </>
    );
};

export default Home;

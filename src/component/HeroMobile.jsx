import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';

// Import product images
import chilli1 from '../assets/chilli1.png';
import chilli2 from '../assets/chilli2.png';
import chilli4 from '../assets/chilli4.png';
import chilli5 from '../assets/chilli2.png';
import chilli6 from '../assets/chilli1.png';
import chilli7 from '../assets/chilli1.png';

import garlic1 from '../assets/garlic1.png';
import garlic2 from '../assets/garlic2.png';
import garlic4 from '../assets/garlic4.png';
import garlic5 from '../assets/garlic4.png';
import garlic6 from '../assets/garlic1.png';
import garlic7 from '../assets/garlic1.png';

import moringa1 from '../assets/moringa1.png';
import moringa2 from '../assets/moringa2.png';
import moringa4 from '../assets/moringa3.png';
import moringa5 from '../assets/moringa1.png';
import moringa6 from '../assets/moringa2.png';
import moringa7 from '../assets/moringa3.png';

// Golden Sella
import goldenSella1 from '../assets/goldenSella1.png';
import goldenSella2 from '../assets/goldenSella2.png';
import goldenSella3 from '../assets/goldenSella.png';
import goldenSella4 from '../assets/goldenSella3.png';
import goldenSella5 from '../assets/goldenSella4.png';
import goldenSella6 from '../assets/goldenSella1.png';
import goldenSella7 from '../assets/goldenSella3.png';

import main1 from '../assets/main1.png';
import main2 from '../assets/main2.png';
import main3 from '../assets/main3.png';
import main4 from '../assets/goldenSella-main.png';

const HeroMobile = () => {
    const navigate = useNavigate();

    const slides = [
        {
            title: 'G A R L I C',
            bgColor: '#fff3c4',
            mainImage: main1,
            productImages: [garlic1, garlic2, garlic4, garlic5, garlic6, garlic7],
            description: 'Premium quality garlic, carefully cultivated and processed',
            productId: "Garlic+Powder"
        },
        {
            title: 'MORINGA',
            bgColor: '#64902b',
            mainImage: main2,
            productImages: [moringa1, moringa2, moringa4, moringa5, moringa6, moringa7],
            description: 'Nutrient-rich moringa products from sustainable sources',
            productId: "Moringa+Leaf+Powder"
        },
        {
            title: 'C H I L L I',
            bgColor: '#d03b3b',
            mainImage: main3,
            productImages: [chilli1, chilli2, chilli4, chilli5, chilli6, chilli7],
            description: 'Vibrant and flavorful chillis for every culinary need',
            productId: "Chilli+Powder"
        },
        {
            title: 'GOLDEN SELLA',
            bgColor: '#ebdda4',
            mainImage: main4,
            productImages: [goldenSella1, goldenSella2, goldenSella3, goldenSella4, goldenSella5, goldenSella6, goldenSella7],
            description: 'A premium variety of long-grain aromatic rice, known for its golden color and distinctive flavor.',
            productId: "Golden+Sella"
        }
    ];

    const handleSlideClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div className="h-screen relative overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                loop={true}
                className="h-full w-full [&_.swiper-button-next]:!bg-white/30 [&_.swiper-button-next]:!w-10 [&_.swiper-button-next]:!h-10 [&_.swiper-button-next]:!rounded-full [&_.swiper-button-prev]:!bg-white/30 [&_.swiper-button-prev]:!w-10 [&_.swiper-button-prev]:!h-10 [&_.swiper-button-prev]:!rounded-full [&_.swiper-button-next::after]:!text-lg [&_.swiper-button-prev::after]:!text-lg"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="h-full w-full flex flex-col items-center justify-between p-4 relative cursor-pointer"
                            style={{ backgroundColor: slide.bgColor }}
                            onClick={() => handleSlideClick(slide.productId)}
                        >
                            {/* Animated floating objects */}
                            <div className="absolute z-30 top-0 left-0 w-full h-full overflow-hidden">
                                <motion.img
                                    src={slide.productImages[0]}
                                    alt="Floating Object 1"
                                    className="absolute top-10 left-6 w-28"
                                    animate={{ x: 100, y: 0, rotate: [0, 30] }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                                />

                                <motion.img
                                    src={slide.productImages[1]}
                                    alt="Floating Object 2"
                                    className="absolute top-16 left-1/2 -translate-x-1/2 w-20"
                                    animate={{ x: 200, y: 40, rotate: [0, -60] }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                                />

                                <motion.img
                                    src={slide.productImages[3]}
                                    alt="Floating Object 4"
                                    className="absolute top-64 -right-20 w-28"
                                    animate={{ x: -100, y: 200, rotate: [0, -50] }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                                />

                                <motion.img
                                    src={slide.productImages[4]}
                                    alt="Floating Object 5"
                                    className="absolute bottom-32 -left-20 w-28"
                                    animate={{ x: 100, y: -200, rotate: [0, -50] }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </div>

                            <motion.h1
                                className="text-4xl font-bold text-white mt-24 z-40"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {slide.title}
                            </motion.h1>

                            <motion.div
                                className="w-full h-[50vh] flex items-center justify-center my-4 z-40"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <img
                                    src={slide.mainImage}
                                    alt={slide.title}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </motion.div>

                            <motion.p
                                className="text-lg text-white text-center mb-20 z-40"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                {slide.description}
                            </motion.p>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroMobile;

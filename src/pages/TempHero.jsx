import React, { useEffect, useState, Suspense } from 'react';
import { motion } from 'framer-motion';

// Central image import configuration
const ImageConfig = {
    main: {
      mainImg: () => import('../assets/packaging-1.png'),
      main1: () => import('../assets/main1.png'),
      main2: () => import('../assets/main2.png'),
      main3: () => import('../assets/main3.png'),
      main4: () => import('../assets/main4.png'),
    },
    chilli: {
      chilli: () => import('../assets/chilli.png'),
      chilli1: () => import('../assets/chilli1.png'),
      chilli2: () => import('../assets/chilli2.png'),
      chilli3: () => import('../assets/chilli3.png'),
      chilli4: () => import('../assets/chilli4.png'),
      chilli5: () => import('../assets/chilli3.png'),
      chilli6: () => import('../assets/chilli1.png'),
      chilli7: () => import('../assets/chilli1.png'),
    },
    garlic: {
      garlic: () => import('../assets/garlic.png'),
      garlic1: () => import('../assets/garlic1.png'),
      garlic2: () => import('../assets/garlic2.png'),
      garlic3: () => import('../assets/garlic3.png'),
      garlic4: () => import('../assets/garlic4.png'),
      garlic5: () => import('../assets/garlic1.png'),
      garlic6: () => import('../assets/garlic3.png'),
      garlic7: () => import('../assets/garlic4.png'),
    },
    moringa: {
      moringa: () => import('../assets/moringa.png'),
      moringa1: () => import('../assets/moringa1.png'),
      moringa2: () => import('../assets/moringa2.png'),
      moringa3: () => import('../assets/moringa1.png'),
      moringa4: () => import('../assets/moringa3.png'),
      moringa5: () => import('../assets/moringa1.png'),
      moringa6: () => import('../assets/moringa2.png'),
      moringa7: () => import('../assets/moringa3.png'),
    },
    banana: {
      banana: () => import('../assets/banana.png'),
      banana1: () => import('../assets/banana1.png'),
      banana2: () => import('../assets/banana4.png'),
      banana3: () => import('../assets/banana2.png'),
      banana4: () => import('../assets/banana3.png'),
      banana5: () => import('../assets/banana4.png'),
      banana6: () => import('../assets/banana4.png'),
      banana7: () => import('../assets/banana3.png'),
    }
  };

// Image preloader component with loading state and error handling
const ImagePreloader = ({ src, alt, className, style, onLoad, ...props }) => {
    const [imageSrc, setImageSrc] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            try {
                setIsLoading(true);
                const module = await src();
                setImageSrc(module.default);
                setIsLoading(false);
                onLoad?.();
            } catch (err) {
                console.error('Error loading image:', err);
                setError(err);
                setIsLoading(false);
            }
        };
        loadImage();
    }, [src, onLoad]);

    if (isLoading) {
        return (
            <div
                className={`animate-pulse bg-gray-200 ${className}`}
                style={{ ...style, minHeight: '100px' }}
            />
        );
    }

    if (error) {
        return (
            <div className={`bg-red-100 flex items-center justify-center ${className}`}>
                <span className="text-red-500">Failed to load image</span>
            </div>
        );
    }

    return (
        <img
            src={imageSrc}
            alt={alt}
            className={className}
            style={style}
            loading="lazy"
            {...props}
        />
    );
};

const TempHero = () => {
    // State management
    const [heroContent, setHeroContent] = useState({
        title: 'FRUIT',
        img: ImageConfig.main.main1,
        item: [
            ImageConfig.chilli.chilli1,
            ImageConfig.chilli.chilli2,
            ImageConfig.chilli.chilli3,
            ImageConfig.chilli.chilli4,
            ImageConfig.chilli.chilli5,
            ImageConfig.chilli.chilli6,
            ImageConfig.chilli.chilli7,
        ],
        bgColor: '#FF3D6C',
    });

    const [quadrantColors, setQuadrantColors] = useState(["#fff3c4", "#64902b", "#d03b3b", "#ebdda4"]);
    const [canOpacity, setCanOpacity] = useState(100);
    const [hover, setHover] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(0);


    // Animation configurations
    const animationConfigs = [
        {
            // Left-top (r1)
            animate: isMobile
                ? { x: 100, y: 0, rotate: [0, 30] }
                : { x: 300, y: 0, rotate: [0, 50] },
            transition: { duration: 15, repeat: Infinity, ease: 'easeInOut' },
            className: "absolute top-10 left-6 lg:left-16 w-28 sm:w-28 lg:w-60"
        },
        {
            // Top-center (r2)
            animate: { x: 200, y: 40, rotate: [0, -60] },
            transition: { duration: 15, repeat: Infinity, ease: 'easeInOut' },
            className: "absolute top-16 lg:top-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 lg:w-24"
        },
        {
            // Right-top (r3)
            animate: { x: 50, y: 200, rotate: [0, 60] },
            transition: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
            className: "absolute top-20 lg:top-5 right-0 lg:right-16 w-28 sm:w-32 lg:w-64"
        },
        {
            // Left-bottom-middle (r6) - Mobile only
            animate: { x: -100, y: 200, rotate: [0, -50] },
            transition: { duration: 15, repeat: Infinity, ease: 'easeInOut' },
            className: "absolute top-64 -right-20 w-28 sm:w-32 lg:w-64",
            mobileonly: "true"
        },
        {
            // Left-bottom-middle
            animate: { x: 100, y: -200, rotate: [0, -50] },
            transition: { duration: 15, repeat: Infinity, ease: 'easeInOut' },
            className: "absolute bottom-32 -left-20 w-28 sm:w-32 lg:w-64"
        },
        {
            // Bottom-center (r5)
            animate: isMobile
                ? { x: -50, y: -200, rotate: [0, 30] }
                : { x: -100, y: -100, rotate: [0, 40] },
            transition: { duration: 15, repeat: Infinity, ease: 'easeInOut' },
            className: "absolute -bottom-16 left-1/3 transform -translate-x-1/2 w-12 sm:w-24 lg:w-48"
        }
    ];

    // Mobile detection
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Image preloading
    useEffect(() => {
        const preloadImages = async () => {
            try {
                // Preload essential images first
                await Promise.all([
                    ImageConfig.main.mainImg(),
                    ImageConfig.main.main1(),
                ]);

                // Preload remaining images
                Promise.all([
                    ...Object.values(ImageConfig.main).map(img => img()),
                    ...Object.values(ImageConfig.chilli).map(img => img()),
                    ...Object.values(ImageConfig.garlic).map(img => img()),
                    ...Object.values(ImageConfig.moringa).map(img => img()),
                    ...Object.values(ImageConfig.banana).map(img => img()),
                ]).then(() => {
                    setImagesLoaded(prev => prev + 1);
                });
            } catch (error) {
                console.error('Error preloading images:', error);
            }
        };

        preloadImages();
    }, []);

    // Event handlers
    const handleMouseEnter = (title, img, items, bgColor) => {
        if (hover) {
            setHeroContent({ title, img, item: items, bgColor });
            setQuadrantColors([bgColor, bgColor, bgColor, bgColor]);
            setHover(false);
        }
    };

    const handleCanEnter = () => {
        setHover(true);
        setCanOpacity(100);
        setQuadrantColors(["#fff3c4", "#64902b", "#d03b3b", "#ebdda4"]);
    };

    const handleCanLeave = () => {
        setCanOpacity(0);
        setQuadrantColors([heroContent.bgColor, heroContent.bgColor, heroContent.bgColor, heroContent.bgColor]);
    };

    return (
        <div className="relative h-screen text-white transition-all duration-500 overflow-hidden">            
            {/* Animated Elements */}
            {!hover &&
                <div className="absolute z-30 top-0 left-0 w-full h-full overflow-hidden">
                    {animationConfigs?.map((item, index) => (
                        <motion.div
                            key={index}
                            {...item}
                        >
                            <Suspense>
                                <ImagePreloader
                                    src={heroContent.item[index]}
                                    alt={`Animation element ${index + 1}`}
                                    className="w-28 sm:w-32 lg:w-64 object-contain bg-transparent"
                                    onLoad={() => setImagesLoaded()}
                                />
                            </Suspense>
                        </motion.div>
                    ))}
                </div>
            }

            {/* Hero Content */}
            {canOpacity === 0 && (
                <motion.div
                    className="absolute top-0 left-0 z-20 w-screen transform -translate-x-1/2 -translate-y-1/2 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1 }}
                >
                    <div className="relative h-screen">
                        <h1 className="text-[55px] sm:text-[80px] md:text-[120px] lg:text-[180px] xl:text-[220px] font-bold uppercase absolute left-1/2 top-3/4 sm:top-1/2 mb:top-1/3 lg:top-1/2 xl:top-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                            {heroContent.title}
                        </h1>
                        <ImagePreloader
                            src={heroContent.img}
                            alt={heroContent.title}
                            className="shadow-image bg-black items-center justify-center top-1/4 sm:1/4 mb:top-1/2 lg:top-32 xl:top-2/5 h-2/5 sm:h-1/2 mb:h-3/4 lg:h-4/6 object-cover mx-auto relative overflow-hidden"
                            style={{
                                background: `radial-gradient(ellipse at center, white 0%, transparent 60%)`,
                            }}
                        />
                    </div>
                </motion.div>
            )}

            {/* Quadrants */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                {quadrantColors.map((color, index) => (
                    <div key={index} className={`cursor-pointer`} style={{ backgroundColor: color }} />
                ))}
            </div>

            {/* Interactive Quadrants */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 z-40">
                <div onMouseEnter={() => handleMouseEnter(
                    'G A R L I C',
                    ImageConfig.main.main1,
                    [
                        ImageConfig.garlic.garlic1,
                        ImageConfig.garlic.garlic2,
                        ImageConfig.garlic.garlic3,
                        ImageConfig.garlic.garlic4,
                        ImageConfig.garlic.garlic5,
                        ImageConfig.garlic.garlic6,
                        ImageConfig.garlic.garlic7,
                    ],
                    '#fff3c4'
                )} />
                <div onMouseEnter={() => handleMouseEnter(
                    'MORINGA',
                    ImageConfig.main.main2,
                    [
                        ImageConfig.moringa.moringa1,
                        ImageConfig.moringa.moringa2,
                        ImageConfig.moringa.moringa3,
                        ImageConfig.moringa.moringa4,
                        ImageConfig.moringa.moringa5,
                        ImageConfig.moringa.moringa6,
                        ImageConfig.moringa.moringa7,
                    ],
                    '#64902b'
                )} />
                <div onMouseEnter={() => handleMouseEnter(
                    'C H I L L I',
                    ImageConfig.main.main3,
                    [
                        ImageConfig.chilli.chilli1,
                        ImageConfig.chilli.chilli2,
                        ImageConfig.chilli.chilli3,
                        ImageConfig.chilli.chilli4,
                        ImageConfig.chilli.chilli5,
                        ImageConfig.chilli.chilli6,
                        ImageConfig.chilli.chilli7,
                    ],
                    '#d03b3b'
                )} />
                <div onMouseEnter={() => handleMouseEnter(
                    'RIPE BANANA',
                    ImageConfig.main.main4,
                    [
                        ImageConfig.banana.banana1,
                        ImageConfig.banana.banana2,
                        ImageConfig.banana.banana3,
                        ImageConfig.banana.banana4,
                        ImageConfig.banana.banana5,
                        ImageConfig.banana.banana6,
                        ImageConfig.banana.banana7,
                    ],
                    '#ebdda4'
                )} />
            </div>

            {/* Title and Main Image */}
            <h1 className={`text-2xl sm:text-[180px] md:text-[120px] lg:text-[180px] xl:text-[100px] 
        font-bold uppercase absolute          
        left-1/2 bottom-36 sm:bottom-52 mb:bottom-52 lg:bottom-56 xl:top-[410px] 
        transform -translate-x-1/2 -translate-y-1/2
        whitespace-nowrap opacity-${canOpacity}`}
            >
                A flavorful celebration
            </h1>

            <ImagePreloader
                src={ImageConfig.main.mainImg}
                alt="A flavorful celebration"
                className={`shadow-image cursor-pointer z-50
          top-44 sm:top-10 mb:top-0 lg:top-[152] xl:top-[153.5px]
          w-2/3 sm:w-4/5 md:w-8/12 lg:w-1/2 xl:w-[313px]
          mx-auto relative overflow-hidden opacity-${canOpacity}`}
                onMouseEnter={handleCanEnter}
                onMouseLeave={handleCanLeave}
                style={{
                    background: `radial-gradient(ellipse at center, white 0%, transparent 70%)`,
                }}
            />

            {/* Loading Indicator */}
            {imagesLoaded < 5 && (
                <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex items-center justify-center">
                    <div className="text-black text-xl">Loading...</div>
                </div>
            )}
        </div>
    );
};

export default TempHero;
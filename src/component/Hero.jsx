import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '@google/model-viewer';
import { useNavigate } from 'react-router-dom';

import mainImg from '../assets/container.glb';

import main1 from '../assets/main1.png';
import main2 from '../assets/main2.png';
import main3 from '../assets/goldenSella-main.png';
import main4 from '../assets/main3.png';

import chilli1 from '../assets/chilli1.png';
import chilli2 from '../assets/chilli2.png';
import chilli3 from '../assets/chilli.png';
import chilli4 from '../assets/chilli4.png';
import chilli5 from '../assets/chilli2.png';
import chilli6 from '../assets/chilli1.png';
import chilli7 from '../assets/chilli1.png';

import garlic1 from '../assets/garlic1.png';
import garlic2 from '../assets/garlic2.png';
import garlic3 from '../assets/garlic.png';
import garlic4 from '../assets/garlic4.png';
import garlic5 from '../assets/garlic4.png';
import garlic6 from '../assets/garlic1.png';
import garlic7 from '../assets/garlic1.png';

import moringa1 from '../assets/moringa1.png';
import moringa2 from '../assets/moringa2.png';
import moringa3 from '../assets/moringa.png';
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


const Hero = () => {
  const navigate = useNavigate();
  const [heroContent, setHeroContent] = useState({
    title: 'KLN INTERNATIONAL',
    img: main1,
    item: [chilli1, moringa4, garlic1, goldenSella7, goldenSella1, garlic2, moringa2],
    bgColor: '#ebdda4',
    active: null
  });

  const handleMouseEnter = (title, img, item, bgColor, active) => {
    if (hover) {
      setHeroContent({ title, img, item, bgColor, active });
      setQuadrantColors([bgColor, bgColor, bgColor, bgColor]);
      setHover(false);
    }
  };

  const handleQuadrantClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const [quadrantColors, setQuadrantColors] = useState(["#fff3c4", "#64902b", "#d03b3b", "#ebdda4"]);
  const [canOpacity, setCanOpacity] = useState(100);

  const [hover, setHover] = useState(false);

  const handleCanEnter = () => {
    setHover(true);
    setCanOpacity(100);
    setQuadrantColors(["#fff3c4", "#64902b", "#d03b3b", "#ebdda4"])
  };

  const handleCanLeave = () => {
    setCanOpacity(0);
    setQuadrantColors([heroContent.bgColor, heroContent.bgColor, heroContent.bgColor, heroContent.bgColor]);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update the `isMobile` state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // 640px is the breakpoint for mobile (sm in Tailwind)
    };

    // Check the screen size when the component mounts
    handleResize();

    // Add event listener to update on resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const EnhancedQuadrantBackground = ({ quadrantColors }) => {
    const [prevColors, setPrevColors] = useState(quadrantColors);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
      if (prevColors !== quadrantColors) {
        setIsTransitioning(true);
        setPrevColors(quadrantColors);

        const timer = setTimeout(() => {
          setIsTransitioning(false);
        }, 1000); // Increased duration for smoother animation

        return () => clearTimeout(timer);
      }
    }, [quadrantColors, prevColors]);

    const createGradient = (colors) => `
      conic-gradient(
        from 0deg,
        ${colors[1]} 0deg,
        ${colors[1]} 90deg,
        ${colors[3]} 90deg,
        ${colors[3]} 180deg,
        ${colors[2]} 180deg,
        ${colors[2]} 270deg,
        ${colors[0]} 270deg,
        ${colors[0]} 360deg
      )
    `;

    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Base layer - always visible */}
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            background: createGradient(prevColors),
            opacity: isTransitioning ? 0.3 : 1,
          }}
        />

        {/* Rotating fade out layer */}
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            background: createGradient(prevColors),
            opacity: isTransitioning ? 0 : 1,
            transform: `scale(${isTransitioning ? 1.1 : 1}) rotate(${isTransitioning ? '5deg' : '0deg'})`,
          }}
        />

        {/* Scale up fade in layer */}
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            background: createGradient(quadrantColors),
            opacity: isTransitioning ? 1 : 0,
            transform: `scale(${isTransitioning ? 1 : 0.9})`,
          }}
        />

        {/* Rotating fade in layer */}
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            background: createGradient(quadrantColors),
            opacity: isTransitioning ? 0.7 : 0,
            transform: `scale(${isTransitioning ? 1 : 1.1}) rotate(${isTransitioning ? '0deg' : '-5deg'})`,
          }}
        />

        {/* Extra glow effect layer */}
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            background: createGradient(quadrantColors),
            opacity: isTransitioning ? 0.3 : 0,
            filter: 'blur(10px)',
            transform: `scale(${isTransitioning ? 1.05 : 1})`,
          }}
        />
      </div>
    );
  };

  return (
    <div
      className={`relative h-screen text-white transition-all duration-500 overflow-hidden `}
    >
      {/* animated sub objects */}
      {!hover ?
        <div className="absolute z-10 top-10 left-0 w-screen h-screen overflow-hidden">
          {/* Left-top (r1) */}
          <motion.img
            src={heroContent.item[0]}
            alt="Strawberry Left Top"
            className="absolute top-10 left-6 lg:left-16 w-28 sm:w-28 lg:w-60"
            animate={
              isMobile
                ? { x: 100, y: 0, rotate: [0, 30] }
                : { x: 300, y: 0, rotate: [0, 50] }
            }
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Top-center (r2) */}
          <motion.img
            src={heroContent.item[1]}
            alt="Strawberry Top Center"
            className="absolute top-16 lg:top-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 lg:w-24"
            animate={{ x: 200, y: 40, rotate: [0, -60] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Right-top (r3) */}
          <motion.img
            src={heroContent.item[3]}
            alt="Strawberry Right Top"
            className="absolute top-20 lg:top-5 right-0 lg:right-16 w-28 sm:w-32 lg:w-64"
            animate={{ x: 50, y: 200, rotate: [0, 60] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Left-bottom-middle (r6) */}

          {isMobile &&
            <motion.img
              src={heroContent.item[4]}
              alt="Strawberry Left Bottom Middle"
              className="absolute top-64 -right-20 w-28 sm:w-32 lg:w-64"
              animate={{ x: -100, y: 200, rotate: [0, -50] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />
          }

          <motion.img
            src={heroContent.item[5]}
            alt="Strawberry Left Bottom Middle"
            className="absolute bottom-32 -left-20 w-28 sm:w-32 lg:w-64"
            animate={{ x: 100, y: -200, rotate: [0, -50] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Left-bottom (r4) */}
          {!isMobile &&
            <img src={heroContent.item[2]} alt="Strawberry Left Bottom"
              className="absolute 
        bottom-10 md:bottom-0 lg:bottom-0 
        right-2 md:right-2 lg:right-5 
        w-28 sm:w-32 md:w-48 lg:w-80 "
            />}

          {/* Bottom-center (r5 and r51 together) */}
          <motion.div
            className="absolute -bottom-16 left-1/3 transform -translate-x-1/2 w-12 sm:w-24 lg:w-48"
            animate={
              isMobile
                ? { x: -50, y: -200, rotate: [0, 30] }
                : { x: -100, y: -100, rotate: [0, 40] }
            }
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src={heroContent.item[0]} alt="Strawberry Bottom Center" />
          </motion.div>

          <motion.div
            className="absolute bottom-5 left-1/4 transform -translate-x-1/2 w-12 sm:w-24 lg:w-48"
            animate={{ x: -300, y: -70, rotate: [0, 130] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src={heroContent.item[0]} alt="Strawberry Leaf Bottom Center" />
          </motion.div>
        </div>
        :
        <div className="absolute z-10 top-10 left-0 w-screen h-screen overflow-hidden">
          {/* Left-top (r1) */}
          <motion.img
            src={chilli1}
            alt="Strawberry Left Top"
            className="absolute top-10 left-6 lg:left-16 w-28 sm:w-28 lg:w-60"
            animate={
              isMobile
                ? { x: 100, y: 0, rotate: [0, 30] }
                : { x: 300, y: 0, rotate: [0, 50] }
            }
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Top-center (r2) */}
          <motion.img
            src={moringa4}
            alt="Strawberry Top Center"
            className="absolute top-16 lg:top-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 lg:w-24"
            animate={{ x: 200, y: 40, rotate: [0, -60] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Right-top (r3) */}
          <motion.img
            src={garlic1}
            alt="Strawberry Right Top"
            className="absolute top-20 lg:top-5 right-0 lg:right-16 w-28 sm:w-32 lg:w-64"
            animate={{ x: 50, y: 200, rotate: [0, 60] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Left-bottom-middle (r6) */}

          {isMobile &&
            <motion.img
              src={moringa1}
              alt="Strawberry Left Bottom Middle"
              className="absolute top-64 -right-20 w-28 sm:w-32 lg:w-64"
              animate={{ x: -100, y: 200, rotate: [0, -50] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />
          }

          <motion.img
            src={goldenSella1}
            alt="Strawberry Left Bottom Middle"
            className="absolute bottom-32 -left-20 w-28 sm:w-32 lg:w-64"
            animate={{ x: 100, y: -200, rotate: [0, -50] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.img
            src={goldenSella4}
            className="absolute bottom-20 lg:bottom-5 right-0 lg:right-16 w-28 sm:w-32 lg:w-64"
            animate={{ x: 100, y: 100, rotate: [0, -60] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Bottom-center (r5 and r51 together) */}
          <motion.div
            className="absolute -bottom-16 left-1/3 transform -translate-x-1/2 w-12 sm:w-24 lg:w-48"
            animate={
              isMobile
                ? { x: -50, y: -200, rotate: [0, 30] }
                : { x: -100, y: -100, rotate: [0, 40] }
            }
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src={garlic2} alt="Strawberry Bottom Center" />
          </motion.div>

          <motion.div
            className="absolute bottom-5 left-1/4 transform -translate-x-1/2 w-12 sm:w-24 lg:w-48"
            animate={{ x: -300, y: -70, rotate: [0, 130] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src={moringa2} alt="Strawberry Leaf Bottom Center" />
          </motion.div>
        </div>
      }

      {/* Hero Section */}
      {canOpacity == 0 &&
        <motion.div
          className="absolute
      top-0
      left-0
      z-20
      w-screen
      transform -translate-x-1/2 -translate-y-1/2 text-center"
          key={heroContent.title}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
        >
          <div className="relative h-screen">
            <h1 className="text-[55px] sm:text-[80px] md:text-[120px] lg:text-[180px] xl:text-[220px] font-bold uppercase absolute          
           left-1/2 top-3/4 sm:top-1/2 mb:top-1/3 lg:top-1/2 xl:top-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
              {heroContent.title}
            </h1>
            {/* top-1/4 sm:1/4 mb:top-1/2 lg:top-32 xl:top-2/5 */}
            <img src={heroContent.img} alt={heroContent.title} loading="lazy"
              className="shadow-image bg-black                  
            items-center justify-center
            top-1/4 sm:1/4 mb:top-1/2 lg:top-32 xl:top-2/5
            h-2/5 sm:h-1/2 mb:h-3/4 lg:h-4/6 object-cover
            mx-auto relative overflow-hidden"
              style={{
                background: `radial-gradient(ellipse at center, white 0%, transparent 60%)`,
              }} />
          </div>
        </motion.div>
      }

      <EnhancedQuadrantBackground quadrantColors={quadrantColors} />

      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 z-40">
        <div
          onMouseEnter={() => handleMouseEnter('G A R L I C', main1, [garlic1, garlic2, garlic3, garlic4, garlic5, garlic6, garlic7], '#fff3c4', 0)}
          onClick={() => handleQuadrantClick("Garlic+Powder")}
          className="cursor-pointer"
        ></div>
        <div
          onMouseEnter={() => handleMouseEnter('MORINGA', main2, [moringa1, moringa2, moringa3, moringa4, moringa5, moringa6, moringa7], '#64902b', 1)}
          onClick={() => handleQuadrantClick("Moringa+Leaf+Powder")}
          className="cursor-pointer"
        ></div>
        <div
          onMouseEnter={() => handleMouseEnter('C H I L L I', main4, [chilli1, chilli2, chilli3, chilli4, chilli5, chilli6, chilli7], '#d03b3b', 2)}
          onClick={() => handleQuadrantClick("Chilli+Powder")}
          className="cursor-pointer"
        ></div>
        <div
          onMouseEnter={() => handleMouseEnter('GOLDEN SELLA', main3, [goldenSella1, goldenSella2, goldenSella3, goldenSella4, goldenSella5, goldenSella6, goldenSella7], '#ebdda4', 3)}
          onClick={() => handleQuadrantClick("Golden+Sella")}
          className="cursor-pointer"
        ></div>        
      </div>

      <h1 className={`text-2xl sm:text-[180px] md:text-[120px] lg:text-[180px] xl:text-[100px]
       font-bold uppercase absolute          
           left-1/2 bottom-36 sm:bottom-52 mb:bottom-52 lg:bottom-56 xl:top-[410px] transform -translate-x-1/2 -translate-y-1/2
            whitespace-nowrap opacity-${canOpacity}`}>
        A flavorful celebration
      </h1>
      <model-viewer
        src={mainImg}
        alt={"A flavorful celebration"}
        auto-rotate
        camera-controls
        disable-zoom
        touch-action="none"
        disable-tap
        min-camera-orbit="auto auto 100%"
        max-camera-orbit="auto auto 100%"
        interaction-prompt="none"
        orientation="0deg 0deg -88deg"
        loading="eager"
        reveal="auto"
        ar-status="not-presenting"
        style={{
          width: 'clamp(300px, 50vw, 600px)', 
          height: 'clamp(300px, 50vw, 600px)',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 40,
          cursor: 'pointer',
          opacity: canOpacity,
          transition: 'all 0.3s ease-in-out',
          touchAction: 'none',          
        }}
        onMouseEnter={() => handleCanEnter()}
        onMouseLeave={() => handleCanLeave()}
      >
        <div className="progress-bar" slot="progress-bar" style={{color: 'transparent'}}></div>
      </model-viewer>
    </div>
  );
};

export default Hero;
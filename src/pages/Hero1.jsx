import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import can from '../assets/can.png';
import can1 from '../assets/1.png';
import can2 from '../assets/2.png';
import can3 from '../assets/3.png';
import can4 from '../assets/4.png';
import r1 from '../assets/r1.png';
import r2 from '../assets/r2.png';
import r3 from '../assets/r3.png';
import r4 from '../assets/r4.png';
import r5 from '../assets/r5.png';
import r51 from '../assets/r51.png';
import r6 from '../assets/r6.png';

const Hero1 = () => {
  const [heroContent, setHeroContent] = useState({
    title: 'FRUIT',
    img: can1,
    item: [r1, r2, r3, r4, r5, r51, r6],
    bgColor: '#FF3D6C',
  });

  const handleMouseEnter = (title, img, item, bgColor) => {
    if (hover) {
      setHeroContent({ title, img, item, bgColor });
      setQuadrantColors([bgColor, bgColor, bgColor, bgColor]);
      setHover(false);
    }
  };

  const [quadrantColors, setQuadrantColors] = useState(["#FF3D6C", "#FFA31E", "#A5F948", "#FF3D6C"]);
  const [canOpacity, setCanOpacity] = useState(100);

  const [hover, setHover] = useState(false);

  const handleCanEnter = () => {
    setHover(true);
    setCanOpacity(100);
    setQuadrantColors(["#FF3D6C", "#FFA31E", "#A5F948", "#FF3D6C"])
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

  return (
    <div
      className={`relative h-screen text-white transition-all duration-500 overflow-x-hidden`}
    >
      {/* Header */}
      <header className="absolute z-20 top-0 left-0 right-0 flex justify-between items-center px-6 sm:px-12 lg:px-24 py-8">
        <h1 className="text-2xl sm:text-4xl font-bold">Fruite</h1>
        <nav className="flex justify-between space-x-4 sm:space-x-10 text-center">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      <div className="absolute z-30 top-10 left-0 w-screen h-screen overflow-hidden">
        {/* Left-top (r1) */}
        <motion.img
          src={r1}
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
          src={r2}
          alt="Strawberry Top Center"
          className="absolute top-16 lg:top-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 lg:w-24"
          animate={{ x: 200, y: 40, rotate: [0, -60] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Right-top (r3) */}
        <motion.img
          src={r3}
          alt="Strawberry Right Top"
          className="absolute top-20 lg:top-5 right-0 lg:right-16 w-28 sm:w-32 lg:w-64"
          animate={{ x: 50, y: 200, rotate: [0, 60] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Left-bottom-middle (r6) */}

        {isMobile &&
          <motion.img
            src={r1}
            alt="Strawberry Left Bottom Middle"
            className="absolute top-64 -right-20 w-28 sm:w-32 lg:w-64"
            animate={{ x: -100, y: 200, rotate: [0, -50] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
        }

        <motion.img
          src={r6}
          alt="Strawberry Left Bottom Middle"
          className="absolute bottom-32 -left-20 w-28 sm:w-32 lg:w-64"
          animate={{ x: 100, y: -200, rotate: [0, -50] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Left-bottom (r4) */}
        {!isMobile &&
          <img src={r4} alt="Strawberry Left Bottom"
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
          <img src={r5} alt="Strawberry Bottom Center" />
        </motion.div>

        <motion.div
          className="absolute bottom-5 left-1/4 transform -translate-x-1/2 w-12 sm:w-24 lg:w-48"
          animate={{ x: -300, y: -70, rotate: [0, 130] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img src={r51} alt="Strawberry Leaf Bottom Center" />
        </motion.div>
      </div>

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

            <img src={heroContent.img} alt={heroContent.title}
              className="shadow-image bg-black                  
            top-1/4 sm:1/4 mb:top-1/2 lg:top-32 xl:top-10
            w-2/3 sm:w-4/5 md:w-8/12 lg:w-2/3 xl:w-2/3
            mx-auto relative overflow-hidden"
              style={{
                background: `radial-gradient(ellipse at center, white 0%, transparent 70%)`,
              }} />
          </div>
        </motion.div>
      }

      {/* Quadrants */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
        <div className={`cursor-pointer bg-[${quadrantColors[0]}]`}></div>
        <div className={`cursor-pointer bg-[${quadrantColors[1]}]`}></div>
        <div className={`cursor-pointer bg-[${quadrantColors[2]}]`}></div>
        <div className={`cursor-pointer bg-[${quadrantColors[3]}]`}></div>
      </div>
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 z-40">
        <div onMouseEnter={() => handleMouseEnter('STRAWBERRY', can1, [r1, r2, r3, r4, r5, r51, r6], '#FF3D6C')}></div>
        <div onMouseEnter={() => handleMouseEnter('ORANGE', can2, [r1, r2, r3, r4, r5, r51, r6], '#FFA31E')}></div>
        <div onMouseEnter={() => handleMouseEnter('APPLE', can3, [r1, r2, r3, r4, r5, r51, r6], '#A5F948')}></div>
        <div onMouseEnter={() => handleMouseEnter('LEMON', can4, [r1, r2, r3, r4, r5, r51, r6], '#FF3D6C')}></div>
      </div>



      
      <h1 className={`text-[55px] sm:text-[180px] md:text-[120px] lg:text-[180px] xl:text-[220px] font-bold uppercase absolute          
           left-1/2 bottom-6 sm:bottom-52 mb:bottom-52 lg:bottom-14 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-${canOpacity}`}>
        FRUIT
      </h1>
      <img
        src={can}
        alt={"FRUIT"}
        className={`shadow-image cursor-pointer z-50 top-44 sm:top-10 mb:top-0 lg:top-[152] xl:top-[153.5px] 2xl:top-[96px] w-2/3 sm:w-4/5 md:w-8/12 lg:w-1/2 xl:w-1/2 2xl:w-[313px]
    mx-auto relative overflow-hidden opacity-${canOpacity}`}
        onMouseEnter={() => handleCanEnter()}
        onMouseLeave={() => handleCanLeave()}
      />

      {/* <h1 className={`text-[55px] sm:text-[80px] md:text-[120px] lg:text-[180px] xl:text-[220px] font-bold uppercase absolute          
           left-1/2 top-3/4 sm:top-1/2 mb:top-1/3 lg:top-1/2 xl:top-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-${canOpacity}`}>
        FRUIT
      </h1>

      <img src={can1} alt={"FRUIT"}
        className={`shadow-image cursor-pointer
        z-50
            top-1/4 sm:1/4 mb:top-1/2 lg:top-32 xl:top-10
            w-2/3 sm:w-4/5 md:w-8/12 lg:w-2/3 xl:w-2/3
            mx-auto relative overflow-hidden opacity-${canOpacity}`}
        style={{
          background: `radial-gradient(ellipse at center, white 0%, transparent 50%)`,
        }}
        onMouseEnter={() => handleCanEnter()}
        onMouseLeave={() => handleCanLeave()}
      /> */}


    </div>
  );
};

export default Hero1;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Star, Lightbulb, Users, ChevronDown, ArrowRight } from 'lucide-react';

// Animation Variants for Hero Section
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Time between each child animation starts
      ease: "easeOut"
    }
  }
};

const titleVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const lineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const textVariants = { // For paragraph and buttons container
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// images
import spices from '../assets/chilli.png';
import printersScanners from '../assets/PrinterScanner/Einscan-Pro-2X-V2.jpg';
import detergentsBleaches from '../assets/Detergent/ls_active_wash_bio_enzyme_detergent_powder.jpg';

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, ensuring the highest quality in our products and services.",
    icon: <Star size={36} />
  },
  {
    title: "Innovation",
    description: "We continuously innovate and adapt to meet the evolving needs of our customers and the market.",
    icon: <Lightbulb size={36} />
  },
  {
    title: "Partnership",
    description: "We build lasting partnerships with our clients, working together to achieve mutual success and growth.",
    icon: <Users size={36} />
  }
];

const products = [
  {
    name: "Spices",
    description: "Premium quality spices sourced from the finest farms, carefully processed to preserve authentic flavors and aromas.",
    image: spices,
    link: "/products?category=Spices"
  },
  {
    title: "Printers & Scanners", 
    description: "State-of-the-art printing and scanning solutions delivering professional quality output for all your business needs.",
    image: printersScanners,
    link: "/printers-scanners"
  },
  {
    name: "Detergents & Bleaches",
    description: "Powerful cleaning solutions and detergents formulated for superior cleaning performance and hygiene standards.",
    image: detergentsBleaches,
    link: "/detergent-bleach"
  }
];

const AboutUs = () => {
  const navigate = useNavigate();

  const scrollToContent = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full min-h-screen relative overflow-hidden flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-100 via-amber-50 to-white">
        <div className="container mx-auto relative flex-1 flex items-center">
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center w-full"
          >
            <motion.div
              variants={titleVariants}
              className="relative"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-amber-900 text-center mb-4 sm:mb-8 drop-shadow-lg">
                About Us
              </h1>
            </motion.div>

            <motion.div
              variants={lineVariants}
              className="w-32 sm:w-48 h-1.5 bg-gradient-to-r from-transparent via-amber-700 to-transparent rounded-full mb-8 sm:mb-14"
            />

            <motion.p
              variants={textVariants}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-800 text-center mt-4 max-w-5xl mx-auto leading-relaxed font-light px-4"
            >
              Pioneering the future of business solutions with innovative products and services
              that empower businesses to thrive in the modern world. With over two decades of
              excellence, we continue to lead the way in delivering quality solutions.
            </motion.p>

            <motion.div
              variants={textVariants}
              className="mt-8 sm:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-8 w-full justify-center px-4"
            >
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "rgba(12, 115, 175, 0.1)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="group px-6 sm:px-10 py-3 sm:py-4 bg-transparent backdrop-blur-sm rounded-full font-semibold shadow-lg transition-all flex items-center justify-center gap-3 w-full sm:w-auto border-2 border-[#0c73af]"
                style={{ color: '#0c73af' }}
                onClick={() => scrollToContent('values-section')}
              >
                Learn More
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "rgba(245, 158, 11, 0.9)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="group px-6 sm:px-10 py-3 sm:py-4 text-white rounded-full font-semibold shadow-lg transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                style={{ backgroundColor: '#f59e0b' }}
                onClick={() => navigate('/contact#inquiry')}
              >
                Contact Us
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Down Arrow - style adapted for lighter background */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-40 flex justify-center items-center bg-gradient-to-t from-white/30 to-transparent">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              y: [0, 8, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onClick={() => scrollToContent('values-section')}
            className="cursor-pointer p-3 sm:p-5 rounded-full bg-amber-600/20 backdrop-blur-md hover:bg-amber-600/30 transition-all duration-300 border border-amber-700/30"
          >
            <ChevronDown className="text-amber-800 drop-shadow-lg w-8 h-8" />
          </motion.div>
        </div>
      </div>

      {/* Main Content Section - background already updated to amber-50 */}
      <div>
        {/* Our Values Section */}
        <section id="values-section" className="min-h-screen  flex items-center relative py-16 sm:py-24 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 sm:mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-[#0c73af]"
              >
                Our Values
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="w-32 sm:w-40 h-1.5 bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto rounded-full shadow-lg"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="group bg-white rounded-lg p-6 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-100"
                >
                  <div className="mb-6 sm:mb-8 text-amber-700 group-hover:text-amber-800 transition-colors duration-300">{value.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-4 sm:mb-6 text-amber-900">{value.title}</h3>
                  <p className="text-amber-700 leading-relaxed text-sm sm:text-base">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Products Section */}
        <section id="products-section" className="min-h-screen bg-amber-50 flex items-center relative py-16 sm:py-24 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 sm:mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-[#0c73af]"
              >
                Our Products Portfolio
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="w-32 sm:w-40 h-1.5 bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto rounded-full shadow-lg"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-100"
                >
                  <div className="h-48 sm:h-64 relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300" />
                  </div>

                  <div className="p-6 sm:p-10">
                    <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-4 sm:mb-6 text-amber-900 group-hover:text-amber-800 transition-colors duration-300">
                      {product.name || product.title}
                    </h3>
                    <div className="w-16 sm:w-20 h-0.5 bg-amber-200 mb-4 sm:mb-6 group-hover:w-20 sm:group-hover:w-24 transition-all duration-300" />
                    <p className="text-amber-700 leading-relaxed text-sm sm:text-base group-hover:text-amber-600 transition-colors duration-300">
                      {product.description}
                    </p>

                    <div className="mt-6 sm:mt-8 flex items-center text-amber-700 font-medium group-hover:text-amber-800 transition-colors duration-300">
                      <Link to={product.link} className="text-sm sm:text-base group-hover:mr-2 transition-all duration-300">Learn More</Link>
                      <ArrowRight className="hidden sm:block w-4 h-4 sm:w-[18px] sm:h-[18px] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company History Section */}
        <section id="journey-section" className="min-h-screen flex items-center relative py-16 sm:py-24 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 sm:mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-[#0c73af]"
              >
                Our Journey
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="w-32 sm:w-40 h-1.5 bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto rounded-full shadow-lg"
              />
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="space-y-6 sm:space-y-8"
              >
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="bg-white rounded-lg p-6 sm:p-10 border-2 border-amber-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-4 sm:mb-6 text-amber-900">Our Beginning</h3>
                  <p className="text-amber-700 leading-relaxed text-sm sm:text-base group-hover:text-amber-600 transition-colors duration-300">
                    Founded in 2000, we started with a vision to revolutionize business solutions.
                    Our journey began with a small team of dedicated professionals committed to excellence.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="bg-white rounded-lg p-6 sm:p-10 border-2 border-amber-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-4 sm:mb-6 text-amber-900">Growth & Evolution</h3>
                  <p className="text-amber-700 leading-relaxed text-sm sm:text-base group-hover:text-amber-600 transition-colors duration-300">
                    Over the years, we've expanded our services, embraced new technologies, and built
                    lasting partnerships with clients across industries.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="space-y-6 sm:space-y-8"
              >
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="bg-white rounded-lg p-6 sm:p-10 border-2 border-amber-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-4 sm:mb-6 text-amber-900">Present Day</h3>
                  <p className="text-amber-700 leading-relaxed text-sm sm:text-base group-hover:text-amber-600 transition-colors duration-300">
                    Today, we're a leading provider of innovative business solutions, serving clients
                    globally with cutting-edge products and unmatched service quality.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="bg-white rounded-lg p-6 sm:p-10 border-2 border-amber-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-4 sm:mb-6 text-amber-900">Looking Forward</h3>
                  <p className="text-amber-700 leading-relaxed text-sm sm:text-base group-hover:text-amber-600 transition-colors duration-300">
                    As we look to the future, we remain committed to innovation, sustainability, and
                    creating lasting value for our clients and partners.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
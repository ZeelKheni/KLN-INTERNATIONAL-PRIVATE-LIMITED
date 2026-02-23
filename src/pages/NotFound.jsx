import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import notFoundAnimation from '../assets/404-animation.json'; // You'll need to add this animation file

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | KLN International</title>
                <meta name="description" content="The page you're looking for doesn't exist. Return to KLN International's homepage." />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center px-4">
                <div className="text-center">
                    <div className="w-full max-w-md mx-auto mb-8">
                        <Lottie 
                            animationData={notFoundAnimation} 
                            loop={true}
                            className="w-full"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#0c73af]">
                            Oops! Page Not Found
                        </h1>
                        
                        <p className="text-amber-700 text-lg mb-8 max-w-md mx-auto">
                            The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </p>

                        <div className="space-y-4 md:space-y-0 md:space-x-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/')}
                                className="bg-[#0c73af] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#0a5c8f] transition-colors duration-300"
                            >
                                Go to Homepage
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate(-1)}
                                className="bg-amber-100 text-amber-800 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-amber-200 transition-colors duration-300 ml-4"
                            >
                                Go Back
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </main>
        </>
    );
};

export default NotFound; 
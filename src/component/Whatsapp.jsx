import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Whatsapp = () => {

    const [showTooltip, setShowTooltip] = useState(false);
    const [shouldVibrate, setShouldVibrate] = useState(false);
    const [showWhatsappModal, setShowWhatsappModal] = useState(false);

    useEffect(() => {
        // Show tooltip after 2 seconds
        const tooltipTimer = setTimeout(() => {
            setShowTooltip(true);
        }, 2000);

        // Hide tooltip after 8 seconds
        const hideTimer = setTimeout(() => {
            setShowTooltip(false);
        }, 8000);

        // Vibration interval (every 30 seconds)
        const vibrationInterval = setInterval(() => {
            setShouldVibrate(true);
            // Keep vibrating for 3 seconds
            setTimeout(() => setShouldVibrate(false), 3000);
        }, 10000);

        return () => {
            clearTimeout(tooltipTimer);
            clearTimeout(hideTimer);
            clearInterval(vibrationInterval);
        };
    }, []);

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '10px'
            }}
        >
            {/* Tooltip */}
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        style={{
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            color: 'white',
                            padding: '8px 12px',
                            borderRadius: '8px',
                            fontSize: '12px',
                            marginBottom: '8px',
                            position: 'relative',
                            maxWidth: '150px'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            bottom: '-4px',
                            right: '12px',
                            borderLeft: '4px solid transparent',
                            borderRight: '4px solid transparent',
                            borderTop: '4px solid rgba(0,0,0,0.8)'
                        }}></div>
                        👋 Hi there! Need help? Chat with us on WhatsApp
                    </motion.div>
                )}
            </AnimatePresence>

            {/* WhatsApp Modal */}
            <AnimatePresence>
                {showWhatsappModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1001,
                            backdropFilter: 'blur(5px)'
                        }}
                        onClick={() => setShowWhatsappModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.5, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.5, y: 50 }}
                            style={{
                                backgroundColor: 'white',
                                padding: '30px',
                                borderRadius: '20px',
                                maxWidth: '400px',
                                width: '90%',
                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 style={{
                                marginBottom: '20px',
                                color: '#075E54',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}>
                                Choose Your Contact
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <motion.a
                                    whileHover={{ scale: 1.02, backgroundColor: '#1da856' }}
                                    whileTap={{ scale: 0.98 }}
                                    href="https://wa.me/+917984333872?text=Hello,%20I'm%20interested%20in%20learning%20more%20about%20KLN%20International%20products."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        padding: '20px',
                                        backgroundColor: '#25D366',
                                        color: 'white',
                                        textDecoration: 'none',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 6px -1px rgba(37, 211, 102, 0.2)'
                                    }}
                                >
                                    <div style={{
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        padding: '10px',
                                        borderRadius: '8px'
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M20.463 3.488C18.217 1.24 15.231 0.001 12.05 0 5.495 0 0.16 5.334 0.157 11.892c-0.001 2.096 0.547 4.142 1.588 5.946L0.057 24l6.304-1.654c1.737 0.948 3.693 1.447 5.683 1.448h0.005c6.554 0 11.89-5.335 11.893-11.893 0.002-3.18-1.234-6.167-3.479-8.413ZM12.05 21.785h-0.004c-1.774 0-3.513-0.477-5.031-1.378l-0.361-0.214-3.741 0.981 0.999-3.648-0.235-0.374c-0.99-1.574-1.512-3.393-1.511-5.261 0.002-5.431 4.425-9.853 9.858-9.853 2.634 0.001 5.108 1.027 6.968 2.888 1.86 1.861 2.884 4.337 2.883 6.971-0.002 5.432-4.425 9.854-9.855 9.854M17.476 14.382c-0.297-0.149-1.758-0.868-2.031-0.967-0.272-0.099-0.47-0.149-0.669 0.148-0.198 0.298-0.767 0.967-0.941 1.165-0.173 0.199-0.347 0.223-0.644 0.074-0.297-0.149-1.255-0.462-2.39-1.475-0.883-0.788-1.48-1.761-1.653-2.059-0.173-0.297-0.018-0.458 0.13-0.606 0.134-0.133 0.298-0.347 0.447-0.521 0.149-0.174 0.198-0.298 0.298-0.497 0.099-0.198 0.05-0.371-0.025-0.521-0.075-0.148-0.669-1.611-0.916-2.206-0.242-0.579-0.487-0.501-0.669-0.51-0.173-0.008-0.371-0.01-0.57-0.01-0.198 0-0.52 0.074-0.792 0.372-0.272 0.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074 0.149 0.198 2.096 3.2 5.077 4.487 0.709 0.306 1.262 0.489 1.694 0.625 0.712 0.227 1.36 0.195 1.871 0.118 0.571-0.085 1.758-0.719 2.006-1.413 0.248-0.695 0.248-1.29 0.173-1.414-0.074-0.124-0.272-0.198-0.569-0.347" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 'bold', fontSize: '16px' }}>India</div>
                                        <div style={{ fontSize: '14px', opacity: 0.9 }}>Available 9 AM - 6 PM</div>
                                        <div style={{ fontSize: '14px', opacity: 0.9, marginTop: '4px' }}>+91 79843 33872</div>
                                    </div>
                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.02, backgroundColor: '#0f7a6c' }}
                                    whileTap={{ scale: 0.98 }}
                                    href="https://wa.me/+447442109245?text=Hello,%20I%20need%20support%20regarding%20KLN%20International%20products."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        padding: '20px',
                                        backgroundColor: '#128C7E',
                                        color: 'white',
                                        textDecoration: 'none',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 6px -1px rgba(18, 140, 126, 0.2)'
                                    }}
                                >
                                    <div style={{
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        padding: '10px',
                                        borderRadius: '8px'
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M20.463 3.488C18.217 1.24 15.231 0.001 12.05 0 5.495 0 0.16 5.334 0.157 11.892c-0.001 2.096 0.547 4.142 1.588 5.946L0.057 24l6.304-1.654c1.737 0.948 3.693 1.447 5.683 1.448h0.005c6.554 0 11.89-5.335 11.893-11.893 0.002-3.18-1.234-6.167-3.479-8.413ZM12.05 21.785h-0.004c-1.774 0-3.513-0.477-5.031-1.378l-0.361-0.214-3.741 0.981 0.999-3.648-0.235-0.374c-0.99-1.574-1.512-3.393-1.511-5.261 0.002-5.431 4.425-9.853 9.858-9.853 2.634 0.001 5.108 1.027 6.968 2.888 1.86 1.861 2.884 4.337 2.883 6.971-0.002 5.432-4.425 9.854-9.855 9.854M17.476 14.382c-0.297-0.149-1.758-0.868-2.031-0.967-0.272-0.099-0.47-0.149-0.669 0.148-0.198 0.298-0.767 0.967-0.941 1.165-0.173 0.199-0.347 0.223-0.644 0.074-0.297-0.149-1.255-0.462-2.39-1.475-0.883-0.788-1.48-1.761-1.653-2.059-0.173-0.297-0.018-0.458 0.13-0.606 0.134-0.133 0.298-0.347 0.447-0.521 0.149-0.174 0.198-0.298 0.298-0.497 0.099-0.198 0.05-0.371-0.025-0.521-0.075-0.148-0.669-1.611-0.916-2.206-0.242-0.579-0.487-0.501-0.669-0.51-0.173-0.008-0.371-0.01-0.57-0.01-0.198 0-0.52 0.074-0.792 0.372-0.272 0.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074 0.149 0.198 2.096 3.2 5.077 4.487 0.709 0.306 1.262 0.489 1.694 0.625 0.712 0.227 1.36 0.195 1.871 0.118 0.571-0.085 1.758-0.719 2.006-1.413 0.248-0.695 0.248-1.29 0.173-1.414-0.074-0.124-0.272-0.198-0.569-0.347" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 'bold', fontSize: '16px' }}>International</div>
                                        <div style={{ fontSize: '14px', opacity: 0.9 }}>24/7 Available</div>
                                        <div style={{ fontSize: '14px', opacity: 0.9, marginTop: '4px' }}>+44 74421 09245</div>
                                    </div>
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* WhatsApp Button */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={shouldVibrate ? {
                    rotate: [-3, 3, -3, 3, -2, 2, -2, 2, 0],
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                } : {}}
                onClick={() => setShowWhatsappModal(true)}
                style={{
                    backgroundColor: '#25D366',
                    color: 'white',
                    padding: '12px',
                    borderRadius: '50%',
                    boxShadow: '0 2px 8px rgba(37, 211, 102, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255,255,255,0.5)'
                }}
                aria-label="Contact us on WhatsApp"
            >
                <div style={{ position: 'relative' }}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <motion.div
                        style={{
                            position: 'absolute',
                            top: '-4px',
                            right: '-4px',
                            width: '8px',
                            height: '8px',
                            backgroundColor: '#4CAF50',
                            borderRadius: '50%',
                            border: '1px solid white'
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            backgroundColor: ['#4CAF50', '#45a049', '#4CAF50']
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Whatsapp;
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback, memo, useEffect, useRef } from 'react';
import Make3d from '../assets/Partners/Make3d.png';
import LS from '../assets/Partners/LS.png';
import FourDots from '../assets/Partners/FourDots.webp';
import KrishnaFashion from '../assets/Partners/KrishnaFashion.png';

const manufacturingPartners = [
    {
        "id": 1,
        "name": "Make3d",
        "logo": Make3d,
        "description": "Leading 3D printer manufacturer in India, specializing in FDM and DLP 3D printers, with ISO 9001:2015 & CE certification.",
        "specialties": ["FDM 3D Printers", "DLP 3D Printers", "3D Scanners", "3D Printing Services", "3D Scanning Services", "Product Development"],
        "location": "Surat, Gujarat, India",
        "yearPartnership": "Since 2015"
    },
    {
        "id": 2,
        "name": "Lila & Sons",
        "logo": LS,
        "description": "Leading manufacturer of soaps, detergents, and household cleaning supplies, established in 2015.",
        "specialties": ["Detergent Powders", "Liquid Detergents", "Household Cleaning Products"],
        "location": "Surat, Gujarat, India",
        "yearPartnership": "Since 2018"
    },
    {
        "id": 3,
        "name": "Four Dots Technology",
        "logo": FourDots,
        "description": "Manufacturer of a wide range of products including 3D printers, 3D printing filaments, and 3D printing services.",
        "specialties": ["3D Printers", "3D Printing Filaments", "3D Printing Services"],
        "location": "Surat, Gujarat, India",
        "yearPartnership": "Since 2020"
    },
    {
        "id": 4,
        "name": "Krishna Fashion",
        "logo": KrishnaFashion,
        "description": "Leading manufacturer of high-quality fabrics and textiles, specializing in cotton, linen, and synthetic materials with a focus on sustainable production.",
        "specialties": ["Cotton Fabrics", "Linen Fabrics", "Synthetic Fabrics", "Sustainable Textiles", "Custom Fabric Solutions"],
        "location": "Surat, Gujarat, India",
        "yearPartnership": "Since 2020"
    }
];

// Memoized partner card components
const ExpandedView = memo(({ partner, onAnimationStart, onAnimationComplete }) => (
    <motion.div
        className="flex flex-col md:flex-row gap-8 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onAnimationStart={onAnimationStart}
        onAnimationComplete={onAnimationComplete}
    >
        <div className="flex-shrink-0 w-48">
            <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full mx-auto h-auto object-contain"
            />
        </div>
        <div className="flex-grow">
            <h3 className="text-2xl font-serif font-bold text-[#0c73af] mb-4">
                {partner.name}
            </h3>
            <p className="text-gray-600 mb-4">
                {partner.description}
            </p>
            <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                    {partner.specialties.map((specialty, index) => (
                        <span
                            key={index}
                            className="text-sm bg-[#0c73af]/10 text-[#0c73af] px-3 py-1 rounded-full"
                        >
                            {specialty}
                        </span>
                    ))}
                </div>
                <div>
                    <p className="text-gray-600">{partner.location}</p>
                    <p className="text-[#0c73af] font-medium mt-2">
                        {partner.yearPartnership}
                    </p>
                </div>
            </div>
        </div>
    </motion.div>
));

const CollapsedView = memo(({ partner, onAnimationStart, onAnimationComplete, onClick }) => (
    <motion.div
        className="flex items-center justify-center h-40 cursor-pointer"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4, ease: "backOut" }}
        onAnimationStart={onAnimationStart}
        onAnimationComplete={onAnimationComplete}
        onClick={onClick}
    >
        <motion.img
            src={partner.logo}
            alt={partner.name}
            className="max-w-[120px] max-h-[80px] object-contain"
            style={{ filter: 'grayscale(100%)' }}
            whileHover={{
                scale: 1.05,
                filter: 'grayscale(0%)'
            }}
            transition={{ duration: 0.2 }}
        />
    </motion.div>
));

const ManufacturingPartners = () => {
    const [selectedPartner, setSelectedPartner] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleClick = useCallback((id) => {
        if (!isAnimating) {
            setSelectedPartner(id);
        }
    }, [isAnimating]);

    const handleAnimationStart = useCallback(() => {
        setIsAnimating(true);
    }, []);

    const handleAnimationComplete = useCallback(() => {
        setIsAnimating(false);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setSelectedPartner(null);
            }
        };

        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <AnimatePresence>
            {manufacturingPartners.map((partner) => (
                <motion.div
                    key={partner.id}
                    className="relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        gridColumn: selectedPartner === partner.id ? '1 / -1' : 'auto',
                        display: selectedPartner && selectedPartner !== partner.id ? 'none' : 'block'
                    }}
                >
                    <motion.div
                        ref={containerRef}
                        className={`bg-white rounded-xl shadow-lg border-2 ${selectedPartner === partner.id ? 'border-[#0c73af]' : 'border-amber-100'
                            } p-6`}
                        layout="preserve-aspect"
                        transition={{
                            layout: { duration: 0.3, ease: "easeInOut" }
                        }}
                    >
                        <AnimatePresence mode="sync">
                            {selectedPartner === partner.id ? (
                                <ExpandedView
                                    partner={partner}
                                    onAnimationStart={handleAnimationStart}
                                    onAnimationComplete={handleAnimationComplete}
                                />
                            ) : (
                                <CollapsedView
                                    partner={partner}
                                    onAnimationStart={handleAnimationStart}
                                    onAnimationComplete={handleAnimationComplete}
                                    onClick={() => handleClick(partner.id)}
                                />
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            ))}
        </AnimatePresence>
    );
};

export default ManufacturingPartners;
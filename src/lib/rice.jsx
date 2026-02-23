import {
    Activity,
    Check,
    Heart,
    Leaf,
    Shield,
    Sparkles,
    Users,
    Zap,
} from 'lucide-react';

import productImg9 from '../assets/1121basmati-steam.png';
import productImg10 from '../assets/IR64-rice.png';
import productImg11 from '../assets/golden-sella.png';

import img9 from '../assets/1121basmati-steam.png';
import img10 from '../assets/IR64-rice.png';
import img11 from '../assets/golden-sella.png';

import bgImageRice from '../assets/golden-sella-bg.png'
import vectorRice1 from '../assets/goldenSella1.png'
import vectorRice2 from '../assets/goldenSella3.png'

export const RiceData = [
    {        
        name: "1121 Basmati Steam",
        image: img9, // Fixed image reference
        category: "Rice",
        description: "A premium variety of long-grain aromatic rice, known for its distinctive flavor and aroma."
    },
    {        
        name: "IR 64 Rice",
        image: img10, // Fixed image reference
        category: "Rice",
        description: "A popular variety of long-grain rice known for its high yield and good cooking qualities"
    },
    {        
        name: "Golden Sella",
        image: img11, // Fixed image reference
        category: "Rice",
        description: "A premium variety of long-grain aromatic rice, known for its golden color and distinctive flavor."
    },
];

export const RiceDetailedData = [
    // rice
    // 8
    {
        name: "1121 Basmati Steam",
        img: productImg9,
        bgImage: bgImageRice,
        vector1: vectorRice1,
        vector2: vectorRice2,
        mainHeadings: ["1121 BASMATI", "STEAM"],
        subHeadings: ["PREMIUM", "LONG-GRAIN", "AROMATIC"],
        productTitle: "Premium 1121 Basmati Steam Rice",
        productDescription: "Our 1121 Basmati Steam rice is known for its exquisite aroma, long grains, and delicate texture. Perfect for a variety of dishes, it enhances every meal with its superior quality and unmatched flavor.",
        healthBenefits: [
            {
                icon: Zap,
                title: "Rich in Nutrients",
                description: "Packed with essential nutrients like carbohydrates and protein, it provides a balanced source of energy for the body."
            },
            {
                icon: Heart,
                title: "Supports Heart Health",
                description: "Low in saturated fats and cholesterol, basmati rice supports cardiovascular health and maintains a healthy heart."
            },
            {
                icon: Activity,
                title: "Good for Digestion",
                description: "Its high fiber content aids digestion, preventing constipation and promoting a healthy gut."
            },
            {
                icon: Shield,
                title: "Naturally Gluten-Free",
                description: "Suitable for individuals with gluten sensitivity or celiac disease, ensuring a healthy and safe dietary option."
            },
            {
                icon: Sparkles,
                title: "Low Glycemic Index",
                description: "Helps maintain steady blood sugar levels, making it a good choice for people with diabetes."
            }
        ],
        versatileUsesLabel: "Versatile Uses of 1121 Basmati Steam Rice",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Perfect for Biryanis",
                description: "Its long grains and aromatic flavor make it ideal for preparing luxurious biryanis."
            },
            {
                icon: Sparkles,
                title: "Classic Pilafs and Pulao",
                description: "Enhance the taste of your pilafs and pulao with its unique texture and fragrance."
            },
            {
                icon: Sparkles,
                title: "Everyday Meals",
                description: "Great as a side for curries, stir-fries, or as a base for rice bowls."
            },
            {
                icon: Sparkles,
                title: "Special Occasions",
                description: "Elevates festive meals and celebrations with its premium quality."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Our 1121 Basmati Steam Rice?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "100% Natural and Pure",
                description: "Grown using sustainable farming methods, without any artificial enhancements."
            },
            {
                icon: Sparkles,
                title: "Exquisite Aroma",
                description: "Known for its delightful fragrance that enhances every dish."
            },
            {
                icon: Check,
                title: "Extra-Long Grains",
                description: "Each grain elongates beautifully upon cooking, offering a visually appealing presentation."
            },
            {
                icon: Users,
                title: "Sustainably Sourced",
                description: "Procured from trusted farmers to ensure quality and freshness in every grain."
            },
            {
                icon: Heart,
                title: "Health Benefits You Can Trust",
                description: "Carefully processed to retain its natural nutritional value."
            }
        ]
    },
    // 9
    {
        name: "IR 64 Rice",
        img: productImg10,
        bgImage: bgImageRice,
        vector1: vectorRice1,
        vector2: vectorRice2,
        mainHeadings: ["IR 64", "RICE"],
        subHeadings: ["POPULAR", "LONG-GRAIN", "NUTRITIOUS"],
        productTitle: "High-Yield IR 64 Rice",
        productDescription: "A popular variety of long-grain rice known for its high yield, affordability, and good cooking qualities, making it ideal for daily consumption.",
        healthBenefits: [
            {
                icon: Zap,
                title: "Energy-Rich",
                description: "A great source of carbohydrates, providing sustained energy for daily activities."
            },
            {
                icon: Heart,
                title: "Supports Weight Management",
                description: "Low in fats and cholesterol, making it a healthy choice for weight-conscious individuals."
            },
            {
                icon: Activity,
                title: "Easily Digestible",
                description: "Light on the stomach and easy to digest, suitable for all age groups."
            },
            {
                icon: Shield,
                title: "Gluten-Free",
                description: "Naturally gluten-free and suitable for people with gluten sensitivity."
            }
        ],
        versatileUsesLabel: "Versatile Uses of IR 64 Rice",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Daily Meals",
                description: "Perfect for everyday meals like steamed rice or khichdi."
            },
            {
                icon: Sparkles,
                title: "Bulk Cooking",
                description: "Ideal for large-scale cooking at restaurants, events, or catering services."
            },
            {
                icon: Sparkles,
                title: "Rice-Based Snacks",
                description: "Can be used to prepare puffed rice or rice flour for snacks."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Our IR 64 Rice?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "Sustainably Grown",
                description: "Cultivated with eco-friendly farming practices."
            },
            {
                icon: Check,
                title: "High Yield",
                description: "Offers excellent value for money with high yields and consistent quality."
            },
            {
                icon: Sparkles,
                title: "Reliable Cooking Results",
                description: "Cooks evenly with a firm texture and subtle flavor."
            }
        ]
    },
    // 10
    {
        name: "Golden Sella",
        img: productImg11,
        bgImage: bgImageRice,
        vector1: vectorRice1,
        vector2: vectorRice2,
        mainHeadings: ["GOLDEN SELLA", "RICE"],
        subHeadings: ["PREMIUM", "AROMATIC", "VERSATILE"],
        productTitle: "Golden Sella Premium Rice",
        productDescription: "A premium variety of long-grain aromatic rice, known for its golden hue, exquisite flavor, and firm texture. Perfect for luxurious dishes and special occasions.",
        healthBenefits: [
            {
                icon: Zap,
                title: "Rich in Nutrients",
                description: "Contains essential vitamins and minerals that support overall health."
            },
            {
                icon: Heart,
                title: "Supports Heart Health",
                description: "Low in cholesterol and saturated fats, contributing to cardiovascular health."
            },
            {
                icon: Activity,
                title: "Slow Energy Release",
                description: "Low glycemic index ensures gradual energy release, suitable for diabetic diets."
            },
            {
                icon: Shield,
                title: "Gluten-Free",
                description: "Safe for individuals with gluten sensitivity or celiac disease."
            },
            {
                icon: Sparkles,
                title: "Aromatic Flavor",
                description: "Enhances dishes with its delightful aroma and rich taste."
            }
        ],
        versatileUsesLabel: "Versatile Uses of Golden Sella Rice",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Biryani and Pilaf",
                description: "Ideal for preparing luxurious biryanis and flavorful pilafs."
            },
            {
                icon: Sparkles,
                title: "Traditional Dishes",
                description: "Used in a variety of traditional and festive recipes."
            },
            {
                icon: Sparkles,
                title: "Everyday Cooking",
                description: "Can be used for daily meals with its consistent quality and taste."
            },
            {
                icon: Sparkles,
                title: "Restaurant Quality",
                description: "Favored by chefs for its premium texture and cooking consistency."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Our Golden Sella Rice?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "Naturally Aged",
                description: "Aged to perfection for enhanced flavor and aroma."
            },
            {
                icon: Sparkles,
                title: "Golden Hue",
                description: "Unique golden color adds a visually appealing touch to dishes."
            },
            {
                icon: Check,
                title: "Extra-Long Grains",
                description: "Long and slender grains that cook perfectly without breaking."
            },
            {
                icon: Users,
                title: "Premium Quality",
                description: "Sourced from trusted suppliers to ensure top-notch quality."
            },
            {
                icon: Heart,
                title: "Health-Focused",
                description: "Processed to retain its natural goodness and nutritional value."
            }
        ]
    },
];

export const RiceColorData = [
    // product 8
    {
        name: "1121 Basmati Steam",
        background: {
            main: '#fff8e7',
            element1: 'rgba(255, 215, 0, 0.2)',  // Golden with 20% opacity
            element2: 'rgba(244, 196, 48, 0.2)'  // Goldenrod with 20% opacity
        },
        navbar: '#DAA520',  // Goldenrod
        text: {
            mainHeadings: {
                primary: '#DAA520',  // Goldenrod
                secondary: '#B8860B' // Dark Goldenrod
            },
            subHeadings: '#CD853F',  // Peru
            productTitle: '#DAA520', // Goldenrod
            productDescription: '#8B4513', // Saddle Brown
            labels: {
                primary: '#CD853F',   // Peru
                secondary: '#DAA520'  // Goldenrod
            },
            floatingSpecs: {
                primary: '#B8860B',   // Dark Goldenrod
                secondary: '#DAA520'  // Goldenrod
            }
        },
        buttons: {
            orderNow: {
                background: '#DAA520',   // Goldenrod
                hover: '#B8860B'         // Dark Goldenrod
            },
            learnMore: {
                border: '#DAA520',       // Goldenrod
                text: '#B8860B',         // Dark Goldenrod
                hover: 'rgba(218, 165, 32, 0.1)' // Goldenrod with 10% opacity
            }
        },
        border: 'rgba(218, 165, 32, 0.2)', // Goldenrod with 20% opacity
        icon: '#CD853F'  // Peru
    },
    // product 9
    {
        name: "IR 64 Rice",
        background: {
            main: '#fff8e7',
            element1: 'rgba(255, 215, 0, 0.2)',  // Golden with 20% opacity
            element2: 'rgba(244, 196, 48, 0.2)'  // Goldenrod with 20% opacity
        },
        navbar: '#DAA520',  // Goldenrod
        text: {
            mainHeadings: {
                primary: '#DAA520',  // Goldenrod
                secondary: '#B8860B' // Dark Goldenrod
            },
            subHeadings: '#CD853F',  // Peru
            productTitle: '#DAA520', // Goldenrod
            productDescription: '#8B4513', // Saddle Brown
            labels: {
                primary: '#CD853F',   // Peru
                secondary: '#DAA520'  // Goldenrod
            },
            floatingSpecs: {
                primary: '#B8860B',   // Dark Goldenrod
                secondary: '#DAA520'  // Goldenrod
            }
        },
        buttons: {
            orderNow: {
                background: '#DAA520',   // Goldenrod
                hover: '#B8860B'         // Dark Goldenrod
            },
            learnMore: {
                border: '#DAA520',       // Goldenrod
                text: '#B8860B',         // Dark Goldenrod
                hover: 'rgba(218, 165, 32, 0.1)' // Goldenrod with 10% opacity
            }
        },
        border: 'rgba(218, 165, 32, 0.2)', // Goldenrod with 20% opacity
        icon: '#CD853F'  // Peru
    },
    // product 10
    {
        name: "Golden Sella",
        background: {
            main: '#fff8e7',
            element1: 'rgba(255, 215, 0, 0.2)',  // Golden with 20% opacity
            element2: 'rgba(244, 196, 48, 0.2)'  // Goldenrod with 20% opacity
        },
        navbar: '#DAA520',  // Goldenrod
        text: {
            mainHeadings: {
                primary: '#DAA520',  // Goldenrod
                secondary: '#B8860B' // Dark Goldenrod
            },
            subHeadings: '#CD853F',  // Peru
            productTitle: '#DAA520', // Goldenrod
            productDescription: '#8B4513', // Saddle Brown
            labels: {
                primary: '#CD853F',   // Peru
                secondary: '#DAA520'  // Goldenrod
            },
            floatingSpecs: {
                primary: '#B8860B',   // Dark Goldenrod
                secondary: '#DAA520'  // Goldenrod
            }
        },
        buttons: {
            orderNow: {
                background: '#DAA520',   // Goldenrod
                hover: '#B8860B'         // Dark Goldenrod
            },
            learnMore: {
                border: '#DAA520',       // Goldenrod
                text: '#B8860B',         // Dark Goldenrod
                hover: 'rgba(218, 165, 32, 0.1)' // Goldenrod with 10% opacity
            }
        },
        border: 'rgba(218, 165, 32, 0.2)', // Goldenrod with 20% opacity
        icon: '#CD853F'  // Peru
    },
]

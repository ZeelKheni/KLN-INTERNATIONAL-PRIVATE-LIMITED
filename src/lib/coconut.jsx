import {
    Activity,
    Check,
    CheckCircle,
    Cookie,
    Heart,
    Leaf,
    Shield,
    Sparkles,
    Star,
    UtensilsCrossed,
    Users,
    Zap,
    Droplets
} from 'lucide-react';

import greenCoconut from '../assets/2.png';
import brownCoconut from '../assets/brown-coconut.png';

import greenCoconutVideo1 from '../assets/Coconut/green_coconut_v1.mp4';
import greenCoconutVideo2 from '../assets/Coconut/green_coconut_v2.mp4';
import brownCoconutVideo1 from '../assets/Coconut/brown_coconut_v1.mp4';
import brownCoconutVideo2 from '../assets/Coconut/brown_coconut_v2.mp4';

import vector21 from "../assets/green-coconut-1.png";
import vector22 from "../assets/green-coconut-2.png"
import vectorBrownCoconut1 from "../assets/brown-coconut-1.png";
import vectorBrownCoconut2 from "../assets/brown-coconut-2.png";

import bgImage2 from "../assets/green-coconut-bg.png";
import bgBrownCoconut from "../assets/brown-coconut-bg.png";

export const CoconutData = [
    {        
        name: "Mature Coconut (Brown Coconut)",
        image: brownCoconut,
        category: "Coconut",
        description: "High Oil Content"
    },
    {        
        name: "Tender Coconut (Green Coconut)",
        image: greenCoconut,
        category: "Coconut",
        description: "Refreshing, Hydrating, and Nutrient-Rich"
    },
];

export const CoconutDetailedData = [
    // coconut
    // 36
    {
        name: "Mature Coconut (Brown Coconut)",
        img: brownCoconut,
        "videoLabel": "Watch How It's Made",
        video: [brownCoconutVideo1, brownCoconutVideo2],
        bgImage: bgBrownCoconut,
        vector1: vectorBrownCoconut1,
        vector2: vectorBrownCoconut2,
        mainHeadings: ["Mature", "Coconut"],
        subHeadings: ["Premium", "Fresh", "Natural"],
        productTitle: "Mature Coconut (Brown Coconut)",
        productDescription: "Our premium mature coconuts are hand-selected at peak ripeness, with rich creamy flesh and high oil content. Each coconut is quality-checked for optimal maturity and flavor. Perfect for coconut milk, oil extraction, or fresh consumption.",
        healthBenefits: [
            {
                icon: Droplets,
                title: "Maximum Oil Content",
                description: "Exceptionally high concentration of beneficial medium-chain fatty acids, perfect for oil extraction and processing."
            },
            {
                icon: Heart,
                title: "Superior Nutrition",
                description: "Rich source of minerals, dietary fiber, vitamins, and essential nutrients for optimal health benefits."
            },
            {
                icon: Shield,
                title: "Quality Assured",
                description: "Each coconut undergoes strict quality control measures to ensure peak ripeness and optimal characteristics."
            }
        ],
        versatileUsesLabel: "Applications of Mature Coconut",
        versatileUses: [
            {
                icon: Cookie,
                title: "Culinary Excellence",
                description: "Perfect for gourmet cooking, baking, and creating authentic tropical dishes and desserts."
            },
            {
                icon: Droplets,
                title: "Commercial Processing",
                description: "Ideal for producing virgin coconut oil, coconut milk, cream, and other coconut-based products."
            },
            {
                icon: UtensilsCrossed,
                title: "Fresh Consumption",
                description: "Can be enjoyed fresh or incorporated into smoothies, breakfast bowls, and healthy snacks."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Our Mature Coconuts?",
        whyChooseOurPowder: [
            {
                icon: CheckCircle,
                title: "Premium Selection",
                description: "Each coconut is hand-picked and carefully evaluated to ensure optimal maturity and highest quality standards."
            },
            {
                icon: Leaf,
                title: "Environmental Responsibility",
                description: "Sourced from certified sustainable farms practicing responsible agricultural methods."
            },
            {
                icon: Star,
                title: "Customer Satisfaction",
                description: "Trusted by professional chefs, manufacturers, and health-conscious consumers worldwide."
            }
        ]
    },
    // 2
    {
        name: "Tender Coconut (Green Coconut)",
        img: greenCoconut,
        "videoLabel": "Watch How It's Made",
        video: [greenCoconutVideo1, greenCoconutVideo2],
        bgImage: bgImage2,
        vector1: vector21,
        vector2: vector22,
        mainHeadings: ["Tender", "Coconut"],
        subHeadings: ["Refreshing", "Hydrating", "Nutrient-Rich"],
        productTitle: "Tender Coconut (Green Coconut)",
        productDescription: "Our green coconut is a refreshing and hydrating fruit, packed with essential nutrients and electrolytes. Perfect for a healthy lifestyle, it’s a natural source of hydration and energy.",
        healthBenefits: [
            {
                icon: Zap,
                title: "Hydration",
                description: "Rich in electrolytes, green coconut water helps replenish fluids and maintain hydration levels."
            },
            {
                icon: Heart,
                title: "Supports Heart Health",
                description: "Contains potassium and magnesium, which are essential for maintaining healthy blood pressure and heart function."
            },
            {
                icon: Activity,
                title: "Boosts Energy",
                description: "Natural sugars and electrolytes provide a quick energy boost, making it ideal for athletes and active individuals."
            },
            {
                icon: Sparkles,
                title: "Aids Digestion",
                description: "The fiber content in green coconut supports digestive health and helps maintain a healthy gut."
            },
            {
                icon: Leaf,
                title: "Rich in Antioxidants",
                description: "Packed with antioxidants, green coconut helps combat oxidative stress and supports overall health."
            }
        ],
        versatileUsesLabel: "Versatile Uses of Green Coconut",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Refreshing Drink",
                description: "Enjoy straight from the coconut or mix into smoothies for a refreshing beverage."
            },
            {
                icon: Sparkles,
                title: "Culinary Ingredient",
                description: "Use coconut water in cooking or baking for added flavor and nutrition."
            },
            {
                icon: Sparkles,
                title: "Natural Hydration",
                description: "Perfect for hydration after workouts or during hot weather."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Our Green Coconut?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "100% Natural",
                description: "Sourced from fresh green coconuts, with no additives or preservatives."
            },
            {
                icon: Sparkles,
                title: "Nutrient-Dense",
                description: "Packed with essential vitamins, minerals, and electrolytes for optimal health."
            },
            {
                icon: Check,
                title: "Versatile Use",
                description: "Great for drinks, cooking, or as a refreshing snack."
            },
            {
                icon: Users,
                title: "Suitable for Everyone",
                description: "A healthy choice for all ages, from kids to adults."
            },
            {
                icon: Heart,
                title: "Sustainably Sourced",
                description: "Our coconuts are harvested using sustainable practices, ensuring quality and freshness."
            }
        ]
    },

];

export const CoconutColorData = [
    // product 36
    {
        name: "Mature Coconut (Brown Coconut)",
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
    // product 2
    {
        name: "Tender Coconut (Green Coconut)",
        background: {
            main: '#f5f5e6',  // Light yellowish-green background from the original code
            element1: '#90EE90/20',  // Light green with 20% opacity from background elements
            element2: '#98FB98/20'   // Another light green with 20% opacity
        },
        text: {
            mainHeadings: {
                primary: '#2E8B57',   // Sea Green - used for main product name
                secondary: '#3CB371'  // Medium Sea Green - used for secondary heading
            },
            subHeadings: '#228B22',   // Forest Green - used for sub-headings
            productTitle: '#2E8B57',  // Sea Green - used for product title
            productDescription: '#228B22', // Forest Green - used for description text
            labels: {
                primary: '#2E8B57',   // Sea Green
                secondary: '#228B22'  // Forest Green
            },
            floatingSpecs: {
                primary: '#3CB371',
                secondary: '#2E8B57'
            }
        },
        buttons: {
            orderNow: {
                background: '#32CD32',  // Lime Green
                hover: '#228B22'        // Forest Green
            },
            learnMore: {
                border: '#32CD32',      // Lime Green
                text: '#228B22',        // Forest Green
                hover: '#32CD32' // Lime Green with 10% opacity
            }
        },
        icon: '#228B22',   // Forest Green 
        border: '#32CD32/20'  // Lime Green with 20% opacity        
    },
]
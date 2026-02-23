import {
    Activity,
    Archive,
    Cake,
    Check,
    CheckCircle,
    CircleDot,
    Coffee,
    Cookie,
    Droplet,
    Flame,
    Globe,
    Heart,
    Leaf,
    Shield,
    ShieldCheck,
    Smile,
    Soup,
    Sparkle,
    Sparkles,
    Star,
    UtensilsCrossed,
    Users,
    Zap
} from 'lucide-react';

import img1 from '../assets/1.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/clilli_flakes.jpg';
import img8 from '../assets/oregano.jpg';

import productImg1 from "../assets/5.png";
import productImg3 from "../assets/3.png";
import productImg4 from "../assets/4.png";
import productImg5 from "../assets/1.png";
import productImg6 from "../assets/6.png";
import productImg7 from "../assets/clilli_flakes.jpg";
import productImg8 from "../assets/oregano.jpg";

import bgImage1 from "../assets/garlic-bg.png";
import bgImage3 from "../assets/banana-bg.png";
import bgImage4 from "../assets/moringa-bg.png";
import bgImage5 from "../assets/turmeric-bg.png";
import bgImage6 from "../assets/chilli-bg.png";

import vector11 from "../assets/garlic1.png";
import vector12 from "../assets/garlic2.png";
import vector31 from "../assets/banana1.png";
import vector32 from "../assets/banana2.png";
import vector41 from "../assets/moringa1.png";
import vector42 from "../assets/moringa3.png";
import vector51 from "../assets/turmeric1.png";
import vector52 from "../assets/turmeric2.png";
import vector61 from "../assets/chilli1.png";
import vector62 from "../assets/chilli2.png";

export const SpicesData = [
    {
        name: "Garlic Powder",
        image: img5,
        category: "Spices",
        description: "Pure, Natural, and Flavorful"
    },
    {
        name: "Ripe Banana Powder",
        image: img3,
        category: "Spices",
        description: "Naturally Sweet, Nutritious, and Convenient"
    },
    {
        name: "Moringa Leaf Powder",
        image: img4,
        category: "Spices",
        description: "Nature's Nutrient Powerhouse"
    },
    {
        name: "Turmeric Powder",
        image: img1,
        category: "Spices",
        description: "A Potent Superfood for Holistic Health"
    },
    {
        name: "Chilli Powder",
        image: img6,
        category: "Spices",
        description: "Bold Flavor and Powerful Health Benefits"
    },
    {
        name: "Chilli Flakes",
        image: img7,
        category: "Spices",
        description: "Bold Flavor and Powerful Health Benefits"
    },
    {
        name: "Oregano",
        image: img8,
        category: "Spices",
        description: "Bold Flavor and Powerful Health Benefits"
    }
];

export const SpicesDetailedData = [
    // spices
    // 1
    {
        name: "Garlic Powder",
        img: productImg1,
        bgImage: bgImage1,
        vector1: vector11,
        vector2: vector12,
        mainHeadings: ["GARLIC", "POWDER"],
        subHeadings: ["PREMIUM", "ORGANIC", "PURE"],
        productTitle: "Premium Garlic Powder",
        productDescription: "Our garlic powder is made from carefully selected, high-quality garlic bulbs, finely ground to bring you the authentic, bold taste of fresh garlic in a convenient powder form. It's the ideal ingredient to add flavor and health benefits to any recipe.",
        healthBenefits: [
            {
                icon: Zap,
                title: "Boosts Immunity",
                description: "Garlic powder is rich in antioxidants, which help strengthen the immune system and protect the body from illness. It contains compounds like allicin, known for its antiviral, antibacterial, and antifungal properties."
            },
            {
                icon: Heart,
                title: "Supports Heart Health",
                description: "Regular use of garlic powder can contribute to improved heart health by helping to lower blood pressure, reduce cholesterol levels, and improve blood circulation, thereby reducing the risk of heart disease."
            },
            {
                icon: Heart,
                title: "Aids in Digestion",
                description: "Garlic powder supports healthy digestion by stimulating the production of digestive enzymes. It also has prebiotic effects, helping to promote a balanced gut microbiome."
            },
            {
                icon: Activity,
                title: "Blood Sugar Management",
                description: "Helps maintain healthy glucose levels, beneficial for those managing diabetes."
            },
            {
                icon: Sparkles,
                title: "Anti-Inflammatory",
                description: "The compounds in garlic powder have anti-inflammatory effects, which may reduce symptoms of arthritis and other inflammatory conditions."
            },
            {
                icon: Shield,
                title: "Rich in Antioxidants",
                description: "Antioxidants found in garlic powder help neutralize free radicals in the body, potentially reducing the risk of chronic diseases and promoting skin health."
            }
        ],
        versatileUsesLabel: "Versatile Uses of Garlic Powder",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Culinary Use",
                description: "Garlic powder can be added to soups, stews, marinades, dressings, and rubs. Its concentrated flavor makes it perfect for seasoning meats, vegetables, pasta, and even popcorn."
            },
            {
                icon: Sparkles,
                title: "Health Drinks",
                description: "Mix a pinch of garlic powder in warm water or smoothies for an immune-boosting drink."
            },
            {
                icon: Sparkles,
                title: "Herbal Remedies",
                description: "Common in traditional remedies, garlic powder can be added to natural health treatments to benefit from its antibacterial and anti-inflammatory properties."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Our Ripe Banana Powder?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "100% Natural and Pure",
                description: "Made from fresh, organic garlic bulbs, with no additives, preservatives, or artificial colors."
            },
            {
                icon: Sparkles,
                title: "Rich in Flavor",
                description: "Our garlic powder offers a potent, authentic garlic taste that enhances any dish."
            },
            {
                icon: Check,
                title: "Fine Texture",
                description: "Finely ground to ensure it blends seamlessly with all types of ingredients."
            },
            {
                icon: Users,
                title: "Sourced Responsibly",
                description: "We work with trusted farmers to source garlic sustainably, supporting quality and freshness."
            },
            {
                icon: Heart,
                title: "Health Benefits You Can Trust",
                description: "Processed to retain all the nutritional benefits, ensuring you get the maximum health boost in every sprinkle."
            }
        ]
    },
    // 2
    {
        name: "Ripe Banana Powder",
        img: productImg3,
        bgImage: bgImage3,
        vector1: vector31,
        vector2: vector32,
        mainHeadings: ["Banana", "Powder"],
        subHeadings: ["Naturally Sweet", "Nutritious", "Convenient"],
        productTitle: "Ripe Banana Powder",
        productDescription: "Our ripe banana powder is made from high-quality, fully ripened bananas, gently dried and finely ground to retain all their natural sweetness, flavor, and nutrients. This versatile powder is perfect for those looking to add a nutritious, natural sweetener to recipes without added sugars.",
        healthBenefits: [
            {
                icon: Zap,
                title: "Energy Boost",
                description: "Ripe bananas are rich in natural sugars and carbohydrates, providing a quick and sustained energy boost, making this powder ideal for active lifestyles."
            },
            {
                icon: Heart,
                title: "High in Potassium",
                description: "Packed with potassium, ripe banana powder supports heart health, muscle function, and blood pressure regulation."
            },
            {
                icon: Heart,
                title: "Rich in Fiber",
                description: "A great source of dietary fiber, it helps improve digestion, keeps you feeling full, and supports healthy gut bacteria."
            },
            {
                icon: Activity,
                title: "Supports Immune Health",
                description: "With vitamin C and antioxidants, ripe banana powder boosts the immune system, helping the body fight off free radicals."
            },
            {
                icon: Sparkles,
                title: "Promotes Good Mood",
                description: "Ripe bananas contain tryptophan, a precursor to serotonin, the \"feel-good\" hormone, which may help improve mood and reduce stress."
            }
        ],
        versatileUsesLabel: "Versatile Uses of Ripe Banana Powder",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Natural Sweetener",
                description: "Add to smoothies, oatmeal, yogurt, or baked goods for a natural touch of sweetness without added sugars."
            },
            {
                icon: Sparkles,
                title: "Baby Food",
                description: "Ripe banana powder is a gentle, nutritious option for baby food, providing essential vitamins and minerals for healthy growth."
            },
            {
                icon: Sparkles,
                title: "Healthy Snacks",
                description: "Use it in energy bars, granola, or protein balls as a flavorful, nutrient-packed ingredient."
            },
            {
                icon: Sparkles,
                title: "Baking Ingredient",
                description: "Perfect for muffins, pancakes, cookies, and cakes, it adds moisture, natural sweetness, and flavor, reducing the need for additional sugar."
            },
            {
                icon: Sparkles,
                title: "Beverages",
                description: "Blend a spoonful into milkshakes, juices, or protein shakes for a creamy texture and extra nutrients."
            },
        ],
        whyChooseOurPowderLabel: "Why Choose Our Ripe Banana Powder?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "100% Pure and Natural",
                description: "Made from fully ripened, naturally sweet bananas, with no added sugar, preservatives, or artificial flavors."
            },
            {
                icon: Sparkles,
                title: "Naturally Sweet and Flavorful",
                description: "Our powder retains the delicious, natural sweetness and aroma of ripe bananas, making it a great alternative to processed sweeteners."
            },
            {
                icon: Check,
                title: "Rich in Nutrients",
                description: "Carefully processed to retain all the essential vitamins, minerals, and fiber found in fresh bananas."
            },
            {
                icon: Users,
                title: "Kid-Friendly and Family-Safe",
                description: "Ideal for all ages, especially suitable for baby foods and nutritious family recipes."
            },
            {
                icon: Heart,
                title: "Sustainable Sourcing",
                description: "Our bananas are grown using eco-friendly methods, and we prioritize sustainable farming practices for a cleaner environment."
            }
        ]
    },
    // 3
    {
        name: "Moringa Leaf Powder",
        img: productImg4,
        bgImage: bgImage4,
        vector1: vector41,
        vector2: vector42,
        mainHeadings: ["Moringa", "Leaf Powder"],
        subHeadings: ["Nutrient-Dense", "Antioxidant-Rich", "Superfood"],
        productTitle: "Moringa Leaf Powder – Nature's Nutrient Powerhouse",
        productDescription: "Our moringa powder is made from premium-quality, organically grown moringa leaves, carefully dried and finely ground to preserve its incredible nutrient content and vibrant green color. Known as the 'miracle tree,' moringa is a natural superfood packed with essential vitamins, minerals, antioxidants, and amino acids.",
        healthBenefits: [
            {
                icon: Zap,
                title: "Rich in Antioxidants",
                description: "Moringa powder contains powerful antioxidants, including quercetin and chlorogenic acid, which help protect cells from damage by free radicals and reduce inflammation."
            },
            {
                icon: ShieldCheck,
                title: "Boosts Immune Health",
                description: "High in vitamins A and C, moringa supports immune function, helping your body defend against infections and illnesses."
            },
            {
                icon: Smile,
                title: "Promotes Healthy Skin and Hair",
                description: "With its rich vitamin E and vitamin C content, moringa powder promotes skin elasticity and hair growth, and its antioxidants fight signs of aging."
            },
            {
                icon: Activity,
                title: "Supports Metabolism and Energy",
                description: "Moringa is an excellent source of iron, magnesium, and B vitamins, essential for metabolism and sustained energy levels."
            },
            {
                icon: CircleDot,
                title: "Enhances Digestive Health",
                description: "The fiber in moringa powder aids digestion, promotes regularity, and supports a healthy gut environment."
            }
        ],
        versatileUsesLabel: "Versatile Uses of Moringa Powder",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Smoothies and Juices",
                description: "Add a teaspoon to smoothies, juices, or green drinks for an extra boost of vitamins and antioxidants."
            },
            {
                icon: Soup,
                title: "Tea or Infusion",
                description: "Mix with hot water or add to your tea for a refreshing and nutrient-packed drink."
            },
            {
                icon: Cake,
                title: "Baking and Cooking",
                description: "Use moringa powder as a superfood ingredient in breads, muffins, and pancakes for a healthy twist."
            },
            {
                icon: UtensilsCrossed,
                title: "Seasoning and Sauces",
                description: "Sprinkle a bit in salads, soups, sauces, or even guacamole to add a nutritional boost."
            },
            {
                icon: Sparkle,
                title: "Beauty and Skin Care",
                description: "Create DIY face masks or scrubs by mixing moringa powder with honey or yogurt for a natural skincare treatment."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Our Moringa Powder?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "100% Organic and Pure",
                description: "Made from organically grown moringa leaves, with no additives, preservatives, or fillers."
            },
            {
                icon: Star,
                title: "Nutrient-Dense",
                description: "Processed to retain its nutritional potency, ensuring you get maximum health benefits in every serving."
            },
            {
                icon: CheckCircle,
                title: "Vibrant Green Color and Fresh Taste",
                description: "Our moringa powder has a pure, vibrant green color and a mild, earthy taste, indicating high quality."
            },
            {
                icon: Heart,
                title: "Sustainably Sourced",
                description: "We prioritize eco-friendly practices and support sustainable farming, ensuring quality, freshness, and minimal environmental impact."
            },
            {
                icon: ShieldCheck,
                title: "Lab-Tested for Quality and Safety",
                description: "Rigorously tested to meet the highest standards for purity, potency, and safety."
            }
        ]
    },
    // 4
    {
        name: "Turmeric Powder",
        img: productImg5,
        bgImage: bgImage5,
        vector1: vector51,
        vector2: vector52,
        mainHeadings: ["Turmeric", "Powder"],
        subHeadings: ["Anti-Inflammatory", "Antioxidant-Rich", "Superfood"],
        productTitle: "Turmeric Powder",
        productDescription: "Our green turmeric powder is made from premium, young turmeric roots, carefully dried and finely ground to retain its vibrant green color and nutrient-rich profile. Known for its powerful anti-inflammatory and antioxidant properties, green turmeric is a valuable addition to any wellness routine.",
        healthBenefits: [
            {
                icon: Zap,
                title: "Powerful Anti-Inflammatory Properties",
                description: "Green turmeric is rich in curcumin, a compound that helps reduce inflammation in the body, supporting joint health and easing discomfort."
            },
            {
                icon: ShieldCheck,
                title: "Rich in Antioxidants",
                description: "Packed with antioxidants, green turmeric fights free radicals, helping protect cells from oxidative stress and supporting overall vitality."
            },
            {
                icon: CircleDot,
                title: "Supports Digestive Health",
                description: "Green turmeric promotes a healthy digestive system, reducing bloating and aiding nutrient absorption."
            },
            {
                icon: Activity,
                title: "Boosts Immune System",
                description: "With its high levels of curcumin, green turmeric strengthens the immune system, supporting the body's natural defenses."
            },
            {
                icon: Droplet,
                title: "Detoxifying Properties",
                description: "Known for promoting liver health, green turmeric helps the body eliminate toxins, contributing to overall detoxification."
            }
        ],
        versatileUsesLabel: "Versatile Uses of Green Turmeric Powder",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Smoothies and Juices",
                description: "Add a teaspoon to smoothies, green juices, or detox drinks for a wellness boost."
            },
            {
                icon: Coffee,
                title: "Golden Milk and Teas",
                description: "Use in golden milk or herbal teas for a warm, nutritious beverage with soothing and anti-inflammatory effects."
            },
            {
                icon: UtensilsCrossed,
                title: "Culinary Applications",
                description: "Green turmeric powder can be added to curries, soups, sauces, and marinades, bringing a unique, earthy flavor and vibrant color."
            },
            {
                icon: Sparkle,
                title: "Natural Skincare",
                description: "Mix with honey, yogurt, or aloe vera gel to create a DIY face mask that brightens and rejuvenates the skin."
            },
            {
                icon: Zap,
                title: "Health Shots",
                description: "Blend with lemon juice, ginger, and water for a potent health shot to start your day."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Our Green Turmeric Powder?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "100% Pure and Natural",
                description: "Made from organically grown, young turmeric roots with no additives, preservatives, or artificial colors."
            },
            {
                icon: Star,
                title: "High Curcumin Content",
                description: "Carefully processed to preserve the maximum levels of curcumin, ensuring potent anti-inflammatory and antioxidant benefits."
            },
            {
                icon: CheckCircle,
                title: "Vibrant Color and Fresh Flavor",
                description: "Our green turmeric powder boasts a rich green color and mild, earthy taste, indicating its high quality and freshness."
            },
            {
                icon: Heart,
                title: "Ethically and Sustainably Sourced",
                description: "We work closely with farmers who use eco-friendly and sustainable methods, ensuring both quality and environmental responsibility."
            },
            {
                icon: ShieldCheck,
                title: "Lab-Tested for Purity",
                description: "Tested for quality and safety, our green turmeric powder meets the highest standards for purity and effectiveness."
            }
        ]
    },
    // 5
    {
        name: "Chilli Powder",
        img: productImg6,
        bgImage: bgImage6,
        vector1: vector61,
        vector2: vector62,
        mainHeadings: ["Chili", "Powder"],
        subHeadings: ["Bold Flavor", "Powerful Health Benefits", "Natural Spice"],
        productTitle: "Chili Powder",
        productDescription: "Our chili powder is made from premium-quality, sun-dried chilies, ground to perfection to deliver bold flavor and vibrant color. With its natural heat and versatility, chili powder adds spice, aroma, and a burst of nutrients to your favorite dishes.",
        healthBenefits: [
            {
                icon: Star,
                title: "Rich in Vitamins and Minerals",
                description: "Chili powder is packed with vitamins A, C, and E, which support immune health, skin vitality, and eye health."
            },
            {
                icon: Zap,
                title: "Boosts Metabolism",
                description: "The capsaicin in chili powder helps increase metabolism, promoting calorie burn and aiding weight management."
            },
            {
                icon: Heart,
                title: "Anti-Inflammatory Properties",
                description: "Capsaicin also provides anti-inflammatory benefits, helping reduce pain and inflammation in the body."
            },
            {
                icon: Activity,
                title: "Heart Health",
                description: "Chili powder contains potassium and iron, which support cardiovascular health by regulating blood pressure and promoting oxygen flow in the blood."
            },
            {
                icon: CircleDot,
                title: "Improves Digestion",
                description: "Known to stimulate digestive enzymes, chili powder can aid in digestion, prevent bloating, and support gut health."
            }
        ],
        versatileUsesLabel: "Versatile Uses of Chili Powder",
        versatileUses: [
            {
                icon: UtensilsCrossed,
                title: "Culinary Applications",
                description: "Perfect for spicing up soups, stews, curries, marinades, and sauces, adding depth and heat to a wide range of dishes."
            },
            {
                icon: Sparkles,
                title: "Seasoning and Rubs",
                description: "Use as a dry rub for meats, sprinkle on roasted vegetables, or add to dips and spreads for an extra kick."
            },
            {
                icon: Globe,
                title: "Mexican and Indian Cuisine",
                description: "An essential ingredient for Mexican dishes like tacos and enchiladas, and Indian curries, enhancing authentic flavors."
            },
            {
                icon: Cookie,
                title: "Savory Snacks",
                description: "Add to popcorn, chips, or nuts for a spicy snack, or mix into salad dressings and salsas for an extra burst of flavor."
            },
            {
                icon: Archive,
                title: "Pickling and Preservation",
                description: "Chili powder is ideal for pickling and canning, helping preserve foods while adding spice and color."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Our Chili Powder?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "100% Pure and Natural",
                description: "Made from carefully selected, high-quality chilies with no additives, preservatives, or artificial colors."
            },
            {
                icon: Flame,
                title: "Bold Flavor and Vibrant Color",
                description: "Our chili powder is ground to retain its natural bright red color and bold, spicy flavor, indicating freshness and quality."
            },
            {
                icon: Zap,
                title: "High Capsaicin Content",
                description: "With high levels of capsaicin, our chili powder delivers maximum flavor and health benefits."
            },
            {
                icon: Heart,
                title: "Sustainably Sourced",
                description: "We source our chilies from trusted farmers who practice sustainable agriculture, ensuring quality, freshness, and environmental responsibility."
            },
            {
                icon: ShieldCheck,
                title: "Lab-Tested for Purity",
                description: "Our chili powder undergoes rigorous testing to meet the highest standards of purity, safety, and potency."
            }
        ]
    },
    // 6
    {
        name: "Chilli Flakes",
        img: productImg7,                        
        mainHeadings: ["Chilli Flakes", "Spice"],
        subHeadings: ["Spicy", "Aromatic", "Versatile"],
        productTitle: "Premium Chilli Flakes",
        productDescription: "Add a fiery kick to your dishes with our premium chilli flakes. Perfect for enhancing flavor and adding heat to pizzas, pastas, and various cuisines.",
        healthBenefits: [
            {
                icon: Zap,
                title: "Boosts Metabolism",
                description: "Rich in capsaicin, chilli flakes help increase metabolism and support weight management."
            },
            {
                icon: Heart,
                title: "Rich in Antioxidants",
                description: "Contains antioxidants that protect the body from harmful free radicals."
            },
            {
                icon: Shield,
                title: "Supports Immunity",
                description: "Packed with vitamins A and C, it helps boost the immune system."
            }
        ],
        versatileUsesLabel: "Versatile Uses of Chilli Flakes",
        versatileUses: [
            {
                icon: UtensilsCrossed,
                title: "Perfect for Pizza",
                description: "Sprinkle on pizzas for an authentic Italian touch."
            },
            {
                icon: UtensilsCrossed,
                title: "Enhance Pastas",
                description: "Add heat to pasta sauces and dishes."
            },
            {
                icon: UtensilsCrossed,
                title: "Flavorful Stir-Fries",
                description: "Boost the flavor of stir-fried vegetables and meats."
            },
            {
                icon: Soup,
                title: "Spicy Soups",
                description: "Add a kick to soups and broths for enhanced flavor."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Our Chilli Flakes?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "100% Natural",
                description: "Made from premium quality dried red chillies, free from artificial additives."
            },
            {
                icon: Sparkles,
                title: "Rich Aroma",
                description: "Freshly ground for a delightful aroma and flavor."
            },
            {
                icon: Check,
                title: "Versatile Spice",
                description: "Perfect for multiple cuisines and dishes."
            },
            {
                icon: UtensilsCrossed,
                title: "Easy to Use",
                description: "Conveniently packed for everyday use in the kitchen."
            }
        ]
    },
    // 7
    {
        name: "Oregano",
        img: productImg8,                        
        mainHeadings: ["Oregano", "Herb"],
        subHeadings: ["Aromatic", "Flavorful", "Essential"],
        productTitle: "Premium Oregano",
        productDescription: "Enhance your dishes with the aromatic and flavorful touch of our premium oregano. Ideal for pizzas, pastas, salads, and more.",
        healthBenefits: [
            {
                icon: Zap,
                title: "Rich in Antioxidants",
                description: "Contains compounds that fight oxidative stress and boost overall health."
            },
            {
                icon: Heart,
                title: "Supports Heart Health",
                description: "Promotes cardiovascular health due to its anti-inflammatory properties."
            },
            {
                icon: Leaf,
                title: "Boosts Immunity",
                description: "Packed with essential nutrients that strengthen the immune system."
            }
        ],
        versatileUsesLabel: "Versatile Uses of Oregano",
        versatileUses: [
            {
                icon: UtensilsCrossed,
                title: "Topping for Pizza",
                description: "Sprinkle on pizzas for an authentic Italian flavor."
            },
            {
                icon: Soup,
                title: "Flavorful Salads",
                description: "Add to salads for a fresh and herbaceous taste."
            },
            {
                icon: UtensilsCrossed,
                title: "Enhance Pastas",
                description: "Perfect for seasoning pasta dishes and sauces."
            },
            {
                icon: Soup,
                title: "Herbaceous Soups",
                description: "Add a unique aroma and flavor to soups and broths."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Our Oregano?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "100% Natural",
                description: "Carefully harvested and dried to preserve its natural aroma and flavor."
            },
            {
                icon: Sparkles,
                title: "Fresh and Aromatic",
                description: "Delivers a delightful fragrance and taste to your dishes."
            },
            {
                icon: Check,
                title: "Versatile Herb",
                description: "Essential for Italian, Mediterranean, and international cuisines."
            },
            {
                icon: Globe,
                title: "Sustainably Sourced",
                description: "Grown using eco-friendly farming practices."
            }
        ]
    }
];

export const SpicesColorData = [
    // product 1
    {
        name: "Garlic Powder",
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
                hover: '#B8860B' // Goldenrod with 10% opacity
            }
        },
        border: 'rgba(218, 165, 32, 0.2)', // Goldenrod with 20% opacity
        icon: '#CD853F'  // Peru
    },
    // product 2
    {
        name: "Ripe Banana Powder",
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
                hover: '#B8860B' // Goldenrod with 10% opacity
            }
        },
        border: 'rgba(218, 165, 32, 0.2)', // Goldenrod with 20% opacity
        icon: '#CD853F'  // Peru
    },
    // product 3
    {
        name: "Moringa Leaf Powder",
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
    // product 4
    {
        name: "Turmeric Powder",
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
    // product 5   
    {
        name: "Chilli Powder",
        background: {
            main: '#F5F7F2',
            element1: '#FECACA',
            element2: '#FEE2E2'
        },
        text: {
            mainHeadings: {
                primary: '#DC2626',
                secondary: '#B91C1C'
            },
            subHeadings: '#991B1B',
            productTitle: '#DC2626',
            productDescription: '#991B1B',
            labels: {
                primary: '#DC2626',
                secondary: '#991B1B'
            },
            floatingSpecs: {
                primary: '#991B1B',
                secondary: '#DC2626'
            }
        },
        buttons: {
            orderNow: {
                background: '#EF4444',
                hover: '#DC2626'
            },
            learnMore: {
                border: '#EF4444',
                text: '#991B1B',
                hover: '#EF4444'
            }
        },
        icon: '#991B1B',
        border: '#EF4444'
    },
    // product 6
    {
        name: "Chilli Flakes",
        background: {
            main: '#FFF5F5',
            element1: '#FECACA',
            element2: '#FEE2E2'
        },
        text: {
            mainHeadings: {
                primary: '#DC2626',
                secondary: '#B91C1C'
            },
            subHeadings: '#991B1B',
            productTitle: '#DC2626',
            productDescription: '#991B1B',
            labels: {
                primary: '#DC2626',
                secondary: '#991B1B'
            },
            floatingSpecs: {
                primary: '#991B1B',
                secondary: '#DC2626'
            }
        },
        buttons: {
            orderNow: {
                background: '#EF4444',
                hover: '#DC2626'
            },
            learnMore: {
                border: '#EF4444',
                text: '#991B1B',
                hover: '#EF4444'
            }
        },
        icon: '#991B1B',
        border: '#EF4444'
    },
    // product 7
    {
        name: "Oregano",
        background: {
            main: '#f5f5e6',  // Light yellowish-green background from the original code
            element1: '#90EE90',  // Light green with 20% opacity from background elements
            element2: '#98FB98'   // Another light green with 20% opacity
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
    }   
];
import {
    Activity,
    Check,
    Cog,
    Heart,
    Leaf,
    Package,
    Settings,
    Shield,
    Shirt,
    Sparkles,
    Wallet,
    Zap
} from 'lucide-react';

import lsSmartWashBioEnzymeDetergentPowder from '../assets/Detergent/ls_smart_wash_bio_enzyme_detergent_powder.jpg';
import lsMaticWashBioEnzymeDetergentPowder from '../assets/Detergent/ls_matic_wash_bio_enzyme_detergent_powder.jpg';
import lsActiveWashBioEnzymeDetergentPowder from '../assets/Detergent/ls_active_wash_bio_enzyme_detergent_powder.jpg';
import lsDrumCleaner from '../assets/Detergent/ls_drum_cleaner.jpg';
import lsLiquidDishWash from '../assets/Detergent/ls_liquid_dish_wash.jpg';
import lsVeggiesAndFruitWash from '../assets/Detergent/ls_veggies_and_fruit_wash.jpg';
import lsDrainCleaner from '../assets/Detergent/ls_drain_cleaner.jpg';
import whiteBleachPowder from '../assets/Detergent/whiteBleachPowder.jpg';
import smartWashBioEnzymeDetergent from '../assets/Detergent/smartWashBioEnzymeDetergent.jpg';
import maticBioEnzymeDetergent from '../assets/Detergent/maticBioEnzymeDetergent.jpg';
import activeRegularWashDetergent from '../assets/Detergent/activeRegularWashDetergent.jpg';
import germicidalBleach from '../assets/Detergent/germicidalBleach.jpg';
import chlorineBleachFabricWhitener from '../assets/Detergent/chlorineBleachFabricWhitener.jpg';

import img7 from '../assets/Detergent/ls_drain_cleaner.jpg';

export const DetergentBleachData = [
    {
        name: "Texcare Ultra Detergent Powder",
        image: img7, // Fixed image reference
        category: "Detergent",
        description: "Premium Long-Grain Aromatic Rice"
    },
    {
        name: "L&S Smart Wash Bio Enzyme Detergent Powder",
        image: lsSmartWashBioEnzymeDetergentPowder, // Fixed image reference
        category: "Detergent",
        description: "Premium Long-Grain Aromatic Rice"
    },
    {
        name: "L&S Matic Wash Bio-Enzyme Detergent Powder",
        image: lsMaticWashBioEnzymeDetergentPowder, // Fixed image reference
        category: "Detergent",
        description: "Premium Long-Grain Aromatic Rice"
    },
    {
        name: "L&S Active Wash Bio-Enzyme Detergent Powder",
        image: lsActiveWashBioEnzymeDetergentPowder, // Fixed image reference
        category: "Detergent",
        description: "Premium Long-Grain Aromatic Rice"
    },
    {
        name: "L&S Smart Wash Bio-Enzyme Detergent Liquid",
        image: img7, // Fixed image reference
        category: "Detergent",
        description: "Premium Long-Grain Aromatic Rice"
    },
    {
        name: "L&S Drum Cleaner",
        image: lsDrumCleaner, // Fixed image reference
        category: "Detergent",
        description: "Premium Long-Grain Aromatic Rice"
    },
    {
        name: "L&S Liquid Dish Wash",
        image: lsLiquidDishWash, // Fixed image reference
        category: "Detergent",
        description: "Premium Long-Grain Aromatic Rice"
    },
    {
        name: "L&S Veggies & Fruit Wash",
        image: lsVeggiesAndFruitWash, // Fixed image reference
        category: "Detergent",
        description: "Premium Long-Grain Aromatic Rice"
    },
    {
        name: "L&S Drain Cleaner",
        image: lsDrainCleaner, // Fixed image reference
        category: "Detergent",
        description: "Premium Long-Grain Aromatic Rice"
    },


    {
        name: "White Bleach Powder",
        image: whiteBleachPowder, // Replace with actual image reference
        category: "Bleach",
        description: "A powerful chlorine bleach for disinfecting, deodorizing, and whitening white clothes."
    },
    {
        name: "Smart Wash BioEnzyme Detergent",
        image: smartWashBioEnzymeDetergent, // Replace with actual image reference
        category: "Detergent",
        description: "A biodegradable detergent with stain-fighting enzymes, providing effective and eco-friendly cleaning with minimal usage."
    },
    {
        name: "Matic BioEnzyme Detergent",
        image: maticBioEnzymeDetergent, // Replace with actual image reference
        category: "Detergent",
        description: "Biodegradable detergent with advanced stain-fighting enzymes, designed for machine washing with faster stain removal."
    },
    {
        name: "Active Regular Wash Detergent",
        image: activeRegularWashDetergent, // Replace with actual image reference
        category: "Detergent",
        description: "Advanced cleaning detergent that removes stains while preserving fabric color and ensuring machine care."
    },
    {
        name: "Germicidal Bleach",
        image: germicidalBleach, // Replace with actual image reference
        category: "Bleach",
        description: "A strong disinfectant that cleans, whitens, and kills 99.9% of germs, including flu viruses."
    },
    {
        name: "Chlorine Bleach Fabric Whitener",
        image: chlorineBleachFabricWhitener, // Replace with actual image reference
        category: "Bleach",
        description: "A powerful chlorine bleach that enhances the whiteness of white clothes while removing tough stains and killing 99.9% of germs."
    }
];

export const DetergentBleachDetailedData = [
    // Detergent
    // 12
    {
        name: "Texcare Ultra Detergent Powder",
        img: img7,
        mainHeadings: ["TEXCARE", "ULTRA"],
        subHeadings: ["POWERFUL", "EFFICIENT", "STAIN REMOVER"],
        productTitle: "Texcare Ultra Detergent Powder",
        productDescription: "A powerful detergent powder designed to remove tough stains and ensure brilliant whites and vibrant colors.",
        healthBenefits: [
            {
                icon: Zap,
                title: "Deep Cleaning Action",
                description: "Effectively removes tough stains, leaving clothes clean and bright."
            },
            {
                icon: Heart,
                title: "Gentle on Fabrics",
                description: "Maintains fabric integrity while ensuring effective stain removal."
            },
            {
                icon: Activity,
                title: "Energy Efficient",
                description: "Works effectively even in cold water, saving energy."
            }
        ],
        versatileUsesLabel: "Versatile Uses of Texcare Ultra",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Hand Washing",
                description: "Perfect for washing clothes by hand with minimal effort."
            },
            {
                icon: Sparkles,
                title: "Machine Washing",
                description: "Ideal for both top-load and front-load washing machines."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Texcare Ultra?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "Eco-Friendly Formula",
                description: "Biodegradable and safe for the environment."
            },
            {
                icon: Check,
                title: "High Efficiency",
                description: "Delivers exceptional cleaning results with less detergent."
            },
            {
                icon: Sparkles,
                title: "Long-Lasting Freshness",
                description: "Leaves clothes smelling fresh and clean for days."
            }
        ]
    },
    // 13    
    {
        name: "L&S Smart Wash Bio Enzyme Detergent Powder",
        img: lsSmartWashBioEnzymeDetergentPowder,
        mainHeadings: ["SMART WASH", "BIO ENZYME"],
        subHeadings: ["ECO-FRIENDLY", "EFFECTIVE", "STAIN REMOVER"],
        productTitle: "L&S Smart Wash Bio Enzyme Detergent Powder",
        productDescription: "Formulated with bio-enzymes to break down stubborn stains and deliver a superior clean.",
        healthBenefits: [
            {
                icon: Shield,
                title: "Safe for Skin",
                description: "Dermatologically tested and gentle on sensitive skin."
            },
            {
                icon: Activity,
                title: "Eco-Friendly Ingredients",
                description: "Contains biodegradable bio-enzymes for a cleaner planet."
            }
        ],
        versatileUsesLabel: "Versatile Uses of Smart Wash",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Daily Laundry",
                description: "Effective for both light and heavily soiled clothes."
            },
            {
                icon: Sparkles,
                title: "Delicate Fabrics",
                description: "Suitable for washing delicate and baby clothes."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Smart Wash?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "Eco-Friendly Formula",
                description: "Safe for the environment with no harsh chemicals."
            },
            {
                icon: Sparkles,
                title: "Powerful Cleaning",
                description: "Removes dirt and stains effectively while being gentle on fabrics."
            }
        ]
    },
    // 14
    {
        name: "L&S Matic Wash Bio-Enzyme Detergent Powder",
        img: lsMaticWashBioEnzymeDetergentPowder,
        mainHeadings: ["MATIC WASH", "BIO ENZYME"],
        subHeadings: ["WASHING MACHINE", "RESIDUE-FREE", "DEEP CLEAN"],
        productTitle: "L&S Matic Wash Bio-Enzyme Detergent Powder",
        productDescription: "Specially crafted for washing machines, providing an efficient and residue-free wash.",
        healthBenefits: [
            {
                icon: Zap,
                title: "Machine Friendly",
                description: "Prevents residue buildup in washing machines."
            },
            {
                icon: Activity,
                title: "Efficient Cleaning",
                description: "Cleans deeply, even in short cycles."
            }
        ],
        versatileUsesLabel: "Versatile Uses of Matic Wash",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Front-Load Machines",
                description: "Designed specifically for front-load washing machines."
            },
            {
                icon: Sparkles,
                title: "Top-Load Machines",
                description: "Works equally well in top-load machines for hassle-free cleaning."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Matic Wash?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "Eco-Friendly Enzymes",
                description: "Contains bio-enzymes that reduce water pollution."
            },
            {
                icon: Check,
                title: "Residue-Free",
                description: "Leaves no traces on clothes or in the machine."
            }
        ]
    },
    // 15
    {
        name: "L&S Active Wash Bio-Enzyme Detergent Powder",
        img: lsActiveWashBioEnzymeDetergentPowder,
        mainHeadings: ["ACTIVE WASH", "BIO ENZYME"],
        subHeadings: ["STAIN FIGHTER", "BRIGHT WHITES", "LONG-LASTING"],
        productTitle: "L&S Active Wash Bio-Enzyme Detergent Powder",
        productDescription: "Active formula with bio-enzymes for deep cleaning and long-lasting freshness.",
        healthBenefits: [
            {
                icon: Sparkles,
                title: "Bright Whites",
                description: "Maintains whiteness and vibrancy of clothes."
            },
            {
                icon: Heart,
                title: "Gentle on Skin",
                description: "Dermatologically safe for everyday use."
            }
        ],
        versatileUsesLabel: "Versatile Uses of Active Wash",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Work Clothes",
                description: "Perfect for removing tough stains from work uniforms."
            },
            {
                icon: Sparkles,
                title: "Delicate Items",
                description: "Safe for handwashing delicate garments."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Active Wash?",
        whyChooseOurPowder: [
            {
                icon: Check,
                title: "Long-Lasting Fragrance",
                description: "Keeps clothes smelling fresh for days."
            },
            {
                icon: Shield,
                title: "Tough on Stains",
                description: "Effective against even the toughest stains."
            }
        ]
    },
    // 16
    {
        name: "L&S Smart Wash Bio-Enzyme Detergent Liquid",
        img: img7,
        mainHeadings: ["SMART WASH", "BIO-ENZYME LIQUID"],
        subHeadings: ["ECO-FRIENDLY", "LIQUID FORMULA", "STAIN REMOVER"],
        productTitle: "L&S Smart Wash Bio-Enzyme Detergent Liquid",
        productDescription: "A liquid detergent enriched with bio-enzymes for gentle yet effective cleaning. Perfect for maintaining fabric softness while removing stains.",
        healthBenefits: [
            {
                icon: Zap,
                title: "Gentle on Clothes",
                description: "Prevents fabric damage while ensuring thorough cleaning."
            },
            {
                icon: Heart,
                title: "Eco-Friendly",
                description: "Contains biodegradable ingredients safe for the environment."
            }
        ],
        versatileUsesLabel: "Versatile Uses of Smart Wash Liquid",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Everyday Laundry",
                description: "Ideal for daily washing with enhanced stain removal."
            },
            {
                icon: Sparkles,
                title: "Delicate Fabrics",
                description: "Perfect for handwashing or machine-washing delicate garments."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Smart Wash Liquid?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "Eco-Friendly",
                description: "Safe for both the environment and your clothes."
            },
            {
                icon: Check,
                title: "Residue-Free",
                description: "Leaves no residue on clothes or washing machines."
            }
        ]
    },
    // 17
    {
        name: "L&S Drum Cleaner",
        img: lsDrumCleaner,
        mainHeadings: ["DRUM", "CLEANER"],
        subHeadings: ["HYGIENIC", "EFFICIENT", "DEEP CLEAN"],
        productTitle: "L&S Drum Cleaner",
        productDescription: "Keeps your washing machine drum clean, preventing odors and ensuring optimal performance for every wash.",
        healthBenefits: [
            {
                icon: Shield,
                title: "Removes Odors",
                description: "Eliminates buildup and prevents bad smells in washing machines."
            },
            {
                icon: Activity,
                title: "Improves Efficiency",
                description: "Enhances washing machine performance and longevity."
            }
        ],
        versatileUsesLabel: "Versatile Uses of Drum Cleaner",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Monthly Maintenance",
                description: "Recommended for regular drum cleaning to avoid buildup."
            },
            {
                icon: Sparkles,
                title: "All Machine Types",
                description: "Suitable for both front-load and top-load washing machines."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Drum Cleaner?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "Safe Formula",
                description: "Non-corrosive and safe for all machine parts."
            },
            {
                icon: Check,
                title: "Powerful Cleaning",
                description: "Effectively removes limescale, detergent residue, and bacteria."
            }
        ]
    },
    // 18
    {
        name: "L&S Liquid Dish Wash",
        img: lsLiquidDishWash,
        mainHeadings: ["LIQUID DISH", "WASH"],
        subHeadings: ["EFFECTIVE", "GENTLE", "GREASE REMOVER"],
        productTitle: "L&S Liquid Dish Wash",
        productDescription: "A gentle yet effective liquid formula for sparkling clean dishes, free from grease and grime.",
        healthBenefits: [
            {
                icon: Sparkles,
                title: "Grease Removal",
                description: "Cuts through grease and tough food residues effortlessly."
            },
            {
                icon: Heart,
                title: "Gentle on Hands",
                description: "Mild on skin, suitable for frequent dishwashing."
            }
        ],
        versatileUsesLabel: "Versatile Uses of Liquid Dish Wash",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Daily Dishwashing",
                description: "Ideal for cleaning utensils, plates, and glassware."
            },
            {
                icon: Sparkles,
                title: "Grease Removal",
                description: "Perfect for pots and pans with stubborn grease."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Liquid Dish Wash?",
        whyChooseOurPowder: [
            {
                icon: Check,
                title: "Effective Cleaning",
                description: "Leaves dishes spotless with minimal effort."
            },
            {
                icon: Leaf,
                title: "Skin-Friendly",
                description: "Dermatologically tested for safety."
            }
        ]
    },
    // 19
    {
        name: "L&S Veggies & Fruit Wash",
        img: lsVeggiesAndFruitWash,
        mainHeadings: ["VEGGIES & FRUIT", "WASH"],
        subHeadings: ["SAFE", "NATURAL", "CLEAN"],
        productTitle: "L&S Veggies & Fruit Wash",
        productDescription: "Specially designed to remove dirt, pesticides, and contaminants from fresh produce.",
        healthBenefits: [
            {
                icon: Shield,
                title: "Removes Pesticides",
                description: "Effectively washes away harmful chemicals from produce."
            },
            {
                icon: Sparkles,
                title: "Retains Freshness",
                description: "Cleans without altering the natural freshness and taste."
            }
        ],
        versatileUsesLabel: "Versatile Uses of Veggies & Fruit Wash",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Daily Cleaning",
                description: "Safe for washing fruits, vegetables, and herbs."
            },
            {
                icon: Sparkles,
                title: "Bulk Cleaning",
                description: "Efficient for large quantities of produce in one wash."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Veggies & Fruit Wash?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "Natural Ingredients",
                description: "Made with plant-based and safe ingredients."
            },
            {
                icon: Check,
                title: "No Residue",
                description: "Rinses clean without leaving any aftertaste."
            }
        ]
    },
    // 20
    {
        name: "L&S Drain Cleaner",
        img: lsDrainCleaner,
        mainHeadings: ["DRAIN", "CLEANER"],
        subHeadings: ["EFFECTIVE", "UNBLOCKS", "DEODORIZES"],
        productTitle: "L&S Drain Cleaner",
        productDescription: "An effective solution for unclogging and deodorizing drains, leaving them fresh and free-flowing.",
        healthBenefits: [
            {
                icon: Activity,
                title: "Unclogs Drains",
                description: "Dissolves hair, grease, and other blockages efficiently."
            },
            {
                icon: Sparkles,
                title: "Deodorizes",
                description: "Removes unpleasant odors from sinks and drains."
            }
        ],
        versatileUsesLabel: "Versatile Uses of Drain Cleaner",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Kitchen Sinks",
                description: "Perfect for keeping kitchen drains free of clogs."
            },
            {
                icon: Sparkles,
                title: "Bathroom Drains",
                description: "Effective for unclogging bathroom sinks and showers."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Drain Cleaner?",
        whyChooseOurPowder: [
            {
                icon: Check,
                title: "Fast Action",
                description: "Works quickly to dissolve tough clogs."
            },
            {
                icon: Shield,
                title: "Safe for Pipes",
                description: "Non-corrosive and safe for most plumbing systems."
            }
        ]
    },

    // 21
    {
        name: "White Bleach Powder",
        img: whiteBleachPowder,  // Replace imgX with the actual image variable
        mainHeadings: ["WHITE", "BLEACH", "POWDER"],
        subHeadings: ["ACTIVE CHLORINE", "SANITIZES", "PERFECT HYGIENE", "DEODORIZATION"],
        productTitle: "White Bleach Powder",
        productDescription: "A powerful bleach powder with active chlorine for sanitization, perfect hygiene, and deodorization.",
        availableIn: "200gm",
        versatileUsesLabel: "Usage of White Bleach Powder",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Home & Kitchen Cleaning",
                description: "Disinfects floors, walls, drains, and cooking areas."
            },
            {
                icon: Sparkles,
                title: "Laundry & Stain Removal",
                description: "Removes stains from domestic linen and keeps clothes fresh."
            },
            {
                icon: Sparkles,
                title: "Pet Hygiene",
                description: "Eliminates bad smells from pet sitters and surroundings."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose White Bleach Powder?",
        whyChooseOurPowder: [
            {
                icon: Check,
                title: "Removes Hard Stains",
                description: "Effectively eliminates tough stains from surfaces and fabrics."
            },
            {
                icon: Shield,
                title: "Kills Germs",
                description: "Destroys bacteria, mold, and fungus for a cleaner environment."
            },
            {
                icon: Sparkles,
                title: "Deep Cleaning Action",
                description: "Removes dirt, debris, and other residues from sinks, tubs, and toilets."
            }
        ]
    },
    // 22
    {
        name: "Chlorine Bleach Fabric Whitener",
        img: chlorineBleachFabricWhitener,  // Replace imgX with the actual image variable
        mainHeadings: ["CHLORINE BLEACH", "FABRIC WHITENER"],
        subHeadings: ["WHITER SHINE", "TOUGH STAINS REMOVER", "KILLS 99.9% GERMS"],
        productTitle: "Chlorine Bleach Fabric Whitener",
        productDescription: "A powerful chlorine bleach that enhances the whiteness of white clothes while removing tough stains and killing 99.9% of germs.",
        availableIn: "950ml",
        versatileUsesLabel: "Usage of Chlorine Bleach Fabric Whitener",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Machine Washing",
                description: "Use with detergent in the washing machine for bright white clothes."
            },
            {
                icon: Sparkles,
                title: "Hand Washing",
                description: "Mix with detergent for effective stain removal while hand washing."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Chlorine Bleach Fabric Whitener?",
        whyChooseOurPowder: [
            {
                icon: Check,
                title: "Enhances Whiteness",
                description: "Restores the brightness of white clothes, keeping them fresh and clean."
            },
            {
                icon: Shield,
                title: "Removes Tough Stains",
                description: "Effectively removes stubborn stains from white fabrics."
            },
            {
                icon: Shield,
                title: "Kills 99.9% Germs",
                description: "Eliminates bacteria and viruses, ensuring hygiene and safety."
            }
        ]
    },
    // 23
    {
        name: "Smart Wash BioEnzyme Detergent",
        img: smartWashBioEnzymeDetergent,  // Replace imgX with the actual image variable
        mainHeadings: ["SMART WASH", "BIOENZYME POWER"],
        subHeadings: ["BIODEGRADABLE DETERGENT", "STAIN-FIGHTING ENZYMES"],
        productTitle: "Smart Wash BioEnzyme Detergent",
        productDescription: "A powerful biodegradable detergent with advanced stain-fighting enzymes, designed for effective and eco-friendly cleaning with minimal usage.",
        availableIn: ["1 Ltr", "500ml", "250ml"],
        usageInstructions: [
            "Shake well before use.",
            "For an 8.5 kg washing machine:",
            "Use 10 ml for front-load washing machines.",
            "Use 15 ml for top-load washing machines."
        ],
        versatileUsesLabel: "Best Use For",
        versatileUses: [
            {
                icon: Sparkles,
                title: "All-Colored Clothes",
                description: "Allows washing of white, light, and dark-colored clothes together without sorting."
            },
            {
                icon: Settings,
                title: "Efficient Machine Washing",
                description: "Works perfectly in front-load and top-load washing machines."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Smart Wash BioEnzyme Detergent?",
        whyChooseOurPowder: [
            {
                icon: Check,
                title: "Minimal Usage, Maximum Cleaning",
                description: "Uses only 10 ml per wash, making it 6 times more efficient than ordinary liquids."
            },
            {
                icon: Wallet,
                title: "Cost-Effective",
                description: "Lesser detergent usage means more savings over time."
            },
            {
                icon: Package,
                title: "Compact & Easy to Store",
                description: "Requires less storage space and is convenient to transport."
            }
        ]
    },
    // 24
    {
        name: "Matic BioEnzyme Detergent",
        img: maticBioEnzymeDetergent,  // Replace imgX with the actual image variable
        mainHeadings: ["MATIC", "BIOENZYME POWER"],
        subHeadings: ["BIODEGRADABLE DETERGENT", "STAIN-FIGHTING ENZYMES"],
        productTitle: "Matic BioEnzyme Detergent",
        productDescription: "A biodegradable detergent with powerful stain-fighting enzymes, designed for efficient machine washing and faster stain removal.",
        availableIn: ["1 Ltr", "500ml"],
        usageInstructions: [
            "For an 8.5 kg washing machine:",
            "Use 40 ml for front-load washing machines.",
            "Use 60 ml for top-load washing machines."
        ],
        versatileUsesLabel: "Best Use For",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Efficient Machine Washing",
                description: "Formulated for front-load and top-load washing machines."
            },
            {
                icon: Shield,
                title: "Powerful Stain Removal",
                description: "Removes stains up to 99% with advanced cleaning technology."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Matic BioEnzyme Detergent?",
        whyChooseOurPowder: [
            {
                icon: Check,
                title: "Faster Stain Removal",
                description: "Designed for quick and effective stain removal in machines."
            },
            {
                icon: Wallet,
                title: "Cost-Effective",
                description: "Less detergent usage results in more savings over time."
            },
            {
                icon: Package,
                title: "Easy Storage & Transport",
                description: "Compact packaging makes it convenient to store and carry."
            }
        ]
    },
    // 25
    {
        name: "Active Regular Wash Detergent",
        img: activeRegularWashDetergent,  // Replace imgX with the actual image variable
        mainHeadings: ["ACTIVE", "REGULAR WASH"],
        subHeadings: ["FAST STAIN REMOVAL", "COLOR CARE", "MACHINE CARE"],
        productTitle: "Active Regular Wash Detergent",
        productDescription: "A powerful detergent with advanced cleaning technology that removes stains effectively while protecting fabric color and ensuring machine longevity.",
        availableIn: ["1 Ltr"],
        usageInstructions: [
            "For an 8.5 kg washing machine:",
            "Use 60 ml for front-load washing machines.",
            "Use 90 ml for top-load washing machines."
        ],
        versatileUsesLabel: "Best Use For",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Fast & Efficient Stain Removal",
                description: "Removes stains up to 99% with deep-cleaning action."
            },
            {
                icon: Shirt,
                title: "Color Protection",
                description: "Retains the original color of fabrics while cleaning tough stains."
            },
            {
                icon: Settings,
                title: "Machine-Friendly Formula",
                description: "Low-foam formula prevents clogging, choking, and scaling issues in washing machines."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Active Regular Wash Detergent?",
        whyChooseOurPowder: [
            {
                icon: Check,
                title: "Deep Cleaning",
                description: "Provides an impeccable laundry experience with thorough fabric cleaning."
            },
            {
                icon: Shield,
                title: "Fabric Protection",
                description: "Maintains fabric brightness and ensures long-lasting quality."
            },
            {
                icon: Cog,
                title: "Machine Care",
                description: "Designed for both front-load and top-load machines to enhance machine performance."
            }
        ]
    },
    // 26
    {
        name: "Germicidal Bleach",
        img: germicidalBleach,  // Replace imgX with the actual image variable
        mainHeadings: ["GERMICIDAL BLEACH", "CONSORTED FORMULA"],
        subHeadings: ["FLOOR CLEANING EXPERT", "DISINFECTS & WHITENS", "KILLS 99.9% GERMS & VIRUSES"],
        productTitle: "Germicidal Bleach",
        productDescription: "A powerful disinfectant bleach that cleans, whitens, and eliminates 99.9% of germs, including common cold and flu viruses.",
        availableIn: ["950ml"],
        usageInstructions: [
            "Use for cleaning floors, kitchens, and toilets.",
            "Dilute as per requirement for effective disinfection."
        ],
        versatileUsesLabel: "Best Use For",
        versatileUses: [
            {
                icon: Sparkles,
                title: "Floor Cleaning",
                description: "Effectively removes dirt and disinfects surfaces."
            },
            {
                icon: Package,
                title: "Kitchen Cleaning",
                description: "Eliminates bacteria and grease for a hygienic kitchen."
            },
            {
                icon: Sparkles,
                title: "Toilet Cleaning",
                description: "Ensures a fresh and germ-free toilet environment."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Germicidal Bleach?",
        whyChooseOurPowder: [
            {
                icon: Shield,
                title: "Kills 99.9% Germs & Viruses",
                description: "Protects against common cold and flu viruses."
            },
            {
                icon: Sparkles,
                title: "Odor Removal",
                description: "Eliminates bad smells, leaving surfaces fresh."
            },
            {
                icon: Sparkles,
                title: "Perfect Cleaning",
                description: "Whitens and deep cleans surfaces effectively."
            }
        ]
    },

];

export const DetergentColorData = [
    // product 12
    {
        "name": "Texcare Ultra Detergent Powder",
        "background": {
            "main": "#E3F2FD",  // Light Blue
            "element1": "rgba(30, 144, 255, 0.2)",  // Dodger Blue with 20% opacity
            "element2": "rgba(70, 130, 180, 0.2)"  // Steel Blue with 20% opacity
        },
        "navbar": "#1565C0",  // Dark Blue
        "text": {
            "mainHeadings": {
                "primary": "#1565C0",  // Dark Blue
                "secondary": "#0D47A1" // Deeper Blue
            },
            "subHeadings": "#1E88E5",  // Bright Blue
            "productTitle": "#1565C0", // Dark Blue
            "productDescription": "#0D47A1", // Deep Blue
            "labels": {
                "primary": "#1E88E5",   // Bright Blue
                "secondary": "#1565C0"  // Dark Blue
            },
            "floatingSpecs": {
                "primary": "#0D47A1",   // Deep Blue
                "secondary": "#1565C0"  // Dark Blue
            }
        },
        "buttons": {
            "orderNow": {
                "background": "#1565C0",   // Dark Blue
                "hover": "#0D47A1"         // Deep Blue
            },
            "learnMore": {
                "border": "#1565C0",       // Dark Blue
                "text": "#0D47A1",         // Deep Blue
                "hover": "rgba(21, 101, 192, 0.1)" // Dark Blue with 10% opacity
            }
        },
        "border": "rgba(21, 101, 192, 0.2)", // Dark Blue with 20% opacity
        "icon": "#1E88E5"  // Bright Blue
    },

    // product 13
    {
        name: "L&S Smart Wash Bio Enzyme Detergent Powder",
        background: {
            main: '#add8e6', // Light Blue (dominant background tone)
            element1: 'rgba(173, 216, 230, 0.3)', // Light Blue with 30% opacity
            element2: '#1e90ff' // Dodger Blue for highlights
        },
        navbar: '#00509e', // Deep Blue for strong contrast
        text: {
            mainHeadings: {
                primary: '#003366', // Dark Navy Blue
                secondary: '#1e90ff' // Dodger Blue
            },
            subHeadings: '#4682b4', // Steel Blue for subtitles
            productTitle: '#003366', // Dark Navy Blue for key titles
            productDescription: '#00008b', // Dark Blue for descriptions
            labels: {
                primary: '#1e90ff', // Dodger Blue for label emphasis
                secondary: '#003366' // Dark Navy Blue
            },
            floatingSpecs: {
                primary: '#1e90ff', // Dodger Blue
                secondary: '#00509e' // Deep Blue
            }
        },
        buttons: {
            orderNow: {
                background: '#1e90ff', // Dodger Blue
                hover: '#00509e' // Deep Blue on hover
            },
            learnMore: {
                border: '#003366', // Dark Navy Blue border
                text: '#1e90ff', // Dodger Blue text
                hover: 'rgba(0, 80, 158, 0.1)' // Deep Blue with 10% opacity on hover
            }
        },
        border: 'rgba(30, 144, 255, 0.2)', // Dodger Blue with 20% opacity
        icon: '#1e90ff' // Dodger Blue for icons
    },
    // product 14
    {
        name: "L&S Matic Wash Bio-Enzyme Detergent Powder",
        background: {
            main: '#add8e6', // Light Blue (dominant background tone)
            element1: 'rgba(173, 216, 230, 0.3)', // Light Blue with 30% opacity
            element2: '#1e90ff' // Dodger Blue for highlights
        },
        navbar: '#00509e', // Deep Blue for strong contrast
        text: {
            mainHeadings: {
                primary: '#003366', // Dark Navy Blue
                secondary: '#1e90ff' // Dodger Blue
            },
            subHeadings: '#4682b4', // Steel Blue for subtitles
            productTitle: '#003366', // Dark Navy Blue for key titles
            productDescription: '#00008b', // Dark Blue for descriptions
            labels: {
                primary: '#1e90ff', // Dodger Blue for label emphasis
                secondary: '#003366' // Dark Navy Blue
            },
            floatingSpecs: {
                primary: '#1e90ff', // Dodger Blue
                secondary: '#00509e' // Deep Blue
            }
        },
        buttons: {
            orderNow: {
                background: '#1e90ff', // Dodger Blue
                hover: '#00509e' // Deep Blue on hover
            },
            learnMore: {
                border: '#003366', // Dark Navy Blue border
                text: '#1e90ff', // Dodger Blue text
                hover: 'rgba(0, 80, 158, 0.1)' // Deep Blue with 10% opacity on hover
            }
        },
        border: 'rgba(30, 144, 255, 0.2)', // Dodger Blue with 20% opacity
        icon: '#1e90ff' // Dodger Blue for icons
    },
    // product 15
    {
        name: "L&S Active Wash Bio-Enzyme Detergent Powder",
        background: {
            main: '#add8e6', // Light Blue (dominant background tone)
            element1: 'rgba(173, 216, 230, 0.3)', // Light Blue with 30% opacity
            element2: '#1e90ff' // Dodger Blue for highlights
        },
        navbar: '#00509e', // Deep Blue for strong contrast
        text: {
            mainHeadings: {
                primary: '#003366', // Dark Navy Blue
                secondary: '#1e90ff' // Dodger Blue
            },
            subHeadings: '#4682b4', // Steel Blue for subtitles
            productTitle: '#003366', // Dark Navy Blue for key titles
            productDescription: '#00008b', // Dark Blue for descriptions
            labels: {
                primary: '#1e90ff', // Dodger Blue for label emphasis
                secondary: '#003366' // Dark Navy Blue
            },
            floatingSpecs: {
                primary: '#1e90ff', // Dodger Blue
                secondary: '#00509e' // Deep Blue
            }
        },
        buttons: {
            orderNow: {
                background: '#1e90ff', // Dodger Blue
                hover: '#00509e' // Deep Blue on hover
            },
            learnMore: {
                border: '#003366', // Dark Navy Blue border
                text: '#1e90ff', // Dodger Blue text
                hover: 'rgba(0, 80, 158, 0.1)' // Deep Blue with 10% opacity on hover
            }
        },
        border: 'rgba(30, 144, 255, 0.2)', // Dodger Blue with 20% opacity
        icon: '#1e90ff' // Dodger Blue for icons
    },
    // product 16
    {
        name: "L&S Smart Wash Bio-Enzyme Detergent Liquid",
        background: {
            main: '#add8e6', // Light Blue (dominant background tone)
            element1: 'rgba(173, 216, 230, 0.3)', // Light Blue with 30% opacity
            element2: '#1e90ff' // Dodger Blue for highlights
        },
        navbar: '#00509e', // Deep Blue for strong contrast
        text: {
            mainHeadings: {
                primary: '#003366', // Dark Navy Blue
                secondary: '#1e90ff' // Dodger Blue
            },
            subHeadings: '#4682b4', // Steel Blue for subtitles
            productTitle: '#003366', // Dark Navy Blue for key titles
            productDescription: '#00008b', // Dark Blue for descriptions
            labels: {
                primary: '#1e90ff', // Dodger Blue for label emphasis
                secondary: '#003366' // Dark Navy Blue
            },
            floatingSpecs: {
                primary: '#1e90ff', // Dodger Blue
                secondary: '#00509e' // Deep Blue
            }
        },
        buttons: {
            orderNow: {
                background: '#1e90ff', // Dodger Blue
                hover: '#00509e' // Deep Blue on hover
            },
            learnMore: {
                border: '#003366', // Dark Navy Blue border
                text: '#1e90ff', // Dodger Blue text
                hover: 'rgba(0, 80, 158, 0.1)' // Deep Blue with 10% opacity on hover
            }
        },
        border: 'rgba(30, 144, 255, 0.2)', // Dodger Blue with 20% opacity
        icon: '#1e90ff' // Dodger Blue for icons
    },
    // product 17
    {
        name: "L&S Drum Cleaner",
        background: {
            main: '#add8e6', // Light Blue (dominant background tone)
            element1: 'rgba(173, 216, 230, 0.3)', // Light Blue with 30% opacity
            element2: '#1e90ff' // Dodger Blue for highlights
        },
        navbar: '#00509e', // Deep Blue for strong contrast
        text: {
            mainHeadings: {
                primary: '#003366', // Dark Navy Blue
                secondary: '#1e90ff' // Dodger Blue
            },
            subHeadings: '#4682b4', // Steel Blue for subtitles
            productTitle: '#003366', // Dark Navy Blue for key titles
            productDescription: '#00008b', // Dark Blue for descriptions
            labels: {
                primary: '#1e90ff', // Dodger Blue for label emphasis
                secondary: '#003366' // Dark Navy Blue
            },
            floatingSpecs: {
                primary: '#1e90ff', // Dodger Blue
                secondary: '#00509e' // Deep Blue
            }
        },
        buttons: {
            orderNow: {
                background: '#1e90ff', // Dodger Blue
                hover: '#00509e' // Deep Blue on hover
            },
            learnMore: {
                border: '#003366', // Dark Navy Blue border
                text: '#1e90ff', // Dodger Blue text
                hover: 'rgba(0, 80, 158, 0.1)' // Deep Blue with 10% opacity on hover
            }
        },
        border: 'rgba(30, 144, 255, 0.2)', // Dodger Blue with 20% opacity
        icon: '#1e90ff' // Dodger Blue for icons
    },
    // product 18
    {
        name: "L&S Liquid Dish Wash",
        background: {
            main: '#add8e6', // Light Blue (dominant background tone)
            element1: 'rgba(173, 216, 230, 0.3)', // Light Blue with 30% opacity
            element2: '#1e90ff' // Dodger Blue for highlights
        },
        navbar: '#00509e', // Deep Blue for strong contrast
        text: {
            mainHeadings: {
                primary: '#003366', // Dark Navy Blue
                secondary: '#1e90ff' // Dodger Blue
            },
            subHeadings: '#4682b4', // Steel Blue for subtitles
            productTitle: '#003366', // Dark Navy Blue for key titles
            productDescription: '#00008b', // Dark Blue for descriptions
            labels: {
                primary: '#1e90ff', // Dodger Blue for label emphasis
                secondary: '#003366' // Dark Navy Blue
            },
            floatingSpecs: {
                primary: '#1e90ff', // Dodger Blue
                secondary: '#00509e' // Deep Blue
            }
        },
        buttons: {
            orderNow: {
                background: '#1e90ff', // Dodger Blue
                hover: '#00509e' // Deep Blue on hover
            },
            learnMore: {
                border: '#003366', // Dark Navy Blue border
                text: '#1e90ff', // Dodger Blue text
                hover: 'rgba(0, 80, 158, 0.1)' // Deep Blue with 10% opacity on hover
            }
        },
        border: 'rgba(30, 144, 255, 0.2)', // Dodger Blue with 20% opacity
        icon: '#1e90ff' // Dodger Blue for icons
    },
    // product 19
    {
        name: "L&S Veggies & Fruit Wash",
        background: {
            main: '#add8e6', // Light Blue (dominant background tone)
            element1: 'rgba(173, 216, 230, 0.3)', // Light Blue with 30% opacity
            element2: '#1e90ff' // Dodger Blue for highlights
        },
        navbar: '#00509e', // Deep Blue for strong contrast
        text: {
            mainHeadings: {
                primary: '#003366', // Dark Navy Blue
                secondary: '#1e90ff' // Dodger Blue
            },
            subHeadings: '#4682b4', // Steel Blue for subtitles
            productTitle: '#003366', // Dark Navy Blue for key titles
            productDescription: '#00008b', // Dark Blue for descriptions
            labels: {
                primary: '#1e90ff', // Dodger Blue for label emphasis
                secondary: '#003366' // Dark Navy Blue
            },
            floatingSpecs: {
                primary: '#1e90ff', // Dodger Blue
                secondary: '#00509e' // Deep Blue
            }
        },
        buttons: {
            orderNow: {
                background: '#1e90ff', // Dodger Blue
                hover: '#00509e' // Deep Blue on hover
            },
            learnMore: {
                border: '#003366', // Dark Navy Blue border
                text: '#1e90ff', // Dodger Blue text
                hover: 'rgba(0, 80, 158, 0.1)' // Deep Blue with 10% opacity on hover
            }
        },
        border: 'rgba(30, 144, 255, 0.2)', // Dodger Blue with 20% opacity
        icon: '#1e90ff' // Dodger Blue for icons
    },
    // product 20
    {
        name: "L&S Drain Cleaner",
        background: {
            main: '#add8e6', // Light Blue (dominant background tone)
            element1: 'rgba(173, 216, 230, 0.3)', // Light Blue with 30% opacity
            element2: '#1e90ff' // Dodger Blue for highlights
        },
        navbar: '#00509e', // Deep Blue for strong contrast
        text: {
            mainHeadings: {
                primary: '#003366', // Dark Navy Blue
                secondary: '#1e90ff' // Dodger Blue
            },
            subHeadings: '#4682b4', // Steel Blue for subtitles
            productTitle: '#003366', // Dark Navy Blue for key titles
            productDescription: '#00008b', // Dark Blue for descriptions
            labels: {
                primary: '#1e90ff', // Dodger Blue for label emphasis
                secondary: '#003366' // Dark Navy Blue
            },
            floatingSpecs: {
                primary: '#1e90ff', // Dodger Blue
                secondary: '#00509e' // Deep Blue
            }
        },
        buttons: {
            orderNow: {
                background: '#1e90ff', // Dodger Blue
                hover: '#00509e' // Deep Blue on hover
            },
            learnMore: {
                border: '#003366', // Dark Navy Blue border
                text: '#1e90ff', // Dodger Blue text
                hover: 'rgba(0, 80, 158, 0.1)' // Deep Blue with 10% opacity on hover
            }
        },
        border: 'rgba(30, 144, 255, 0.2)', // Dodger Blue with 20% opacity
        icon: '#1e90ff' // Dodger Blue for icons
    }
]

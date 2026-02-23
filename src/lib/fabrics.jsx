import {
    Award,
    Heart,
    Leaf,
    Package,
    Shield,
    ShieldCheck,
    Star,
    Users,
    Wrench,
    Wind,
    Droplets,
    Shirt,
    Home,
    Settings,
    Sun,
    Thermometer,
    Factory,
    StretchHorizontal,
    ArrowsUpFromLine,
    Briefcase,
    Expand
} from 'lucide-react';


import cottonImg from '../assets/Fabrics/Cotton-fabric-1.jpeg';
import hempImg from '../assets/Fabrics/hemp-fabric-1.jpeg';
import coirImg from '../assets/Fabrics/coir-fabric-1.jpeg';
import ramieImg from '../assets/Fabrics/Ramie-fabric-1.jpeg';
import sisalImg from '../assets/Fabrics/Sisal-fabric-1.jpeg';
import polyesterImg from '../assets/Fabrics/Polyester-Fabric-1.jpg';
import nylonImg from '../assets/Fabrics/Nylon-Fabric-1.jpeg';
import acrylicImg from '../assets/Fabrics/Acrylic-Fabrics-1.jpeg';
import spandexImg from '../assets/Fabrics/Spandex-Fabric-1.jpg';
import pvcImg from '../assets/Fabrics/PVC-Fabrics-1.jpeg';
import polypropyleneImg from '../assets/Fabrics/Polypropylene-Fabrics-1.jpg';
import polyCottonImg from '../assets/Fabrics/Poly-Cotton-1.jpeg';
import cottonLinenImg from '../assets/Fabrics/Cotton-Linen-Fabric-1.jpeg';
import nylonSpandexImg from '../assets/Fabrics/Nylon-Spandex-Fabric-1.jpeg';
import hempCottonImg from '../assets/Fabrics/Hemp-Cotton-Fabric-1.jpeg';


export const FabricsData = [
    // fabrics
    {
        name: "Cotton Fabric",
        image: cottonImg,
        category: "Natural Fabrics",
        description: "Cotton fabric is made from the soft, fluffy fibers surrounding the seeds of the cotton plant (Gossypium). Our cotton fabric is sustainably grown and processed, ensuring minimal environmental impact while maintaining high quality standards for softness, durability, and comfort."
    },
    {
        name: "Hemp Fabric",
        image: hempImg,
        category: "Natural Fabrics",
        description: "Hemp fabric is derived from the stalks of the hemp plant (Cannabis sativa), a renewable and eco-friendly crop. Our hemp fabric offers exceptional durability, breathability, and sustainability, making it perfect for both fashion and industrial applications."
    },
    {
        name: "Coir Fabric",
        image: coirImg,
        category: "Natural Fabrics",
        description: "Coir fabric is made from the fibers extracted from the outer husk of coconuts (Cocos nucifera). Our coir fabric offers exceptional durability and sustainability, perfect for various applications from home decor to industrial use."
    },
    // {
    //     name: "Ramie Fabric",
    //     image: ramieImg,
    //     category: "Natural Fabrics",
    //     description: "Ramie fabric is derived from the stalks of the ramie plant (Boehmeria nivea), a flowering plant native to East Asia. Our ramie fabric combines natural elegance with exceptional durability and breathability."
    // },
    // {
    //     name: "Sisal Fabric",
    //     image: sisalImg,
    //     category: "Natural Fabrics",
    //     description: "Ramie fabric is derived from the stalks of the ramie plant (Boehmeria nivea), a flowering plant native to East Asia. Our ramie fabric combines natural elegance with exceptional durability and breathability."
    // },
    // {
    //     name: "Polyester (PET) Fabric",
    //     image: polyesterImg,
    //     category: "Synthetic Fabrics",
    //     description: "Polyester fabric is produced from polyethylene terephthalate (PET), offering exceptional durability, easy maintenance, and versatility across various applications."
    // },
    // {
    //     name: "Nylon Fabric",
    //     image: nylonImg,
    //     category: "Synthetic Fabrics",
    //     description: "Nylon fabric is a synthetic polymer known for its exceptional strength, flexibility, and versatility. Our nylon fabric offers superior performance across various applications, from fashion to industrial use."
    // },
    // {
    //     name: "Acrylic Fabric",
    //     image: acrylicImg,
    //     category: "Synthetic Fabrics",
    //     description: "Acrylic fabric is a synthetic fiber that mimics the warmth and softness of wool while offering superior colorfastness and easy care. Our acrylic fabric provides comfort and durability at an affordable price point."
    // },
    // {
    //     name: "Spandex (Lycra) Fabric",
    //     image: spandexImg,
    //     category: "Synthetic Fabrics",
    //     description: "Spandex, also known as Lycra, is a synthetic fiber known for its exceptional elasticity and recovery. Our spandex fabric provides superior stretch and comfort, making it perfect for form-fitting and athletic wear."
    // },
    // {
    //     name: "Polypropylene Fabric",
    //     image: polypropyleneImg,
    //     category: "Synthetic Fabrics",
    //     description: "Ramie fabric is derived from the stalks of the ramie plant (Boehmeria nivea), a flowering plant native to East Asia. Our ramie fabric combines natural elegance with exceptional durability and breathability."
    // },
    // {
    //     name: "PVC Fabric",
    //     image: pvcImg,
    //     category: "Synthetic Fabrics",
    //     description: "Ramie fabric is derived from the stalks of the ramie plant (Boehmeria nivea), a flowering plant native to East Asia. Our ramie fabric combines natural elegance with exceptional durability and breathability."
    // },
    // {
    //     name: "Poly-Cotton Blend Fabric",
    //     image: polyCottonImg,
    //     category: "Blended Fabrics",
    //     description: "Poly-cotton fabric combines the comfort of cotton with the durability of polyester. Our blend offers the perfect balance of breathability, strength, and easy maintenance."
    // },
    // {
    //     name: "Cotton-Linen Blend Fabric",
    //     image: cottonLinenImg,
    //     category: "Blended Fabrics",
    //     description: "Cotton-linen fabric combines the softness of cotton with the durability and elegance of linen. Our blend creates a luxurious, breathable fabric perfect for both fashion and home textiles."
    // },
    // {
    //     name: "Nylon-Spandex Blend Fabric",
    //     image: nylonSpandexImg,
    //     category: "Blended Fabrics",
    //     description: "Nylon-spandex fabric combines the strength of nylon with the stretch of spandex. Our blend delivers superior performance for activewear and form-fitting garments."
    // },
    // {
    //     name: "Hemp-Cotton Blend Fabric",
    //     image: hempCottonImg,
    //     category: "Blended Fabrics",
    //     description: "Hemp-cotton fabric combines the durability of hemp with the softness of cotton. Our blend creates an eco-friendly, comfortable fabric that's perfect for sustainable fashion and home textiles."
    // }
]

export const FabricsDetailedData = [
    // Natural Fabrics (Plant-Based)
    // Cotton Fabric
    {
        name: "Cotton Fabric",
        img: cottonImg,       
        mainHeadings: ["Cotton", "Fabric"],
        subHeadings: ["Natural", "Versatile", "Sustainable"],
        productTitle: "Cotton Fabric",
        productDescription: "Cotton fabric is made from the soft, fluffy fibers surrounding the seeds of the cotton plant (Gossypium). Our cotton fabric is sustainably grown and processed, ensuring minimal environmental impact while maintaining high quality standards for softness, durability, and comfort.",
        healthBenefits: [
            {
                icon: Heart,
                title: "Hypoallergenic",
                description: "Cotton's natural properties make it ideal for those with sensitive skin or allergies."
            },
            {
                icon: Wind,
                title: "Breathable",
                description: "Natural fiber structure allows air circulation, keeping you cool in summer and warm in winter."
            },
            {
                icon: Droplets,
                title: "Moisture-Wicking",
                description: "Absorbs and releases moisture effectively, keeping skin dry and comfortable."
            }
        ],
        versatileUsesLabel: "Applications of Cotton Fabric",
        versatileUses: [
            {
                icon: Shirt,
                title: "Fashion & Apparel",
                description: "Ideal for t-shirts, dresses, jeans, undergarments, and more due to its comfort and breathability."
            },
            {
                icon: Home,
                title: "Home Textiles",
                description: "Widely used in bedsheets, curtains, towels, and upholstery for its softness and durability."
            },
            {
                icon: ShieldCheck,
                title: "Medical & Hygiene",
                description: "Found in bandages, gauze, and personal care items because of its hypoallergenic nature."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Our Cotton Fabric?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "100% Natural and Eco-Friendly",
                description: "Our cotton is grown sustainably, ensuring minimal impact on the environment."
            },
            {
                icon: Award,
                title: "High-Quality Standards",
                description: "We adhere to International quality standards, offering fabrics that are soft, durable, and long-lasting."
            },
            {
                icon: Settings,
                title: "Customizable Solutions",
                description: "Available in a wide range of weaves, colors, and finishes to suit your needs."
            },
            {
                icon: Users,
                title: "Ethical Sourcing",
                description: "We prioritize fair trade and support farmers by sourcing cotton responsibly."
            }
        ]
    },
    // Hemp Fabric
    {
        name: "Hemp Fabric",
        img: hempImg,       
        mainHeadings: ["Hemp", "Fabric"],
        subHeadings: ["Sustainable", "Durable", "Eco-Friendly"],
        productTitle: "Hemp Fabric",
        productDescription: "Hemp fabric is derived from the stalks of the hemp plant (Cannabis sativa), a renewable and eco-friendly crop. Our hemp fabric offers exceptional durability, breathability, and sustainability, making it perfect for both fashion and industrial applications.",
        healthBenefits: [
            {
                icon: Shield,
                title: "Antibacterial Properties",
                description: "Natural antibacterial qualities help prevent odor and maintain freshness."
            },
            {
                icon: Sun,
                title: "UV Resistant",
                description: "Provides natural protection against harmful UV rays."
            },
            {
                icon: Thermometer,
                title: "Temperature Regulating",
                description: "Keeps you cool in summer and warm in winter through natural insulation."
            }
        ],
        versatileUsesLabel: "Applications of Hemp Fabric",
        versatileUses: [
            {
                icon: Shirt,
                title: "Fashion & Apparel",
                description: "Used for shirts, trousers, dresses, and outerwear due to its durability and comfort."
            },
            {
                icon: Home,
                title: "Home Textiles",
                description: "Popular for curtains, tablecloths, upholstery, and bedding because of its natural aesthetic and longevity."
            },
            {
                icon: Package,
                title: "Industrial Use",
                description: "Used in ropes, canvas, and sails due to its exceptional tensile strength."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Our Hemp Fabric?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "Eco-Friendly Excellence",
                description: "Hemp requires minimal water, no pesticides, and grows rapidly, making it one of the most sustainable fabrics."
            },
            {
                icon: Shield,
                title: "Durable and Long-Lasting",
                description: "Hemp fibers are among the strongest natural fibers, ensuring products that withstand wear and tear."
            },
            {
                icon: Wind,
                title: "Breathable and Antibacterial",
                description: "Hemp naturally resists odors and bacteria, making it ideal for clothing and home textiles."
            }
        ]
    },
    // Coir Fabric
    {
        name: "Coir Fabric",
        img: coirImg,
        mainHeadings: ["Coir", "Fabric"],
        subHeadings: ["Natural", "Durable", "Eco-Friendly"],
        productTitle: "Coir Fabric",
        productDescription: "Coir fabric is made from the fibers extracted from the outer husk of coconuts (Cocos nucifera). Our coir fabric offers exceptional durability and sustainability, perfect for various applications from home decor to industrial use.",
        healthBenefits: [
            {
                icon: Shield,
                title: "Natural Durability",
                description: "Coir fibers are naturally strong and resistant to wear, making them ideal for heavy-duty applications."
            },
            {
                icon: Droplets,
                title: "Moisture Resistant",
                description: "Natural resistance to moisture and mildew makes it perfect for outdoor and humid environments."
            },
            {
                icon: Leaf,
                title: "Eco-Friendly",
                description: "Made from coconut husks, a renewable resource that would otherwise go to waste."
            }
        ],
        versatileUsesLabel: "Applications of Coir Fabric",
        versatileUses: [
            {
                icon: Home,
                title: "Home & Decor",
                description: "Perfect for mats, rugs, carpets, and wall hangings due to its rustic charm and resilience."
            },
            {
                icon: Leaf,
                title: "Horticulture",
                description: "Used in coir mats, liners, and grow bags for eco-friendly gardening solutions."
            },
            {
                icon: Settings,
                title: "Industrial Use",
                description: "Utilized in erosion control mats, ropes, and brushes due to its toughness and biodegradability."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Our Coir Fabric?",
        whyChooseOurPowder: [
            {
                icon: Leaf,
                title: "100% Natural & Sustainable",
                description: "Made from coconut husks, a renewable resource, reducing environmental impact."
            },
            {
                icon: Shield,
                title: "Durable & Resilient",
                description: "Resistant to wear, moisture, and pests, making it ideal for long-term use."
            },
            {
                icon: Settings,
                title: "Customizable Products",
                description: "Available in various weaves, textures, and designs tailored to your needs."
            }
        ]
    },
    // // Ramie Fabric
    // {
    //     name: "Ramie Fabric",
    //     img: ramieImg,        
    //     mainHeadings: ["Ramie", "Fabric"],
    //     subHeadings: ["Elegant", "Durable", "Natural"],
    //     productTitle: "Ramie Fabric",
    //     productDescription: "Ramie fabric is derived from the stalks of the ramie plant (Boehmeria nivea), a flowering plant native to East Asia. Our ramie fabric combines natural elegance with exceptional durability and breathability.",
    //     healthBenefits: [
    //         {
    //             icon: Wind,
    //             title: "Highly Breathable",
    //             description: "Natural fiber structure allows excellent air circulation, perfect for warm climates."
    //         },
    //         {
    //             icon: Shield,
    //             title: "Bacteria Resistant",
    //             description: "Natural resistance to bacteria and mildew makes it hygienic and long-lasting."
    //         },
    //         {
    //             icon: Sun,
    //             title: "UV Protection",
    //             description: "Offers natural protection against harmful UV rays while maintaining comfort."
    //         }
    //     ],
    //     versatileUsesLabel: "Applications of Ramie Fabric",
    //     versatileUses: [
    //         {
    //             icon: Shirt,
    //             title: "Fashion & Apparel",
    //             description: "Used for blouses, skirts, summer dresses, and suits due to its silky sheen and breathability."
    //         },
    //         {
    //             icon: Home,
    //             title: "Home Textiles",
    //             description: "Perfect for curtains, tablecloths, and upholstery, offering a sophisticated, natural aesthetic."
    //         },
    //         {
    //             icon: Wrench,
    //             title: "Industrial Use",
    //             description: "Utilized in canvas, sailcloth, and ropes for its exceptional tensile strength."
    //         }
    //     ],
    //     whyChooseOurPowderLabel: "Why Choose Our Ramie Fabric?",
    //     whyChooseOurPowder: [
    //         {
    //             icon: Star,
    //             title: "Silky and Lustrous",
    //             description: "Offers a luxurious texture similar to linen with a subtle sheen, perfect for high-end applications."
    //         },
    //         {
    //             icon: Shield,
    //             title: "Durable and Strong",
    //             description: "One of the strongest natural fibers, it resists wear and tear and holds its shape well."
    //         },
    //         {
    //             icon: Wind,
    //             title: "Breathable & Lightweight",
    //             description: "Ideal for warm climates due to its moisture-wicking and breathable properties."
    //         }
    //     ]
    // },
    // // Sisal Fabric
    // {
    //     name: "Sisal Fabric",
    //     img: sisalImg,        
    //     mainHeadings: ["Sisal", "Fabric"],
    //     subHeadings: ["Strong", "Sustainable", "Versatile"],
    //     productTitle: "Sisal Fabric",
    //     productDescription: "Sisal fabric is derived from the leaves of the sisal plant (Agave sisalana), offering exceptional strength, durability and eco-friendly properties for various applications.",
    //     healthBenefits: [
    //         {
    //             icon: Leaf,
    //             title: "Eco-Friendly",
    //             description: "Naturally sustainable and biodegradable, requiring minimal water and no pesticides to grow."
    //         },
    //         {
    //             icon: Shield,
    //             title: "Durable & Strong",
    //             description: "Exceptionally strong natural fibers that resist wear and tear, perfect for heavy-duty use."
    //         },
    //         {
    //             icon: Sun,
    //             title: "UV Resistant",
    //             description: "Highly resistant to UV rays, making it ideal for outdoor applications and furniture."
    //         }
    //     ],
    //     versatileUsesLabel: "Applications of Sisal Fabric",
    //     versatileUses: [
    //         {
    //             icon: Home,
    //             title: "Home Textiles",
    //             description: "Perfect for rugs, carpets, mats, and wall coverings due to its natural texture and durability."
    //         },
    //         {
    //             icon: Factory,
    //             title: "Industrial Use",
    //             description: "Utilized in ropes, sacks, twines, and nets because of its high tensile strength."
    //         },
    //         {
    //             icon: Wrench,
    //             title: "Construction",
    //             description: "Used in erosion control mats and landscaping applications for soil stabilization."
    //         }
    //     ],
    //     whyChooseOurPowderLabel: "Why Choose Our Sisal Fabric?",
    //     whyChooseOurPowder: [
    //         {
    //             icon: Star,
    //             title: "Sustainable Choice",
    //             description: "Environmentally friendly material that supports eco-conscious manufacturing practices."
    //         },
    //         {
    //             icon: Shield,
    //             title: "Long-Lasting",
    //             description: "Resistant to stains, static, and wear, making it practical and durable for various uses."
    //         },
    //         {
    //             icon: Droplets,
    //             title: "Low Maintenance",
    //             description: "Easy to clean and maintain, perfect for high-traffic areas and heavy-duty applications."
    //         }
    //     ]
    // },

    // // Synthetic Fabrics (Man-Made Fibers)
    // // Polyester Fabric
    // {
    //     name: "Polyester (PET) Fabric",
    //     img: polyesterImg,       
    //     mainHeadings: ["Polyester", "Fabric"],
    //     subHeadings: ["Durable", "Versatile", "Affordable"],
    //     productTitle: "Polyester (PET) Fabric",
    //     productDescription: "Polyester fabric is produced from polyethylene terephthalate (PET), offering exceptional durability, easy maintenance, and versatility across various applications.",
    //     healthBenefits: [
    //         {
    //             icon: Droplets,
    //             title: "Moisture-Wicking",
    //             description: "Excellent moisture management keeps you dry and comfortable during activities."
    //         },
    //         {
    //             icon: Shield,
    //             title: "Durable Protection",
    //             description: "Resistant to wrinkles, shrinking, and stretching, maintaining shape over time."
    //         },
    //         {
    //             icon: Sun,
    //             title: "UV Resistant",
    //             description: "Provides protection against harmful UV rays, ideal for outdoor use."
    //         }
    //     ],
    //     versatileUsesLabel: "Applications of Polyester Fabric",
    //     versatileUses: [
    //         {
    //             icon: Shirt,
    //             title: "Fashion & Apparel",
    //             description: "Used in clothing such as shirts, jackets, and activewear for its durability and easy care."
    //         },
    //         {
    //             icon: Home,
    //             title: "Home Textiles",
    //             description: "Ideal for bedding, curtains, and upholstery due to its strength and stain resistance."
    //         },
    //         {
    //             icon: Factory,
    //             title: "Industrial Use",
    //             description: "Perfect for ropes, safety gear, and insulation materials due to its strength and resilience."
    //         }
    //     ],
    //     whyChooseOurPowderLabel: "Why Choose Our Polyester Fabric?",
    //     whyChooseOurPowder: [
    //         {
    //             icon: Shield,
    //             title: "Durable & Long-Lasting",
    //             description: "Highly resistant to wear, shrinking, and stretching, making it ideal for long-term use."
    //         },
    //         {
    //             icon: Settings,
    //             title: "Easy Maintenance",
    //             description: "Machine washable, fast-drying, and retains shape and color after multiple washes."
    //         },
    //         {
    //             icon: Leaf,
    //             title: "Eco-Friendly Options",
    //             description: "Available in recycled PET (rPET) fabric, made from repurposed plastic bottles."
    //         }
    //     ]
    // },
    // // Nylon Fabric
    // {
    //     name: "Nylon Fabric",
    //     img: nylonImg,       
    //     mainHeadings: ["Nylon", "Fabric"],
    //     subHeadings: ["Strong", "Flexible", "Durable"],
    //     productTitle: "Nylon Fabric",
    //     productDescription: "Nylon fabric is a synthetic polymer known for its exceptional strength, flexibility, and versatility. Our nylon fabric offers superior performance across various applications, from fashion to industrial use.",
    //     healthBenefits: [
    //         {
    //             icon: Shield,
    //             title: "Strong & Resilient",
    //             description: "Superior strength and durability make it resistant to wear and tear."
    //         },
    //         {
    //             icon: Droplets,
    //             title: "Water Resistant",
    //             description: "Natural water resistance makes it ideal for outdoor and athletic wear."
    //         },
    //         {
    //             icon: Wind,
    //             title: "Quick Drying",
    //             description: "Fast-drying properties keep you comfortable during activities."
    //         }
    //     ],
    //     versatileUsesLabel: "Applications of Nylon Fabric",
    //     versatileUses: [
    //         {
    //             icon: Shirt,
    //             title: "Fashion & Sportswear",
    //             description: "Perfect for activewear, swimwear, and outdoor clothing due to its durability and flexibility."
    //         },
    //         {
    //             icon: Package,
    //             title: "Bags & Accessories",
    //             description: "Ideal for backpacks, luggage, and sports bags due to its strength and water resistance."
    //         },
    //         {
    //             icon: Factory,
    //             title: "Industrial Applications",
    //             description: "Used in ropes, parachutes, and protective gear for its high tensile strength."
    //         }
    //     ],
    //     whyChooseOurPowderLabel: "Why Choose Our Nylon Fabric?",
    //     whyChooseOurPowder: [
    //         {
    //             icon: Shield,
    //             title: "Superior Strength",
    //             description: "One of the strongest synthetic fibers, offering excellent durability and longevity."
    //         },
    //         {
    //             icon: Wind,
    //             title: "Lightweight & Flexible",
    //             description: "Perfect balance of strength and flexibility for various applications."
    //         },
    //         {
    //             icon: Settings,
    //             title: "Versatile Applications",
    //             description: "Suitable for everything from fashion to industrial use with various finishes available."
    //         }
    //     ]
    // },
    // // Acrylic Fabric
    // {
    //     name: "Acrylic Fabric",
    //     img: acrylicImg,        
    //     mainHeadings: ["Acrylic", "Fabric"],
    //     subHeadings: ["Soft", "Warm", "Colorful"],
    //     productTitle: "Acrylic Fabric",
    //     productDescription: "Acrylic fabric is a synthetic fiber that mimics the warmth and softness of wool while offering superior colorfastness and easy care. Our acrylic fabric provides comfort and durability at an affordable price point.",
    //     healthBenefits: [
    //         {
    //             icon: Heart,
    //             title: "Hypoallergenic",
    //             description: "Perfect alternative for those allergic to wool, offering similar warmth and comfort."
    //         },
    //         {
    //             icon: Sun,
    //             title: "Color Retention",
    //             description: "Excellent colorfastness ensures vibrant colors stay bright even after multiple washes."
    //         },
    //         {
    //             icon: Shield,
    //             title: "Easy Care",
    //             description: "Resistant to moths, oils, and chemicals, making it durable and long-lasting."
    //         }
    //     ],
    //     versatileUsesLabel: "Applications of Acrylic Fabric",
    //     versatileUses: [
    //         {
    //             icon: Shirt,
    //             title: "Knitwear & Apparel",
    //             description: "Perfect for sweaters, scarves, and winter wear due to its warmth and softness."
    //         },
    //         {
    //             icon: Home,
    //             title: "Home Textiles",
    //             description: "Used in blankets, throws, and upholstery for its durability and easy maintenance."
    //         },
    //         {
    //             icon: Sun,
    //             title: "Outdoor Fabrics",
    //             description: "Ideal for awnings and outdoor furniture due to its resistance to sunlight and weather."
    //         }
    //     ],
    //     whyChooseOurPowderLabel: "Why Choose Our Acrylic Fabric?",
    //     whyChooseOurPowder: [
    //         {
    //             icon: Star,
    //             title: "Wool-Like Comfort",
    //             description: "Provides the warmth and softness of wool at a more affordable price point."
    //         },
    //         {
    //             icon: Sun,
    //             title: "Superior Color Retention",
    //             description: "Holds bright colors and patterns even after repeated washing and sun exposure."
    //         },
    //         {
    //             icon: Settings,
    //             title: "Easy Maintenance",
    //             description: "Machine washable and quick-drying, perfect for busy lifestyles."
    //         }
    //     ]
    // },
    // // Spandex Fabric
    // {
    //     name: "Spandex (Lycra) Fabric",
    //     img: spandexImg,        
    //     mainHeadings: ["Spandex", "Fabric"],
    //     subHeadings: ["Stretchy", "Flexible", "Comfortable"],
    //     productTitle: "Spandex (Lycra) Fabric",
    //     productDescription: "Spandex, also known as Lycra, is a synthetic fiber known for its exceptional elasticity and recovery. Our spandex fabric provides superior stretch and comfort, making it perfect for form-fitting and athletic wear.",
    //     healthBenefits: [
    //         {
    //             icon: StretchHorizontal,
    //             title: "Superior Stretch",
    //             description: "Can stretch up to 5-8 times its original length while maintaining shape."
    //         },
    //         {
    //             icon: Wind,
    //             title: "Breathable Comfort",
    //             description: "Allows air circulation while providing snug fit and support."
    //         },
    //         {
    //             icon: Shield,
    //             title: "Shape Retention",
    //             description: "Excellent recovery ensures garments maintain their shape over time."
    //         }
    //     ],
    //     versatileUsesLabel: "Applications of Spandex Fabric",
    //     versatileUses: [
    //         {
    //             icon: Shirt,
    //             title: "Athletic Wear",
    //             description: "Perfect for leggings, sports bras, and performance wear due to its stretch and recovery."
    //         },
    //         {
    //             icon: Shirt,
    //             title: "Swimwear",
    //             description: "Ideal for swimsuits and athletic wear due to its stretch and chlorine resistance."
    //         },
    //         {
    //             icon: ShieldCheck,
    //             title: "Compression Wear",
    //             description: "Used in compression garments and shapewear for its superior elasticity."
    //         }
    //     ],
    //     whyChooseOurPowderLabel: "Why Choose Our Spandex Fabric?",
    //     whyChooseOurPowder: [
    //         {
    //             icon: ArrowsUpFromLine,
    //             title: "Exceptional Elasticity",
    //             description: "Superior stretch and recovery for perfect fit and comfort."
    //         },
    //         {
    //             icon: Shield,
    //             title: "Durable Performance",
    //             description: "Maintains shape and elasticity even after repeated use and washing."
    //         },
    //         {
    //             icon: Settings,
    //             title: "Versatile Applications",
    //             description: "Perfect for various uses from activewear to fashion garments."
    //         }
    //     ]
    // },
    // // Polypropylene Fabric
    // {
    //     name: "Polypropylene Fabric",
    //     img: polypropyleneImg,        
    //     mainHeadings: ["Polypropylene", "Fabric"],
    //     subHeadings: ["Durable", "Lightweight", "Versatile"],
    //     productTitle: "Polypropylene Fabric",
    //     productDescription: "Polypropylene fabric is a synthetic material known for its lightweight durability, moisture resistance, and versatility across various applications from packaging to outdoor textiles.",
    //     healthBenefits: [
    //         {
    //             icon: Droplets,
    //             title: "Moisture Resistant",
    //             description: "Naturally hydrophobic material that repels water and dries quickly, ideal for outdoor use."
    //         },
    //         {
    //             icon: Shield,
    //             title: "Chemical Resistant",
    //             description: "Highly resistant to acids, bases, and chemicals, making it suitable for industrial applications."
    //         },
    //         {
    //             icon: Sun,
    //             title: "UV Protection",
    //             description: "Offers protection against harmful UV rays, perfect for outdoor products and furniture."
    //         }
    //     ],
    //     versatileUsesLabel: "Applications of Polypropylene Fabric",
    //     versatileUses: [
    //         {
    //             icon: Package,
    //             title: "Packaging",
    //             description: "Used in bags, sacks, and protective packaging due to its strength and moisture resistance."
    //         },
    //         {
    //             icon: Home,
    //             title: "Home Textiles",
    //             description: "Ideal for carpets, rugs, and outdoor furniture due to its durability and stain resistance."
    //         },
    //         {
    //             icon: Factory,
    //             title: "Industrial Use",
    //             description: "Perfect for filtration, geotextiles, and industrial applications due to its chemical resistance."
    //         }
    //     ],
    //     whyChooseOurPowderLabel: "Why Choose Our Polypropylene Fabric?",
    //     whyChooseOurPowder: [
    //         {
    //             icon: Star,
    //             title: "Superior Quality",
    //             description: "High-performance fabric that maintains its properties even in harsh conditions."
    //         },
    //         {
    //             icon: Shield,
    //             title: "Durable Performance",
    //             description: "Exceptional strength and resistance to wear, tear, and environmental factors."
    //         },
    //         {
    //             icon: Leaf,
    //             title: "Eco-Friendly",
    //             description: "Recyclable material that contributes to sustainable manufacturing practices."
    //         }
    //     ]
    // },
    // // 31
    // {
    //     name: "PVC Fabric",
    //     img: pvcImg,        
    //     mainHeadings: ["PVC", "Fabric"],
    //     subHeadings: ["Waterproof", "Durable", "Versatile"],
    //     productTitle: "PVC (Vinyl) Fabric",
    //     productDescription: "PVC fabric is a synthetic material known for its exceptional water resistance, durability, and versatility. Perfect for outdoor applications and protective coverings.",
    //     healthBenefits: [
    //         {
    //             icon: Droplets,
    //             title: "Waterproof",
    //             description: "Completely waterproof material, ideal for outdoor and marine applications."
    //         },
    //         {
    //             icon: Shield,
    //             title: "Weather Resistant",
    //             description: "Excellent resistance to weather conditions, UV rays, and environmental factors."
    //         },
    //         {
    //             icon: Wind,
    //             title: "Flexible & Strong",
    //             description: "Maintains flexibility while providing superior strength and durability."
    //         }
    //     ],
    //     versatileUsesLabel: "Applications of PVC Fabric",
    //     versatileUses: [
    //         {
    //             icon: Home,
    //             title: "Outdoor Furniture",
    //             description: "Perfect for outdoor furniture, cushions, and marine upholstery due to its water resistance."
    //         },
    //         {
    //             icon: Package,
    //             title: "Protective Covers",
    //             description: "Used for tarps, covers, and protective sheets due to its waterproof properties."
    //         },
    //         {
    //             icon: Factory,
    //             title: "Industrial Use",
    //             description: "Ideal for industrial applications requiring chemical and weather resistance."
    //         }
    //     ],
    //     whyChooseOurPowderLabel: "Why Choose Our PVC Fabric?",
    //     whyChooseOurPowder: [
    //         {
    //             icon: Shield,
    //             title: "Superior Protection",
    //             description: "Provides excellent protection against water, weather, and wear."
    //         },
    //         {
    //             icon: Settings,
    //             title: "Easy Maintenance",
    //             description: "Simple to clean and maintain, perfect for long-term use in various conditions."
    //         },
    //         {
    //             icon: Star,
    //             title: "Versatile Applications",
    //             description: "Suitable for numerous uses from outdoor furniture to industrial applications."
    //         }
    //     ]
    // },

    // // Blended Fabrics
    // // 32
    // {
    //     name: "Poly-Cotton Blend Fabric",
    //     img: polyCottonImg,       
    //     mainHeadings: ["Poly-Cotton", "Blend"],
    //     subHeadings: ["Comfortable", "Durable", "Easy Care"],
    //     productTitle: "Poly-Cotton Fabric",
    //     productDescription: "Poly-cotton fabric combines the comfort of cotton with the durability of polyester. Our blend offers the perfect balance of breathability, strength, and easy maintenance.",
    //     healthBenefits: [
    //         {
    //             icon: Wind,
    //             title: "Breathable Comfort",
    //             description: "Cotton content provides natural breathability while polyester adds durability."
    //         },
    //         {
    //             icon: Droplets,
    //             title: "Moisture Management",
    //             description: "Effectively wicks moisture while maintaining comfort and shape."
    //         },
    //         {
    //             icon: Shield,
    //             title: "Wrinkle Resistant",
    //             description: "Polyester content helps resist wrinkles and maintain appearance."
    //         }
    //     ],
    //     versatileUsesLabel: "Applications of Poly-Cotton Fabric",
    //     versatileUses: [
    //         {
    //             icon: Shirt,
    //             title: "Apparel",
    //             description: "Perfect for shirts, uniforms, and everyday wear due to its comfort and durability."
    //         },
    //         {
    //             icon: Home,
    //             title: "Home Textiles",
    //             description: "Ideal for bedding, curtains, and household items requiring easy care."
    //         },
    //         {
    //             icon: Briefcase,
    //             title: "Workwear",
    //             description: "Excellent for uniforms and workwear due to its durability and comfort."
    //         }
    //     ],
    //     whyChooseOurPowderLabel: "Why Choose Our Poly-Cotton Fabric?",
    //     whyChooseOurPowder: [
    //         {
    //             icon: Star,
    //             title: "Perfect Balance",
    //             description: "Combines the best properties of both cotton and polyester."
    //         },
    //         {
    //             icon: Settings,
    //             title: "Easy Maintenance",
    //             description: "Machine washable and quick-drying with minimal ironing needed."
    //         },
    //         {
    //             icon: Shield,
    //             title: "Long-Lasting",
    //             description: "Durable blend that maintains its shape and appearance over time."
    //         }
    //     ]
    // },
    // // 33
    // {
    //     name: "Cotton-Linen Blend Fabric",
    //     img: cottonLinenImg,       
    //     mainHeadings: ["Cotton-Linen", "Blend"],
    //     subHeadings: ["Natural", "Elegant", "Breathable"],
    //     productTitle: "Cotton-Linen Fabric",
    //     productDescription: "Cotton-linen fabric combines the softness of cotton with the durability and elegance of linen. Our blend creates a luxurious, breathable fabric perfect for both fashion and home textiles.",
    //     healthBenefits: [
    //         {
    //             icon: Wind,
    //             title: "Natural Breathability",
    //             description: "Both fibers allow excellent air circulation for maximum comfort."
    //         },
    //         {
    //             icon: Sun,
    //             title: "Temperature Control",
    //             description: "Natural fibers help regulate temperature in all seasons."
    //         },
    //         {
    //             icon: Heart,
    //             title: "Skin-Friendly",
    //             description: "Natural blend is gentle on skin and hypoallergenic."
    //         }
    //     ],
    //     versatileUsesLabel: "Applications of Cotton-Linen Fabric",
    //     versatileUses: [
    //         {
    //             icon: Shirt,
    //             title: "Fashion & Apparel",
    //             description: "Perfect for summer clothing, dresses, and casual wear."
    //         },
    //         {
    //             icon: Home,
    //             title: "Home Textiles",
    //             description: "Ideal for bedding, curtains, and table linens."
    //         },
    //         {
    //             icon: Package,
    //             title: "Accessories",
    //             description: "Great for bags, scarves, and decorative items."
    //         }
    //     ],
    //     whyChooseOurPowderLabel: "Why Choose Our Cotton-Linen Fabric?",
    //     whyChooseOurPowder: [
    //         {
    //             icon: Leaf,
    //             title: "Natural & Sustainable",
    //             description: "Made from two natural fibers, environmentally friendly and biodegradable."
    //         },
    //         {
    //             icon: Star,
    //             title: "Elegant Texture",
    //             description: "Beautiful drape and natural texture for sophisticated looks."
    //         },
    //         {
    //             icon: Shield,
    //             title: "Durable Comfort",
    //             description: "Combines cotton's softness with linen's strength for lasting quality."
    //         }
    //     ]
    // },
    // // 34
    // {
    //     name: "Nylon-Spandex Blend Fabric",
    //     img: nylonSpandexImg,       
    //     mainHeadings: ["Nylon-Spandex", "Blend"],
    //     subHeadings: ["Stretchy", "Strong", "Performance"],
    //     productTitle: "Nylon-Spandex Fabric",
    //     productDescription: "Nylon-spandex fabric combines the strength of nylon with the stretch of spandex. Our blend delivers superior performance for activewear and form-fitting garments.",
    //     healthBenefits: [
    //         {
    //             icon: Expand,
    //             title: "4-Way Stretch",
    //             description: "Excellent stretch and recovery in all directions."
    //         },
    //         {
    //             icon: Droplets,
    //             title: "Moisture-Wicking",
    //             description: "Keeps you dry and comfortable during activities."
    //         },
    //         {
    //             icon: Shield,
    //             title: "Shape Retention",
    //             description: "Maintains fit and shape even after repeated wear."
    //         }
    //     ],
    //     versatileUsesLabel: "Applications of Nylon-Spandex Fabric",
    //     versatileUses: [
    //         {
    //             icon: Shirt,
    //             title: "Activewear",
    //             description: "Perfect for leggings, sports bras, and athletic wear."
    //         },
    //         {
    //             icon: Shirt,
    //             title: "Swimwear",
    //             description: "Ideal for swimsuits and water sports apparel."
    //         },
    //         {
    //             icon: Shirt,
    //             title: "Performance Wear",
    //             description: "Great for dance wear and compression garments."
    //         }
    //     ],
    //     whyChooseOurPowderLabel: "Why Choose Our Nylon-Spandex Fabric?",
    //     whyChooseOurPowder: [
    //         {
    //             icon: Shield,
    //             title: "Superior Performance",
    //             description: "Excellent stretch, recovery, and durability for demanding use."
    //         },
    //         {
    //             icon: Wind,
    //             title: "Comfort & Support",
    //             description: "Provides both flexibility and compression where needed."
    //         },
    //         {
    //             icon: Settings,
    //             title: "Versatile Use",
    //             description: "Perfect for various athletic and performance applications."
    //         }
    //     ]
    // },
    // // 35
    // {
    //     name: "Hemp-Cotton Blend Fabric",
    //     img: hempCottonImg,       
    //     mainHeadings: ["Hemp-Cotton", "Blend"],
    //     subHeadings: ["Sustainable", "Soft", "Durable"],
    //     productTitle: "Hemp-Cotton Fabric",
    //     productDescription: "Hemp-cotton fabric combines the durability of hemp with the softness of cotton. Our blend creates an eco-friendly, comfortable fabric that's perfect for sustainable fashion and home textiles.",
    //     healthBenefits: [
    //         {
    //             icon: Leaf,
    //             title: "Eco-Friendly",
    //             description: "Sustainable blend of two natural fibers with minimal environmental impact."
    //         },
    //         {
    //             icon: Shield,
    //             title: "Antimicrobial",
    //             description: "Hemp's natural properties help prevent bacterial growth."
    //         },
    //         {
    //             icon: Wind,
    //             title: "Breathable",
    //             description: "Natural fibers allow excellent air circulation and moisture control."
    //         }
    //     ],
    //     versatileUsesLabel: "Applications of Hemp-Cotton Fabric",
    //     versatileUses: [
    //         {
    //             icon: Shirt,
    //             title: "Eco-Fashion",
    //             description: "Perfect for sustainable clothing and accessories."
    //         },
    //         {
    //             icon: Home,
    //             title: "Home Textiles",
    //             description: "Ideal for bedding, towels, and home decor items."
    //         },
    //         {
    //             icon: Package,
    //             title: "Accessories",
    //             description: "Great for bags, backpacks, and eco-friendly products."
    //         }
    //     ],
    //     whyChooseOurPowderLabel: "Why Choose Our Hemp-Cotton Fabric?",
    //     whyChooseOurPowder: [
    //         {
    //             icon: Leaf,
    //             title: "Sustainable Choice",
    //             description: "Environmentally friendly blend that supports eco-conscious living."
    //         },
    //         {
    //             icon: Shield,
    //             title: "Durable Comfort",
    //             description: "Hemp's strength combined with cotton's softness for lasting quality."
    //         },
    //         {
    //             icon: Star,
    //             title: "Versatile Use",
    //             description: "Suitable for various applications from fashion to home goods."
    //         }
    //     ]
    // },
]

export const FabricsColorData = [
    // fabrics
    // product 21
    {
        name: "Cotton Fabric",
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
    // product 22
    {
        name: "Hemp Fabric",
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
    // product 23
    {
        name: "Coir Fabric",
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
    // product 24
    {
        name: "Ramie Fabric",
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
    // product 25
    {
        name: "Sisal Fabric",
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
    // product 26
    {
        name: "Polyester (PET) Fabric",
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
    // product 27
    {
        name: "Nylon Fabric",
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
    // product 28
    {
        name: "Acrylic Fabric",
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
    // product 29
    {
        name: "Spandex (Lycra) Fabric",
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
    // product 30
    {
        name: "Polypropylene Fabric",
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
    // product 31
    {
        name: "PVC Fabric",
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
    // product 32
    {
        name: "Poly-Cotton Blend Fabric",
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
    // product 33
    {
        name: "Cotton-Linen Blend Fabric",
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
    // product 34
    {
        name: "Nylon-Spandex Blend Fabric",
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
    // product 35
    {
        name: "Hemp-Cotton Blend Fabric",
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

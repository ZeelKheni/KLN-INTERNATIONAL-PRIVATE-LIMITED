import {    
    BarChart,
    Building,   
    CheckCircle,  
    Clipboard,    
    Crown,
    CurlyBraces,    
    Flame,    
    Hammer,
    Heart,
    Layers,    
    Package,
    Projector,
    Ruler,
    Shield,
    ShieldCheck,
    ShoppingBag,
    Smile,    
    Sparkles,    
    ThumbsUp,        
    Wrench,
    Zap  
} from 'lucide-react';


import EinscanPro2XV2 from '../assets/PrinterScanner/Einscan-Pro-2X-V2.jpg'
import EinscanProHD from '../assets/PrinterScanner/Einscan-Pro-HD.jpg'

import prathamMini from '../assets/PrinterScanner/pratham-mini.png'
import prathamDesktop from '../assets/PrinterScanner/pratham-desktop.png'
import pratham3 from '../assets/PrinterScanner/pratham-3.0.png'
import pratham5 from '../assets/PrinterScanner/pratham-5.0.png'
import pratham6 from '../assets/PrinterScanner/pratham-6.0.png'
import prathamX from '../assets/PrinterScanner/pratham-x.png'

import EKAHT from '../assets/PrinterScanner/EKAHT.png'
import EKAXL from '../assets/PrinterScanner/EKAXL.png'
import EKAXLE from '../assets/PrinterScanner/EKAXLE.png'
import EKADental from '../assets/PrinterScanner/EKADental.png'

export const PrinterScannerData = [
    {        
        name: "EinScan Pro 2X V2",
        image: EinscanPro2XV2,
        category: "3D Scanner",
        description: "Portable 3D scanner for accurate scanning of small to medium objects with versatile functionality."
    },
    {        
        name: "Einscan Pro HD",
        image: EinscanProHD, // Fixed image reference
        category: "3D Scanner",
        description: "High resolution 3D scanner optimized for dark and metal surfaces, with fast scanning and data transmission."
    },
    {    
        name: "Pratham Mini - Entry Level 3D Printer",
        image: prathamMini,
        category: "3D Printer",
        description: "Compact 3D printer for entry-level users, offering portability and versatility for small to medium object printing."
    },
    {        
        name: "Pratham Desktop - Desktop 3D Printer",
        image: prathamDesktop,
        category: "3D Printer",
        description: "Efficient desktop 3D printer for professionals, delivering high precision for prototypes and small-scale production."
    },
    {        
        name: "Pratham 3 - Industrial 3D Printer",
        image: pratham3,
        category: "3D Printer",
        description: "Industrial-grade 3D printer with a large build volume, designed for heavy-duty applications in various industries."
    },
    {        
        name: "Pratham 5 - High-Speed 3D Printer",
        image: pratham5,
        category: "3D Printer",
        description: "High-speed 3D printer for rapid prototyping, combining speed and precision for quick turnaround in production."
    },
    {        
        name: "Pratham 6 - Large Format 3D Printer",
        image: pratham6,
        category: "3D Printer",
        description: "Large-format 3D printer for sizable parts, ideal for architectural models and automotive components with expansive build area."
    },
    {        
        name: "Pratham X - Advanced 3D Printer",
        image: prathamX,
        category: "3D Printer",
        description: "Advanced 3D printer with cutting-edge technology, offering exceptional print quality for research and complex manufacturing."
    },
    {        
        name: "EKA HT - Jewelry 3D Printer",
        image: EKAHT,
        category: "Resin 3D Printer",
        description: "DLP 3D printer for jewelry, featuring advanced heating technology for high-speed printing of quality wax models."
    },
    {        
        name: "EKA XL - Jewelry 3D Printer",
        image: EKAXL,
        category: "Resin 3D Printer",
        description: "Entry-level DLP 3D printer for jewelry designers, offering high-quality output at an affordable price for beginners."
    },
    {        
        name: "EKA XLE - Resin 3D Printer",
        image: EKAXLE,
        category: "Resin 3D Printer",
        description: "High-precision resin 3D printer using DLP technology, ideal for detailed models and small-scale engineering applications."
    },
    {    
        name: "EKA Dental - Resin 3D Printer",
        image: EKADental,
        category: "Resin 3D Printer",
        description: "Precision resin 3D printer for dental applications, producing accurate models for crowns, bridges, and prosthetics."
    }
];

export const PrintersScannersDetailedData = [
    // 21
    {
        name: "EinScan Pro 2X V2",
        img: EinscanPro2XV2,        
        mainHeadings: ["EinScan Pro 2X V2", "Handheld 3D Scanner"],
        subHeadings: ["Portable", "High-Quality", "Versatile"],
        productTitle: "EinScan Pro 2X V2 Multifunctional Handheld 3D Scanner",
        productDescription: "The EinScan Pro 2X V2 is a truly portable and versatile handheld 3D scanner designed for high-quality results. It's best suited for scanning small to medium-sized objects, offering faster scan speeds and accurate results, making it ideal for high-quality 3D modeling.",
        healthBenefits: [],
        versatileUsesLabel: "Versatile Uses of EinScan Pro 2X V2",
        versatileUses: [
            {
                icon: CurlyBraces,
                title: "Reverse Engineering",
                description: "Capture precise 3D data for reverse engineering applications."
            },
            {
                icon: Layers,
                title: "Product Design",
                description: "Facilitate product development with accurate 3D models."
            },
            {
                icon: Projector,
                title: "Cultural Heritage Preservation",
                description: "Digitally preserve artifacts and artworks with detailed scans."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose EinScan Pro 2X V2?",
        whyChooseOurPowder: [
            {
                icon: Zap,
                title: "Fast Scanning Speed",
                description: "Enhances efficiency with quick data capture."
            },
            {
                icon: CheckCircle,
                title: "High Accuracy",
                description: "Delivers precise and reliable 3D data."
            },
            {
                icon: Package,
                title: "Portable Design",
                description: "Lightweight and easy to carry for on-site scanning."
            }
        ]
    },
    // 22
    {
        name: "Einscan Pro HD",
        img: EinscanProHD,        
        mainHeadings: ["EinScan Pro HD", "Handheld 3D Scanner"],
        subHeadings: ["High Resolution", "Efficient", "Versatile"],
        productTitle: "EinScan Pro HD Multifunctional Handheld 3D Scanner",
        productDescription: "The EinScan Pro HD enhances the efficiency of high-quality 3D modeling with impressive high resolution for capturing fine details. It's particularly suitable for scanning dark and metal surfaces, offering fast scanning speeds and data transmission.",
        healthBenefits: [],
        versatileUsesLabel: "Versatile Uses of EinScan Pro HD",
        versatileUses: [
            {
                icon: Building,
                title: "Automotive Industry",
                description: "Accurately scan vehicle parts for design and quality control."
            },
            {
                icon: Building,
                title: "Manufacturing",
                description: "Streamline production processes with precise 3D models."
            },
            {
                icon: Heart,
                title: "Healthcare",
                description: "Assist in creating custom prosthetics and orthotics."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose EinScan Pro HD?",
        whyChooseOurPowder: [
            {
                icon: Sparkles,
                title: "High Detail Capture",
                description: "Captures intricate details with high resolution."
            },
            {
                icon: Layers,
                title: "Versatile Scanning Modes",
                description: "Offers multiple modes to suit various scanning needs."
            },
            {
                icon: Zap,
                title: "Efficient Data Processing",
                description: "Ensures quick data transmission and processing."
            }
        ]
    },
    // 23
    {
        name: "Pratham Mini - Entry Level 3D Printer",
        videoLink: "https://www.youtube.com/watch?v=AXS7MAb1eMk",
        img: prathamMini,        
        mainHeadings: ["Pratham Mini", "3D Printer"],
        subHeadings: ["Compact", "Precise", "User-Friendly"],
        productTitle: "Pratham Mini 3D Printer",
        productDescription: "The Pratham Mini is a compact FDM 3D printer designed for hobbyists and small-scale projects. Its user-friendly interface and precise printing capabilities make it ideal for beginners.",
        healthBenefits: [],
        versatileUsesLabel: "Versatile Uses of Pratham Mini 3D Printer",
        versatileUses: [
            {
                icon: Hammer,
                title: "Educational Purposes",
                description: "Perfect for classroom demonstrations and learning."
            },
            {
                icon: Hammer,
                title: "DIY Projects",
                description: "Great for hobbyists and creative personal projects."
            },
            {
                icon: Clipboard,
                title: "Prototype Development",
                description: "Suitable for creating small-scale prototypes."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Pratham Mini?",
        whyChooseOurPowder: [
            {
                icon: ThumbsUp,
                title: "Affordable Entry-Level",
                description: "A cost-effective option for beginners."
            },
            {
                icon: Smile,
                title: "Reliable Performance",
                description: "Offers consistent and high-quality printing."
            },
            {
                icon: Smile,
                title: "Great Customer Support",
                description: "Backed by Make3d.in's expert technical support."
            }
        ],
        shorts: [
            {
                id: "oty_ksGoMlc",
                title: "Pratham Mini 3D Printer",
                description: "A compact and user-friendly 3D printer for beginners."
            },
            {
                id: "ENCiDjmwspU", 
                title: "Pratham Mini Features",
                description: "Overview of key features and capabilities."
            },
            {
                id: "4eciW7cYTAw",
                title: "Printing Demo",
                description: "Demonstration of print quality and process."
            },
            {
                id: "bPvdnxGEJyU",
                title: "Setup Guide",
                description: "Quick setup and configuration tutorial."
            },
            {
                id: "miUoup5t8fU",
                title: "Print Samples",
                description: "Showcase of sample prints and applications."
            },
            {
                id: "1UTMict1NYY",
                title: "User Experience",
                description: "Customer testimonials and experiences."
            }
        ]
    },
    // 24
    {
        name: "Pratham Desktop - Desktop 3D Printer",
        img: prathamDesktop,
        mainHeadings: ["Pratham Desktop", "3D Printer"],
        subHeadings: ["Medium-Size", "Precise", "Durable"],
        productTitle: "Pratham Desktop 3D Printer",
        productDescription: "The Pratham Desktop is tailored for educational and hobbyist use, offering a balance between size and functionality. It ensures efficient and precise 3D printing for various applications.",
        healthBenefits: [],
        versatileUsesLabel: "Versatile Uses of Pratham Desktop 3D Printer",
        versatileUses: [
            {
                icon: Layers,
                title: "Classroom Demonstrations",
                description: "Ideal for interactive learning experiences."
            },
            {
                icon: Layers,
                title: "Hobbyist Model Creation",
                description: "Perfect for creating detailed and intricate hobbyist models."
            },
            {
                icon: Clipboard,
                title: "Small-Scale Prototyping",
                description: "Suitable for prototyping functional designs."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Pratham Desktop?",
        whyChooseOurPowder: [
            {
                icon: Smile,
                title: "Perfect for Education",
                description: "Widely used in schools and educational institutions."
            },
            {
                icon: ThumbsUp,
                title: "Affordable and Functional",
                description: "Combines affordability with advanced features."
            },
            {
                icon: ThumbsUp,
                title: "Comprehensive Support",
                description: "Supported by Make3d.in's dedicated team."
            }
        ],
        shorts: [
            {
                id: "oty_ksGoMlc",
                title: "Pratham Mini 3D Printer",
                description: "A compact and user-friendly 3D printer for beginners."
            },
            {
                id: "ENCiDjmwspU", 
                title: "Pratham Mini Features",
                description: "Overview of key features and capabilities."
            },
            {
                id: "4eciW7cYTAw",
                title: "Printing Demo",
                description: "Demonstration of print quality and process."
            },
            {
                id: "bPvdnxGEJyU",
                title: "Setup Guide",
                description: "Quick setup and configuration tutorial."
            },
            {
                id: "miUoup5t8fU",
                title: "Print Samples",
                description: "Showcase of sample prints and applications."
            },
            {
                id: "1UTMict1NYY",
                title: "User Experience",
                description: "Customer testimonials and experiences."
            }
        ]
    },
    // 25    
    {
        name: "Pratham 3 - Industrial 3D Printer",
        img: pratham3,        
        mainHeadings: ["Pratham 3.0", "Advanced 3D Printer"],
        subHeadings: ["Large-Scale", "Precise", "Versatile"],
        productTitle: "Pratham 3.0 Advanced 3D Printer",
        productDescription: "The Pratham 3.0 is an industrial-grade FDM 3D printer designed for professionals and hobbyists seeking larger build volumes and higher precision.",
        healthBenefits: [],
        versatileUsesLabel: "Versatile Uses of Pratham 3.0 3D Printer",
        versatileUses: [
            {
                icon: Wrench,
                title: "Industrial Prototyping",
                description: "Perfect for creating prototypes for industrial applications."
            },
            {
                icon: Building,
                title: "Architectural Models",
                description: "Bring your architectural designs to life with precise 3D models."
            },
            {
                icon: Ruler,
                title: "Functional Part Production",
                description: "Ideal for creating functional components for testing and use."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Pratham 3.0?",
        whyChooseOurPowder: [
            {
                icon: BarChart,
                title: "Perfect for Professionals",
                description: "Designed for those who require precision and reliability."
            },
            {
                icon: Ruler,
                title: "High-Quality Prints",
                description: "Delivers exceptional print quality with advanced extrusion technology."
            },
            {
                icon: Wrench,
                title: "Expert Support",
                description: "Supported by Make3d.in's skilled technical team."
            }
        ],
        shorts: [
            {
                id: "oty_ksGoMlc",
                title: "Pratham Mini 3D Printer",
                description: "A compact and user-friendly 3D printer for beginners."
            },
            {
                id: "ENCiDjmwspU", 
                title: "Pratham Mini Features",
                description: "Overview of key features and capabilities."
            },
            {
                id: "4eciW7cYTAw",
                title: "Printing Demo",
                description: "Demonstration of print quality and process."
            },
            {
                id: "bPvdnxGEJyU",
                title: "Setup Guide",
                description: "Quick setup and configuration tutorial."
            },
            {
                id: "miUoup5t8fU",
                title: "Print Samples",
                description: "Showcase of sample prints and applications."
            },
            {
                id: "1UTMict1NYY",
                title: "User Experience",
                description: "Customer testimonials and experiences."
            }
        ]
    },
    // 26
    {
        name: "Pratham 5 - High-Speed 3D Printer",
        img: pratham5,        
        mainHeadings: ["Pratham 5.0", "Large-Scale 3D Printer"],
        subHeadings: ["High-Volume", "Precision", "Industrial-Grade"],
        productTitle: "Pratham 5.0 Large-Scale 3D Printer",
        productDescription: "The Pratham 5.0 is designed for large-scale industrial applications, offering a substantial build volume and high precision for creating sizable prototypes and end-use parts.",
        healthBenefits: [],
        versatileUsesLabel: "Versatile Uses of Pratham 5.0 3D Printer",
        versatileUses: [
            {
                icon: Projector,
                title: "Large Prototyping",
                description: "Ideal for creating large prototypes for industrial applications."
            },
            {
                icon: Building,
                title: "Architectural Models",
                description: "Perfect for producing detailed architectural models."
            },
            {
                icon: Wrench,
                title: "Manufacturing Aids",
                description: "Suitable for creating jigs, fixtures, and other manufacturing tools."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Pratham 5.0?",
        whyChooseOurPowder: [
            {
                icon: BarChart,
                title: "Industrial-Grade Performance",
                description: "Built for demanding industrial applications requiring precision and reliability."
            },
            {
                icon: Ruler,
                title: "Large Build Volume",
                description: "Accommodates large parts and assemblies in a single print."
            },
            {
                icon: Wrench,
                title: "Robust Construction",
                description: "Engineered for durability and long-term use in industrial environments."
            }
        ],
        shorts: [
            {
                id: "oty_ksGoMlc",
                title: "Pratham Mini 3D Printer",
                description: "A compact and user-friendly 3D printer for beginners."
            },
            {
                id: "ENCiDjmwspU", 
                title: "Pratham Mini Features",
                description: "Overview of key features and capabilities."
            },
            {
                id: "4eciW7cYTAw",
                title: "Printing Demo",
                description: "Demonstration of print quality and process."
            },
            {
                id: "bPvdnxGEJyU",
                title: "Setup Guide",
                description: "Quick setup and configuration tutorial."
            },
            {
                id: "miUoup5t8fU",
                title: "Print Samples",
                description: "Showcase of sample prints and applications."
            },
            {
                id: "1UTMict1NYY",
                title: "User Experience",
                description: "Customer testimonials and experiences."
            }
        ]
    },
    // 27
    {
        name: "Pratham 6 - Large Format 3D Printer",
        img: pratham6,        
        mainHeadings: ["Pratham 6.0", "Extra Large 3D Printer"],
        subHeadings: ["Massive Build Volume", "High Precision", "Industrial Use"],
        productTitle: "Pratham 6.0 Extra Large 3D Printer",
        productDescription: "The Pratham 6.0 offers an expansive build volume, making it ideal for industries requiring the production of large parts with high precision and reliability.",
        healthBenefits: [],
        versatileUsesLabel: "Versatile Uses of Pratham 6.0 3D Printer",
        versatileUses: [
            {
                icon: Projector,
                title: "Large-Scale Prototyping",
                description: "Perfect for creating full-scale prototypes and models."
            },
            {
                icon: Building,
                title: "Architectural Structures",
                description: "Suitable for printing large architectural components."
            },
            {
                icon: Wrench,
                title: "Industrial Tooling",
                description: "Ideal for manufacturing large jigs, fixtures, and tooling aids."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Pratham 6.0?",
        whyChooseOurPowder: [
            {
                icon: BarChart,
                title: "Exceptional Build Volume",
                description: "Supports the creation of very large parts in a single print."
            },
            {
                icon: Ruler,
                title: "High Precision Printing",
                description: "Maintains accuracy and detail even at large scales."
            },
            {
                icon: Wrench,
                title: "Industrial Reliability",
                description: "Designed to meet the rigorous demands of industrial use."
            }
        ],
        shorts: [
            {
                id: "oty_ksGoMlc",
                title: "Pratham Mini 3D Printer",
                description: "A compact and user-friendly 3D printer for beginners."
            },
            {
                id: "ENCiDjmwspU", 
                title: "Pratham Mini Features",
                description: "Overview of key features and capabilities."
            },
            {
                id: "4eciW7cYTAw",
                title: "Printing Demo",
                description: "Demonstration of print quality and process."
            },
            {
                id: "bPvdnxGEJyU",
                title: "Setup Guide",
                description: "Quick setup and configuration tutorial."
            },
            {
                id: "miUoup5t8fU",
                title: "Print Samples",
                description: "Showcase of sample prints and applications."
            },
            {
                id: "1UTMict1NYY",
                title: "User Experience",
                description: "Customer testimonials and experiences."
            }
        ]
    },
    // 28
    {
        name: "Pratham X - Advanced 3D Printer",
        img: prathamX,
        mainHeadings: ["Pratham X", "Ultra Large 3D Printer"],
        subHeadings: ["Gigantic Build Volume", "Precision", "Industrial Applications"],
        productTitle: "Pratham X Ultra Large 3D Printer",
        productDescription: "The Pratham X is engineered for ultra-large-scale 3D printing, catering to industries that require the fabrication of massive parts with high precision and structural integrity.",
        healthBenefits: [],
        versatileUsesLabel: "Versatile Uses of Pratham X 3D Printer",
        versatileUses: [
            {
                icon: Projector,
                title: "Full-Scale Prototyping",
                description: "Enables the creation of full-scale prototypes and large models."
            },
            {
                icon: Building,
                title: "Construction Components",
                description: "Suitable for printing large construction and architectural elements."
            },
            {
                icon: Wrench,
                title: "Industrial Manufacturing",
                description: "Ideal for producing large industrial parts and tooling."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose Pratham X?",
        whyChooseOurPowder: [
            {
                icon: BarChart,
                title: "Gigantic Build Capacity",
                description: "Supports the fabrication of extremely large parts in a single print."
            },
            {
                icon: Ruler,
                title: "Precision at Scale",
                description: "Maintains high accuracy and detail even for massive prints."
            },
            {
                icon: Wrench,
                title: "Industrial-Grade Durability",
                description: "Built to withstand the demands of large-scale industrial production."
            }
        ],
        shorts: [
            {
                id: "oty_ksGoMlc",
                title: "Pratham Mini 3D Printer",
                description: "A compact and user-friendly 3D printer for beginners."
            },
            {
                id: "ENCiDjmwspU", 
                title: "Pratham Mini Features",
                description: "Overview of key features and capabilities."
            },
            {
                id: "4eciW7cYTAw",
                title: "Printing Demo",
                description: "Demonstration of print quality and process."
            },
            {
                id: "bPvdnxGEJyU",
                title: "Setup Guide",
                description: "Quick setup and configuration tutorial."
            },
            {
                id: "miUoup5t8fU",
                title: "Print Samples",
                description: "Showcase of sample prints and applications."
            },
            {
                id: "1UTMict1NYY",
                title: "User Experience",
                description: "Customer testimonials and experiences."
            }
        ]
    },
    // 29
    {
        name: "EKA HT - Jewelry 3D Printer",
        img: EKAHT,        
        mainHeadings: ["EKA HT", "Jewelry 3D Printer"],
        subHeadings: ["High Precision", "Advanced Heating Tray", "Direct Casting"],
        productTitle: "EKA HT - Jewelry 3D Printer",
        productDescription: "The EKA HT is a state-of-the-art DLP 3D printer designed specifically for the jewelry industry. Equipped with an advanced heating tray technology, it ensures high-speed printing and produces high-quality wax models suitable for direct casting into precious metals like gold and silver.",
        healthBenefits: [],
        versatileUsesLabel: "Applications of EKA HT",
        versatileUses: [
            {
                icon: Crown,
                title: "Jewelry Design",
                description: "Create intricate and detailed jewelry pieces with precision."
            },
            {
                icon: Clipboard,
                title: "Prototyping",
                description: "Develop prototypes of jewelry designs for client approvals."
            },
            {
                icon: Layers,
                title: "Small-Batch Production",
                description: "Efficiently produce small batches of jewelry pieces."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose EKA HT?",
        whyChooseOurPowder: [
            {
                icon: Flame,
                title: "Advanced Heating Tray",
                description: "Maintains optimal resin temperature, reducing print failures, especially in cooler environments."
            },
            {
                icon: Shield,
                title: "Integrated Filter and Heater",
                description: "Removes moisture and reduces toxic fumes, ensuring a safer working environment."
            },
            {
                icon: Ruler,
                title: "Easy Print Head Leveling",
                description: "User-friendly design allows for straightforward leveling, even for non-technical users."
            },
            {
                icon: ShieldCheck,
                title: "Robust Build with Warranty",
                description: "Heavy-duty projector-based printer with a 3-year warranty, ensuring reliability and peace of mind."
            }
        ],
        shorts: [
            {
                id: "oty_ksGoMlc",
                title: "Pratham Mini 3D Printer",
                description: "A compact and user-friendly 3D printer for beginners."
            },
            {
                id: "ENCiDjmwspU", 
                title: "Pratham Mini Features",
                description: "Overview of key features and capabilities."
            },
            {
                id: "4eciW7cYTAw",
                title: "Printing Demo",
                description: "Demonstration of print quality and process."
            },
            {
                id: "bPvdnxGEJyU",
                title: "Setup Guide",
                description: "Quick setup and configuration tutorial."
            },
            {
                id: "miUoup5t8fU",
                title: "Print Samples",
                description: "Showcase of sample prints and applications."
            },
            {
                id: "1UTMict1NYY",
                title: "User Experience",
                description: "Customer testimonials and experiences."
            }
        ]
    },
    // 30
    {
        name: "EKA XL - Jewelry 3D Printer",
        img: EKAXL,       
        mainHeadings: ["EKA XL", "Jewelry 3D Printer"],
        subHeadings: ["Entry-Level", "Compact", "High-Quality Output"],
        productTitle: "EKA XL - Jewelry 3D Printer",
        productDescription: "The EKA XL is an entry-level DLP 3D printer based on LED projector technology, designed to initiate your 3D printing journey. Despite its affordability, it maintains high-quality output, making it ideal for jewelry designers and manufacturers.",
        healthBenefits: [],
        versatileUsesLabel: "Applications of EKA XL",
        versatileUses: [
            {
                icon: Crown,
                title: "Jewelry Design",
                description: "Craft intricate and detailed jewelry pieces with precision."
            },
            {
                icon: Wrench,
                title: "Prototyping",
                description: "Develop prototypes of jewelry designs for client approvals."
            },
            {
                icon: Crown,
                title: "Small-Batch Production",
                description: "Efficiently produce small batches of jewelry pieces."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose EKA XL?",
        whyChooseOurPowder: [
            {
                icon: ShoppingBag,
                title: "Affordable Entry-Level Model",
                description: "Provides an economical solution without compromising on quality."
            },
            {
                icon: Package,
                title: "Compact Design",
                description: "Occupies minimal space, suitable for various workspaces."
            },
            {
                icon: Package,
                title: "Lifetime Service Support",
                description: "Includes lifetime service support and free software updates."
            },
            {
                icon: Shield,
                title: "1-Year Full Warranty",
                description: "Comes with a 1-year comprehensive warranty for peace of mind."
            }
        ],
        shorts: [
            {
                id: "oty_ksGoMlc",
                title: "Pratham Mini 3D Printer",
                description: "A compact and user-friendly 3D printer for beginners."
            },
            {
                id: "ENCiDjmwspU", 
                title: "Pratham Mini Features",
                description: "Overview of key features and capabilities."
            },
            {
                id: "4eciW7cYTAw",
                title: "Printing Demo",
                description: "Demonstration of print quality and process."
            },
            {
                id: "bPvdnxGEJyU",
                title: "Setup Guide",
                description: "Quick setup and configuration tutorial."
            },
            {
                id: "miUoup5t8fU",
                title: "Print Samples",
                description: "Showcase of sample prints and applications."
            },
            {
                id: "1UTMict1NYY",
                title: "User Experience",
                description: "Customer testimonials and experiences."
            }
        ]
    },
    // 31
    {
        name: "EKA XLE - Resin 3D Printer",
        img: EKAXLE,
        mainHeadings: ["EKA XLE", "Resin 3D Printer"],
        subHeadings: ["High Precision", "Advanced DLP Technology", "Versatile Applications"],
        productTitle: "EKA XLE - Resin 3D Printer",
        productDescription: "The EKA XLE is a high-precision resin 3D printer engineered for engineering applications. Utilizing advanced Digital Light Processing (DLP) technology, it delivers detailed and accurate models, making it ideal for prototyping and small-scale manufacturing.",
        healthBenefits: [],
        versatileUsesLabel: "Applications of EKA XLE",
        versatileUses: [
            {
                icon: Projector,
                title: "Engineering Prototyping",
                description: "Create detailed prototypes for testing and development."
            },
            {
                icon: Building,
                title: "Small-Scale Manufacturing",
                description: "Produce small batches of parts and components efficiently."
            },
            {
                icon: Wrench,
                title: "Tooling and Fixtures",
                description: "Design and manufacture custom tooling and fixtures for production lines."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose EKA XLE?",
        whyChooseOurPowder: [
            {
                icon: Building,
                title: "Advanced DLP Projector",
                description: "Equipped with a high-definition DLP LED projector for precise layer curing."
            },
            {
                icon: Wrench,
                title: "High Precision",
                description: "Achieves fine details and accuracy, essential for engineering applications."
            },
            {
                icon: Wrench,
                title: "Versatile Resin Compatibility",
                description: "Supports a wide range of resins, including tough, flexible, and high-temperature variants."
            },
            {
                icon: Projector,
                title: "Comprehensive Support",
                description: "Offers lifetime service support and free software updates."
            }
        ],
        shorts: [
            {
                id: "oty_ksGoMlc",
                title: "Pratham Mini 3D Printer",
                description: "A compact and user-friendly 3D printer for beginners."
            },
            {
                id: "ENCiDjmwspU", 
                title: "Pratham Mini Features",
                description: "Overview of key features and capabilities."
            },
            {
                id: "4eciW7cYTAw",
                title: "Printing Demo",
                description: "Demonstration of print quality and process."
            },
            {
                id: "bPvdnxGEJyU",
                title: "Setup Guide",
                description: "Quick setup and configuration tutorial."
            },
            {
                id: "miUoup5t8fU",
                title: "Print Samples",
                description: "Showcase of sample prints and applications."
            },
            {
                id: "1UTMict1NYY",
                title: "User Experience",
                description: "Customer testimonials and experiences."
            }
        ]
    },
    // 32
    {
        name: "EKA Dental - Resin 3D Printer",
        img: EKADental,
        mainHeadings: ["EKA Dental", "Resin 3D Printer"],
        subHeadings: ["High Precision", "Dental Applications", "User-Friendly"],
        productTitle: "EKA Dental - Resin 3D Printer",
        productDescription: "The EKA Dental is a high-precision resin 3D printer designed specifically for dental applications. It offers accurate and detailed prints, making it ideal for creating dental models, crowns, bridges, and other dental prosthetics.",
        healthBenefits: [],
        versatileUsesLabel: "Applications of EKA Dental",
        versatileUses: [
            {
                icon: Ruler,
                title: "Dental Models",
                description: "Create accurate dental models for patient-specific treatments."
            },
            {
                icon: Crown,
                title: "Crowns and Bridges",
                description: "Produce precise crowns and bridges for restorative dentistry."
            },
            {
                icon: CheckCircle,
                title: "Surgical Guides",
                description: "Design and manufacture custom surgical guides for dental implant procedures."
            }
        ],
        whyChooseOurPowderLabel: "Why Choose EKA Dental?",
        whyChooseOurPowder: [
            {
                icon: Ruler,
                title: "High Precision",
                description: "Achieves fine details and accuracy, essential for dental applications."
            },
            {
                icon: CheckCircle,
                title: "Compatible with Dental Resins",
                description: "Supports a wide range of dental-specific resins for various applications."
            },
            {
                icon: Smile,
                title: "User-Friendly Interface",
                description: "Designed for ease of use, suitable for both experienced and novice users."
            },
            {
                icon: CheckCircle,
                title: "Comprehensive Support",
                description: "Offers lifetime service support and free software updates."
            }
        ],
        shorts: [
            {
                id: "oty_ksGoMlc",
                title: "Pratham Mini 3D Printer",
                description: "A compact and user-friendly 3D printer for beginners."
            },
            {
                id: "ENCiDjmwspU", 
                title: "Pratham Mini Features",
                description: "Overview of key features and capabilities."
            },
            {
                id: "4eciW7cYTAw",
                title: "Printing Demo",
                description: "Demonstration of print quality and process."
            },
            {
                id: "bPvdnxGEJyU",
                title: "Setup Guide",
                description: "Quick setup and configuration tutorial."
            },
            {
                id: "miUoup5t8fU",
                title: "Print Samples",
                description: "Showcase of sample prints and applications."
            },
            {
                id: "1UTMict1NYY",
                title: "User Experience",
                description: "Customer testimonials and experiences."
            }
        ]
    }
];

export const PrinterScannerColorData = {   
    background: {
        main: '#F0F7FF',  // Very light blue for better contrast
        element1: 'rgba(37, 99, 235, 0.15)',  // Royal blue with 15% opacity
        element2: 'rgba(59, 130, 246, 0.15)'  // Bright blue with 15% opacity
    },
    navbar: '#2563EB',  // Royal blue
    text: {
        mainHeadings: {
            primary: '#1E40AF',   // Deeper blue
            secondary: '#3B82F6'  // Bright blue
        },
        subHeadings: '#2563EB',  // Royal blue
        productTitle: '#1E40AF', // Deeper blue
        productDescription: '#1F2937', // Dark gray with slight blue tint
        labels: {
            primary: '#1E40AF',   // Deeper blue
            secondary: '#2563EB'  // Royal blue
        },
        floatingSpecs: {
            primary: '#3B82F6',   // Bright blue
            secondary: '#1E40AF'  // Deeper blue
        }
    },
    buttons: {
        orderNow: {
            background: '#2563EB',   // Royal blue
            hover: '#1E40AF'         // Deeper blue
        },
        learnMore: {
            border: '#2563EB',       // Royal blue
            text: '#1E40AF',         // Deeper blue
            hover: 'rgba(37, 99, 235, 0.08)' // Royal blue with 8% opacity
        }
    },
    border: 'rgba(37, 99, 235, 0.15)', // Royal blue with 15% opacity
    icon: '#3B82F6'  // Bright blue
};
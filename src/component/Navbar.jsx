import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { endpoints } from '../utils/api';

import logo from '../assets/Logo/KLNLogo.png'

const Navbar = () => {
  // const color = "#78350F";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [dynamicNavLinks, setDynamicNavLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  // Fetch categories with hierarchical structure for navbar
  useEffect(() => {
    const fetchHierarchicalCategories = async () => {
      try {
        setLoading(true);
        // Get hierarchical structure - assuming API supports hierarchical=true parameter
        const response = await endpoints.categories.getAll();
        const categoriesData = Array.isArray(response) ? response : response.data || [];
        
        // Start with the base navigation items
        const baseNavLinks = [
          { title: 'Home', href: "/" },
          { title: 'About Us', href: "/about-us" },
        ];
        
        // Process categories to build product submenu
        const productSubmenu = [
          { title: 'All Products', href: "/products" },
        ];
        
        // Create a map to efficiently organize categories by parentId
        const categoryMap = {};
        categoriesData.forEach(category => {
          categoryMap[category._id] = {
            ...category,
            subMenu: []
          };
        });
        
        // Find root categories (parentId is null) and subcategories
        const rootCategories = [];
        categoriesData.forEach(category => {
          if (!category.parentId) {
            rootCategories.push(categoryMap[category._id]);
          } else if (categoryMap[category.parentId]) {
            categoryMap[category.parentId].subMenu.push(categoryMap[category._id]);
          }
        });
        
        // Convert the hierarchical structure to the format needed for the navbar
        rootCategories.forEach(rootCategory => {
          if (rootCategory.subMenu && rootCategory.subMenu.length > 0) {
            // Category has subcategories
            const submenuItem = {
              title: rootCategory.name,
              subMenu: rootCategory.subMenu.map(subCat => ({
                title: subCat.name,
                href: `/products?category=${encodeURIComponent(subCat.name)}`
              }))
            };
            productSubmenu.push(submenuItem);
          } else {
            // Category has no subcategories
            productSubmenu.push({
              title: rootCategory.name,
              href: `/products?category=${encodeURIComponent(rootCategory.name)}`
            });
          }
        });
        
        // Add products with submenu
        const productsNav = {
          title: 'Products',
          href: "/products", 
          subMenu: productSubmenu
        };
        
        // Complete the navigation links
        const completeNavLinks = [
          ...baseNavLinks,
          productsNav,
          { title: 'Brochures & Certificates', href: "/brochures-certificates" },
          { title: 'Supplier', href: "/supplier" },
          { title: 'Team', href: "/team" },
          { title: 'Contact Us', href: "/contact" }
        ];
        
        setDynamicNavLinks(completeNavLinks);
      } catch (error) {
        console.error('Error fetching categories for navbar:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHierarchicalCategories();
  }, []);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = (href) => {
    if (href.startsWith('#')) {
      // For hash links, scroll to the element
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For regular routes, use navigate
      navigate(href);
    }
    // Close mobile menu and reset states with a slight delay
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setDropdownOpen(null);
      setMobileDropdowns({});
      setActiveSubmenu(null);
    }, 100);
  };

  const toggleMobileDropdown = (itemPath, level) => {
    if (level === 1) {
      // For first level menu items
      setMobileDropdowns(prev => ({
        ...prev,
        [itemPath]: !prev[itemPath]
      }));
    } else if (level === 2) {
      // For second level menu items, close other open submenus
      if (activeSubmenu && activeSubmenu !== itemPath) {
        setMobileDropdowns(prev => ({
          ...prev,
          [activeSubmenu]: false
        }));
      }
      setMobileDropdowns(prev => ({
        ...prev,
        [itemPath]: !prev[itemPath]
      }));
      setActiveSubmenu(itemPath);
    }
  };

  // Fallback to static navigation while categories are loading
  const navLinks = dynamicNavLinks.length > 0 ? dynamicNavLinks : [
    { title: 'Home', href: "/" },
    { title: 'About Us', href: "/about-us" },
    {
      title: 'Products', href: "/products", subMenu: [
        { title: 'All Products', href: "/products" },
      ]
    },
    { title: 'Brochures & Certificates', href: "/brochures-certificates" },
    { title: 'Supplier', href: "/supplier" },
    { title: 'Team', href: "/team" },
    { title: 'Contact Us', href: "/contact" }
  ];

  const renderSubMenu = (items, level = 0, parentPath = '') => {
    return items.map((item, index) => {
      const itemPath = parentPath ? `${parentPath}-${item.title}` : item.title;
      return (
        <div key={index}>
          <motion.div
            onClick={() => {
              if (item.subMenu) {
                toggleMobileDropdown(itemPath, level + 1);
              } else {
                handleNavigation(item.href);
              }
            }}
            className={`flex justify-between items-center py-2 px-4 text-[#0c73af] font-medium cursor-pointer rounded-lg hover:bg-[#0c73af] hover:text-white transition-all ${level > 0 ? 'ml-4' : ''}`}
          >
            {item.title}
            {item.subMenu && (
              <ChevronDown 
                size={16} 
                className={`transform transition-transform ${mobileDropdowns[itemPath] ? 'rotate-180' : ''}`} 
              />
            )}
          </motion.div>

          <AnimatePresence mode="wait">
            {item.subMenu && mobileDropdowns[itemPath] && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`bg-gray-100 rounded-md ${level > 0 ? 'ml-8' : 'ml-6'}`}
              >
                {renderSubMenu(item.subMenu, level + 1, itemPath)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    });
  };

  return (
    <motion.header
      className={`fixed z-[999] top-0 left-0 right-0 transition-all duration-300 select-none ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center py-3 md:py-4 lg:py-2">
          {/* Company Logo and Name */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <motion.img
              src={logo}
              alt="KLN International Logo"
              className="h-10 md:h-12 lg:h-16 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />

            <motion.h1
              className="text-xl lg:text-2xl font-bold font-serif text-[#0c73af] relative select-none"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              KLN International
            </motion.h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 text-base select-none">
            {navLinks.map((link, index) => {
              const isActive = link.href === location.pathname;
              return (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(link.title)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <motion.span
                    onClick={() => handleNavigation(link.href)}
                    className={`relative font-medium px-2 py-1 cursor-pointer select-none flex items-center ${isActive ? 'text-[#78350f]' : 'text-[#0c73af]'}`}
                    transition={{ duration: 0.2 }}
                  >
                    {link.title}
                    {link.subMenu && <ChevronDown size={16} className="ml-1" />}
                  </motion.span>

                  {/* Multi-level Dropdown */}
                  <AnimatePresence mode="wait">
                    {link.subMenu && dropdownOpen === link.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-lg py-2 w-48 z-50"
                      >
                        {link.subMenu.map((subItem, subIndex) => (
                          <div key={subIndex} className="relative group/sub">
                            <motion.span
                              onClick={subItem.subMenu ? undefined : () => handleNavigation(subItem.href)}
                              className="block px-4 py-2 text-gray-700 hover:bg-[#0c73af] hover:text-white cursor-pointer flex justify-between items-center"
                            >
                              {subItem.title}
                              {subItem.subMenu && <ChevronDown size={16} className="ml-1" />}
                            </motion.span>

                            {subItem.subMenu && (
                              <div className="absolute left-full top-0 mt-0 ml-1 hidden group-hover/sub:block">
                                <div className="bg-white shadow-md rounded-lg py-2 w-48">
                                  {subItem.subMenu.map((nestedItem, nestedIndex) => (
                                    <motion.span
                                      key={nestedIndex}
                                      onClick={() => handleNavigation(nestedItem.href)}
                                      className="block px-4 py-2 text-gray-700 hover:bg-[#0c73af] hover:text-white cursor-pointer"
                                    >
                                      {nestedItem.title}
                                    </motion.span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative z-[999] text-[#78350f] p-2 select-none"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence mode="wait">
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[998] md:hidden select-none"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            )}
          </AnimatePresence>

          {/* Mobile Menu Content */}
          <AnimatePresence mode="wait">
            {isMobileMenuOpen && (
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.2 }}
                className="fixed top-0 right-0 h-screen w-full bg-white shadow-xl z-[998] md:hidden select-none overflow-y-auto"
              >
                <div className="flex flex-col pt-20 px-6 h-full bg-white select-none">
                  {renderSubMenu(navLinks)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
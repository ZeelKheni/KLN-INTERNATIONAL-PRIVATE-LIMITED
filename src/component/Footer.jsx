import React, { useEffect } from 'react';
import { Facebook, X, Instagram, Mail, MapPin, Phone, Heart, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSocialLinks } from '../redux/slices/socialLinksSlice';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const dispatch = useDispatch();
    const { items: socialLinks, status, error } = useSelector((state) => state.socialLinks);

    useEffect(() => {
        dispatch(fetchSocialLinks());
    }, [dispatch]);

    // Helper function to get the correct icon component based on platform name
    const getSocialIcon = (platform) => {
        switch (platform.toLowerCase()) {
            case 'facebook':
                return <Facebook size={20} />;
            case 'linkedin':
                return <Linkedin size={20} />;
            case 'instagram':
                return <Instagram size={20} />;
            case 'x':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" fill="currentColor">
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                    </svg>
                );
            default:
                return <Linkedin size={20} />;
        }
    };

    return (
        <footer className="bg-amber-50 border-t border-[#eae8e8] relative z-10">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-3 space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-[#0c73af]">KLN International</h3>
                        <p className="text-amber-800">
                            Bringing the finest quality spices and powders directly to your kitchen,
                            ensuring authentic flavors in every dish.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 space-y-4 lg:pl-14">
                        <h4 className="text-xl font-serif font-semibold text-[#0c73af]">Quick Links</h4>
                        <ul className="space-y-2">
                            {[
                                { title: 'Products', href: '/products' },
                                { title: 'Contact', href: '/contact' }
                            ].map((item) => (
                                <li key={item.title}>
                                    <Link to={item.href} className="text-amber-800 hover:text-[#0c73af] transition-colors">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xl font-serif font-semibold text-[#0c73af]">Contact Us</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-[#006dad]">
                                <MapPin size={40} />
                                <span className="text-amber-800">B-701, Silver Coin, opposite Uttran Power House, Chorasi, Surat – 394105</span>
                            </div>
                            <div className="flex items-center space-x-3 text-[#006dad]">
                                <Phone size={20} />
                                <span className="text-amber-800">+91 79843 33872</span> <span>/</span> <span className="text-amber-800">+44 74421 09245</span>
                            </div>
                            <div className="flex items-center space-x-3 text-[#006dad]">
                                <Mail size={20} />
                                <span className="text-amber-800">klninternational.pvt.ltd@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xl font-serif font-semibold text-[#0c73af]">Follow Us</h4>
                        <div className="flex space-x-4">
                            {status === 'loading' ? (
                                <div className="text-amber-800">Loading social links...</div>
                            ) : status === 'failed' ? (
                                <div className="text-red-500">Failed to load social links</div>
                            ) : socialLinks && socialLinks.length > 0 ? (
                                socialLinks.map((link) => (
                                    <a 
                                        key={link._id} 
                                        href={link.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        aria-label={`Follow us on ${link.platform}`}
                                    >
                                        <button className="p-2 bg-[#eae8e8] rounded-full text-amber-800 hover:bg-[#0170ae] hover:text-[#ffffff] transition-colors">
                                            {getSocialIcon(link.platform)}
                                        </button>
                                    </a>
                                ))
                            ) : (
                                // Fallback to hardcoded links if no social links are returned from API
                                <>
                                    <a href="https://www.facebook.com/profile.php?id=100093118888888" target="_blank" rel="noopener noreferrer">
                                        <button className="p-2 bg-[#eae8e8] rounded-full text-amber-800 hover:bg-[#0170ae] hover:text-[#ffffff] transition-colors">
                                            <Facebook size={20} />
                                        </button>
                                    </a>
                                    <a href="https://www.linkedin.com/company/106160854/admin/dashboard/" target="_blank" rel="noopener noreferrer">
                                        <button className="p-2 bg-[#eae8e8] rounded-full text-amber-800 hover:bg-[#0170ae] hover:text-[#ffffff] transition-colors">
                                            <Linkedin size={20} />
                                        </button>
                                    </a>
                                    <a href="https://www.instagram.com/klninternational.pvt.ltd/" target="_blank" rel="noopener noreferrer">
                                        <button className="p-2 bg-[#eae8e8] rounded-full text-amber-800 hover:bg-[#0170ae] hover:text-[#ffffff] transition-colors">
                                            <Instagram size={20} />
                                        </button>
                                    </a>
                                    <a href="https://x.com/kln2025" target="_blank" rel="noopener noreferrer">
                                        <button className="p-2 bg-[#eae8e8] rounded-full text-amber-800 hover:bg-[#0170ae] hover:text-[#ffffff] transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                                        </button>
                                    </a>
                                </>
                            )}
                        </div>
                        <div className="pt-4">
                            <h5 className="text-lg font-serif font-semibold text-[#0c73af]">Newsletter</h5>
                            <div className="mt-2 flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 border-2 border-[#eae8e8] rounded-l-lg focus:outline-none focus:border-[#0170ae]"
                                />
                                <button className="px-4 py-2 bg-amber-800 text-[#ffffff] rounded-r-lg hover:bg-[#006dad] transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#eae8e8]">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-[#006dad] text-sm">
                            © {currentYear} <span className='text-amber-800'>KLN International</span>. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-[#006dad]">
                            <span>Made with</span>
                            <Heart size={16} className="fill-amber-800 text-amber-800" />
                            <span>by</span><span className="text-amber-800">KLN International Team</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
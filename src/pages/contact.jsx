import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createInquiry } from '../redux/slices/inquiriesSlice';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    CheckCircle,
    AlertCircle,
    Loader2
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../component/ui/alert';
import { useLocation } from 'react-router-dom';

const Contact = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        status: 'Unread',
        date: new Date().toISOString()
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const contactInfo = [
        {
            icon: MapPin,
            title: "Our Location",
            details: ["B-701, Silver Coin,", "opposite Uttran Power House", "Chorasi, Surat – 394105"],
            color: "text-blue-600"
        },
        {
            icon: Phone,
            title: "Phone Number",
            details: ["+91 79843 33872", "+44 74421 09245"],
            color: "text-green-600"
        },
        {
            icon: Mail,
            title: "Email Address",
            details: ["klninternational.pvt.ltd@gmail.com"],
            color: "text-red-600"
        },
        {
            icon: Clock,
            title: "Business Hours",
            details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
            color: "text-purple-600"
        }
    ];

    // Handle hash navigation after component mounts
    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                // Add a small delay to ensure all content is loaded
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        console.log(formData);

        try {
            await dispatch(createInquiry(formData)).unwrap();
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
                status: 'Unread',
                date: new Date().toISOString()
            });
        } catch (error) {
            console.error('Failed to submit inquiry:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const InfoCard = ({ icon: Icon, title, details, color }) => (
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-2 border-amber-100 transform transition-all duration-300 hover:scale-105">
            <div className={`${color} mb-4`}>
                <Icon size={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-semibold text-[#0c73af] mb-2">
                {title}
            </h3>
            {details.map((detail, index) => (
                <p key={index} className="text-sm sm:text-base text-amber-700">
                    {detail}
                </p>
            ))}
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
            {/* Header Section */}
            <div className="text-center py-20 sm:py-24 bg-amber-100/50 px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0c73af] mb-4">
                    Get in Touch
                </h1>
                <p className="text-base sm:text-lg text-amber-700 max-w-2xl mx-auto">
                    Have questions about our products or services? We're here to help and would love to hear from you.
                </p>
            </div>

            <div className="container mx-auto px-4 py-8 sm:py-12">
                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                    {contactInfo.map((info, index) => (
                        <InfoCard key={index} {...info} />
                    ))}
                </div>
                
                <section 
                    id="inquiry" 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12"
                    style={{ scrollMarginTop: '100px' }} // Adjust this value based on your header height
                >
                    {/* WhatsApp Contact Form */}
                    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border-2 border-amber-100 flex items-center justify-center">
                        <div className="text-center max-w-lg">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0c73af] mb-4">
                                Let's Connect on WhatsApp
                            </h2>

                            <p className="text-base sm:text-lg text-amber-900 mb-8">
                                Get instant responses to your queries through WhatsApp. We're here to help!
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                                <a
                                    href="https://wa.me/+917984333872?text=Hello,%20I%20need%20support%20regarding%20KLN%20International%20products."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto group inline-flex items-center justify-center space-x-3 bg-green-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full font-serif text-base sm:text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    <svg
                                        className="w-6 h-6 sm:w-7 sm:h-7 group-hover:animate-bounce"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    <span>India Support</span>
                                </a>

                                <a
                                    href="https://wa.me/+447442109245?text=Hello,%20I%20need%20support%20regarding%20KLN%20International%20products."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto group inline-flex items-center justify-center space-x-3 bg-green-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full font-serif text-base sm:text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    <svg
                                        className="w-6 h-6 sm:w-7 sm:h-7 group-hover:animate-bounce"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    <span>International Support</span>
                                </a>
                            </div>

                            <div className="mt-6 sm:mt-8 space-y-2">
                                <p className="text-amber-600 font-medium text-sm sm:text-base">
                                    India Support: Available 9 AM - 6 PM
                                </p>
                                <p className="text-amber-600 font-medium text-sm sm:text-base">
                                    International Support: Available 24/7
                                </p>
                                <p className="text-xs sm:text-sm text-amber-500">
                                    Typical response time: Under 5 minutes
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border-2 border-amber-100">
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0c73af] mb-6">
                            Send us a Message
                        </h2>

                        {submitStatus === 'success' && (
                            <Alert className="mb-6 bg-green-50 border-green-200">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <AlertTitle className="text-green-800">Success!</AlertTitle>
                                <AlertDescription className="text-green-700">
                                    Your message has been sent successfully. We'll get back to you soon.
                                </AlertDescription>
                            </Alert>
                        )}

                        {submitStatus === 'error' && (
                            <Alert className="mb-6 bg-red-50 border-red-200">
                                <AlertCircle className="h-4 w-4 text-red-600" />
                                <AlertTitle className="text-red-800">Error</AlertTitle>
                                <AlertDescription className="text-red-700">
                                    There was an error sending your message. Please try again.
                                </AlertDescription>
                            </Alert>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label className="block text-amber-800 mb-2 text-sm sm:text-base" htmlFor="name">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border-2 border-amber-200 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                                        placeholder="Firstname Lastname"
                                    />
                                </div>
                                <div>
                                    <label className="block text-amber-800 mb-2 text-sm sm:text-base" htmlFor="email">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border-2 border-amber-200 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                                        placeholder="xyz@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-amber-800 mb-2 text-sm sm:text-base" htmlFor="subject">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border-2 border-amber-200 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div>
                                <label className="block text-amber-800 mb-2 text-sm sm:text-base" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="4"
                                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border-2 border-amber-200 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all duration-300 resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-amber-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-serif text-base sm:text-lg hover:bg-amber-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </section>

                {/* Map Section */}
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-2 border-amber-100">
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0c73af] mb-2">
                        Visit Our Office
                    </h2>
                    <p className="text-sm sm:text-base text-amber-700 mb-2">
                        B-701, Silver Coin, opposite Uttran Power House, Chorasi, Surat – 394105
                    </p>
                    <div className="h-64 lg:h-96 bg-amber-50 rounded-lg overflow-hidden shadow-inner">                    
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929.7354583499147!2d72.86786613305516!3d21.234155026329592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f3bc12d856d%3A0x8ae509f4528a10f3!2sSilver%20Coin!5e0!3m2!1sen!2sin!4v1738489188985!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg hover:opacity-90 transition-opacity duration-300"
                            title="KLN International Office Location"
                        />
                    </div>
                    <div className="mt-2 text-xs sm:text-sm text-amber-900">
                        <p>* Click on the map to get directions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
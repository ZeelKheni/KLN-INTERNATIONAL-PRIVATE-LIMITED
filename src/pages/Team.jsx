import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapPin, Phone, Mail } from 'lucide-react';
import { fetchTeamMembers } from '../redux/slices/teamSlice';

const Team = () => {
    const dispatch = useDispatch();
    const { items: teamMembers, status, error } = useSelector((state) => state.team);
    
    useEffect(() => {
        dispatch(fetchTeamMembers({ isActive: true }));
    }, [dispatch]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
            <div className="text-center py-20 sm:py-24 bg-amber-100/50 px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0c73af] mb-4">
                    Meet Our Leadership Team
                </h1>
                <p className="text-base sm:text-lg text-amber-700 max-w-2xl mx-auto">
                    Dedicated professionals working together to deliver excellence in international trade and distribution
                </p>
            </div>

            <div className="container mx-auto px-4 py-12">
                {status === 'loading' && (
                    <div className="flex justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0c73af]"></div>
                    </div>
                )}

                {status === 'failed' && (
                    <div className="text-center py-12">
                        <p className="text-red-500 text-lg">{error || 'Failed to load team members'}</p>
                    </div>
                )}

                {status === 'succeeded' && teamMembers.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-amber-700 text-lg">No team members found</p>
                    </div>
                )}

                {status === 'succeeded' && teamMembers.length > 0 && (
                    <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
                        {teamMembers.map((member) => (
                            <div
                                key={member._id}
                                className="bg-white p-8 sm:p-10 rounded-lg shadow-lg border-2 border-amber-100 transform transition-all duration-300 hover:shadow-xl"
                            >
                                <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
                                    <div className="w-full md:w-2/3 md:pr-8">
                                        <div className="mb-8">
                                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0c73af] mb-3">
                                                {member.name}
                                            </h2>
                                            <div className="w-20 h-1 bg-[#006dad] mb-4 rounded-full" />
                                            <h3 className="text-xl font-semibold text-amber-900 mb-4">
                                                {member.title}
                                            </h3>
                                            <p className="text-amber-700 text-lg mb-8">
                                                {member.description}
                                            </p>
                                        </div>

                                        <div className="space-y-4 border-t border-amber-100 pt-8">
                                            {member.location && (
                                                <div className="flex items-center text-amber-700">
                                                    <MapPin className="w-6 h-6 mr-4 text-[#0c73af]" />
                                                    <span className="text-lg">{member.location}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex-shrink-0 rounded-full overflow-hidden border-4 border-amber-200 shadow-lg mt-8 md:mt-0">
                                        {member.image ? (
                                            <img
                                                src={`${import.meta.env.VITE_PUBLIC_URL}/${member.image}`}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZGU5YyI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgM2MxLjY2IDAgMyAxLjM0IDMgM3MtMS4zNCAzLTMgMy0zLTEuMzQtMy0zIDEuMzQtMyAzLTN6bTAgMTQuMmMtMi41IDAtNC43MS0xLjI4LTYtMy4yMi4wMy0xLjk5IDQtMy4wOCA2LTMuMDggMS45OSAwIDUuOTcgMS4wOSA2IDMuMDgtMS4yOSAxLjk0LTMuNSAzLjIyLTYgMy4yMnoiLz48L3N2Zz4=';
                                                }}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-amber-50 flex items-center justify-center">
                                                <svg 
                                                    className="w-3/4 h-3/4 text-amber-100"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                >
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-12 text-center">
                    <p className="text-amber-700 max-w-3xl mx-auto">
                        Our leadership team brings together decades of experience in international trade,
                        quality control, and customer service. We're committed to building lasting relationships
                        with our clients and partners across the globe.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Team;

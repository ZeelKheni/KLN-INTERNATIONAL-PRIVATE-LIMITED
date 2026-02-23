import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuppliers } from '../redux/slices/suppliersSlice';

const Supplier = () => {
  const dispatch = useDispatch();
  const { items: suppliers, status, error } = useSelector((state) => state.suppliers);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSuppliers());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex justify-center items-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-[#0c73af] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-amber-700">Loading suppliers...</p>
        </div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex justify-center items-center">
        <div className="text-center max-w-md p-6 bg-white rounded-lg shadow-lg border-2 border-red-100">
          <h2 className="text-2xl font-serif font-bold text-red-600 mb-3">Error</h2>
          <p className="text-amber-700 mb-4">{error}</p>
          <button 
            onClick={() => dispatch(fetchSuppliers())}
            className="px-4 py-2 bg-[#0c73af] text-white rounded-md hover:bg-[#095886] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="text-center py-20 sm:py-24 bg-amber-100/50 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0c73af] mb-4">
          Our Trusted Suppliers
        </h1>
        <p className="text-base sm:text-lg text-amber-700 max-w-2xl mx-auto">
          We partner with industry-leading suppliers to ensure the highest quality products and services for our customers.
        </p>
      </div>

      <div className="container mx-auto px-4 py-12">
        {suppliers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-amber-700">No suppliers found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {suppliers.map((supplier) => (
              <div 
                key={supplier._id}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border-2 border-amber-100 transform transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div 
                    className="w-full md:w-1/3 h-48 bg-contain bg-no-repeat bg-center rounded-lg"
                    style={{ backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}${supplier.logo})` }}
                  />
                  <div className="w-full md:w-2/3">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0c73af] mb-3">
                      {supplier.name}
                    </h2>
                    <div className="w-16 h-1 bg-[#006dad] mb-4 rounded-full" />
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">
                      {supplier.tagline}
                    </h3>
                    <p className="text-amber-700 mb-6">
                      {supplier.description}
                    </p>

                    <div className="space-y-3">
                      {supplier.location && (
                        <div className="flex items-center text-amber-700">
                          <MapPin className="w-5 h-5 mr-3 text-[#0c73af]" />
                          <span>{supplier.location}</span>
                        </div>
                      )}
                      {supplier.phone && (
                        <div className="flex items-center text-amber-700">
                          <Phone className="w-5 h-5 mr-3 text-[#0c73af]" />
                          <span>{supplier.phone}</span>
                        </div>
                      )}
                      {supplier.email && (
                        <div className="flex items-center text-amber-700">
                          <Mail className="w-5 h-5 mr-3 text-[#0c73af]" />
                          <span>{supplier.email}</span>
                        </div>
                      )}
                      {supplier.workingHours && (
                        <div className="flex items-center text-amber-700">
                          <Clock className="w-5 h-5 mr-3 text-[#0c73af]" />
                          <span>{supplier.workingHours}</span>
                        </div>
                      )}                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Supplier;

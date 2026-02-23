import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrochures } from '../redux/slices/brochuresSlice';
import { fetchCertificates } from '../redux/slices/certificatesSlice';
import { FileText } from 'lucide-react';

const BrochuresCertificates = () => {
  const dispatch = useDispatch();

  const brochures = useSelector((state) => state.brochures.items);
  const brochuresStatus = useSelector((state) => state.brochures.status);
  const certificates = useSelector((state) => state.certificates.items);
  const certificatesStatus = useSelector((state) => state.certificates.status);

  useEffect(() => {
    if (brochuresStatus === 'idle') {
      dispatch(fetchBrochures());
    }
    if (certificatesStatus === 'idle') {
      dispatch(fetchCertificates());
    }
  }, [dispatch, brochuresStatus, certificatesStatus]);

  const loading = brochuresStatus === 'loading' || certificatesStatus === 'loading';

  const LogoItem = ({ item }) => (
    <div className="w-28 h-28 md:w-44 md:h-44 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200">
      <img
        src={import.meta.env.VITE_PUBLIC_URL + item.logo}
        alt={item.title}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-amber-50 to-white overflow-auto">
      {/* Header Section */}
      <div className="text-center mb-12 pt-20 sm:pt-24">
        <FileText className="mx-auto mb-4 text-amber-800" size={40} />
        <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-amber-900">
          Brochures & Certificates
        </h1>
        <div className="w-24 h-1 bg-amber-800 mx-auto mb-4 rounded-full" />
        <p className="text-amber-700 italic text-lg max-w-2xl mx-auto">View our brochures and certificates collection</p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-16">
          <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#0c73af]" />
          <span className="ml-3 text-[#0c73af] font-medium">Loading...</span>
        </div>
      ) : (
        <div className="container mx-auto px-4 pb-16 space-y-12">
          {/* Brochures Row */}
          <div className="bg-white/90 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6 border-b-2 border-amber-200 pb-2">Brochures</h2>
            <div className="overflow-x-auto">
              <div style={{position: "relative", paddingTop: "max(60%,324px)", width: "100%", height: "0"}}>
                <iframe 
                  style={{position: "absolute", border: "none", width: "100%", height: "100%", left: "0", top: "0"}} 
                  src="https://heyzine.com/flip-book/122899a81c.html"  
                  seamless="seamless" 
                  scrolling="no" 
                  frameBorder="0" 
                  allowTransparency="true" 
                  allowFullScreen="true">
                </iframe>
              </div>
            </div>
          </div>

          {/* Certificates Row */}
          <div className="bg-white/90 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6 border-b-2 border-amber-200 pb-2">Certificates</h2>
            <div className="overflow-x-auto">
              <div className="flex gap-6 pb-4 min-w-max">
                {certificates.length === 0 ? (
                  <p className="text-amber-700 italic">No certificates available</p>
                ) : (
                  certificates.map(certificate => (
                    <LogoItem key={certificate.id} item={certificate} />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrochuresCertificates; 
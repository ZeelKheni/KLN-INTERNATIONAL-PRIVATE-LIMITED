import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageTitle from './component/PageTitle';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './component/ScrollToTop';
import Product from './pages/Products';
import Contact from './pages/contact';
import MainProductDetails from './pages/Main-Product-Details';
import Home from './pages/Home';
import PrintersScanners from './pages/PrintersScanners';
import PrintersScannersDetails from './pages/PrintersScannersDetails';
import NotFound from './pages/NotFound';
import Whatsapp from './component/Whatsapp';
import Layout from './component/Layout';
import DetergentBleach from './pages/Detergents';
import DetergentBleachDetails from './pages/DetergentDetails';
import AboutUs from './pages/AboutUs';
import Supplier from './pages/Supplier';
import Team from './pages/Team';
import BrochuresCertificates from './pages/BrochuresCertificates';

function App() {
  return (
    <HelmetProvider>
      <AppContent />
    </HelmetProvider>
  )
}

// Separate component to use useAuth hook within AuthProvider
function AppContent() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }}>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<> <PageTitle title="Home" /> <Home /> </>} />
          <Route path="/about-us" element={<> <PageTitle title="About Us" /> <AboutUs /> </>} />
          <Route path="/products" element={<> <PageTitle title="Products" /> <Product /> </>} />
          <Route path="/printers-scanners" element={<> <PageTitle title="Printers-Scanners" /> <PrintersScanners /> </>} />
          <Route path="/printers-scanners/:name" element={<> <PageTitle title="Printers-Scanners" /> <PrintersScannersDetails /> </>} />
          <Route path="/detergent-bleach" element={<> <PageTitle title="Detergent-Bleach" /> <DetergentBleach /> </>} />
          <Route path="/detergent-bleach/:name" element={<> <PageTitle title="Detergent-Bleach" /> <DetergentBleachDetails /> </>} />
          <Route path="/product/:name" element={<> <PageTitle title="Product Detail" /> <MainProductDetails /> </>} />
          <Route path="/team" element={<> <PageTitle title="Team" /> <Team /> </>} />
          <Route path="/supplier" element={<> <PageTitle title="Supplier" /> <Supplier /> </>} />
          <Route path="/contact" element={<> <PageTitle title="Contact" /> <Contact /> </>} />
          <Route path="/brochures-certificates" element={<> <PageTitle title="Brochures & Certificates" /> <BrochuresCertificates /> </>} />
          <Route path="*" element={<> <PageTitle title="404 - Not Found" /> <NotFound /> </>} />
        </Routes>
        <Whatsapp />
      </Layout>
    </BrowserRouter>
  );
}

export default App
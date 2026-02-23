import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    const location = useLocation();
    const is404Page = location.pathname !== "/" &&
        location.pathname !== "/products" &&
        location.pathname !== "/about-us" &&
        location.pathname !== "/team" &&
        location.pathname !== "/supplier" &&
        location.pathname !== "/contact" &&
        location.pathname !== "/printers-scanners" &&
        !location.pathname.startsWith("/printers-scanners/") &&
        !location.pathname.startsWith("/product/") &&
        location.pathname !== "/detergent-bleach" &&
        !location.pathname.startsWith("/detergent-bleach/") &&
        location.pathname !== "/brochures-certificates";

    if (is404Page) {
        return children;
    }

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
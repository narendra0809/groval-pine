import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoute from "./adminComponents/ProtectedRoute";
import Navbar from "./components/Navbar";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./adminPages/AdminDashboard";
import AdminLogin from "./adminPages/AdminLogin";
import ProductsPage from "./adminPages/ProductsPage";
import ContactsPage from "./adminPages/ContactsPage";
import SliderPage from "./adminPages/SliderPage";
import Gallery from "./pages/Gallery";
import WhatsappFloat from "./components/WhatsappFloat";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {isAdminRoute ? (
        // Admin routes full width, no MaxWidthWrapper
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminDashboard />}>
              <Route path="slider" element={<SliderPage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="contacts" element={<ContactsPage />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      ) : (
        // Non-admin routes wrapped in MaxWidthWrapper
        <MaxWidthWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/gallery" element={<Gallery />} />

            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminDashboard />}>
                <Route path="slider" element={<SliderPage />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="contacts" element={<ContactsPage />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </MaxWidthWrapper>
      )}
      {!isAdminRoute && <WhatsappFloat />}
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;

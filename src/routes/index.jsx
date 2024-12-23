import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import LoginPage from "../pages/LoginPage";
import ProductView from "../pages/ishop/ProductView";
import ProductCart from '../pages/ishop/ProductCart';
import Signup from '../pages/Signup';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/cart" element={<ProductCart />} />
      </Routes>
    </Router>
  );
}

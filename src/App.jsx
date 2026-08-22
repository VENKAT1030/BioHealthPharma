import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import { pageTransition } from "./animations/variants";

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [location.pathname]);
  if (loading) return <Loader onFinish={() => setLoading(false)} />;
  return <><ScrollProgress /><Navbar /><AnimatePresence mode="wait"><motion.div key={location.pathname} {...pageTransition}><Routes location={location}><Route path="/" element={<Home />} /><Route path="/products" element={<Products />} /><Route path="/products/:id" element={<ProductDetails />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<Home />} /></Routes></motion.div></AnimatePresence><Footer /></>;
}

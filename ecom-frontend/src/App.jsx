import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Categories from "./components/Categories";
import SpecialOffers from "./components/SpecialOffers";
import BestSelling from "./components/BestSelling";
import Inspiration from "./components/Inspiration";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Shop from "./components/Shop"; // Importer la page Shop
import About from "./components/About"; // Importer la page Shop
import Blog from "./components/Blog"; // Importer la page Shop
import Contact from "./components/Contact"; // Importer la page Shop
import Cart from "./components/Cart"; // Importer la page Shop
import { CartProvider } from './context/CartContext.jsx'; // Assurez-vous d'utiliser l'extension .jsx ici

import "./App.css";

const Home = () => (
  <main>
    <HeroSection />
    <Features />
    <div className="container">
      <Categories />
      <SpecialOffers />
      <BestSelling />
      <Inspiration />
      <Testimonials />
    </div>
  </main>
);

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

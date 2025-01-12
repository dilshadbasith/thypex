import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFFDF0] flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shirts" element={<ProductList category="shirts" />} />
            <Route path="/tshirts" element={<ProductList category="tshirts" />} />
            <Route path="/pants" element={<ProductList category="pants" />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-[#EFF3EA]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=2000" 
            alt="Fashion Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in animate-slide-up">
              Elevate Your Style with THYPEX
            </h1>
            <p className="text-xl mb-8 animate-slide-up">
              Discover our premium collection of men's fashion essentials
            </p>
            <Link 
              to="/tshirts"
              className="inline-flex items-center bg-[#D9DFC6] text-black px-8 py-3 rounded-lg hover:scale-105 transition-transform"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard 
            title="Shirts" 
            image="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800"
            link="/shirts"
          />
          <CategoryCard 
            title="T-Shirts" 
            image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800"
            link="/tshirts"
          />
          <CategoryCard 
            title="Pants" 
            image="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800"
            link="/pants"
          />
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-[#EFF3EA] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up">Why Choose THYPEX?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <FeatureCard 
              title="Premium Quality" 
              description="Crafted with the finest materials for lasting comfort"
            />
            <FeatureCard 
              title="Trendy Designs" 
              description="Stay ahead with our latest fashion collections"
            />
            <FeatureCard 
              title="Fast Delivery" 
              description="Quick and reliable shipping across India"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ title, image, link }: { title: string, image: string, link: string }) => (
  <Link 
    to={link}
    className="group relative h-96 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
  >
    <img 
      src={image} 
      alt={title}
      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all">
      <div className="absolute bottom-6 left-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <span className="text-white flex items-center">
          Shop Now <ArrowRight className="ml-2 h-5 w-5" />
        </span>
      </div>
    </div>
  </Link>
);

const FeatureCard = ({ title, description }: { title: string, description: string }) => (
  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
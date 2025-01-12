import React from 'react';
import { Shield, Truck, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="bg-[#EFF3EA] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in">About THYPEX</h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8 animate-slide-up">
            We're passionate about bringing you the finest men's fashion, combining style, comfort, and quality in every piece we offer.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2024, THYPEX emerged from a simple vision: to provide men with high-quality, stylish clothing that doesn't compromise on comfort.
            </p>
            <p className="text-gray-600">
              What started as a small collection of T-shirts has grown into a comprehensive range of men's fashion essentials, each piece carefully crafted to meet our exacting standards.
            </p>
          </div>
          <div className="relative h-96">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800"
              alt="Our Store"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#FFF2C2] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Shield className="h-12 w-12" />}
              title="Quality Assurance"
              description="We never compromise on quality, ensuring each piece meets our high standards"
            />
            <ValueCard 
              icon={<Heart className="h-12 w-12" />}
              title="Customer First"
              description="Your satisfaction is our top priority, with exceptional service at every step"
            />
            <ValueCard 
              icon={<Truck className="h-12 w-12" />}
              title="Fast Delivery"
              description="Quick and reliable shipping to get your fashion essentials to you faster"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Visit Our Store</h2>
        <div className="bg-[#EFF3EA] p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <p className="text-center mb-6">
            We'd love to meet you in person! Visit our store to explore our complete collection and get personalized styling advice.
          </p>
          <div className="text-center">
            <p className="font-bold mb-2">Store Hours</p>
            <p>Monday - Saturday: 10:00 AM - 9:00 PM</p>
            <p>Sunday: 11:00 AM - 7:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ icon, title, description }) => (
  <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-[#D9DFC6] mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;
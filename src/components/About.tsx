import React from 'react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const About = () => {
  return (
    <div className="pt-24 bg-[#111111] text-white">
      {/* Hero Section */}
      <div className="bg-[#2a2a2a] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in text-red-600">About THYPEX</h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8 animate-slide-up">
          THYPEX.IN is a passionate clothing brand that brings you the finest men’s fashion essentials by combining style, comfort & quality in every piece we offer.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-white mb-4">
            THYPEX.IN was officially launched on New Year’s Day, 2025, following nearly two years of planning and development since 2023. 
            </p>
            <p className="text-white mb-4">
            Our goal was to create a clothing brand that reflects our vision while meeting the highest standards of quality and style.
            </p>
            <p className="text-white">
            This is more than a brand, it’s a growing community built on creativity and authenticity. Thank you for being with us from the start. The journey has just begun.
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
      <div className="bg-[#2a2a2a] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon=""
              title="Quality Assurance"
              description="We never compromise on quality, ensuring each piece meets our high standards"
            />
            <ValueCard 
              icon=""
              title="Customer First"
              description="Your satisfaction is our top priority, with exceptional service at every step"
            />
            <ValueCard 
              icon=""
              title="Fast Delivery"
              description="Quick and reliable shipping to get your fashion essentials to you faster"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      {/* <div className="container mx-auto px-4 py-16">
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
      </div> */}
    </div>
  );
};

const ValueCard = ({ icon, title, description }: ValueCardProps) => (
  <div className="text-center p-6 bg-[#1a1a1a] rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-[#D9DFC6] mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default About;
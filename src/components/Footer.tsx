import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] ">
      <div className="container mx-auto px-4 py-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +91 9846047839, +91 8089139648
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                thypexindia@gmail.com
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
               Kerala, India
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/shirts" className="hover:underline">Shirts</a></li>
              <li><a href="/tshirts" className="hover:underline">T-Shirts</a></li>
              <li><a href="/pants" className="hover:underline">Pants</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:scale-110 transition-transform">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/thypex.in?igsh=b2NsN3czOWkweWQz" className="hover:scale-110 transition-transform">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>&copy; 2024 THYPEX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
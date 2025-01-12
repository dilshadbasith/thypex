import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Shirt, CircleUserRound, Info, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className="bg-[#FFF2C2] shadow-md fixed w-full z-50">
    <nav className="bg-white/50 backdrop-blur-md shadow-md fixed w-full z-50 border border-white/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center space-x-2 hover:scale-105 transition-transform"
          >
            <Shirt className="h-8 w-8 text-[#D9DFC6]" />
            <span className="text-xl font-bold">THYPEX</span>
          </Link>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            <div className="space-y-2">
              <span
                className={`block w-8 h-0.5 bg-gray-600 transform transition-transform ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-gray-600 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-gray-600 transform transition-transform ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/shirts">
              <Shirt className="h-5 w-5 inline-block mr-1" />
              Shirts
            </NavLink>
            <NavLink to="/tshirts">
              <ShoppingBag className="h-5 w-5 inline-block mr-1" />
              T-Shirts
            </NavLink>
            <NavLink to="/pants">
              <CircleUserRound className="h-5 w-5 inline-block mr-1" />
              Pants
            </NavLink>
            <NavLink to="/about">
              <Info className="h-5 w-5 inline-block mr-1" />
              About Us
            </NavLink>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="pb-3 space-y-2">
            <MobileNavLink to="/shirts" onClick={() => setIsOpen(false)}>
              Shirts
            </MobileNavLink>
            <MobileNavLink to="/tshirts" onClick={() => setIsOpen(false)}>
              T-Shirts
            </MobileNavLink>
            <MobileNavLink to="/pants" onClick={() => setIsOpen(false)}>
              Pants
            </MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>
              About Us
            </MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className="text-gray-700 hover:text-gray-900 hover:scale-105 transition-all duration-200 flex items-center"
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-4 py-2 text-gray-700 hover:bg-[#D9DFC6] transition-colors duration-200"
  >
    {children}
  </Link>
);

export default Navbar;

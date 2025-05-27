import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import tshirt from '../assets/land1.jpg';
import pants from '../assets/pants.jpg';
import cap from '../assets/cap.jpg';
import tshirt2 from '../assets/tshirt2.jpg';

const Home = () => {
  return (
    <div className="pt-16 bg-black">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-black">
        <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-80"></div> 
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=2000" 
            alt="Fashion Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl ">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in animate-slide-up text-red-600">
              Dress UP, Level Up <br /> THYPEX.in
            </h1>
            <p className="text-xl mb-8 animate-slide-up text-white">
              Discover our premium collection of men's fashion essentials
            </p>
            <Link 
              to="/tshirts"
              className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg hover:scale-105 transition-transform hover:bg-black hover:text-red-600"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-16 bg-black w-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-red-600 w-full">Our Collections</h2>
        <div className="flex justify-center items-center ">
          <CategoryCard 
            title="T-Shirts" 
            image={tshirt}
            link="/shirts"
            text1="Shop Now"
          />
          
        </div>
      </div>


      {/* Upcoming Collections */}
      {/* <div className="container mx-auto px-4 py-16 bg-black">
        <h2 className="text-3xl font-bold text-center mb-12 text-red-600">Upcoming Essentials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard 
            title="Pants" 
            image={pants}
            link=""
            text1='coming soon'
          />
          <CategoryCard 
            title="Caps" 
            image={cap}
            link=""
            text1='coming soon'
          />
          <CategoryCard 
            title="T-shirts" 
            image={tshirt2}
            link=""
            text1='coming soon'
          />
        </div>
      </div> */}

      {/* Featured Section */}
      <div className="bg-[#111111] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up text-red-600">Why Choose THYPEX?</h2>
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

const CategoryCard = ({ title, image, link, text1 }: { title: string, image: string, link: string, text1: string }) => (
  <Link 
    to={link}
    className="group relative h-96 w-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
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
          {text1} {text1==="coming soon"? "": <ArrowRight className="ml-2 h-5 w-5" />}
        </span>
      </div>
    </div>
  </Link>
);

const FeatureCard = ({ title, description }: { title: string, description: string }) => (
  <div className="p-6 bg-black rounded-lg shadow-md hover:shadow-lg transition-shadow ">
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
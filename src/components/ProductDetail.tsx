import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../data/products";
import whatsappLogo from "../assets/whatsapp.png";

const ProductDetail = () => {
  const { id } = useParams();
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product not found
      </div>
    );
  }

  // Assuming product now has multiple images
  const productImages = product.images || [product.images[0]];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % productImages.length
      );
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [productImages]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handlePurchase = () => {
    const message = `Hello Thypex! I would like to purchase:%0A
Product: ${product.name}%0A
Size: ${size}%0A
Quantity: ${quantity}%0A
Price: ₹${product.offerPrice}%0A
Total: ₹${product.offerPrice * quantity}`;

    window.open(`https://wa.me/918113091954?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen flex justify-center items-center pt-24 px-4 pb-12 bg-[#2a2a2a]">
      <div className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 relative">
            <div className="relative overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentImageIndex * 100}%)`,
                  // width: `${productImages.length * 100}%`
                }}
              >
                {productImages.map((img: any, index: any) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevImage}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
              >
                <ChevronLeft className="text-white" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
              >
                <ChevronRight className="text-white" />
              </button>

              {/* Pagination Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentImageIndex === index ? "bg-white" : "bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Rest of the existing component remains the same */}
          <div className="p-8 md:w-1/2">
            <h1 className="text-3xl font-bold mb-4 text-white">
              {product.name}
            </h1>
            <p className="text-gray-600 mb-4 text-white">
              {product.description}
            </p>
            <div className="flex gap-2 items-center">
              <p className="text-lg font-bold text-white font-mono">
                ₹{product.offerPrice}
              </p>
              <p className="text-sm font-bold text-red-600 line-through font-mono ">
                ₹{product.price}
              </p>
            </div>

            <div className="mb-4 ">
              <label className="block text-sm font-medium mb-2 text-white">
                Size
              </label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#D9DFC6]"
              >
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">X-Large</option>
              </select>
            </div>

            <div className="mb-6 text-white">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center justify-center border rounded-lg overflow-hidden">
                <button
                  onClick={handleDecrement}
                  className="p-3 hover:bg-[#D9DFC6] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <div className="px-4 py-2 text-center min-w-[60px] font-medium">
                  {quantity}
                </div>
                <button
                  onClick={handleIncrement}
                  className="p-3 hover:bg-[#D9DFC6] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handlePurchase}
              className="w-full bg-[#D9DFC6] text-black font-bold py-3 px-6 rounded hover:bg-[#FFF2C2] transition-colors flex gap-2 items-center justify-center"
            >
              <img src={whatsappLogo} alt="logo" className="h-6" />
              Purchase via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

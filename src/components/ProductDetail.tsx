import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const [size, setSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  const handlePurchase = () => {
    const message = `Hello! I would like to purchase:%0A
Product: ${product.name}%0A
Size: ${size}%0A
Quantity: ${quantity}%0A
Price: ₹${product.price * quantity}%0A
Total: ₹${product.price * quantity}`;
    
    window.open(`https://wa.me/919846047839?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="max-w-4xl mx-auto bg-[#EFF3EA] rounded-lg overflow-hidden shadow-lg">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="p-8 md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-2xl font-bold mb-6">₹{product.price}</p>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Size</label>
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
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center border rounded-lg overflow-hidden">
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
              className="w-full bg-[#D9DFC6] text-black font-bold py-3 px-6 rounded hover:bg-[#FFF2C2] transition-colors"
            >
              Purchase via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
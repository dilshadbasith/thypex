import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductList = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="bg-[#EFF3EA] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold">₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
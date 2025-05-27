import { Link } from 'react-router-dom';
import { productsForList } from '../data/productsForList';



const ProductList = () => {
  return (
    <div className=" mx-auto px-4 py-32 bg-[#2a2a2a]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsForList.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="bg-[#111111] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow "
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-white">{product.name}</h2>
              {/* <p className="text-gray-600 mb-2 text-white">{product.description1}</p> */}
              <div className='flex gap-2 items-center'>
              <p className="text-lg font-bold text-white font-mono">₹{product.offerPrice}</p>
              <p className="text-sm font-bold text-red-600 line-through font-mono ">₹{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
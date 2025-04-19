import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import products from '../Data/Products';

export default function InnerProductDetail(props) {
    const { id } = props.did;
    const navigate = useNavigate();
    // const { addToCart,SetAddToCart } = useState([]); 
  
    const product = products.find((p) => p.id === parseInt(id));
  
    if (!product) {
      return <div className="text-center py-20 text-2xl font-bold">Product Not Found</div>;
    }
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      
    <button
      onClick={() => navigate('/Products')}
      className="text-blue-600 hover:text-blue-800 font-semibold mb-8 flex items-center"
    >
      ← Back to Products
    </button>

    <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
      
      {/* Image */}
      <div className="md:w-1/2 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="rounded-lg w-full h-96 object-cover"
        />
      </div>

      {/* Info */}
      <div className="md:w-1/2 p-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-gray-600">{product.description}</p>
        <div className="flex items-center">
          {Array(product.rating).fill().map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
        <div className="text-green-600 text-2xl font-bold">${product.price}</div>

        <button
        //   onClick={(prev) => {[...prev],product}}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition cursor-pointer"
        >
          Add to Cart
        </button>
      </div>

    </div>
  </div>
  )
}

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/CartSlice';
import products from '../Data/Products';

const ProductDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = products.find((p) => p.id === parseInt(id));

  const handleclick=()=>{
    dispatch(addToCart(product))
    alert("Item added");
  }

  if (!product) {
    return <div className="text-center py-20 text-2xl font-bold">Product Not Found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <button onClick={() => navigate('/Products')} className="text-blue-600 font-semibold mb-8">
        ← Back
      </button>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg">
        <div className="md:w-1/2 p-6">
          <img src={product.image} alt={product.title} className="rounded-lg w-full h-96 object-cover" />
        </div>
        <div className="md:w-1/2 p-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>
          <div className="text-green-600 text-2xl font-bold">${product.price}</div>
          <button
            onClick={()=>handleclick() }
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

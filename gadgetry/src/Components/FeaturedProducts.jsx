import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../Redux/ProductSlice';
import axios from 'axios';
// import { useSelector } from 'react-redux';


const ProductsSection = () => {
  const [featuredProducts,ssetfeaturedproducts]=useState([]);
  const dispatch=useDispatch();

  // const featuredProducts  = useSelector((state) => state.product.products);
  useEffect(()=>{
    const fetchdata=async()=>{
      const response = await axios.get('http://localhost:3000/products');
      dispatch(setProducts(response.data));
      ssetfeaturedproducts(response.data);
    }
    fetchdata();
  },[])

  const featuredProducts2=featuredProducts.filter(val=>val.isFeatured===true);
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {featuredProducts2.map((product) => (
          <Link key={product.id} to={`/Products/ProductDetail/${product._id}`}>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 p-4 group cursor-pointer">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-1">{product.title}</h3>
              {/* <div className="flex items-center mb-2">
                {Array(product.rating).fill().map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div> */}
              <p className="text-green-600 text-xl font-semibold">${product.price}</p>
              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;

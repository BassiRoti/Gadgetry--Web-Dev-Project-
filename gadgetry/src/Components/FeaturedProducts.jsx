import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { setProducts } from '../Redux/ProductSlice';
import axios from 'axios';

const ProductsSection = () => {
  const [products,setProducts]=useState([]);
  // const [featuredProducts,setFeaturedProducts]=useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get('http://localhost:3000/products');
        setProducts(res.data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setProducts([]);
      }
    };
    fetchdata();
  },[]);

  const featuredProducts= products.filter((product) => product.isFeatured === true);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <Link key={product._id} to={`/Products/ProductDetail/${product._id}`}>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 p-4 group cursor-pointer">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-1">{product.title}</h3>
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

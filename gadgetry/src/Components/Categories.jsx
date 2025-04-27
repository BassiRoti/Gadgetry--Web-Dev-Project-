import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

const Categories = () => {
  const [tempcategories,settempcategories]=useState([]);
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/products');
        settempcategories(res.data);
      } catch (err) {
        console.error('Error fetching products:', err);
        settempcategories([]); 
      }
    };
  
    fetchAllProducts();
  }, []);

  const categories = Array.from(
    new Map(tempcategories.map((category) => [category.category, category])).values()
  ).slice(0, 4);
  
  // const categories=categoriestemp.filter
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Shop by Category</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
  {categories.map((category, idx) => (
    <Link key={idx} to={`/Categories/${category.category}`}>
      <div className="relative group rounded-xl bg-gray-200 h-40 flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
        <h3 className="text-gray-800 text-2xl font-bold">{category.category}</h3>
        {console.log(category.category)}
      </div>
    </Link>
  ))}
</div>
    </section>
  );
};

export default Categories;

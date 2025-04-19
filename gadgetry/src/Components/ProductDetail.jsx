import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, title: 'Macbook Air M2', price: 1199, image: 'https://via.placeholder.com/400x300', rating: 5 },
  { id: 2, title: 'iPhone 14 Pro', price: 999, image: 'https://via.placeholder.com/400x300', rating: 4 },
  { id: 3, title: 'Sony WH-1000XM5', price: 349, image: 'https://via.placeholder.com/400x300', rating: 5 },
  { id: 4, title: 'Samsung Galaxy S23', price: 899, image: 'https://via.placeholder.com/400x300', rating: 4 },
];

const Products = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen relative">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          <h1 className="text-2xl font-bold text-blue-600">ElectroMart</h1>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-2">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none transition w-72"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Search
            </button>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={toggleSidebar} className="text-blue-600 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex max-w-7xl mx-auto mt-6 px-4 gap-6">
        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 w-64 bg-white shadow-md h-full p-6 z-40 transform transition-transform duration-300 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:static md:translate-x-0 md:w-1/4 md:h-auto md:shadow-none`}
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">Categories</h2>
          <ul className="space-y-4">
            <li><a href="#" className="block hover:text-blue-700 transition">Laptops</a></li>
            <li><a href="#" className="block hover:text-blue-700 transition">Smartphones</a></li>
            <li><a href="#" className="block hover:text-blue-700 transition">Headphones</a></li>
            <li><a href="#" className="block hover:text-blue-700 transition">Gaming</a></li>
          </ul>
        </aside>

        {/* Product Grid */}
        <section className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link key={product.id} to={`/Products/ProductDetail/${product.id}`}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300 p-4 cursor-pointer">
                  <img src={product.image} alt={product.title} className="rounded-lg mb-4 w-full h-48 object-cover" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{product.title}</h3>
                  <div className="flex items-center mb-2">
                    {Array(product.rating).fill().map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-green-600 text-xl font-semibold">${product.price}</p>
                  <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    View Details
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;

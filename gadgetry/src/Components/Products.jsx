import React, { useState } from 'react';
import { Link } from 'react-router';


const Products = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          <h1 className="text-2xl font-bold text-blue-600">Gadgetry</h1>
          <div className="flex items-center space-x-4">
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
            {/* Sidebar Toggle Button (Mobile) */}
            <button className="md:hidden text-blue-600" onClick={toggleSidebar}>
              {sidebarOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
              
            </button>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto mt-6 px-4 gap-6">
        
        {/* Sidebar */}
        <aside className={`fixed md:static top-16 left-0 bg-white shadow-lg md:shadow-none w-64 md:w-1/4 h-full md:h-auto p-6 z-40 transition-transform transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">Categories</h2>
          <ul className="space-y-4">
            <li><a href="#" className="block hover:text-blue-700 transition">Laptops</a></li>
            <li><a href="#" className="block hover:text-blue-700 transition">Smartphones</a></li>
            <li><a href="#" className="block hover:text-blue-700 transition">Accessories</a></li>
            <li><a href="#" className="block hover:text-blue-700 transition">Gaming</a></li>
            <li><a href="#" className="block hover:text-blue-700 transition">Wearables</a></li>
            <li><a href="#" className="block hover:text-blue-700 transition">Audio</a></li>
          </ul>
        </aside>

        {/* Product Grid */}
        <section className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

           
            {/* Product Cards */}
            <Link to='/Products/ProductDetail/2'>
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-xl transition-transform transform hover:-translate-y-1 ">
              <img src="https://via.placeholder.com/300x200" alt="Ultra Laptop Pro" className="rounded-md mb-4 object-cover w-full h-48" />
              <h3 className="text-lg font-semibold mb-2 truncate">Ultra Laptop Pro</h3>
              <p className="text-gray-600 mb-2">$1299.99</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
            </Link>

            <div className="bg-white p-5 rounded-lg shadow hover:shadow-xl transition-transform transform hover:-translate-y-1">
              <img src="https://via.placeholder.com/300x200" alt="Smartphone X12" className="rounded-md mb-4 object-cover w-full h-48" />
              <h3 className="text-lg font-semibold mb-2 truncate">Smartphone X12</h3>
              <p className="text-gray-600 mb-2">$899.99</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>

            <div className="bg-white p-5 rounded-lg shadow hover:shadow-xl transition-transform transform hover:-translate-y-1">
              <img src="https://via.placeholder.com/300x200" alt="Noise Canceling Headphones" className="rounded-md mb-4 object-cover w-full h-48" />
              <h3 className="text-lg font-semibold mb-2 truncate">Noise Canceling Headphones</h3>
              <p className="text-gray-600 mb-2">$199.99</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default Products;

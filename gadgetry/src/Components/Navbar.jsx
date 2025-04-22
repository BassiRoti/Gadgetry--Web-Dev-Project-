import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import products from '../Data/Products'; // 👈 Import your products array

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // Filtered search results
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectProduct = (id) => {
    setSearch('');
    navigate(`/Products/ProductDetail/${id}`);
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Gadgetry
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-col relative">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for gadgets..."
              className="bg-transparent focus:outline-none w-60"
            />
          </div>

          {/* Search Results Dropdown */}
          {search.length > 0 && (
            <div className="absolute top-14 left-0 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSelectProduct(product.id)}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-800"
                  >
                    {product.title}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-400">No products found.</div>
              )}
            </div>
          )}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <Link to="/cart" className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13m-13-6H3m6 6a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
          </Link>

          <Link to="/Login" className="text-gray-700 hover:text-blue-600 font-semibold">
            Login
          </Link>
        </div>

      </div>
    </nav>  
  );
};

export default Navbar;

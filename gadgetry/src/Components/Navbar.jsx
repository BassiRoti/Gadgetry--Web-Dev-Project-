import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {logout} from '../Redux/LoginSlice/index'

const Navbar = () => {
  const [search, setSearch] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  const loginstate = useSelector((state) => state.login.login);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectProduct = (id) => {
    setSearch('');
    navigate(`/Products/ProductDetail/${id}`);
  };

  const handleLogout = () => {
    dispatch(logout());
    setShowMenu(false);
    navigate('/');
  };

  const username = loginstate?.email.split('@')[0];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Gadgetry
        </Link>


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

          {search.length > 0 && (
            <div className="absolute top-14 left-0 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product._id}
                    onClick={() => handleSelectProduct(product._id)}
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


<div className="flex items-center gap-6 relative">
  <Link to="/cart" className="relative">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13m-13-6H3m6 6a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  </Link>

  {loginstate?.role === 'admin' && (
    <Link
      to="/Admin"
      className="text-gray-700 hover:text-blue-600 font-semibold"
    >
      Admin Panel
    </Link>
  )}

  {loginstate ? (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="text-gray-800 font-semibold hover:text-blue-600"
      >
        Hi, {username}
      </button>
      {showMenu && (
        <div className="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-md py-2 z-50">
          <button
            onClick={handleLogout}
            className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  ) : (
    <Link to="/Login" className="text-gray-700 hover:text-blue-600 font-semibold">
      Login
    </Link>
  )}
</div>

      </div>
    </nav>
  );
};

export default Navbar;

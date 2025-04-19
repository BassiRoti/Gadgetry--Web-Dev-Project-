import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">

        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Gadgetry</h3>
          <p className="text-gray-400">
            The future of electronics shopping. Discover top gadgets, unbeatable prices, and exclusive offers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/Products" className="hover:underline">Products</Link></li>
            <li><Link to="/Cart" className="hover:underline">Cart</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-white">Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-white">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">📘</a>
            <a href="#" className="hover:text-white">📸</a>
            <a href="#" className="hover:text-white">🐦</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Gadgetry. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleSidebar} className="text-gray-600 text-2xl">
          ✕
        </button>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Categories</h2>
        <ul className="space-y-4 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-600 transition">Laptops</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Smartphones</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Headphones</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Gaming</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 h-[500px] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1581090700227-1be2756b9854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
          alt="Tech Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative text-center z-10 space-y-6 px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Discover the Future of Tech</h1>
        <p className="text-lg md:text-2xl">Shop the latest gadgets, laptops, and accessories at unbeatable prices!</p>
        <Link to="/Products">
          <button className="mt-4 px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

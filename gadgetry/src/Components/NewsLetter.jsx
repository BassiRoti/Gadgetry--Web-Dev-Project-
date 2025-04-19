import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-blue-600 text-white py-16 px-4 mt-20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Subscribe to our Newsletter</h2>
        <p className="text-lg">
          Stay updated with the latest gadgets and exclusive offers. Get 10% off your first purchase!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-full w-full sm:w-96 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

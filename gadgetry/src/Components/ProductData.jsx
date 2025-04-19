import React from 'react';
import { Link } from 'react-router-dom';

const featuredProducts = [
  {
    id: 1,
    title: 'MacBook Pro M2',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1580894894510-931ff7083718?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 5,
  },
  {
    id: 2,
    title: 'iPhone 14 Pro Max',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4,
  },
  {
    id: 3,
    title: 'Sony WH-1000XM5 Headphones',
    price: 349,
    image: 'https://images.unsplash.com/photo-1606902965553-380cad8e60c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 5,
  },
  {
    id: 4,
    title: 'PlayStation 5',
    price: 499,
    image: 'https://images.unsplash.com/photo-1606813908656-c3c660d47ab7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 5,
  },
];

const ProductsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <Link key={product.id} to={`/Products/ProductDetail/${product.id}`}>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 p-4 group cursor-pointer">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-1">{product.title}</h3>
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
  );
};

export default ProductsSection;

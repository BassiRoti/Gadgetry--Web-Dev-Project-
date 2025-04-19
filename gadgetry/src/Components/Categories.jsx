import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Laptops',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/Products?category=laptops'
  },
  {
    name: 'Smartphones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/Products?category=smartphones'
  },
  {
    name: 'Headphones',
    image: 'https://images.unsplash.com/photo-1616594108859-74c3dc84e8b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/Products?category=headphones'
  },
  {
    name: 'Gaming',
    image: 'https://images.unsplash.com/photo-1587202372775-321b63b79ff4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/Products?category=gaming'
  },
];

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Shop by Category</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((category, idx) => (
          <Link key={idx} to={category.link}>
            <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;

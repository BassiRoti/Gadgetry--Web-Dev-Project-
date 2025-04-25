import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CategoryProducts() {
  const { id } = useParams(); // 'id' is the category name
  const allProducts = useSelector((state) => state.product.products);

  const products = allProducts.filter((obj) => obj.category === id);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Showing Products in <span className="text-blue-600">{id}</span> Category
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product._id} to={`/Products/ProductDetail/${product._id}`}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300 p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                <p className="text-green-600 font-bold text-xl">${product.price}</p>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Stock: {product.stock}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

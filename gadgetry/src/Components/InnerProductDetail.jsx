import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addToCart } from '../Redux/CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { reduceStock } from '../Redux/ProductSlice';

const ProductDetail = () => {
  
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logincheck = useSelector((state) => state.login.login);

  // Fetch the product dynamically from Redux state
  const product = useSelector((state) =>
    state.product.products.find((p) => p._id === id)
  );

  const [quantity, setQuantity] = useState(1);

  const handleclick = () => {
    if (logincheck) {
      for (let i = 0; i < quantity; i++) {
        dispatch(addToCart(product));
      }

      // Dispatch action to reduce stock in Redux
      dispatch(reduceStock({ productId: product._id, quantity }));

      console.log(`Dispatched reduceStock for product ${product._id} with quantity ${quantity}`);
      alert(`${quantity} item(s) added to cart`);
    } else {
      alert("Login first to shop");
    }
  };

  if (!product) {
    return <div className="text-center py-20 text-2xl font-bold">Product Not Found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <button onClick={() => navigate('/Products')} className="text-blue-600 font-semibold mb-8">
        ← Back
      </button>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg">
        <div className="md:w-1/2 p-6">
          <img src={product.image} alt={product.title} className="rounded-lg w-full h-96 object-cover" />
        </div>
        <div className="md:w-1/2 p-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>
          <div className="text-green-600 text-2xl font-bold">${product.price}</div>
          <div className="text-gray-600">Stock: {product.quantity}</div> {/* Display updated stock */}

          <div className="mt-4">
            <label className="block mb-2 text-gray-600 font-medium">Quantity</label>
            <input
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => {
                const value = Math.max(1, parseInt(e.target.value) || 1);
                if (value <= product.stock) {
                  setQuantity(value);
                }
              }}
              className="border rounded-lg px-4 py-2 w-20 text-center focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <button
            onClick={handleclick}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

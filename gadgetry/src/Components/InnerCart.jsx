import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/CartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Group items by _id and count quantity
  const groupedItems = cartItems.reduce((acc, item) => {
    const found = acc.find((i) => i._id === item._id);
    if (found) {
      found.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  // Total Price
  const totalPrice = groupedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>

      {groupedItems.length === 0 ? (
        <div className="text-center py-20 text-xl">
          Your cart is empty.
          <Link to="/Products" className="text-blue-600 font-semibold ml-2 hover:underline">
            Shop now
          </Link>
        </div>
      ) : (
        <>
          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groupedItems.map((item) => (
              <div key={item._id} className="flex items-center bg-white rounded-lg shadow p-4 space-x-4">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  <button
                    onClick={() => dispatch(removeFromCart(item._id))}
                    className="mt-2 text-red-500 hover:text-red-700 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="mt-12 text-right">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Total: ${totalPrice.toFixed(2)}
            </h2>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

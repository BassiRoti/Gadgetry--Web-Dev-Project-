import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, decreaseQuantity, increaseQuantity } from '../Redux/CartSlice';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
  
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const groupedItems = cartItems.reduce((acc, item) => {
    const found = acc.find((i) => i._id === item._id);
    if (found) {
      found.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);


  const totalPrice = groupedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleIncrease = async (item) => {
    try {
      const res = await axios.get(`http://localhost:3000/products`);
      const product = res.data.find((p) => p._id === item._id);
  
      if (!product) {
        alert('Product not found');
        return;
      }
  
      if (product.quantity > 0) {
        dispatch(increaseQuantity(item));
  
        await axios.patch(`http://localhost:3000/products/${item._id}`, { quantity: product.quantity - 1 });
      } else {
        alert('No more stock available');
      }
    } catch (err) {
      console.error('Error increasing quantity:', err);
      alert('Error increasing quantity');
    }
  };
  
  const handleDecrease = async (item) => {
    try {
      dispatch(decreaseQuantity(item._id));

      const res = await axios.get(`http://localhost:3000/products`);
      const product = res.data.find((p) => p._id === item._id);
  
      if (product) {
        await axios.patch(`http://localhost:3000/products/${item._id}`, { quantity: product.quantity + 1 });
      }
    } catch (err) {
      console.error('Error decreasing quantity:', err);
      alert('Error decreasing quantity');
    }
  };

  const handleRemoveItem = async (item) => {
    try {
      dispatch(removeFromCart(item._id)); 
  
      const res = await axios.get(`http://localhost:3000/products`);
      const product = res.data.find((p) => p._id === item._id);
  
      if (product) {
        await axios.patch(`http://localhost:3000/products/${item._id}`, { quantity: product.quantity + item.quantity });
      }
    } catch (err) {
      console.error('Error removing item:', err);
      alert('Error removing item');
    }
  };

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groupedItems.map((item) => (
              <div key={item._id} className="flex items-center bg-white rounded-lg shadow p-4 space-x-4">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button 
                      onClick={() => handleDecrease(item)}
                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={()=>handleIncrease(item)} 
                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item)}
                    className="mt-4 text-red-500 hover:text-red-700 transition"
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-right">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Total: ${totalPrice.toFixed(2)}
            </h2>
            <Link to='/Checkout'>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

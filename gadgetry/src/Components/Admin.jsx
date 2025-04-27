import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/LoginSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const loginState = useSelector((state) => state.login.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
    isFeatured: false,
    quantity: 1,
  });
  const [myProducts, setMyProducts] = useState([]);

  const fetchMyProducts = async () => {
    try {
      const res = await axios.get('http://localhost:3000/products');
      const filtered = res.data.filter(
        (product) => product.addedBy === loginState._id
      );
      setMyProducts(filtered);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    if (loginState) {
      fetchMyProducts();
    }
  }, [loginState]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/products', {
        ...form,
        addedBy: loginState._id,
      });
      alert('Product added successfully!');
      setForm({
        title: '',
        price: '',
        description: '',
        image: '',
        category: '',
        isFeatured: false,
        quantity: 1,
      });
      fetchMyProducts();
    } catch (err) {
      console.error('Error adding product:', err);
      alert('Error adding product');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      fetchMyProducts();
    } catch (err) {
      console.error('Error deleting product:', err);
      alert('Error deleting product');
    }
  };

  const handleUpdateStock = async (id, newQuantity) => {
    try {
      await axios.patch(`http://localhost:3000/products/${id}`, { quantity: newQuantity });
      fetchMyProducts();
    } catch (err) {
      console.error('Error updating stock:', err.response?.data || err.message);
      alert('Error updating stock');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  if (!loginState || loginState.role !== 'admin') {
    return (
      <div className="text-center text-2xl text-red-600 mt-20">
        Access Denied. Only Admins Allowed.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-blue-600">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold"
        >
          Logout
        </button>
      </div>

      {/* Add Product Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow mb-12">
        {['title', 'price', 'description', 'image', 'category', 'quantity'].map((field) => (
          <input
            key={field}
            type={field === 'price' || field === 'quantity' ? 'number' : 'text'}
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ))}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isFeatured"
            checked={form.isFeatured}
            onChange={handleChange}
          />
          Featured Product
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-bold"
        >
          Add Product
        </button>
      </form>

      {/* Display Products */}
      <h3 className="text-2xl font-bold mb-6 text-gray-700">Your Products</h3>

      {myProducts.length === 0 ? (
        <p className="text-gray-500">No products added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myProducts.map((product) => (
            <div key={product._id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h4 className="text-lg font-bold text-gray-800">{product.title}</h4>
              <p className="text-green-600 font-semibold">${product.price}</p>
              <p className="text-gray-500 text-sm mb-2">{product.category}</p>
              <p className="text-gray-700 text-sm mb-2">Quantity: {product.quantity}</p>

              {/* Update Quantity */}
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="number"
                  min="0"
                  placeholder="Update Quantity"
                  onChange={(e) => handleUpdateStock(product._id, Number(e.target.value))}
                  className="w-24 border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleDelete(product._id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;

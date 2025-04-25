import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const AdminPanel = () => {
  const loginState = useSelector((state) => state.login.login);

  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
    isFeatured: false,
    quantity: 1,
  });

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
      await axios.post('http://localhost:3000/products', form);
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
    } catch (err) {
      alert('Error adding product');
    }
  };

  if (!loginState || loginState.role !== 'admin') {
    return (
      <div className="text-center text-xl text-red-600 mt-20">
        ❌ Access Denied. You must be an admin to view this page.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Admin - Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          Featured
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;

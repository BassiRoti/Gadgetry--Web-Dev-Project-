import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Categories from './Categories';
import ProductData from '../Components/ProductData'

const products = [
  { id: 1, title: 'Macbook Air M2', price: 1199, image: 'https://via.placeholder.com/400x300', rating: 5 },
  { id: 2, title: 'iPhone 14 Pro', price: 999, image: 'https://via.placeholder.com/400x300', rating: 4 },
  { id: 3, title: 'Sony WH-1000XM5', price: 349, image: 'https://via.placeholder.com/400x300', rating: 5 },
  { id: 4, title: 'Samsung Galaxy S23', price: 899, image: 'https://via.placeholder.com/400x300', rating: 4 },
];

const Products = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
    <Navbar/>
    <Hero/>
    <Categories/>
    <ProductData/>
  
    

    </>
  );
};

export default Products;

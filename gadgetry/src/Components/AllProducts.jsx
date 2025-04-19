import React from 'react';
import { Link } from 'react-router-dom';
import products from '../Data/Products'; 
import Navbar from './Navbar';
import InnerAllProducts from './InnerAllProducts';
import Footer from './Footer';

const ProductsSection = () => {
  return (
    <>
    <Navbar/>
    <InnerAllProducts/>
    <Footer/>
    </>
    
  );
};

export default ProductsSection;

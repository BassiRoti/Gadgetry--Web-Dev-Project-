import React, { useState } from 'react';
import Navbar from './Navbar';
import InnerProductDetail from './InnerProductDetail';
import Footer from './Footer';
import { useParams } from 'react-router';


const ProductDetail = () => {
  const {id}=useParams();

  return (
    <>
    <Navbar/>
    <InnerProductDetail did={id}/>
    <Footer/>
    </>
  );
};

export default ProductDetail;

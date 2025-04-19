import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Categories from './Categories';
import FeaturedProducts from '../Components/FeaturedProducts'
import Newsletter from './NewsLetter';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Products = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
    <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
   <Navbar toggleSidebar={toggleSidebar} />
    {/* <Navbar/> */}
    <Sidebar/>
    <Hero/>
    <Categories/>
    <FeaturedProducts/>
    <Newsletter/>
    <Footer/>
  
    

    </>
  );
};

export default Products;

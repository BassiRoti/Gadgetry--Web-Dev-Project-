import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Products from './Components/Products'
import ProductDetail from './Components/ProductDetail'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
function App() {
  

  return (
    <>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Products/>} />
            <Route path='/SignUp' element={<SignUp/>} />
            <Route path='/Products' element={<Products/>} />
            <Route path='/Products/ProductDetail/:id' element={<ProductDetail/>}/>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/Checkout' element={<Checkout/>} />
            <Route path='/login' element={<Login/>}></Route>
          </Routes>
          </BrowserRouter>
    </>
  )
}

export default App

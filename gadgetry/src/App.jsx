import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Products from './Components/Products'
import ProductDetail from './Components/ProductDetail'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import AllProducts from './Components/AllProducts'
import Admin from './Components/Admin'
import CategoryProducts from './Components/CategoryProducts'
// import Categories from './Components/Categories'
import { loadStripe } from '@stripe/stripe-js';
  import { Elements } from '@stripe/react-stripe-js';
  import ProtectedRoute from './Components/ProtectedRoute'
  // import CheckoutForm from './CheckoutForm';
  const stripePromise = loadStripe('123');
function App() {
  

  return (
    <>
          <BrowserRouter>
          <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/SignUp' element={<SignUp/>} />

          <Route element={<ProtectedRoute adminOnly={true}/>} >
          <Route path='/Admin' element={<Admin/>}></Route>
          </Route>

          <Route element={<ProtectedRoute adminOnly={false}/> }>
            <Route path='/' element={<Products/>} />
            <Route path='/Products' element={<Products/>} />
            <Route path='/Products/ProductDetail/:id' element={<ProductDetail/>}/>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/AllProducts' element={<AllProducts/>}></Route>
            <Route path='/Categories/:id' element={<CategoryProducts/>} />
            </Route>
            

            <Route path='/Checkout' element={<Elements stripe={stripePromise}><Checkout /></Elements>}

            
        />


          </Routes>
          </BrowserRouter>
    </>
  )
}

export default App

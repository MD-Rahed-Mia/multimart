import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './../Pages/Home.jsx';
import Cart from './../Pages/Cart.jsx';
import Product from './../Pages/Product.jsx';
import Shop from './../Pages/Shop.jsx';
import SignIn from './../Pages/SignIn.jsx';
import SignUp from './../Pages/SignUp.jsx';




export default function Routers() {
  return (<Routes>
    <Route path='/' element={<Navigate to={'home'} /> } />
    <Route path='home' element={<Home />} />
    <Route path='Cart' element={<Cart />} />
    <Route path='product/:id' element={<Product />} />
    <Route path='Shop' element={<Shop />} />
    <Route path='Signin' element={<SignIn />} />
    <Route path='Signup' element={<SignUp />} />
  </Routes>
  )
}

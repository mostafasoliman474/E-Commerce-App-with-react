import * as React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import Shopping from './pages/Shopping'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Product from './pages/Product'



const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='login' element={<LogIn />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='product' element={<Product />}></Route>
        <Route path='shopping' element={<Shopping />}></Route>
        
      </Routes>
    </div>
    
  )
}
export default App;
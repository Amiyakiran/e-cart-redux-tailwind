import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'
function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/wishlist' element={<Wishlist/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App

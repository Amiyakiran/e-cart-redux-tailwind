import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';



function Header() {
  const wishArray = useSelector((state)=>state.wishlistReducer)
  const cartArray = useSelector((state)=>state.cartReducer)
  const [ show , setShow] = useState(false)
  const change = ()=>{

    setShow(!show)}
  
  return (
    <>
      <nav className='p-5 bg-violet-900 text-white fixed w-full'>
        <div className='md:flex items-center mt-3 md:mt-0'>
          <div className='flex items-center'>
          <Link to={'/'}>  <h1 className='text-3xl'> <FontAwesomeIcon icon={faCartShopping} className="me-3" />Ecart</h1></Link>
            <button onClick={change} className='border border-dark rounded p-3 ms-auto md:hidden'><FontAwesomeIcon icon={faBars} /></button>
          </div>
          { show && <ul className='ms-auto flex md:hidden mt-5 md:mt-0  ' show={show}>
            <li>
              <Link to={'/wishlist'}><button onClick={change} className='px-6 py-3 border border-white rounded me-5 hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faHeart} style={{color: "#cc3419",}} className='me-3' />Wishlist</button></Link>
            </li>
            <li>
            <Link to={'/cart'}>  <button onClick={change} className='px-6 py-3 border border-white rounded md:me-5 hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faCartShopping} style={{color: "#0abd2e",}} className='me-3' />Cart</button></Link>
            </li>
          </ul>}
          <ul className='ms-auto md:flex mt-5 md:mt-0 hidden ' show={show}>
            <li>
              <Link to={'/wishlist'}><button  className='px-6 py-3 border border-white rounded me-5 hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faHeart} style={{color: "#cc3419",}} className='me-3' />Wishlist <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{wishArray?.length}</span></button></Link>
            </li>
            <li>
             <Link to={'/cart'}> <button className='px-6 py-3 border border-white rounded md:me-5 hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faCartShopping} style={{color: "#0abd2e",}} className='me-3' />Cart <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{cartArray?.length}</span></button></Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
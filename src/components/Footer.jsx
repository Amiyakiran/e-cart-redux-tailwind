import { faTwitter,faLinkedinIn,faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='md:grid grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] px-10 w-full py-10 bg-violet-900 text-white overflow-x-hidden'>
        <div className="md:p-6">
        <h3 className='text-3xl'><FontAwesomeIcon icon={faCartShopping} className='me-2' />E-CART</h3>
            <p className='mt-4' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit velit placeat quasi animi maxime natus vero aspernat blanditiis magni, molestias
            similique? Nesciunt, aspernatur?</p>
        </div>
        <div className="md:flex justify-center md:p-6 mt-5 md:mt-0">
        <div>
            <h3 className='text-3xl'>Links</h3>
           <Link to={'/'} className='text-white'> <p className='mt-4'>Home</p></Link>
           <Link to={'/wishlist'} className='text-white'> <p>Wishlist</p></Link>
           <Link to={'/cart'} className='text-white'> <p>Cart</p></Link>
         </div>
        </div>
        <div className="md:p-6 md:flex justify-center mt-5 md:mt-0">
        <div>
            <h3 className='text-3xl'>Guides</h3>
            <p className='mt-4'>React</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>
         </div>
        </div>
        <div className="md:py-6 md:px-10 mt-5 md:mt-0">
        <div>
            <h3 className='text-3xl'>Contact Us</h3>
            <div className="flex mt-4">
              <input type="text" placeholder='Email Id' className='ps-3 rounded me-3 w-full'  />
              <button className='p-3 bg-orange-600 rounded'>SubScribe</button>
            </div>
            <div className="flex justify-between mt-4">
            <FontAwesomeIcon icon={faTwitter} className='fa-2x' />
            <FontAwesomeIcon icon={faLinkedinIn} className='fa-2x'  />
            <FontAwesomeIcon icon={faFacebook} className='fa-2x'  />
            <FontAwesomeIcon icon={faInstagram} className='fa-2x'  />
            </div>
         </div>
        </div>
    </div>
  )
}

export default Footer
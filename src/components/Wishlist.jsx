import React from 'react'
import {  faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlistReducer)
  console.log(wishlistArray);

  const dispatch = useDispatch()

  const handleCart = (item) => {
    dispatch(addToCart(item))
    dispatch(removeItem(item.id))
  }
  return (
    <div className='pt-40'>
      <h1 className='text-violet-700 text-center text-4xl'>Wishlist</h1>
      {wishlistArray?.length > 0 ? <div className="md:grid grid-cols-4 md:p-10 p-5">

        {wishlistArray?.map((item)=>(
           <div className=' p-4 m-3 shadow-lg rounded'>
           <img src={item?.thumbnail} alt="" className='w-full max-h-64' />
           <div>
             <h2>{item?.title}</h2>
             <p>{item?.description}</p>
             <p>Price :<span className='text-violet-500'> $ {item?.price}</span></p>
             <div className="flex mt-4 justify-between">
               <button onClick={()=>dispatch(removeItem(item?.id))} className='bg-red-500 px-3 py-2 text-white rounded hover:border hover:border-red-500  hover:bg-white hover:text-red-500'><FontAwesomeIcon icon={faTrash} /></button>
               <button onClick={()=>handleCart(item)} className='bg-green-600 px-3 py-2 text-white rounded hover:border hover:border-green-600  hover:bg-white hover:text-green-600'><FontAwesomeIcon icon={faCartShopping} /></button>
             </div>
           </div>
 
         </div>
        ))
         }

      </div>
        :

        <div style={{ width: '100%', height: '80vh' }} className='flex justify-center items-center'>
          <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="no image" className='w-1/2' />
        </div>
      }
    </div>
  )
}

export default Wishlist
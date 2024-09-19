import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';



function Home() {
  const data  = useFetch('https://dummyjson.com/products')
  console.log(data);
  const dispatch = useDispatch()
  return (
    <div className='pt-20'>
        <div className="md:grid grid-cols-4 md:p-10 p-5">
         {data.length>0?
          data.map((item)=>(
            <div className=' p-4 m-3 shadow-lg rounded'>
            <img src={item?.thumbnail} alt="" className='w-full max-h-64' />
            <div>
              <h2>{item?.title}</h2>
              <p>{item?.description}</p>
              <p>Price :<span className='text-violet-500'> $ {item?.price}</span></p>
              <div className="flex mt-4 justify-between">
                <button onClick={()=>dispatch(addToWishList(item))} className='bg-red-500 px-3 py-2 text-white rounded hover:border hover:border-red-500  hover:bg-white hover:text-red-500'><FontAwesomeIcon icon={faHeart} /></button>
                <button onClick={()=>dispatch(addToCart(item))} className='bg-green-600 px-3 py-2 text-white rounded hover:border hover:border-green-600  hover:bg-white hover:text-green-600'><FontAwesomeIcon icon={faCartShopping} /></button>
              </div>
            </div>

          </div>
          )) : 
          <p>Nothing to display</p>
          }


          

         
        </div>
    </div>
  )
}

export default Home
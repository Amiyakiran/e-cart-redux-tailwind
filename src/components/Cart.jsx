import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'


function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()

  const getTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray?.map((item)=>item.price).reduce((n1, n2)=>n1+n2))
    }
    else{
      setTotal(0)
    }
  }
  useEffect(()=>{
      getTotal()
  },[cartArray])

  const handleCheckout = ()=>{
    alert('Order Placed successfully')
    dispatch(emptyCart())
      navigate('/')
  }
  return (
    <div className='pt-40'>
      <h1 className='text-violet-700 text-center text-4xl'>Cart</h1>
      {cartArray?.length>0?
      <div className="md:grid grid-cols-[2fr_1fr] md:p-10 p-5 w-full">
        <div className='pt-6 md:px-10 overflow-x-auto'>
          <table className='w-full border border-gray-400 shadow-lg'>
            <thead>
              <tr >
                <th className='border border-gray-100 p-3 bg-gray-400 '>#</th>
                <th className='border border-gray-100 p-3 bg-gray-400'>Title</th>
                <th className='border border-gray-100 p-3 bg-gray-400'>Image</th>
                <th className='border border-gray-100 p-3 bg-gray-400'>Price</th>
                <th className='border border-gray-100 p-3 bg-gray-400'>Action</th>
              </tr>
            </thead>
            <tbody>
             {cartArray?.map((item, index)=>(
                <tr>
                <td className='border border-gray-400 p-3'>{index+1}</td>
                <td className='border border-gray-400 p-3'>{item?.title}</td>
                <td className='border border-gray-200 p-3 flex justify-center '>
                   <img src={item?.thumbnail} alt="" className='w-2/3 max-h-32' />
                </td>
                <td className='border border-gray-400 p-3'> $ {item?.price}</td>
                <td className='border border-gray-400 p-3 text-center '>  <button  onClick={()=>dispatch(removeFromCart(item?.id))} className='bg-red-500 px-3 py-2 text-white rounded hover:border hover:border-red-500  hover:bg-white hover:text-red-500'><FontAwesomeIcon icon={faTrash} /></button></td>
              </tr>
             )) }
            </tbody>
          </table>
        </div>
        <div className='pt-6 md:px-10'>
          <div className='shadow-lg p-5'>
              <h1 className='text-center text-3xl'>Cart Summary</h1>
              <h1 className='mt-4 text-xl'>Total number of Products : {cartArray?.length}</h1>
              <h1 className='text-xl'>Grand Total : $ {total}</h1>
              <button onClick={handleCheckout} className='w-full p-3 bg-green-500 mt-4 text-white hover:border hover:border-green-500 hover:text-green-500 hover:bg-white'>CheckOut</button>
          </div>
        </div>
       


      </div>

        :
      <div style={{width:'100%', height:'80vh'}} className='flex justify-center items-center'>
        <img src="https://aleointernational.com/img/empty-cart-yellow.png" alt="no image" className='w-1/4' />
    </div>
}

    </div>
  )
}

export default Cart
import React from 'react'
import { Button, IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';
const CartItemOrderSummary = ({item}) => {
  const dispatch = useDispatch();

  const handleUpdateCartItem=(num) =>{
    const data = {data:{quantity:item.quantity+num}, cartItemId:item?.id }
    dispatch(updateCartItem(data))
  }

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item.id))
  }
  return (
    <div className='px-3 pt-3 pb-2 border  border-gray-300 rounded-none m-4'>
      <div className='flex items-center mb-4'>
        {/*Product Img Info*/}
        <div className='min-w-[10rem] h-[5rem] lg:w-[16rem] lg:h-[9rem]'>
          <img className="w-full h-full object-cover object-top" src={item.product.imageUrl} alt="" />
        </div>

        {/* Product Item Info */}
        <div className='ml-5 space-y=1 text-sm lg:text-md '>
          <p className='font-semibold mb-4 text-xl text-gray-700 overflow-hidden leading-7 line-clamp-3 text-ellipsis'>{item.product.title}</p>
          <p className='text-gray-600 text-sm'>Kích thước: {item.size}, {item.product.color}</p>
          <p className='mt-2 text-gray-600 text-sm'>Vật liệu: {item.product.brand}</p>

          <div className=' flex space-x-3 items-center text-gray-900 lg:mt-10 mt-2'>
            <p className='font-semibold '>{item.discountedPrice}$</p>
            <p className='text-gray-500 line-through'>{item.price}$</p>
            <p className='text-green-600 font-semibold'>{item.product.discountPresent}% off</p>
          </div>

          <p className='mt-2 text-gray-600 text-sm'>Số lượng: {item.quantity}</p>
        </div>

      </div>

      
     
    </div>
  )
}

export default CartItemOrderSummary
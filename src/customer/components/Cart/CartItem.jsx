import React from 'react'
import a1 from '../../../Asset/ProductImage/a1-binh-nau.png'
import { Button, IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const CartItem = () => {
  return (
    <div className='px-3 pt-3 pb-2 border  border-gray-300 rounded-none m-4'>
      <div className='flex items-center mb-4'>
        {/*Product Img Info*/}
        <div className='min-w-[6rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
          <img className="w-full h-full object-cover object-top" src={a1} alt="" />
        </div>

        {/* Product Item Info */}
        <div className='ml-5 space-y=1 text-sm lg:text-md '>
          <p className='font-semibold text-lg text-gray-700 '>Armchair xoay Jadora vải VACT3399 tặng kèm gối màu ngẫu nhiên </p>
          <p className='text-gray-600 text-sm'>Size: L, Green</p>
          <p className='mt-2 text-gray-600 text-sm'>Seller: HAHAHA</p>

          <div className=' flex space-x-3 items-center text-gray-900 lg:mt-10 mt-2'>
            <p className='font-semibold '>95$</p>
            <p className='text-gray-500 line-through'>100$</p>
            <p className='text-green-600 font-semibold'>5% off</p>
          </div>
        </div>

      </div>

      {/* Total Btn */}
      <div className='-mx-2 flex items-center border-t pt-2'>
        <div className='flex items-center lg:space-x-2 '>
          <IconButton >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className='py-1 px-4 border border-gray-300 rounded-none '>12</span>
          <IconButton sx={{ color: "rgb(22 163 74)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className='ml-auto'>
          <Button><p className='text-blue-400'>Remove<HighlightOffIcon sx={{fontSize: 18}} className='mb-0.5'/></p></Button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
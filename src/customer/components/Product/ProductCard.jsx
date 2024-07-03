import React from 'react'
import a1 from '../../../Asset/ProductImage/a1-binh-nau.png'
const ProductCard = ({product}) => {
  return (
    <div className='productcart w-52 max-w-80 mx-1 '>
      <div className='cursor-pointer flex flex-col bg-white rounded-none overflow-hidden h-auto px-2 border border-transparent hover:border-black' >
        <div className='h-[12rem] w-[16rem] self-center'>
          <img className=' w-full h-auto ' src={product.image} alt="" />
        </div>

        <div className=' pb-4'>
          <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
          <p className=' text-sm text-gray-500'>{product.title}</p>
          <div className='flex items-center space-x-2'>
            <p className=''>{product.discountPrice}$</p>
            <p className='line-through opacity-50'>{product.price}$</p>
            <p className='text-green-600 font-bold'>{product.discountPresent}% off</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
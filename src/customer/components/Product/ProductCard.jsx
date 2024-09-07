import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
  const navigate = useNavigate();
  return (
    // Thẻ sản phẩm trong trang Product
    <div onClick={() => navigate(`/product/${product.id}`)} className='productcart lg:w-52 w-44 max-w-80 mx-1 '>
      <div className='cursor-pointer flex flex-col bg-white rounded-none overflow-hidden h-auto px-2 border border-transparent hover:border-black' >
        {/* Div hiển thị ảnh sản phẩm */}
        <div className=' lg:h-auto lg:w-[12rem]  w-[8rem] h-auto self-center'>
          <img className=' w-full h-auto mb-2 ' src={product.imageUrl} alt="" />
        </div>

        {/* Div hiển thị thông tin sản phẩm */}
        <div className=' py-4 space-y-2'>
          <h3 className='lg:text-lg text-md font-medium text-gray-900 max-w-[10rem] lg:max-w-[12rem] overflow-hidden line-clamp-1 text-ellipsis'>{product.title}</h3>
          <p className=' lg:text-sm text-xs text-gray-500 max-w-[10rem] lg:max-w-[12rem] overflow-hidden leading-5 line-clamp-2 text-ellipsis'>{product.description}</p>
          <div className='flex items-center space-x-2 text-xs lg:text-sm'>
            <p className=''>{product.discountedPrice}$</p>
            <p className='line-through opacity-50'>{product.price}$</p>
            <p className='text-green-600 font-bold'>{product.discountPresent}% off</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
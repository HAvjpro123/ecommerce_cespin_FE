import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeSectionCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/product/${product.id}`)} className='cursor-pointer mt-4 flex flex-col bg-white rounded-none overflow-hidden w-auto lg:min-w-[17rem] px-4 border border-transparent hover:border-black'>
      {/* Div hiển thị ảnh HomeSectionCard */}
      <div className='lg:h-auto lg:w-[16rem]  w-[8rem] h-auto self-center mb-4'>
        <img className=' w-full h-auto ' src={product.imageUrl} alt="" />
      </div>

      {/* Div hiển thị tiêu đề và mô tả sản phẩm */}
      <div className='pb-4 space-y-1 mt-4'>
        <h3 className='lg:text-lg text-sm text-gray-900 font-medium overflow-hidden line-clamp-1 text-ellipsis '>{product.title}</h3>
        <p className=' lg:text-sm text-xs text-gray-500 overflow-hidden leading-5 line-clamp-1 text-ellipsis'>{product.description}</p>
      </div>
    </div>
  )
}

export default HomeSectionCard
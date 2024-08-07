import React from 'react'

const HomeSectionCard = ({ product }) => {
  return (
    <div className='cursor-pointer flex flex-col bg-white rounded-none overflow-hidden w-auto lg:min-w-[17rem] px-4 border border-transparent hover:border-black'>
      {/* Div hiển thị ảnh HomeSectionCard */}
      <div className='lg:h-auto lg:w-[16rem]  w-[8rem] h-auto self-center mb-4'>
        <img className=' w-full h-auto ' src={product.image} alt="" />
      </div>

      {/* Div hiển thị tiêu đề và mô tả sản phẩm */}
      <div className='pb-4 space-y-1'>
        <h3 className='lg:text-lg text-sm text-gray-900 font-medium max-w-[9rem] lg:max-w-[15rem] overflow-hidden line-clamp-2 text-ellipsis '>{product.brand}</h3>
        <p className=' lg:text-sm text-xs text-gray-500 max-w-[9rem] lg:max-w-[15rem] overflow-hidden leading-5 line-clamp-2 text-ellipsis'>{product.title}</p>
      </div>
    </div>
  )
}

export default HomeSectionCard
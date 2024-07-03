import React from 'react'

const HomeSectionCard = ({ product }) => {
  return (

    <div className='cursor-pointer flex flex-col bg-white rounded-none overflow-hidden min-w-[17rem] px-4 border border-transparent hover:border-black'>
      <div className='h-[12rem] w-[16rem] self-center'>
        <img className=' w-full h-auto ' src={product.image} alt="" />
      </div>

      <div className='px-4 pb-4'>
        <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
        <p className=' text-sm text-gray-500'>{product.title}</p>
      </div>
    </div>


  )
}

export default HomeSectionCard
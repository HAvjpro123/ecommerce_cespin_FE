import React from 'react'

const AddressCard = ({address}) => {
  return (
    <div>
      <div className='space-y-2'>
        <p className='font-semibold text-lg'>{address?.firstName +" "+ address?.lastName} </p>
        <div className='space-y-1 py-2'>
          <p className='font-semibold'>Địa chỉ:</p>
          <p>{address?.streetAddress}, {address?.state}, {address?.city}, {address?.zipCode}</p>
        </div>
        <div className='space-y-1 py-2'>
          <p className='font-semibold'>Số điện thoại:</p>
          <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard
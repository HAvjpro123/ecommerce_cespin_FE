import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'

const OrderSummary = () => {
  return (
    // form địa chỉ thanh toán
    <div className='border border-gray-300'>
      <div className='p-4'>
        <div className="p-4 border border-gray-300 ">
          <AddressCard />
        </div>

      </div>

      <div>
        <div className='lg:grid grid-cols-3 relative '>
          {/* Item Cart */}
          <div className='col-span-2'>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          {/* Bill Details */}
          <div className='p-4 sticky top-0 h-[100vh]  lg:mt-0'>
            <div className=' border border-gray-300 '>
              <div className='p-4'>
                <p className='uppercase font-bold opacity-60 '>Price Details</p>
              </div>

              <hr />

              <div className='space-y-3 font-semibold p-4'>
                {/* label hiển thị tổng tiền đơn hàng  */}
                <div className='flex justify-between pt-2 text-gray-700'>
                  <span>Price: </span>
                  <span className='text-green-500'>$400</span>
                </div>

                {/* label hiển thị số tiền đã giảm giá */}
                <div className='flex justify-between pt-2 text-gray-700'>
                  <span>Discount </span>
                  <span className='text-green-500'>-$100</span>
                </div>

                {/* label hiển thị phí giao hàng */}
                <div className='flex justify-between pt-2 text-gray-700'>
                  <span>Delivery Charge </span>
                  <span className='text-green-500'>Free</span>
                </div>

                {/* label hiển thị hóa đơn thay đổi */}
                <div className='flex justify-between border-t border-gray-300 pt-3 uppercase font-bold text-gray-700'>
                  <span>Delivery Charge </span>
                  <span className='text-green-500'>$300</span>
                </div>

                {/* label thông tin giao hàng */}
                <p className='text-sm'>Thông Tin Giao Hàng</p>
                <p className='text-xs font-thin'>Đối với những sản phẩm có sẵn tại khu vực, CESPIN sẽ giao hàng trong vòng 2-7 ngày.
                  Đối với những sản phẩm không có sẵn, thời gian giao hàng sẽ được nhân viên CESPIN thông báo đến quý khách.</p>

                {/* nút check out */}
                <div className='flex justify-between pt-3 uppercase  text-black'>
                  <button variant='contained' className='w-full shadow-lg bg-green-600 hover:bg-green-700'  >
                    <p className='uppercase font-bold text-white p-2'>CHECK OUT</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
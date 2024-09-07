import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItemOrderSummary from '../Cart/CartItemOrderSummary'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'
import { createPayment } from '../../../State/Payment/Action'

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation(); 
  const {order} = useSelector(store=>store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id")

  useEffect(() => {
    dispatch(getOrderById(orderId))
  }, [orderId])

  const handleCheckout = () => {
    dispatch(createPayment(orderId))
  }

  return (
    // form địa chỉ thanh toán
    <div className='border border-gray-300'>
      <div className='p-4'>
        <div className="p-4 border border-gray-300 ">
          <AddressCard address={order.order?.shippingAddress} />
        </div>

      </div>

      <div>
        <div className='lg:grid grid-cols-3 relative '>
          {/* Item Cart */}
          <div className='col-span-2'>
           {order.order?.orderItems.map((item) => 
            <CartItemOrderSummary key={item.id} item={item}/>
          )}
          </div>

          {/* Bill Details */}
          <div className='p-4 sticky top-0 h-[100vh]  lg:mt-0'>
            <div className=' border border-gray-300 '>
              <div className='p-4'>
                <p className='uppercase font-bold opacity-60 '>CHI TIẾT HÓA ĐƠN</p>
              </div>

              <hr />

              <div className='space-y-3 font-semibold p-4'>
                {/* label hiển thị tổng tiền đơn hàng  */}
                <div className='flex justify-between pt-2 text-gray-700'>
                  <span>Giá: </span>
                  <span className='text-green-500'>{order.order?.totalPrice}$</span>
                </div>

                {/* label hiển thị số tiền đã giảm giá */}
                <div className='flex justify-between pt-2 text-gray-700'>
                  <span>Giảm giá: </span>
                  <span className='text-green-500'>-{order.order?.discoute}$</span>
                </div>

                {/* label hiển thị phí giao hàng */}
                <div className='flex justify-between pt-2 text-gray-700'>
                  <span>Phí vận chuyển: </span>
                  <span className='text-green-500'>Free</span>
                </div>

                {/* label hiển thị hóa đơn thay đổi */}
                <div className='flex justify-between border-t border-gray-300 pt-3 uppercase font-bold text-gray-700'>
                  <span className='text-lg'>TỔNG HÓA ĐƠN: </span>
                  <span className='text-green-500 text-lg'>{order.order?.totalDiscountedPrice}$</span>
                </div>

                {/* label thông tin giao hàng */}
                <p className='text-sm'>Thông Tin Giao Hàng</p>
                <p className='text-xs font-thin'>Đối với những sản phẩm có sẵn tại khu vực, CESPIN sẽ giao hàng trong vòng 2-7 ngày.
                  Đối với những sản phẩm không có sẵn, thời gian giao hàng sẽ được nhân viên CESPIN thông báo đến quý khách.</p>

                {/* nút check out */}
                <div className='flex justify-between pt-3 uppercase  text-black'>
                  <button variant='contained' className='w-full shadow-lg bg-green-600 hover:bg-green-700' 
                    onClick={handleCheckout} >
                    <p className='uppercase font-bold text-white p-2'>THANH TOÁN</p>
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
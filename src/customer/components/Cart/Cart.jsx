import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../State/Cart/Action'

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector(store => store)
  const dispatch = useDispatch();


  const handleCheckout = () => {
    navigate("/checkout?step=2")
  }

  useEffect(() => {
    dispatch(getCart())
  }, [cart.updateCartItem, cart.deleteCartItem])
  return (
    <div className='pt-28'>
      {/* Title */}
      <p className=' lg:mx-20 mx-4 text-2xl font-semibold text-gray-700 '>Giỏ hàng </p>


      <div className='lg:grid grid-cols-3 lg:px-16 relative '>
        {/* Item Cart */}
        <div className='col-span-2'>
          {cart.cart?.cartItems.map((item, index) =>
            <CartItem key={index} item={item} />
          )}

        </div>

        {/* Bi ll Details */}
        <div className='p-4 sticky top-0 h-[100vh]  lg:mt-0'>
          <div className=' border border-gray-300 '>
            <div className='p-4'>
              <p className='uppercase font-bold opacity-60 '>Chi tiết hóa đơn </p>
            </div>

            <hr />

            <div className='space-y-3 font-semibold p-4'>
              <div className='flex justify-between pt-2 text-gray-700'>
                <span>Giá: </span>
                <span className='text-green-500'>{cart.cart?.totalPrice}$</span>
              </div>
              <div className='flex justify-between pt-2 text-gray-700'>
                <span>Giảm giá: </span>
                <span className='text-green-500'>-{cart.cart?.discounte}$</span>
              </div>
              <div className='flex justify-between pt-2 text-gray-700'>
                <span>Phí vận chuyển: </span>
                <span className='text-green-500'>Miễn phí</span>
              </div>
              <div className='flex justify-between border-t border-gray-300 pt-3 uppercase font-bold text-gray-700'>
                <span className='text-lg'>TỔNG SỐ TIỀN:</span>
                <span className='text-green-500 text-lg'>{cart.cart?.totalDiscountedPrice}$</span>
              </div>
              <p className='text-sm'>Thông Tin Giao Hàng</p>
              <p className='text-xs font-thin'>Đối với những sản phẩm có sẵn tại khu vực, CESPIN sẽ giao hàng trong vòng 2-7 ngày.
                Đối với những sản phẩm không có sẵn, thời gian giao hàng sẽ được nhân viên CESPIN thông báo đến quý khách.</p>
              <div className='flex justify-between pt-3 uppercase  text-black'>
                <button onClick={handleCheckout} variant='contained' className='w-full shadow-lg bg-green-600 hover:bg-green-700'  >
                  <p className='uppercase font-bold text-white p-2'>CHECK OUT</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
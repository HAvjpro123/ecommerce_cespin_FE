import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Grid from '@mui/material/Grid';
import { getOrderById } from '../../../State/Order/Action'
import AddressCard from '../AddressCard/AddressCard'
const PaymentCancel = () => {
    const { orderId } = useParams()

    const dispatch = useDispatch();
    const { order } = useSelector(store => store);

    console.log("order", order.order)

    useEffect(() => {
        dispatch(getOrderById(orderId))
    }, [orderId])


    return (
        <div className='px-2 lg:px-36 pt-10'>
            <div className='flex flex-col justify-center items-center'>
                <Alert variant='filled' severity='warning' sx={{ mb: 6, with: "fit-content" }}>
                    <AlertTitle>THANH TOÁN BỊ HỦY</AlertTitle>
                    Đơn hàng đã bị hủy
                </Alert>
            </div>
           
            <Grid container className='space-y-5 pb-10 '>

                <Grid xs={12} item className='border border-gray-300 p-4'>
                    <AddressCard address={order.order?.shippingAddress}></AddressCard>
                </Grid>

                {order.order?.orderItems.map((item, index) => <Grid key={index} container item className='rounded-none border border-gray-300 p-5' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Grid item xs={12}>
                        <div className='flex items-center'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top' src={item.product.imageUrl} alt="" />
                            <div className='ml-5 space-y-2'>
                                <p className='font-semibold mb-4 text-xl text-gray-700 overflow-hidden leading-7 line-clamp-3 text-ellipsis'>{item.product.title}</p>
                                <div className='text-gray-600   space-x-4'>
                                    <span>Màu sắc: {item.product.color}</span>
                                    <span>Kích thước: {item.size}</span>
                                </div>
                                <p>Số lượng: {item.quantity}</p>
                                <div className=' flex space-x-3 items-center text-gray-900 lg:mt-10 mt-2'>
                                    <p className='text-lg'>{item.discountedPrice}$</p>
                                    <p className='text-gray-500 line-through'>{item.price}$</p>
                                    <p className='text-green-600 font-semibold'>{item.product.discountPresent}% off</p>
                                </div>
                            </div>

                        </div>
                    </Grid>
                </Grid>)}
            </Grid>

        </div>
    )
}

export default PaymentCancel
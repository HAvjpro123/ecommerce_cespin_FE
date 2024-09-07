import { Box, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { useDispatch } from 'react-redux'
import { createOrder } from '../../../State/Order/Action'
import { useNavigate } from 'react-router-dom'

const DeliveryAddressForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const address = {
            lastName: data.get("lastName"),
            firstName: data.get("fristName"),
            streetAddress: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zip"),
            mobile: data.get("phoneNumber")
        }
        const orderData = {address, navigate}
        dispatch(createOrder(orderData))
        console.log("orderData", orderData)
    }

    return (
        <div>
            <Grid container className='justify-between '>
                {/* Grid tiêu đề */}
                <Grid item xs={12} lg={4.8} className='border border-gray-300 rounded-none h-auto overflow-y-scroll '>
                    <div className='p-6 cursor-pointer  space-y-2'>
                        <p className='text-red-400'>*vui lòng điền thông tin liên hệ ở form bên phải</p>
                        <p className='text-lg font-medium'>LƯU Ý KHI ĐIỀN THÔNG TIN LIÊN HỆ:</p>
                        <p>- Form Họ và Tên đệm: vui lòng nhập đúng họ và tên đêm để tránh nhầm lẫn khi giao hàng.</p>
                        <p>- Form Tên: vui lòng nhập đúng tên của người nhận.</p>
                        <p>- Form Địa chỉ: vui lòng nhập chính xác địa chỉ nhà nhằm tránh việc shiper giao lộn địa chỉ.</p>
                        <button className='bg-green-600 hover:bg-green-700 my-2'>
                            <p className='text-white px-6 py-2 font-semibold'>XÁC NHẬN</p>
                        </button>
                    </div>
                </Grid>

                {/* Grid form điền thông tin người mua hàng */}
                <Grid item xs={12} lg={7} className=' pt-4 lg:pt-0'>
                    <Box className='border border-gray-300 rounded-none p-5'>
                        <form onSubmit={handleSubmit}>
                            <p className='pb-4 text-2xl font-semibold'>Điền thông tin liên hệ</p>
                            <Grid container spacing={3}>
                                {/* ô nhập tên người dùng */}
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='fristName' name='fristName' label="Họ và Tên đệm" fullWidth autoComplete='given-name'></TextField>
                                </Grid>

                                {/* ô nhập họ người dùng */}
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='lastName' name='lastName' label="Tên" fullWidth autoComplete=''></TextField>
                                </Grid>

                                {/* ô nhập địa chỉ người dùng */}
                                <Grid item xs={12}>
                                    <TextField required id='address' name='address' label="Địa chỉ" fullWidth autoComplete='' multiline rows={4}></TextField>
                                </Grid>

                                {/* ô nhập thành phố người dùng */}
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='city' name='city' label="Thành phố" fullWidth autoComplete=''></TextField>
                                </Grid>

                                {/* ô nhập quốc gia người dùng */}
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='state' name='state' label="Phường/Xã, Quận/Huyện" fullWidth autoComplete=''></TextField>
                                </Grid>

                                {/* ô nhập mã zip người dùng */}
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='zip' name='zip' label="Mã Zip / Mã bưu chính" fullWidth autoComplete='shipping postal=code'></TextField>
                                </Grid>

                                {/* ô nhập sdt người dùng */}
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='phoneNumber' name='phoneNumber' label="Phone Number" fullWidth ></TextField>
                                </Grid>

                                {/* nút xác nhận */}
                                <Grid item xs={12} sm={6}>
                                    <button className='bg-green-600 hover:bg-green-700 mr-auto ' type='submit'>
                                        <p className='text-white px-6 py-2 font-semibold'>Xác nhận</p>
                                    </button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm
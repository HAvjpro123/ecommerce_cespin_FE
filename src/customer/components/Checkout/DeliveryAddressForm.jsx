import { Box, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'

const DeliveryAddressForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const address = {
            lastName: data.get("lastName"),
            firstName: data.get("fristName"),
            address: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zip: data.get("zip"),
            phone: data.get("phoneNumber")
        }

        console.log("address", address)
    }

    return (
        <div>
            <Grid container className='justify-between '>
                {/* Grid tiêu đề */}
                <Grid item xs={12} lg={4.8} className='border border-gray-300 rounded-none h-auto overflow-y-scroll '>
                    <div className='p-6 cursor-pointer'>
                        <AddressCard />
                        <button className='bg-green-600 hover:bg-green-700 my-2'>
                            <p className='text-white px-6 py-2 font-semibold'>Delivery Here</p>
                        </button>
                    </div>
                </Grid>

                {/* Grid form điền thông tin người mua hàng */}
                <Grid item xs={12} lg={7} className=' pt-4 lg:pt-0'>
                    <Box className='border border-gray-300 rounded-none p-5'>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                {/* ô nhập tên người dùng */}
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='fristName' name='fristName' label="Frist Name" fullWidth autoComplete='given-name'></TextField>
                                </Grid>

                                {/* ô nhập họ người dùng */}
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='lastName' name='lastName' label="Last Name" fullWidth autoComplete=''></TextField>
                                </Grid>

                                {/* ô nhập địa chỉ người dùng */}
                                <Grid item xs={12}>
                                    <TextField required id='address' name='address' label="Address" fullWidth autoComplete='' multiline rows={4}></TextField>
                                </Grid>

                                {/* ô nhập thành phố người dùng */}
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='city' name='city' label="City" fullWidth autoComplete=''></TextField>
                                </Grid>

                                {/* ô nhập quốc gia người dùng */}
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='state' name='state' label="State/Province/Region" fullWidth autoComplete=''></TextField>
                                </Grid>

                                {/* ô nhập mã zip người dùng */}
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='zip' name='zip' label="Zip / Postal code " fullWidth autoComplete='shipping postal=code'></TextField>
                                </Grid>

                                {/* ô nhập sdt người dùng */}
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='phoneNumber' name='phoneNumber' label="Phone Number" fullWidth ></TextField>
                                </Grid>

                                {/* nút xác nhận */}
                                <Grid item xs={12} sm={6}>
                                    <button className='bg-green-600 hover:bg-green-700 mr-auto ' type='submit'>
                                        <p className='text-white px-6 py-2 font-semibold'>Deliver Here</p>
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
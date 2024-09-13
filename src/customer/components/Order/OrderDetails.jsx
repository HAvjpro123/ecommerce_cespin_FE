import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OderTraker from './OderTraker'
import { Box, Grid } from '@mui/material'
import a1 from '../../../Asset/ProductImage/a1-binh-nau.png'
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetails = () => {
    return (
        <div className='p-5 lg:px-20 pt-28'>
            <div className='p-5 border border-gray-300 my-10'>
                <h1 className='font-bold text-xl pb-6'>Delivery Address</h1>
                <AddressCard />
            </div>

            <div className='py-10 border border-gray-300 my-10'>
                <OderTraker activeStep={3} />
            </div>

            <Grid className='space-y-5' container>
                {[1,1,1,1,1].map((item) => <Grid item container className='border border-gray-300 px-5 pt-5' 
                sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item xs={12} md={10} className='pb-4'>
                        <div className='flex items-center space-x-5'>
                            <div>
                                <img className='w-[5rem] h-[5rem] object-cover object-top' src={a1} alt="" />
                            </div>

                            <div className='space-y-2 ml-5 '>
                                <p className='font-semibold text-gray-700 overflow-hidden line-clamp-2 text-ellipsis'>Bình Gầy Làm Từ Làng Gốm Bát Tràng</p>
                                <p className='space-x-5 text-sm text-gray-500'><span> Color: Green</span><span>Size: Large</span></p>
                                <p className='space-x-5 text-sm text-gray-600'>Seller: Nice kì</p>
                                <p className='text-sm text-green-600' > 1000$</p>
                            </div>
                        </div>

                    </Grid>

                    <Grid item xs={12} md={2} className='border-t border-gray-300 lg:border-none mt-4'>
                        <Box sx={{ color: "#16a34a" }}>
                            <p className='text-end py-1 cursor-pointer'>
                                <StarBorderIcon sx={{ fontSize: "2rem" }} className='px-2 text-2xl mb-0.5' />
                                <span>Đánh giá sản phẩm</span>
                            </p>

                        </Box>
                    </Grid>
                </Grid>)}
                
            </Grid>
        </div>
    )
}

export default OrderDetails
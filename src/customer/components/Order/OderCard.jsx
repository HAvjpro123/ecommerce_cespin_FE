import { Grid } from '@mui/material'
import React from 'react'
import a1 from '../../../Asset/ProductImage/a1-binh-nau.png'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OderCard = () => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/account/order/${5}`)} className='p-5 border border-gray-300 hover:border-gray-500  cursor-pointer'  >
            <Grid container spacing={1} sx={{ justifyContent: "space-between" }}>
                {/* Grid thông tin sản phẩn trong đơn đặt hàng */}
                <Grid item lg={12} xs={12} className='pb-2' >
                    <div className='flex'>
                        {/* Ảnh sản phẩm */}
                        <img className='w-[6rem] h-[6rem] object-cover object-top' src={a1} alt='' />

                        {/* Thông tin sản phẩm */}
                        <div className='ml-5 space-y-2'>
                            <p className='overflow-hidden line-clamp-2 text-ellipsis'>BÌNH GẦY LÀM TỪ LÀNG GỐM BÁT TRÀNG </p>
                            <p className='text-gray-700 text-xs font-thin'>Kích thước: Large</p>
                            <p className='text-gray-700 text-xs font-thin' >Màu sắc: Green</p>
                            <p className='text-gray-700 text-xs'>Số lượng: 1</p>
                        </div>
                    
                    </div>
                </Grid>

                {/* Grid hiển thị tổng giá tiền */}
                <Grid item lg={12} xs={12} className='flex border-t border-gray-300 pb-2'>
                    <p className='text-gray-500 text-sm'>1 sản phẩm</p>
                    <p className='ml-auto'>
                        <span className='text-base'>Thành tiền: </span>
                        <span className='text-base text-green-700'>1000$</span>
                    </p>
                </Grid>


                <Grid item lg={12} xs={12} className=' border-t border-gray-300 '>
                    {true && <div className='flex '>
                        <p className='text-xs font-medium lg:text-sm lg:font-normal'>
                            <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-1 text-sm mb-0.5' />

                            <span >
                                Deliverd On March 03
                            </span>
                        </p>
                        <p className='text-xs ml-auto' >
                            Your Item Has Been Delivered 
                        </p>
                    </div>}
                    {false && <p className='text-sm'>
                        <span >
                            Expected Delivery On Mar 03
                        </span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OderCard
import React from 'react'
import { Grid, Avatar, Box, Rating } from '@mui/material'
const ProductReviewCard = () => {
    return (
        <div >
            <Grid className='border-b pb-2' container spacing={2} gap={3}>
                <Grid item xs={2} md={1.5}>
                    <Box>
                        <Avatar className='text-white' sx={{ width: 54, height: 54, bgcolor: "#9155fd" }}></Avatar>
                    </Box>
                </Grid>
                <Grid item xs={8} md={8.5}>
                    <div className=''>
                        <div className=''>
                            <p className='font-semibold text-lg '>Raam</p>
                            <Rating className='-mx-1' value={4.5} name='half-rating' readOnly precision={.5}  />
                            <p className='text-gray-500 text-xs '>10-05-2024 </p>
                            <p className='my-4 '>Nice product I luv this boob.</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductReviewCard
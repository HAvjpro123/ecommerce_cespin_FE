import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'

const TrignleImg = styled("img")({
    right: 0,
    bottom: 0,
    height: 170,
    position: 'absolute',


})

const TronphyImg = styled("img")({
    right: 36,
    bottom: 20,
    height: 98,
    position: 'absolute'
})

const Achivement = () => {
    return (
        <div className='border border-gray-400'>
            <Card sx={{ position: "relative", backgroundColor: '', boxShadow: 'none' }}>
                <CardContent>
                    <div className='space-y-3'>
                        <Typography variant='h4' sx={{ letterSpacing: ".25px" }}>
                            CESPIN SHOP
                        </Typography>

                        <Typography>Xin chúc mừng 🥳</Typography>

                        <p className='text-3xl text-green-600 font-semibold'>430.0k</p>

                        <Button size="small" variant='contained' color='success'>Xem chi tiết</Button>

                        <TrignleImg src=''></TrignleImg>

                        <TronphyImg src='https://ecommerce-codewithzosh.vercel.app/images/misc/trophy.png'></TronphyImg>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Achivement
import React from 'react'
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import { theme } from 'antd';
const saleData = [
    {
        stats: '140.0k',
        title: "Sales",
        color: "#3498db",
        icon: <TrendingUpRoundedIcon sx={{ fontSize: "1.75rem" }} />
    },
    {
        stats: '12.0k',
        title: "Revenue",
        color: "#e74c3c",
        icon: <AttachMoneyRoundedIcon sx={{ fontSize: "1.75rem" }} />
    },
    {
        stats: '50.0k',
        title: "Products",
        color: "#f1c40f",
        icon: <DevicesRoundedIcon sx={{ fontSize: "1.75rem" }} />
    },
    {
        stats: '40.0k',
        title: "Customers",
        color: "#27ae60",
        icon: <PersonOutlineRoundedIcon sx={{ fontSize: "1.75rem" }} />
    },
]

const renderStats = () => {
    return saleData.map((item, index) => (
        <Grid item xs={12} sm={3} key={index}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar variant='rounded' sx={{ mr: 3, width: 55, height: 55, boxShadow: 3, color: 'white', backgroundColor: `${item.color}` }}>
                    {item.icon}
                </Avatar>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='caption text-md font-semibold'>{item.title}</Typography>
                    <Typography variant='h6'>{item.stats}</Typography>
                </Box>
            </Box>
        </Grid>
    ))
}

const MonthlyOverview = () => {
    return (
        <div className='border border-gray-400'>
            <Card sx={{ position: "relative", backgroundColor: '', boxShadow: 'none' }}>
                <CardHeader title="Tổng quan hàng tháng"
                    action={
                        <IconButton size='small'>
                            <MoreVertRoundedIcon />
                        </IconButton>
                    }
                    subheader={
                        <Typography variant='body1'>
                            <Box component='span' sx={{ fontWeight: 600, mr:0.5, color: '#27ae60' }}>
                                Tăng thêm 34% 😎
                            </Box>
                            trong tháng!
                        </Typography>
                    }
                    titleTypographyProps={{
                        sx: {
                            mb: 2.2,
                            lineHeight: '2rem !important',
                            letterSpacing: '.15px !important'
                        }
                    }} />
                <CardContent sx={{pt:theme => `${theme.spacing(3)} !important`}}>
                    <Grid container spacing={[5.0]}>
                        {renderStats()}
                    </Grid>
                </CardContent>

            </Card>
        </div>
    )
}

export default MonthlyOverview
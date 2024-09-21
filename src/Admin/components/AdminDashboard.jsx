import { Grid } from '@mui/material'
import React from 'react'
import Achivement from './Achivement'
import MonthlyOverview from './MonthlyOverview'
import OrdersTableView from '../views/OrderTableView'
import ProductsTableView from '../views/ProductsTableView'

const AdminDashboard = () => {
  return (
    <div className=''>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={4} >
              <Achivement/>
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <MonthlyOverview/>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <div className='border border-gray-400'>
              <ProductsTableView/>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <div className='border border-gray-400'>
              <OrdersTableView/>  
            </div>
          </Grid>
        </Grid>
    </div>
  )
}

export default AdminDashboard
import { Grid } from '@mui/material'
import React from 'react'
import Achivement from './Achivement'
import MonthlyOverview from './MonthlyOverview'

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
        </Grid>
    </div>
  )
}

export default AdminDashboard
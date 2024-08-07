import { Grid } from '@mui/material'
import React from 'react'
import OderCard from './OderCard'

const orderStatus = [
  { label: "On The Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Returned", value: "returned" }
]

const Order = () => {
  return (
    <div className='lg:px-20 pt-6 px-4'>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={12} lg={2.5} className='pb-4'>
          <div className='h-auto border border-gray-300 bg-white p-5 sticky top5'>
            <h1 className='font-bold text-lg '>Filter</h1>

            <div className='space-y-4 mt-10'>
              <div className='font-semibold'>ORDER STATUS</div>
              
              {orderStatus.map((option) => <div className='flex items-center'>
                <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border-gray-300 
                text-green-600 focus:ring-green-500'/>
                <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                  {option.label}
                </label>
              </div> )}
            </div>
          </div>
        </Grid>

        <Grid item xs={12} lg={9} className='space-y-4'>
          {[1,1,1,1,1].map((item) => <OderCard/>)}
            
        </Grid>
      </Grid>
    </div>
  )
}

export default Order
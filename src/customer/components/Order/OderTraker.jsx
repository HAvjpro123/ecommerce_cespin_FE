import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps=[
    "Place",
    "Order Confirm",
    "Shipped",
    "Out For Delivery",
    "Delivered"
];

const OderTraker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel >
            {steps.map((label, index) => <Step key={index}>
                <StepLabel  sx={{color: "#16a34a", fontSize: "44px "}}>{label}</StepLabel>
            </Step>)}
        </Stepper>
    </div>
  )
}

export default OderTraker
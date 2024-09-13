import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const steps = ['Đăng nhập', 'Điền thông tin liên hệ', 'Xác nhận đơn hàng', 'Thanh toán'];

export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState();
    // const [skipped, setSkipped] = React.useState(new Set());
    const location = useLocation();
    const querySearch = new URLSearchParams(location.search);
    
    const step = querySearch.get("step")

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
 
    return (
        <div className='px-4 lg:px-20 pt-32'>
            {/* Hiển thị step thanh toán */}
            <Box sx={{ width: '100%' }}>
                <Stepper alternativeLabel className='text-xs' activeStep={step}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>

                    </React.Fragment>
                ) : (
                    <React.Fragment>

                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Quay lại
                            </Button>
                          
                        </Box>

                        {/* Step hiển thị các bước thanh toán */}
                        <div className='my-5'>
                            {step==2 && (<DeliveryAddressForm/>)}
                            {step==3 && (<OrderSummary/>)}
                        </div>
                    </React.Fragment>
                )}
            </Box>
        </div>

    );
}

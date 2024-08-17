import { Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../State/Auth/Action';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget);

        const userData = {
            email: data.get("email"),
            password: data.get("password")
        }

        dispatch(login(userData))
        setShowAlert('Nhập sai email hoặc mật khẩu!')

        console.log("userData", userData)
    }

    return (
        <div>
            {/* Div tiêu đề đăng nhập*/}
            <div className='flex border-b border-stone-300 mb-4'>
                <div className='py-2 border-b-2 border-green-700'>
                    <span className='px-1 text-2xl font-medium'>ĐĂNG NHẬP</span>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id='email'
                            name='email'
                            label='Email'

                            fullWidth
                            autoComplete='email'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id='password'
                            type='password'
                            name='password'
                            label='Mật khẩu'

                            fullWidth
                            autoComplete='password'
                        />
                    </Grid>
                    {/* Hiển thị thông báo nếu có */}
                    <div className='mx-6 mt-2 text-sm'>
                        {showAlert && (
                            <p style={{ color: 'red' }}>
                                {showAlert}
                            </p>
                        )}
                    </div>
                    <Grid item xs={12} className='space-y-2' on>
                        <label>
                            <input
                                type="checkbox"
                                // checked={isChecked}
                                // onChange={handleCheckboxChange}
                                sx={{ fontSize: 30 }}
                                className='mr-2'
                            />
                            Lưu thông tin đăng nhập
                        </label>
                        <p className='underline cursor-pointer'>Quên mật khẩu?</p>
                    </Grid>

                    <Grid item xs={12}>

                        <button className='mt-2 flex w-full items-center justify-center  border border-transparent
                        bg-green-600 px-8 py-3 text-lg font-medium  text-white rounded-none '

                            type='submit'
                        >
                            ĐĂNG NHẬP
                        </button>
                    </Grid>
                </Grid>
            </form>

            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex items-center space-x-1' >
                    <p>Bạn chưa có tài khoản? </p>
                    <button onClick={() => navigate("/register")} className='text-blue-600'>Đăng ký </button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
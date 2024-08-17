// import { Grid, TextField } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { getUser, register } from '../../State/Auth/Action';

// const RegisterForm = () => {
//     const [isChecked, setIsChecked] = useState(false);
//     const [showAlert, setShowAlert] = useState('');
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const jwt = localStorage.getItem("jwt");
//     const { auth } = useSelector(store => store);

//     const handleCheckboxChange = (event) => {
//         setIsChecked(event.target.checked);
//         setShowAlert(''); // Xóa thông báo khi người dùng tích vào checkbox
//     };

//     useEffect(() => {
//         if (jwt) {
//             dispatch(getUser(jwt));
//         }
//     }, [jwt, auth.jwt, dispatch]);

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const data = new FormData(event.currentTarget);

//         const email = data.get("email");
//         const userData = {
//             firstName: data.get("firstName"),
//             lastName: data.get("lastName"),
//             email: email,
//             password: data.get("password")
//         };

//         // Kiểm tra nếu checkbox chưa được tích
//         if (!isChecked) {
//             setShowAlert('Bạn chưa ấn đồng ý với điều khoản và điều kiện');
//             return;
//         }

//         // Kiểm tra định dạng email
//         const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
//         if (!emailPattern.test(email)) {
//             setShowAlert('Nhập sai định dạng email');
//             return;
//         }

//         // Đăng ký người dùng nếu tất cả kiểm tra đều thành công
//         dispatch(register(userData));
//         console.log("userData", userData);

//         // Hiển thị thông báo đăng ký thành công
//         alert('Đăng ký thành công!');
//         navigate("/login")
//     };

//     return (
//         <div>
//             {/* Div tiêu đề đăng ký */}
//             <div className='flex border-b border-stone-300 mb-4'>
//                 <div className='py-2 border-b-2 border-green-700'>
//                     <span className='px-1 text-2xl font-medium'>ĐĂNG KÝ</span>
//                 </div>
//             </div>

//             <form onSubmit={handleSubmit}>
//                 <Grid container spacing={3}>
//                     <Grid item xs={12} sm={6}>
//                         <TextField
//                             required
//                             id='firstName'
//                             name='firstName'
//                             label='Tên'
//                             fullWidth
//                             autoComplete='given-name'
//                         />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                         <TextField
//                             required
//                             id='lastName'
//                             name='lastName'
//                             label='Họ và Tên đệm'
//                             fullWidth
//                             autoComplete='family-name'
//                         />
//                     </Grid>
//                     <Grid item xs={12}>
//                         <TextField
//                             required
//                             id='email'
//                             name='email'
//                             label='Email'
//                             fullWidth
//                             autoComplete='email'
//                         />
//                     </Grid>
//                     <Grid item xs={12}>
//                         <TextField
//                             required
//                             id='password'
//                             type='password'
//                             name='password'
//                             label='Mật khẩu'
//                             fullWidth
//                             autoComplete='new-password'
//                         />
//                     </Grid>

//                      {/* Hiển thị thông báo nếu có */}
//                      <div className='mx-6 mt-2 text-sm'>
//                         {showAlert && (
//                             <p style={{ color: 'red' }}>
//                                 {showAlert}
//                             </p>
//                         )}
//                     </div>

//                     <Grid item xs={12} className='flex'>
//                         <label>
//                             <input
//                                 type="checkbox"
//                                 checked={isChecked}
//                                 onChange={handleCheckboxChange}
//                                 className='mr-2'
//                             />
//                             Tôi đồng ý với toàn bộ <span className='text-green-600 cursor-pointer'> Điều khoản và điều kiện sử dụng</span>
//                         </label>
//                     </Grid>

//                     <Grid item xs={12}>
//                         <button
//                             className='mt-2 flex w-full items-center justify-center border border-transparent
//                         bg-green-600 px-8 py-3 text-lg font-medium text-white rounded-none'
//                             type='submit'
//                         >
//                             ĐĂNG KÝ
//                         </button>
//                     </Grid>

//                 </Grid>
//             </form>

//             <div className='flex justify-center flex-col items-center'>
//                 <div className='py-3 flex items-center space-x-1'>
//                     <p>Bạn đã có tài khoản? </p>
//                     <button onClick={() => navigate("/login")} className='text-blue-600'>Đăng nhập </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RegisterForm;


import { Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, register } from '../../State/Auth/Action';

const RegisterForm = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [showAlert, setShowAlert] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")
    const { auth } = useSelector(store => store)

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        setShowAlert(''); // Xóa thông báo khi người dùng tích vào checkbox
    };

    useEffect(() => {
        if (jwt) {
            dispatch(getUser(jwt))
        }
    }, [jwt, auth.jwt])


    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget);

        const confirmPassword = {
            confirmPassword: data.get("confirmPassword")
        }

        const userData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password")
        }

        // Kiểm tra nếu người dùng nhập lại mật khẩu sai
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (confirmPassword.confirmPassword != userData.password) {
            setShowAlert('Nhập lại mật khẩu không hợp lệ!');
            return;
        } 

        // Kiểm tra nếu người dùng nhập sai định dạng mail
         if (!emailPattern.test(userData.email)) {
            setShowAlert('Nhập sai định dạng email');
            return;
        }
        //Kiểm tra nếu checkbox chưa được tích
        if (!isChecked) {
            setShowAlert('Bạn chưa ấn đồng ý với điều khoản và điều kiện!');
            return;
        }

        // Đăng ký người dùng nếu tất cả kiểm tra đều thành công
        dispatch(register(userData))
        console.log("userData", userData)


    }

    return (
        <div>
            {/* Div tiêu đề đăng ký */}
            <div className='flex border-b border-stone-300 mb-4'>
                <div className='py-2 border-b-2 border-green-700'>
                    <span className='px-1 text-2xl font-medium'>ĐĂNG KÝ</span>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='firstName'
                            name='firstName'
                            label='Tên'
                            fullWidth
                            autoComplete='given-name'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='lastName'
                            name='lastName'
                            label='Họ và Tên đệm'
                            fullWidth
                            autoComplete='given-name'
                        />
                    </Grid>
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
                    <Grid item xs={12}>
                        <TextField
                            required
                            id='confirmPassword'
                            type='password'
                            name='confirmPassword'
                            label='Nhập lại mật khẩu'

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
                    <Grid item xs={12} className='flex' on>
                        <label>
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                sx={{ fontSize: 30 }}
                                className='mr-2'
                            />
                            Tôi đồng ý với toàn bộ <span className='text-green-600 cursor-pointer'> Điêu khoản và điều kiện sử dụng</span>
                        </label>
                    </Grid>
                    <Grid item xs={12}>

                        <button className='mt-2 flex w-full items-center justify-center  border border-transparent
                        bg-green-600 px-8 py-3 text-lg font-medium  text-white rounded-none '

                            type='submit'
                        >
                            ĐĂNG KÝ
                        </button>
                    </Grid>
                </Grid>
            </form>

            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex items-center space-x-1' >
                    <p>Bạn đã có tài khoản? </p>
                    <button onClick={() => navigate("/login")} className='text-blue-600'>Đăng nhập </button>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm

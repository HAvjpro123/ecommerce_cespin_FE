import React from 'react'
import { Popover } from 'antd';

import a1 from '../../../Asset/ProductImage/a1-binh-nau.png'
import { useNavigate } from 'react-router-dom';

const Avatar = () => {
    const navigate = useNavigate();
    const content = (
        <div className='space-y-2 text-sm rounded-none'>
            <p className='hover:text-gray-500 cursor-pointer'>Hồ sơ người dùng</p>
            <p className='hover:text-gray-500 cursor-pointer' onClick={() => navigate('/account/order')}>Đơn đã đặt</p>
            <p className='hover:text-gray-500 cursor-pointer'>Đăng xuất</p>
        </div>
    );
    return (
        <div>
            <Popover content={content} title="Tùy Chỉnh " >
                <img src={a1} alt="" className='object-cover w-[2rem] h-[2rem]' style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                    cursor: 'pointer'
                }} />
            </Popover>
        </div>
    )
}

export default Avatar
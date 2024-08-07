import React from 'react'
import { Button, Col, Input, Row, Space } from 'antd'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
    return (
        <div className='bg-gray-700 ' >
            <div className='p-6 text-white'>
                <Row
                    gutter={{
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                    }}
                >
                    <Col className="gutter-row" span={8} md={6}>
                        <div className=''>
                            <span className='text-lg font-bold'>KẾT NỐI VỚI CHÚNG TÔI</span>
                        </div>
                        <div className='w-8 border-b-4 border-gray-500 mt-4'></div>

                        <div className='mt-4 mb-4'>FOLLOW US</div>
                        <div className='mb-2 cursor-pointer'>
                            <button className='text-gray-300 hover:text-white my-auto mr-1'><InstagramIcon className='mb-1' /><span>Instagram</span></button>
                            <button className='text-gray-300 hover:text-white my-auto mr-1'><YouTubeIcon className='mb-1' /><span>Youtube</span></button>
                            <button className='text-gray-300 hover:text-white my-auto mr-1'><FacebookIcon className='mb-1'/><span>FaceBook</span></button>
                        </div>



                    </Col>
                    <Col className="gutter-row" span={8} md={6}>
                        <span className='text-lg font-bold '>THÔNG TIN CESPIN</span>
                        <div className='w-8 border-b-4 border-gray-500 mt-4'></div>
                        <div className='cursor-pointer'>
                            <div className='mt-4 mb-2 text-gray-300 hover:text-white'>Giới thiệu </div>
                            <div className='mb-2 text-gray-300 hover:text-white'>Chuyện CESPIN</div>
                            <div className='mb-2 text-gray-300 hover:text-white'>Tổng công ty</div>
                            <div className='mb-2 text-gray-300 hover:text-white'>Tuyển dụng</div>
                            <div className='mb-2 text-gray-300 hover:text-white'>Thẻ hội viên</div>
                            <div className='mb-2 text-gray-300 hover:text-white'>Đổi trả hàng</div>
                        </div>

                    </Col>
                    <Col className="gutter-row" span={8} md={6}>
                        <span className='text-lg font-bold  '>CẢM HỨNG #CESPIN</span>
                        <div className='w-8 border-b-4 border-gray-500 mt-4'></div>
                        <div className='cursor-pointer'>
                            <div className='mt-4 mb-2 text-gray-300 hover:text-white'>Sản phẩm</div>
                            <div className='mb-2 text-gray-300 hover:text-white'>Ý tưởng và cảm hứng</div>
                        </div>

                    </Col>
                    <Col className="gutter-row " span={20} md={6}>
                        <span className='text-lg font-bold '>NEWSLETTER</span>
                        <div className='w-8 border-b-4 border-gray-500 mt-4'></div>
                        <div className=''>
                            <div className='mt-4 mb-2'>Hãy để lại email của bạn để nhận được những ý tưởng trang trí mới và những thông tin, ưu đãi từ CESPIN</div>
                            <p className='mb-2 '>Email: cespinstore@gmail.com</p>
                            <div className='mb-2 '>Hotline: 18007000</div>
                            <div className='mb-2 text-gray-300 hover:text-white'>
                                <Space.Compact style={{ width: '100%' }} >
                                    <Input className='rounded-none' placeholder="Nhập mail của bạn" />
                                    <Button  className='rounded-none bg-black text-white'  >ĐĂNG KÝ</Button>
                                </Space.Compact>

                            </div>
                        </div>

                    </Col>
                </Row>
            </div>
            <div className=' border-t border-gray-500 text-gray-400'>
                <Row className='p-6'>
                    <Col span={24} >© 2021 - Bản quyền của CESPIN - thương hiệu thuộc HAVJPRO
                        <br />Từ năm 2077 - thương hiệu đăng ký số 123124 Cục sở hữu trí tuệ</Col>

                </Row>
            </div>
        </div>

    )
}

export default Footer
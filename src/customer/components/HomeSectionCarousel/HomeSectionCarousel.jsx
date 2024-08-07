import React, { useState } from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import 'react-alice-carousel/lib/alice-carousel.css';
import { interior } from '../../../Data/Interior';

const HomeSectionCarousel = ({ data }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 2 },
        558: { items: 2 },
        900: { items: 3 },
        1024: { items: 3 },
        1224: { items: 4 },
        1424: { items: 5 },
        1624: { items: 6 },
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);


    const items = interior.slice(0, 10).map((item) => <HomeSectionCard product={item} />);
    return (
        <div className='px-6'>
            {/* Div tiêu đề HomeSectionCarousel */}
            <div className='flex border-b border-stone-300'>
                <div className='py-2 mx-3 border-b-2 border-green-700'>
                    <span className='px-1 text-xl'>ĐỒ NỘI THẤT</span>
                </div>
                <div className='py-2 mx-2'>
                    <button className='px-2 text-stone-500'>xem tất cả<KeyboardArrowRightIcon className='mb-1 ' /></button>
                </div>
            </div>

            {/* Div hiển thị carousel sản phẩm */}
            <div className='relative px-6 pt-4 '>
                {/* AliceCarousel hiển thị sản phẩm đang bày bán */}
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />

                {/* Button hiển thị danh sách sản phẩm bên trái */}
                {activeIndex !== items.length - 4 && <ArrowForwardIosIcon onClick={slideNext} variant='contained' className='z-20 cursor-pointer hover:text-green-600 '
                    sx={{
                        fontSize: 25,
                        position: 'absolute',
                        top: '50%',
                        right: '0rem'
                    }}
                    aria-label='next'
                />}

                {/* Button lùi lại danh sách sản phẩm  */}
                {activeIndex !== 0 && <ArrowBackIosIcon onClick={slidePrev} variant='contained' className='z-20 cursor-pointer hover:text-green-600 ml-2'
                    sx={{
                        fontSize: 25,
                        position: 'absolute',
                        top: '50%',
                        left: '0rem'
                    }}
                    aria-label='prev'
                />}
            </div>
        </div>




    )
}

export default HomeSectionCarousel
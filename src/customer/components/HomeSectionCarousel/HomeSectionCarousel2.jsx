import React, { useState } from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import 'react-alice-carousel/lib/alice-carousel.css';
import { interior } from '../../../Data/Interior';

const HomeSectionCarousel2 = () => {

    const[activeIndex, setActiveIndex]=useState(0);

    const responsive = {
        0: { items: 1 },
        558: { items: 2 },
        900: { items: 3 },
        1024: { items: 3 },
        1224: { items: 4 },
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    
    const items = interior.slice(0,10).map((item) => <HomeSectionCard  product={item} />);
    return (
        <div className='px-6'>
            <div className='flex border-b border-stone-300'>
                <div className='py-2 mx-3 border-b-2 border-green-700'>
                    <span className='px-1 text-xl'>ĐỒ TRANG TRÍ</span>
                </div>
                <div className='py-2 mx-2'>
                    <button className='px-2 text-stone-500'>xem tất cả<KeyboardArrowRightIcon className='mb-1 ' /></button>
                </div>
            </div>

            <div className='relative px-6 pt-4'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                { activeIndex !== items.length-4 && <ArrowForwardIosIcon onClick={slideNext} variant='contained' className='z-50 cursor-pointer hover:text-green-600 ' 
                sx={{ 
                    fontSize: 25, 
                    position: 'absolute', 
                    top: '8rem', 
                    right: '0rem' }} 
                    aria-label='next' 
                />}
                {activeIndex!==0 && <ArrowBackIosIcon onClick={slidePrev} variant='contained' className='z-50 cursor-pointer hover:text-green-600 ml-2' 
                sx={{ 
                    fontSize: 25,
                    position: 'absolute', 
                    top: '8rem', 
                    left:'0rem' }} 
                    aria-label='prev' 
                />}
                

            </div>
            <div>

            </div>
        </div>




    )
}

export default HomeSectionCarousel2
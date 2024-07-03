import React from 'react'
import { mainCarouselData } from './MainCarouselData'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';


const MainCarousel = () => {

    const items = mainCarouselData.map((item)=> <img className='cursor-pointer w-screen h-85' role='presentation' src={item.image} alt="" />)

  return (
    <div >
      
        <div>
            <AliceCarousel
                items={items}
                disableButtonsControls
                // autoPlay
                // autoPlayInterval={2000}
                infinite
            />
        </div>
    </div>
   
  )
}

export default MainCarousel
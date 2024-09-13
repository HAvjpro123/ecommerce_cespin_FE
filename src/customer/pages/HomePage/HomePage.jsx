import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import HomeSectionCarousel2 from '../../components/HomeSectionCarousel/HomeSectionCarousel2'


const HomePage = () => {


  return (
    <div className='pt-28'>

      <HomeBanner />

      <div className='pb-4 flex flex-col justify-center mt-8'>
        <HomeSectionCarousel2 title={"Đồ nội thất"} category={"Bàn_ăn"} />
      </div>

      <div className='my-6'>
        <MainCarousel />
      </div>

      
    </div>
  )
}

export default HomePage
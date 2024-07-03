import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import HomeSectionCarousel2 from '../../components/HomeSectionCarousel/HomeSectionCarousel2'

const HomePage = () => {
  return (
    <div className=''>

      <HomeBanner />
      <div className='space-y-10 py-10 flex flex-col justify-center '>
        <HomeSectionCarousel/>
      </div>

      <MainCarousel />

      <div className='space-y-10 pb-10 flex flex-col justify-center'>
        <HomeSectionCarousel2 />
      </div>

    </div>
  )
}

export default HomePage
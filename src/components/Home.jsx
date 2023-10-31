import React from 'react'
import bg_1 from '../images/bg-1.jpg'
import bg_2 from '../images/bg-2.jpg'
import bg_3 from '../images/bg-3.jpg'
import Search from './Search'
import ServiceList from './ServiceList'
import RoomFewList from './RoomFewList'
import ExperienceCard from './ExperienceCard'


const Home = () => {
  return (
    <main id='main-bg' className=''>
      <div className='px-[1rem] xl:px-[3rem] lg:px-[3rem] py-[10rem] flex items-center justify-between w-full xl:flex-row lg:flex-row flex-col gap-3'>
        <div className='xl:w-[50%] lg:w-[40%]'>
          <h1 className='font-Heading text-[5rem] text-TEXT capitalize'>quality<br />holidays with us</h1>
          <p className='text-BG font-Poppins px-2 py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor sed deserunt accusantium consectetur vitae porro odit aliquid fuga? Dicta nesciunt nulla laudantium. Blanditiis ducimus quam aut quae sed, at alias.
          Doloribus a inventore at provident sit omnis natus quas quis atque voluptates cum labore consectetur quibusdam pariatur earum, eius maxime minima. Quam sunt sit distinctio non, fugit cupiditate temporibus accusantium?</p>
        </div>
        <div className='flex xl:items-center lg:items-center items-start justify-around xl:w-[50%] lg:w-[50%] gap-2 pt-6 xl:pt-0 lg:pt-0'>
          <img src={bg_1} alt="" className='xl:w-[230px] sm:w-[200px] w-[120px] lg:w[230px] lg:h-[400px] h-[300px]  xl:h-[410px] object-cover object-center rounded-[15px] xl:mb-[3rem] lg:mb-[3rem] mb-0 mt-[3rem] xl:mt-0 lg:mt-0'/>
          <img src={bg_2} alt="" className='xl:w-[230px] sm:w-[200px] w-[120px] lg:w[230px] lg:h-[400px] h-[300px] xl:h-[410px] object-cover object-center rounded-[15px]'/>
          <img src={bg_3} alt="" className='xl:w-[230px] sm:w-[200px] w-[120px] lg:w[230px] lg:h-[400px] h-[300px] xl:h-[410px] object-cover object-center rounded-[15px] mt-[3rem]'/>
        </div>
      </div>
      <Search/>
      <ServiceList/>
      <RoomFewList/>
      <ExperienceCard/>
    </main>
  )
}

export default Home
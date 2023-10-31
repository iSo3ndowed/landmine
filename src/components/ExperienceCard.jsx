import React from 'react'
import travel from '../images/travel.jpg'

const ExperienceCard = () => {
  return (
    <div className='px-[1rem] xl:px-[3rem] lg:px-[3rem] flex items-center justify-center py-[5rem] flex-col'>
        <div className='text-center flex items-center justify-center flex-col'>
            <h1 className='text-[15px] capitalize text-TEXT font-Heading'>what we have done</h1>
            <h1 className='text-[30px] font-Poppins'>experience</h1>
            <p className='xl:w-[50%] lg:w-[50%] font-Poppins text-[15px] py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eos hic saepe inventore, commodi perspiciatis quam dolore aliquam! Corporis dolore odio voluptatem, pariatur atque impedit magni vero est laboriosam omnis?</p>
        </div>
        <div className='flex items-center justify-between flex-wrap xl:flex-nowrap lg:flex-nowrap'>
          <div>
            <div className='flex items-center justify-center gap-[3rem] py-4 font-Heading text-center xl:text-left lg:text-left md:text-center'>
              <div>
                <span className='text-4xl'>15k+</span>
                <h1 className='capitalize py-2 text-TEXT text-[17px]'>successful booking</h1>
              </div>
              <div>
                <span className='text-4xl'>1k+</span>
                <h1 className='capitalize py-2 text-TEXT text-[17px]'>regular client</h1>
              </div>
              <div>
                <span className='text-4xl'>13+</span>
                <h1 className='capitalize py-2 text-TEXT text-[17px]'>years experience</h1>
              </div>
            </div>
          </div>
          <div>
            <img src={travel} alt="" className='w-[40rem]'/>
          </div>
        </div>

    </div>
  )
}

export default ExperienceCard
import React from 'react'
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='px-[1rem] xl:px-[3rem] lg:px-[3rem] py-8 bg-BG'>
    <footer className='flex justify-between px-[1rem] xl:px-[3rem] lg:px-[3rem] py-8 flex-col xl:flex-row lg:flex-row font-Poppins text-[14px] text-white w-[100%] gap-8 xl:gap-[8rem] lg:gap-[8rem]'>
      <div className='xl:w-[40%] lg:w-[40%]'>
        <h1 className='text-[20px] text-TEXT font-Heading xl:pb-8 lg:pb-8 pb-3 font-semibold'>LandMine.com</h1>
        <div>
          <p className='pb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni ducimus porro explicabo veniam officiis reprehenderit, repellendus expedita eveniet temporibus cupiditate magnam modi laboriosam eum bus? Qui, non? Quae?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni ducimus porro explicabo veniam officiis reprehenderit, repellendus expedita eveniet temporibus cupiditate magnam modi laboriosam eum bus? Qui, non? Quae?</p>
        </div>
      </div>
      <div className='xl:w-[20%] lg:w-[20%]'>
        <h1 className='text-[20px] text-TEXT font-Heading xl:pb-8 pb-3 lg:pb-8 font-semibold'>Services</h1>
        <div>
          <ul className='flex gap-3 flex-col'>
            <li>Business Growth</li>
            <li>Sustainability</li>
            <li>Customer Insights</li>
            <li>Advanced analytics</li>
            <li>Performance</li>
          </ul>
        </div>
      </div>
      <div className='xl:w-[25%] lg:w-[25%]'>
        <h1 className='text-[20px] text-TEXT font-Heading xl:pb-8 pb-3 lg:pb-8 font-semibold'>Contact Info</h1>
        <div className='flex flex-col gap-3'>
          <p>Flat 20, Reynorlds Neck, North Helenvaville, Fv77</p>
          <p>+2(395)587-3409</p>
          <p>info@landmine.com</p>
        </div>
        <ul className='flex items-center gap-3 pt-3'>
          <li><FaFacebookF/></li>
          <li><FaTwitter/></li>
          <li><FaInstagram/></li>
        </ul>
      </div>
      <div className='xl:w-[25%] lg:w-[25%]'>
        <h1 className='text-[20px] text-TEXT font-Heading xl:pb-8 pb-3 lg:pb-8 font-semibold'>Newsletter</h1>
        <div>
          <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quia dicta officiis provident consectetur dolore pariatur asperiores esse. Sequi dignissimos voluptate quaerat ipsa ipsum officia eaque id illum dolorem eos.</p>
          <div className='flex items-center justify-between xl:justify-normal lg:justify-normal border-2 pl-2 rounded-md'>
            <input type="email" placeholder='Email' className='w-[185px] bg-transparent focus:outline-none'/>
            <button className='border-0 border-l-2 text-TEXT px-2 bg-white hover:bg-black'>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
    <div className='flex items-center justify-center text-center flex-wrap xl:flex-nowrap lg:flex-nowrap'>
      <h1 className='text-white'>All Right Reserved &copy; 2023 <span className='text-TEXT font-Heading mr-8'>LandMine.com.</span></h1>
      <span className='text-white font-Heading'>Design by: Olagunju Olamide</span>
      </div>
    </div>
  )
}

export default Footer
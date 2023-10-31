import React, { useRef } from 'react'
import { FaLocationCrosshairs } from 'react-icons/fa6'
import { GiPathDistance } from 'react-icons/gi'
import { IoIosPeople } from 'react-icons/io'
import { LuSearch } from 'react-icons/lu'
import toast, { Toaster } from 'react-hot-toast'


const Search = () => {
    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)

    const searchHandler = () => {
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if(location === '' || distance === '' || maxGroupSize === '')
        return toast.error('All fields are required!')
    }

    
  return (
    <>
    <div className='flex items-center justify-center gap-5 pb-8'>
        <div className='flex items-center p-4 xl:gap-[3rem] lg:gap-[3rem]' id='details_bg'>
            <div id='form_details'>
                <h1><FaLocationCrosshairs className='text-[20px] text-TEXT'/></h1>
                <div className='flex flex-col'>
                    <label htmlFor="">Location</label>
                    <input type="text" placeholder='Choose Preferred location' ref={locationRef}/>
                </div>
            </div>
            <div id='form_details'>
                <h1><GiPathDistance className='text-[20px] text-TEXT'/></h1>
                <div className='flex flex-col'>
                    <label htmlFor="">Distance</label>
                    <input type="text" placeholder='In km/hr' ref={distanceRef}/>
                </div>
            </div>
            <div id='form_details'>
                <h1><IoIosPeople className='text-[20px] text-TEXT'/></h1>
                <div className='flex flex-col'>
                    <label htmlFor="">Guest</label>
                    <input type="number" placeholder='0' ref={maxGroupSizeRef}/>
                </div>
            </div>
            <LuSearch className='text-[20px] text-TEXT cursor-pointer hover:text-BG' onClick={searchHandler}/>
        </div>
    </div>
    <Toaster/>
    </>
  )
}

export default Search
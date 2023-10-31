import React from 'react'
import data from './data/data'
import {IoMdStar} from 'react-icons/io'
import {MdLocationOn} from 'react-icons/md'
import { Link } from 'react-router-dom'
import Search from './Search'


const RoomsCard = () => {
    
  return (
    <div className='px-[1rem] xl:px-[3rem] lg:px-[3rem] flex items-center justify-center flex-col text-center'>
        <h1 className='text-[30px] font-Poppins py-[4rem]'>our featured rooms</h1>
        <Search/>
        <div className='flex justify-center py-[3rem] flex-wrap gap-8 font-Poppins'>
            {data.map((item) => (
                <Link to={`/apartments/${item.id}`} key={item.id}>
                    <div className='flex items-center justify-center xl:w-[330px] lg:w-[330px] flex-col p-6 hover:bg-gray-200 border-[1px] rounded-[5px]'>
                        <img src={item.photo1} alt={item.hotel_name} className='w-[300px] h-[250px] object-cover object-center rounded-lg'/>
                        <div className='flex items-center justify-between w-[100%] py-2 text-[15px]'>
                            <h1 className='font-semibold'><MdLocationOn className='text-TEXT'/>{item.city}, {item.country}</h1>
                            <p className='flex items-center'><IoMdStar className='text-TEXT'/>{item.star_rating}</p>
                        </div>
                        <div className='flex items-center justify-between w-[100%] text-[15px]'>
                            <h1 className='font-semibold'>${item.rates_from}<span className='font-normal'>/night</span></h1>
                            <p>Reviews: {item.number_of_reviews}</p>
                        </div>
                        <button className='w-[100%] bg-TEXT border-0 mt-3 text-white capitalize hover:bg-BG'><Link to={`/apartments/${item.id}`}>book now</Link></button>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default RoomsCard
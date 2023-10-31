import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import products from './data/data'
import {BsArrowLeftCircle} from 'react-icons/bs'
import {BsPlusSquare} from 'react-icons/bs'
import {IoMdStar} from 'react-icons/io'
import { CiSquareMinus } from 'react-icons/ci'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useUserAuth } from '../context/userAuthContext'


const ApartmentsDetails = () => {
  const {user} = useUserAuth()
  const [description, setDescription] = useState(false)
  const [booking, setBooking] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  
  const product = products.find((product) => product.id == id)
  const {city, hotel_name,state, country, star_rating,rates_currency,rates_from, number_of_reviews, overview, photo1, photo2, photo3, photo4, photo5} = product
  
  const [details,setDetails] = useState({
    userId: '01',
    userEmail: 'me@gmail.com',
    fullName: '',
    phone: '',
    numberOfRoom: '',
    bookingDate: '',
    agreeTerms: ''
  })

  const handleChange = (e) => {
    setDetails(prev => ({...prev, [e.target.id]:e.target.value}))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/ThankYou')
  }
  
  const serviceFee = 65
  const totalPrice = Number(rates_from) * Number(details.numberOfRoom) + Number(serviceFee)

  return (
    <div className='px-[1rem] xl:px-[3rem] lg:px-[3rem] flex items-start justify-center flex-col py-7' key={id}>
      <p onClick={() => navigate(-1)} className='flex items-center gap-2 font-Poppins'><BsArrowLeftCircle className='text-[20px] hover:text-TEXT cursor-pointer'/>Back</p>
      <div className='flex py-8 w-full my-8 flex-wrap xl:flex-nowrap lg:flex-nowrap gap-10 xl:justify-center lg:justify-center justify-start border-b-2'>
        <div className='xl:w-[50%] lg:w-[50%] w-full'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={photo1} alt={hotel_name} className='w-full object-fill object-center rounded-[5px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo2} alt={hotel_name} className='w-full object-fill object-center rounded-[5px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo3} alt={hotel_name} className='w-full object-fill object-center rounded-[5px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo4} alt={hotel_name} className='w-full object-fill object-center rounded-[5px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo5} alt={hotel_name} className='w-full object-fill object-center rounded-[5px]'/>
        </SwiperSlide>
      </Swiper>
        </div>
        <div className='flex justify-between flex-col xl:w-[50%] lg:w-[50%] w-full'>
          <div className='flex justify-center flex-col  font-Poppins w-full'>
            <h1 className='text-TEXT font-Heading text-[23px]'>{hotel_name}</h1>
            <div className='flex items-center gap-2 py-2 text-[15px]'>
              <h1>{city},</h1>
              <h1>{state}</h1>
              <h1>{country}</h1>
            </div>
            <div className='flex items-center gap-4 text-[15px]'>
              <h1 className='flex items-center gap-1'><IoMdStar className='text-[17px]'/>{star_rating}</h1>
              <h1>Reviews: ({number_of_reviews})</h1>
            </div>
            <h1 className='text-[14px] text-TEXT pt-3'>Price</h1>
            <h1 className='text-[18px] text-BG'>{rates_currency} {rates_from} <span className='text-black text-[14px]'>per night</span></h1>
            {user?
            <div className='py-4'>
            <h1 className='py-2 text-TEXT'>Information:</h1>
            <div>
              <form action="" className='flex flex-col gap-4' id='form__input'>
                <input type="text" placeholder=' Full name' id='fullName' required onChange={handleChange}/>
                <input type="hgnumber" placeholder='Phone' id='phone' required onChange={handleChange}/>
              </form>
              <form action="" className='flex xl:items-center lg:items-center lg:justify-between justify-center xl:justify-between xl:w-[70%] lg:w-[70%] w-full xl:flex-row lg:flex-row flex-col gap-3 pt-3' id='form__input'>
                <input type="date" id='bookingDate' required className='uppercase' onChange={handleChange}/>
                <input type="number" placeholder='Number of Room' id='numberOfRoom' required onChange={handleChange}/>
              </form>
              <div className='py-3'>
                <input type="checkbox" className='mr-2' id='agreeTerms' onChange={handleChange} required/>
                <label htmlFor="">I agree to the company <a href="#" className='underline text-blue-500'>privacy policy</a></label>
              </div>
            </div>
            <div>
              <label htmlFor="" className='flex items-start flex-col gap-1 pt-3'>
                <h1 className='text-black flex items-center justify-between xl:w-[70%] lg:w-[70%]'>Service Fee: <span className='text-white px-1 bg-gray-500 text-[14px]'>{serviceFee} ({rates_currency})</span></h1>
                <h1 className='text-black flex items-center justify-between xl:w-[70%] lg:w-[70%]'>Total Price: <span className='text-white px-1 bg-gray-500 text-[14px]'>{totalPrice} ({rates_currency})</span></h1>
              </label>
            </div>
            </div>:
            <div className='py-8'>
              <h1>Please <Link to='/signIn' className='underline text-TEXT '>sign in</Link> to continue</h1>
            </div>}
          </div>
        <button className='py-4 rounded-[5px] uppercase bg-TEXT text-white border-0 hover:bg-BG xl:w-[70%] lg:w-[70%] mt-8 xl:mt-0 lg:mt-0 items-start' onClick={submitHandler} disabled={!user}>proceed</button>
        </div>
       
      </div>
      <div className='flex items-center justify-between w-full px-[10px] bg-gray-200 cursor-pointer' onClick={() => setDescription(!description)}>
        <h1 className='text-[17px] font-Heading text-TEXT pb-2'>Description</h1>
        {description? <CiSquareMinus className='text-[21px] text-TEXT cursor-pointer'/>: <BsPlusSquare className='text-TEXT cursor-pointer'/>}
      </div>
      {description && <h1 className='text-[15px] font-Poppins pt-3 leading-8'>{overview}</h1>}
    </div>
  )
}

export default ApartmentsDetails
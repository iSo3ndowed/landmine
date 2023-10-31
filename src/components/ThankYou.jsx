import React from 'react'
import { Link } from 'react-router-dom'
import Thank from '../images/thankyou.png'


const ThankYou = () => {
  return (
    <div className='flex items-center justify-center flex-col py-[8rem] font-Poppins'>
        <img src={Thank} alt=""  className='w-[6rem]'/>
        <h1 className='text-[3rem] text-TEXT font-Heading'>Thank You</h1>
        <p className='text-green-700 text-2xl font-Poppins'>Your Reservation is Successful</p>
        <p className='py-2 text-center'>Thank you for choosing us. <br />Looking forward to having you!</p>
        <Link to={'/home'}><button className='my-7 bg-TEXT border-0 text-white rounded-[5px] hover:bg-BG'>Go Home</button></Link>
    </div>
  )
}

export default ThankYou
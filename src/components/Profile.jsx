import React from 'react'
import { useUserAuth } from '../context/userAuthContext'
import { Link } from 'react-router-dom'

const Profile = () => {
    const {user} = useUserAuth()
  return (
    <>
    {user? <div className='h-[50vh] px-[1rem] xl:px-[3rem] lg:px-[3rem] py-4 flex items-center justify-center flex-col gap-8'>
        <h1 className='text-4xl font-Heading text-TEXT'>User Profile</h1>
        <p className='text-black font-Poppins'>User Profile Under Construction</p>
    </div> :
    <div className='h-[50vh] px-[1rem] xl:px-[3rem] lg:px-[3rem] py-4 flex items-center justify-center'>
        <h1>Please <Link to='/signIn' className='text-TEXT underline'>login</Link> to view Profile</h1>
    </div> }
    </>
  )
}

export default Profile
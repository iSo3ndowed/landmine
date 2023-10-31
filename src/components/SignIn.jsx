import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import { useUserAuth } from '../context/userAuthContext'
import { ToastContainer, toast } from 'react-toastify'
import Home from './Home'
import Loader from './Loader'



const SignIn = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const {login, signInWithGoogle, user} = useUserAuth()
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const onEmailHandleChange = (e) => {
    setEmail(e.target.value)
  }
  const onPasswordHandleChange = (e) => {
    setPassword(e.target.value)
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()

    try {
      await signInWithGoogle()
      setLoading(true)
      navigate('/home')
    } catch (err){
      setError(err.message)
      setLoading(false)
    }
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    setError('')
    try {
      setLoading(true)
      await login(email,password)
      toast.success('Login Successful')
      navigate('/home', {
        state: {
          previousUrl: location.pathname,
        }
      })
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
    
  }
  return (
    <>
    {user? <Home/> :
    <div className='px-[1rem] xl:px-[3rem] lg:px-[3rem] flex-row flex items-center justify-center flex-wrap xl:flex-nowrap lg:flex-nowrap py-[2rem]'>
        <div className='xl:w-[50%] md:w-[50%] lg:w-[50%] font-Poppins flex justify-center px-8 flex-col xl:text-left lg:text-left md:text-left text-center'>
          <h1 className='text-[3.5rem] text-TEXT font-Heading'>Welcome!</h1>
          <p className='text-BG'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, minus ex nihil eveniet fuga labore officia, eius est numquam hic animi voluptatum provident enim assumenda nisi laborum, quod optio nemo?</p>
        </div>
        <div className='xl:py-[3rem] lg:py-[3rem] py-[2rem] px-[2rem] font-Poppins xl:w-[30%] md:w-[45%] lg:w-[35%] border-2 border-gray-300 my-[3rem] rounded-[5px] xl:my-[2rem] lg:my-[2rem]'>
          
          <div>
            <h1 className='text-[2.5rem] font-Poppins pb-2 text-TEXT'>Sign In</h1>
            <p className='text-[14px]'>or <Link to='/Register' className='text-BG hover:text-TEXT hover:underline'>register now</Link></p>
          </div>
          {error && <h1 className='bg-red-600 p-2 mt-5 text-white'>{error}</h1>}
          <div className='flex flex-col'>
            <form action="" className='flex flex-col gap-[3rem] py-[3rem]'>
                <input type="email" placeholder='Email address' id='email' required onChange={onEmailHandleChange} className='py-[10px] px-2 bg-transparent border-b-2 border-BG focus:outline-none focus:border-TEXT'/>
                <input type="text" placeholder='Password' id='password' required onChange={onPasswordHandleChange} className='py-[10px] px-2 bg-transparent border-b-2 border-BG focus:outline-none focus:border-TEXT'/>
            </form>
            <button className='text-white bg-black hover:bg-TEXT border-0 py-3 flex items-center justify-center' onClick={submitHandler}>Sign In {loading && <Loader/>}</button>
            <div className='mt-[2rem]'>
              <button className='flex w-full items-center justify-around text-white bg-black hover:bg-TEXT border-0 py-3 ' onClick={handleGoogleSignIn}><FcGoogle/>Sign in with google</button>
            </div>
          </div>
        </div>
    </div>}
    <ToastContainer/>
    </>
  )
}

export default SignIn
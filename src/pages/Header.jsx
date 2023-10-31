import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { useUserAuth } from '../context/userAuthContext';


const Nav_Link = [
    {
        path: '/home',
        display: 'home'
    },
    {
        path: '/about',
        display: 'about'
    },
    {
        path: '/apartments',
        display: 'apartments'
    }
]

const Header = () => {
  const {user, logOut} = useUserAuth()

  const [mobileNav, setMobileNav] = useState(false)
  const [show, setShow] = useState(false)
  const [activeNav, setActiveNav] = ('')
  const [logOutMenu, setLogOutMenu] = useState(false)

  const transitionNav = () => {
    if(window.scrollY > 100) {
      setShow(true)
    }else{
      setShow(false)
    }
   }

   useEffect(() => {
    window.addEventListener('scroll', transitionNav)
    return () => window.removeEventListener('scroll',transitionNav)
   },[])

   const logUserOut = async () => {
    try {
      await logOut()
    } catch {
      alert('error')
    }
   }
  return (
    
    <header className='font-Poppins'>
      <div className={`flex items-center justify-between px-[1rem] xl:px-[3rem] lg:px-[3rem] py-4 border-b-2 ${show && 'fixed left-0 right-0 bg-white transition ease-in-out shadow-lg z-[100]'}`}>
        <div>
          <Link to='/'>
            <img src="" alt="" />
            <h1 className='text-[22px] font-semibold font-Heading text-TEXT'>LandMine.com</h1>
          </Link>
        </div>
        <div>
          <ul className='hidden items-center xl:flex lg:flex md:flex gap-5'>
            {Nav_Link.map((item, index) => (
              <li className='hover:text-TEXT'>
                <NavLink to={item.path} className={activeNav === '' ? 'active' : ''} onClick={() => setActiveNav(!activeNav)}>{item.display}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        {user?
        <div className='hidden xl:flex lg:flex md:flex gap-4 items-center'>
          <p className='flex items-center gap-1'><FaUserCircle className='text-[25px]'/><span className=''>{user?.email}</span></p>
          <IoIosArrowDropdownCircle onClick={() => setLogOutMenu(setLogOutMenu => !setLogOutMenu)} className='text-TEXT cursor-pointer'/>
          {logOutMenu && 
          <div className='absolute right-[50px] top-[65px]'>
            <Link to='/Profile'><button className='hover:bg-TEXT'>User Profile</button></Link>
            <button className='hover:bg-TEXT' onClick={logUserOut}>Logout</button>
          </div>}
        </div> :
        <div className='hidden xl:flex lg:flex md:flex gap-4'>
          <button className='hover:text-white hover:bg-TEXT'><Link to='/signIn'>Sign in</Link></button>
          <button className='bg-BG text-white hover:bg-TEXT'><Link to='/register'>Register</Link></button>
        </div>}
        <span className='xl:hidden lg:hidden md:hidden flex items-center gap-2'>
          {user? 
          <div className='flex items-center gap-[5px]'>
            <p className='flex items-center gap-1'><FaUserCircle className='text-[25px]'/><span className='w-[70px] overflow-x-scroll'>{user.email}</span></p>
            <IoIosArrowDropdownCircle onClick={() => setLogOutMenu(setLogOutMenu => !setLogOutMenu)} className='text-TEXT cursor-pointer'/>
            {logOutMenu && 
          <div className='absolute right-[50px] top-[65px]'>
            <Link to='/Profile'><button className='hover:bg-TEXT'>User Profile</button></Link>
            <button className='hover:bg-TEXT' onClick={logUserOut}>Logout</button>
          </div>}
          </div>: ''}
          {mobileNav?<RiCloseFill className='text-[25px] cursor-pointer' onClick={() => setMobileNav(!mobileNav)}/> :<RiMenu4Fill className='text-[20px] cursor-pointer' onClick={() => setMobileNav(!mobileNav)}/>}
        </span>
      </div>
        
      {mobileNav && 
      <div className='flex flex-col h-[100vh] gap-5 py-4 bg-BG px-5 text-white'>
        <div className=''>
          <ul className='flex gap-5 flex-col'>
            {Nav_Link.map((item, index) => (
              <li className='hover:text-TEXT'>
                <NavLink to={item.path}>{item.display}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        {user? <p className='flex items-center gap-1'><FaUserCircle className='text-[25px]'/><span className=''>{user.email}</span></p> : 
        <div className='flex gap-5 mt-[3rem]'>
          <button className='hover:text-white hover:bg-TEXT'><Link to='/signIn'>Sign in</Link></button>
          <button className='bg-BG text-white hover:bg-TEXT'><Link to='/register'>Register</Link></button>
        </div>}
      </div>}
    </header>
  )
}

export default Header
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Apartments from '../components/Apartments'
import ApartmentsDetails from '../components/ApartmentsDetails'
import About from '../components/About'
import SignIn from '../components/SignIn'
import Register from '../components/Register'
import SearchResults from '../components/SearchResults'
import ThankYou from '../components/ThankYou'
import ScrollToTop from '../components/ScrollToTop'
import Profile from '../components/Profile'

const Router = () => {
  return (
    <>
    <ScrollToTop/>
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/apartments' element={<Apartments/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/apartments/:id' element={<ApartmentsDetails/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/thankyou' element={<ThankYou/>}/>
        <Route path='/apartments/search' element={<SearchResults/>}/>
    </Routes>
    </>
  )
}

export default Router
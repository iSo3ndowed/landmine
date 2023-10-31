import React, { useEffect, useState } from 'react'
import RoomList from './RoomList'

const Apartments = () => {
  // const [pageCount, setPageCount] = useState(0)
  // const [page, setPage] = useState(0)

  // useEffect(() => {
  //   const page = Math.ceil(4/3)
  //   setPageCount(page)
  // },[page])

  return (
    <>
    <RoomList/>
    {/* <div className='flex items-center justify-center gap-5 mb-5 text-white'>
      {[...Array(pageCount).keys()].map(number => (
        <span key={number} onClick={() => setPage(number)} className={`${page === number ? 'active' : ''}rounded-full bg-black px-3 cursor-pointer hover:bg-TEXT font-Poppins py-1`}>{number + 1}</span>
      ))}
    </div> */}
    </>
  )
}

export default Apartments
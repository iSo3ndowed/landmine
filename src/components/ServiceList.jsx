import React from 'react'

const ServiceData = [
    {
        title: 'flexible payment',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel, tempora nesciunt beatae accusantium quidem? Quisquam minima fuga, fugiat commodi, necessitatibus aliquid, suscipit architecto natus magni exercitationem esse neque laborum.'
    },
    {
        title: 'comfortability',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel, tempora nesciunt beatae accusantium quidem? Quisquam minima fuga, fugiat commodi, necessitatibus aliquid, suscipit architecto natus magni exercitationem esse neque laborum.'
    },
    {
        title: 'availability',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel, tempora nesciunt beatae accusantium quidem? Quisquam minima fuga, fugiat commodi, necessitatibus aliquid, suscipit architecto natus magni exercitationem esse neque laborum.'
    },
    {
        title: 'customer support',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel, tempora nesciunt beatae accusantium quidem? Quisquam minima fuga, fugiat commodi, necessitatibus aliquid, suscipit architecto natus magni exercitationem esse neque laborum.'
    },
]

const ServiceList = () => {
  return (
    <div className='px-[1rem] xl:px-[3rem] lg:px-[3rem] font-Poppins py-[4rem] flex items-center justify-center flex-col'>
        <p className='text-[16px] text-TEXT font-Heading capitalize'>what we offer</p>
        <h1 className='text-[30px]'>our service</h1>
        <p className='py-[1rem] xl:w-[50%] lg:w-[50%] text-[15px] text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum nisi sapiente veniam fugit, aperiam ex soluta suscipit iure! Debitis commodi ab aperiam quidem aliquam. Voluptatibus similique ipsum facere repellendus commodi?</p>
        <div className='flex items-center justify-center my-[2rem] xl:gap-6 lg:gap-6 gap-4 flex-wrap xl:flex-nowrap lg:flex-nowrap'>
            {ServiceData.map((item,index) => (
                <div key={index} className='flex justify-center flex-col xl:w-[300px] lg:w-[300px] sm:w-[300px] w-[300px] h-[300px] gap-3 p-3' id='services'>
                    <img src={item.img} alt='' />
                    <h1 className='text-[17px] text-TEXT uppercase font-Poppins'>{item.title}</h1>
                    <p className='text-[14px]'>{item.details}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ServiceList
import React from 'react'
import './NewLetter.css'

export const NewLetter = () => {
  return (
    <div className='new-letter flex flex-col items-center justify-center gap-7 m-auto px-[140px] my-36 w-[65%] h-[40vh]'>
      <h1 className='text-6xl text-[#454545] font-semibold'>Get Exclusive Offers On Your Email</h1>
      <p className='text-xl text-[#454545] font-semibold'>Subscribe to our newletter and stay updated</p>
      <div className='flex justify-between items-center w-[730px] h-[70px] rounded-[80px] border-[#e3e3e3]'>
        <input
          type='email'
          name=''
          id=''
          placeholder='Your email'
          className='w-[500px] text-[#616161] text-base h-[70px] border pl-7 focus-visible:outline-none'
        />
        <button className='w-52 h-[70px] rounded-[80px] bg-black text-white text-base cursor-pointer'>Subscribe</button>
      </div>
    </div>
  )
}

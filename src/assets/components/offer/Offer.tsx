import React from 'react'
import './Offer.css'
import { exclusive_image } from '@images/index'
export const Offer = () => {
  return (
    <div className='offers w-full flex m-auto px-64 mb-36 mt-10'>
      <div className='offer-left flex flex-1 flex-col justify-center'>
        <h1 className='text-chinese-black text-[80px] font-semibold'>Exclusive</h1>
        <h1 className='text-chinese-black text-[80px] font-semibold'>Offers For You</h1>
        <p className='text-chinese-black text-2xl font-semibold'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='h-[70px] w-72 rounded-[36px] font-medium mt-7 cursor-pointer hover:opacity-90 bg-red-500 text-white'>
          Check Now
        </button>
      </div>
      <div className='offer-right flex flex-1 justify-end items-center pt-12'>
        <img src={exclusive_image} alt='exclusive_image' />
      </div>
    </div>
  )
}

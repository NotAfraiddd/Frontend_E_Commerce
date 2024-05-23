import React from 'react'
import './BreadCrums.css'
import { breadcrum_arrow } from '@images/index'
import { InterfaceProduct } from '@components/Item/InterfaceShopCategory'

export default function BreadCrums({ product }: InterfaceProduct) {
  return (
    <div className='breadcrum mx-12 sm:mx-14 md:mx-16 xl:mx-32 text-xs md:text-sm lg:text-base xl:text-xl flex items-center gap-2 my-10 text-[#5e5e5e] capitalize font-semibold text'>
      HOME <img src={breadcrum_arrow} className=' w-4 h-4' alt='' /> SHOP
      <img src={breadcrum_arrow} className=' w-4 h-4' alt='' /> {product.category}
      <img src={breadcrum_arrow} className=' w-4 h-4' alt='' /> <span>{product.name}</span>
    </div>
  )
}

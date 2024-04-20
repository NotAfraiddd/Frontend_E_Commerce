import React from 'react'
import './BreadCrums.css'
import { breadcrum_arrow } from '@images/index'
import { InterfaceProduct } from '@components/Item/InterfaceShopCategory'

export default function BreadCrums({ product }: InterfaceProduct) {
  return (
    <div className='breadcrum flex items-center gap-2'>
      HOME <img src={breadcrum_arrow} className=' w-4 h-4' alt='' /> SHOP
      <img src={breadcrum_arrow} className=' w-4 h-4' alt='' /> {product.category}
      <img src={breadcrum_arrow} className=' w-4 h-4' alt='' />
    </div>
  )
}

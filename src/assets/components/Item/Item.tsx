import React from 'react'
import { InterfaceItem } from './InterfaceShopCategory'
import './Item.css'
import { Link } from 'react-router-dom'
export default function Item({ image, name, new_price, old_price, id }: InterfaceItem) {
  return (
    <div className='item w-52 md:w-[280px]'>
      <Link to={`/product/${id}`}>
        <img src={image} alt='prodct_image' onClick={() => window.scrollTo(0, 0)} />
      </Link>
      <p className='text-sm md:text-base'>{name}</p>
      <div className='item-prices flex gap-5'>
        <span className='item-price-new text-[#374141] text-sm md:text-lg font-semibold'>{new_price}</span>
        <span className='item-price-old text-[#8c8c8c] text-sm md:text-lg line-through'>{old_price}</span>
      </div>
    </div>
  )
}

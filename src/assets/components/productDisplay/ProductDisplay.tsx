import React from 'react'
import './ProductDisplay.css'
import { InterfaceProduct } from '@components/Item/InterfaceShopCategory'
import { star_dull_icon, star_icon } from '@images/index'
export default function ProductDisplay({ product }: InterfaceProduct) {
  return (
    <div className='flex mx-32'>
      <div className='product-display__left flex gap-3 w-1/2'>
        <div className='product-display__img-list flex flex-col gap-2'>
          <img src={product.image} alt='' className='w-32' />
          <img src={product.image} alt='' className='w-32' />
          <img src={product.image} alt='' className='w-32' />
        </div>
        <div className='product-display__img'>
          <img className='product-display__img-main  object-contain' src={product.image} alt='' />
        </div>
      </div>
      <div className='product-display__right w-1/2'>
        <h1>{product.name}</h1>
        <div className='product-display__right-star'>
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_dull_icon} alt='' />
          <p>(122)</p>
        </div>
        <div className='product-display__right-prices'>
          <div className='product-display__price-old'>${product.old_price}</div>
          <div className='product-display__price-new'>${product.new_price}</div>
        </div>
        <div className='product-display__description'>
          A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves,
          worn as an undershirt or outer garment.
        </div>
        <div className='product-display__sizes'>
          <h1>Select Size</h1>
          <div className='product-display__sizes'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button>ADD TO CART</button>
          <p className='product-display__category'>
            <span>Category : </span>
            <span>Women , T-Shirt , Crop Top</span>
          </p>
          <p className='product-display__category'>
            <span>Tags : </span>
            <span>Morden , Lastest</span>
          </p>
        </div>
      </div>
    </div>
  )
}

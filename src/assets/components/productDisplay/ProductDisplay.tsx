import React, { useContext } from 'react'
import './ProductDisplay.css'
import { InterfaceProduct } from '@components/Item/InterfaceShopCategory'
import { star_dull_icon, star_icon } from '@images/index'
import { ShopContext } from '@context/ShopContext'
export default function ProductDisplay({ product }: InterfaceProduct) {
  const { addToCart, removeToCart } = useContext(ShopContext)

  return (
    <div className='flex mx-32'>
      <div className='product-display__left flex gap-3 w-2/5'>
        <div className='product-display__img-list flex flex-col justify-between'>
          <img src={product.image} alt='' className='h-[100px]' />
          <img src={product.image} alt='' className='h-[100px]' />
          <img src={product.image} alt='' className='h-[100px]' />
          <img src={product.image} alt='' className='h-[100px]' />
        </div>
        <div className='product-display__img'>
          <img className='product-display__img-main h-full object-contain' src={product.image} alt='' />
        </div>
      </div>
      <div className='product-display__right w-3/5 mx-16 flex flex-col'>
        <h1 className='text-[#3d3d3d] text-4xl font-semibold'>{product.name}</h1>
        <div className='product-display__right-star flex items-center gap-2 text-base text-[#1c1c1c]'>
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_dull_icon} alt='' />
          <p>(122)</p>
        </div>
        <div className='product-display__right-prices flex my-4 gap-7 text-2xl font-bold'>
          <div className='product-display__price-old text-[#818181] line-through'>${product.old_price}</div>
          <div className='product-display__price-new text-red-500'>${product.new_price}</div>
        </div>
        <div className='product-display__description'>
          A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves,
          worn as an undershirt or outer garment.
        </div>
        <div className='product-display__sizes'>
          <h1 className='text-[#656565] text-xl font-semibold mt-3'>Select Size</h1>
          <div className='product-display__size flex my-3 gap-5'>
            <div className='py-1 hover:bg-[#e3e3e3] px-6 rounded bg-[#fbfbfb] border-[#ebebeb] border cursor-pointer'>
              S
            </div>
            <div className='py-1 hover:bg-[#e3e3e3] px-6 rounded bg-[#fbfbfb] border-[#ebebeb] border cursor-pointer'>
              M
            </div>
            <div className='py-1 hover:bg-[#e3e3e3] px-6 rounded bg-[#fbfbfb] border-[#ebebeb] border cursor-pointer'>
              L
            </div>
            <div className='py-1 hover:bg-[#e3e3e3] px-6 rounded bg-[#fbfbfb] border-[#ebebeb] border cursor-pointer'>
              XL
            </div>
            <div className='py-1 hover:bg-[#e3e3e3] px-6 rounded bg-[#fbfbfb] border-[#ebebeb] border cursor-pointer'>
              XXL
            </div>
          </div>
          <button
            onClick={() => {
              if (addToCart && typeof product.id === 'number') {
                addToCart(product.id)
              }
            }}
            className='py-3 px-5 cursor-pointer rounded mb-3 mt-2 hover:bg-[#e3e3e3] hover:text-black bg-red-500 text-white border'
          >
            ADD TO CART
          </button>
          <p className='product-display__category'>
            <span className='font-semibold'>Category : </span>
            <span>Women , T-Shirt , Crop Top</span>
          </p>
          <p className='product-display__category'>
            <span className='font-semibold'>Tags : </span>
            <span>Morden , Lastest</span>
          </p>
        </div>
      </div>
    </div>
  )
}

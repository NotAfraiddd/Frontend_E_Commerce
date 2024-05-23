import React, { useContext } from 'react'
import './ProductDisplay.css'
import { InterfaceProduct } from '@components/Item/InterfaceShopCategory'
import { star_dull_icon, star_icon } from '@images/index'
import { ShopContext } from '@context/ShopContext'
export default function ProductDisplay({ product }: InterfaceProduct) {
  const { addToCart } = useContext(ShopContext)

  return (
    <div className='product flex mx-12 sm:mx-14 md:mx-16 xl:mx-32 justify-between'>
      <div className='product-display__left flex gap-3 w-2/5 flex-col'>
        <div className='product-display__img'>
          <img className='product-display__img-main object-contain' src={product.image} alt='' />
        </div>
        <div className='product-display__img-list flex justify-between w-fit gap-2 overflow-x-auto'>
          <img src={product.image} alt='' className='h-[50px] sm:h-20 md:h-24 xl:h-28' />
          <img src={product.image} alt='' className='h-[50px] sm:h-20 md:h-24 xl:h-28' />
          <img src={product.image} alt='' className='h-[50px] sm:h-20 md:h-24 xl:h-28' />
          <img src={product.image} alt='' className='h-[50px] sm:h-20 md:h-24 xl:h-28' />
          <img src={product.image} alt='' className='h-[50px] sm:h-20 md:h-24 xl:h-28' />
          <img src={product.image} alt='' className='h-[50px] sm:h-20 md:h-24 xl:h-28' />
        </div>
      </div>
      <div className='product-display__right w-[55%] flex flex-col'>
        <h1 className='text-[#3d3d3d] text-base sm:text-lg font-semibold md:text-2xl xl:text-4xl'>{product.name}</h1>
        <div className='product-display__right-star flex items-center gap-2 text-[#1c1c1c] text-xs md:text-sm lg:text-base'>
          <img src={star_icon} alt='' className='w-3 md:w-4 lg:w-fit' />
          <img src={star_icon} alt='' className='w-3 md:w-4 lg:w-fit' />
          <img src={star_icon} alt='' className='w-3 md:w-4 lg:w-fit' />
          <img src={star_icon} alt='' className='w-3 md:w-4 lg:w-fit' />
          <img src={star_dull_icon} alt='' className='w-3 md:w-4 lg:w-fit' />
          <p>(122)</p>
        </div>
        <div className='product-display__right-prices flex my-1 sm:my-2 md:my-3 lg:my-4 gap-7 text-2xl font-bold'>
          <div className='product-display__price-old text-[#818181] line-through text-sm md:text-base lg:text-xl'>
            ${product.old_price}
          </div>
          <div className='product-display__price-new text-red-500 text-sm md:text-base lg:text-xl'>
            ${product.new_price}
          </div>
        </div>
        <div className='product-display__description text-xs md:text-sm lg:text-base'>
          A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves,
          worn as an undershirt or outer garment.
        </div>
        <div className='product-display__sizes'>
          <h1 className='text-[#656565] text-sm md:text-base lg:text-xl font-semibold mt-3'>Select Size</h1>
          <div className='product-display__size flex my-3 gap-3 md:gap-5 '>
            <div className='py-1 hover:bg-[#e3e3e3] md:px-6 px-3 text-sm md:text-base rounded bg-[#fbfbfb] border-[#ebebeb] border cursor-pointer'>
              S
            </div>
            <div className='py-1 hover:bg-[#e3e3e3] md:px-6 px-3 text-sm md:text-base rounded bg-[#fbfbfb] border-[#ebebeb] border cursor-pointer'>
              M
            </div>
            <div className='py-1 hover:bg-[#e3e3e3] md:px-6 px-3 text-sm md:text-base rounded bg-[#fbfbfb] border-[#ebebeb] border cursor-pointer'>
              L
            </div>
            <div className='py-1 hover:bg-[#e3e3e3] md:px-6 px-3 text-sm md:text-base rounded bg-[#fbfbfb] border-[#ebebeb] border cursor-pointer'>
              XL
            </div>
            <div className='py-1 hover:bg-[#e3e3e3] md:px-6 px-3 text-sm md:text-base rounded bg-[#fbfbfb] border-[#ebebeb] border cursor-pointer'>
              XXL
            </div>
          </div>
          <button
            onClick={() => {
              if (addToCart && typeof product.id === 'number') {
                addToCart(product.id)
              }
            }}
            className='md:py-3 py-1 md:px-5 px-3 cursor-pointer rounded mb-3 mt-2 hover:bg-[#e3e3e3] hover:text-black bg-red-500 text-white border'
          >
            ADD TO CART
          </button>
          <p className='product-display__category text-sm md:text-base'>
            <span className='font-semibold '>Category : </span>
            <span>Women , T-Shirt , Crop Top</span>
          </p>
          <p className='product-display__category text-sm md:text-base'>
            <span className='font-semibold'>Tags : </span>
            <span>Morden , Lastest</span>
          </p>
        </div>
      </div>
    </div>
  )
}

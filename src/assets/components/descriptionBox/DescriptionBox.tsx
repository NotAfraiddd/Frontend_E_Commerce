import React from 'react'
import './DescriptionBox.css'
export default function DescriptionBox() {
  return (
    <div className='description-box my-32 mx-40'>
      <div className='description-box__navigator flex'>
        <div className='description-box__nav-box flex items-center justify-center text-sm md:text-base w-44 h-10 border border-b-0 font-semibold border-[#d0d0d0]'>
          Description
        </div>
        <div className='description-box__nav-box flex items-center justify-center text-sm md:text-base w-44 h-10 border border-b-0 font-semibold border-[#d0d0d0 fade'>
          Reviews (122)
        </div>
      </div>
      <div className='description-box__description text-sm lg:text-base flex flex-col gap-4 border p-6 md:p-12 mb-20 border-[#d0d0d0]'>
        <p>
          An e-commerce website is an online platform that facilitates the buying and selling of products or services
          over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their
          products, interact with customers, and conduct transactions without the need for a physical presence.
          E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global
          reach they offer. E-commerce websites typically display products or services along with detailed descriptions,
          images, prices, and any available variations (e.g, sizes, colors). Each product usually has its own dedicated
          page with relevant information.
        </p>
      </div>
    </div>
  )
}

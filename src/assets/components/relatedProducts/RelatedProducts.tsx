import React from 'react'
import './RelatedProducts.css'
import data_product from '@data/data'
import Item from '@components/Item/Item'
export default function RelatedProducts() {
  return (
    <div className='related-products flex flex-col items-center gap-2'>
      <h1 className='text-[#171717] text-5xl font-semibold'>Related Products</h1>
      <hr className='w-52 h-[6px] rounded-xl bg-[#252525]' />
      <div className='related-products__item mt-12 gap-7 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        {data_product.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          )
        })}
      </div>
    </div>
  )
}

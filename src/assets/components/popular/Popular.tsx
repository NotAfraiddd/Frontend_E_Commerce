import React from 'react'
import './Popular.css'
import data_product from '@data/data'
import Item from '@components/Item/Item'
export const Popular = () => {
  return (
    <div className='popular flex flex-col items-center gap-3 h-[90vh]'>
      <h1 className='text-5xl text-chinese-black font-semibold'>POPULAR IN WOWEN</h1>
      <hr className='w-[200px] h-1 rounded-lg bg-[#252525]' />
      <div className='popular-item mt-12 flex gap-7'>
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
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

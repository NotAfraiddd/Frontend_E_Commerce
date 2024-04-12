import React from 'react'
import './NewCollections.css'
import new_collections from '@data/new_collections'
import Item from '@components/Item/Item'

export const NewCollections = () => {
  return (
    <div className='new-collection flex flex-col items-center gap-4 mt-[100px]'>
      <h1 className='text-5xl text-chinese-black font-semibold'>NEW COLLECTIONS</h1>
      <hr className='w-[200px] h-1 rounded-lg bg-[#252525]' />
      <div className='collections mt-12 grid grid-cols-4 gap-7'>
        {new_collections.map((item, i) => {
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

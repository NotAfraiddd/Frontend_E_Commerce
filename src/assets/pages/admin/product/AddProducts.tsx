import React from 'react'
import './AddProducts.css'
import { upload_area } from '@images/index'

export const AddProducts = () => {
  const listTypeProducts = [
    { id: 1, type: 'Kid' },
    { id: 2, type: 'Men' },
    { id: 3, type: 'Women' }
  ]
  return (
    <div className='product-add w-full p-8'>
      <div>
        <p>Product title</p>
        <input type='text' placeholder='' className='border' />
      </div>
      <div>
        <p>Product title</p>
        <input type='text' placeholder='' className='border' />
      </div>
      <div>
        <p>Product title</p>
        <input type='text' placeholder='' className='border' />
      </div>
      <select name='' id=''>
        <option value=''>Select a product type</option>
        {listTypeProducts.map((product) => (
          <option key={product.id} value={product.type}>
            {product.type}
          </option>
        ))}
      </select>
      <div className='w-fit'>
        <label htmlFor='file-img'>
          <img src={upload_area} alt='' />
        </label>
        <input type='file' name='image' id='file-img' hidden />
      </div>
      <button>ADD</button>
    </div>
  )
}

import React, { ChangeEvent, useState } from 'react'
import './AddProducts.css'
import { upload_area } from '@images/index'

export const AddProducts = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const objectUrl = URL.createObjectURL(file)
      setImagePreview(objectUrl)
    }
  }

  const listTypeProducts = [
    { id: 1, type: 'Kid' },
    { id: 2, type: 'Men' },
    { id: 3, type: 'Women' }
  ]
  return (
    <div className='product-add w-full mt-8 mx-8 rounded-[20px] bg-white py-8 px-10'>
      <div className='mt-5'>
        <p className='mb-2'>Product title</p>
        <input type='text' placeholder='' spellCheck={false} className='pl-5 border w-full h-12 rounded-xl' />
      </div>
      <div className='flex w-full gap-10 flex-wrap'>
        <div className='mt-5'>
          <p className='mb-2'>Price</p>
          <input type='text' placeholder='' spellCheck={false} className='pl-5 border w-full h-12 rounded-xl' />
        </div>
        <div className='mt-5'>
          <p className='mb-2'>Offer Price</p>
          <input type='text' placeholder='' spellCheck={false} className='pl-5 border w-full h-12 rounded-xl' />
        </div>
        <div className='mt-5'>
          <p className='mb-2'>Category type</p>
          <select name='' id='' className='border rounded-md h-12 px-5'>
            <option value=''>Select a product type</option>
            {listTypeProducts.map((product) => (
              <option key={product.id} value={product.type}>
                {product.type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='w-fit mt-5'>
        <label htmlFor='file-img'>
          <img src={imagePreview ? imagePreview : upload_area} alt='' className='w-40 h-40 object-contain' />
        </label>
        <input onChange={handleImage} type='file' name='image' id='file-img' hidden accept='image/*' />
      </div>
      <button className='border w-32 h-10 mt-5 rounded-md'>ADD</button>
    </div>
  )
}

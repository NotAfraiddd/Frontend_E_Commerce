import React, { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react'
import './AddProducts.css'
import { upload_area, reload } from '@images/index'
import { Product, defaultProduct } from '@interface/Product'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from './product.reducer'
import { RootState } from 'store'
export const AddProducts = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [rotation, setRotation] = useState(0)

  const [detailProduct, setDetailProducts] = useState<Product>(defaultProduct)

  const dispatch = useDispatch()
  const productStore = useSelector((state: RootState) => state.product.editProduct)

  useEffect(() => {
    setDetailProducts(productStore || defaultProduct)
    if (productStore && productStore.image) {
      setImagePreview(productStore.image)
    } else {
      setImagePreview(null)
    }
  }, [productStore])

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const objectUrl = URL.createObjectURL(file)
      setImagePreview(objectUrl)

      setDetailProducts((prevState) => ({
        ...prevState,
        image: objectUrl
      }))
    }
  }

  const getValueNameProduct = (e: ChangeEvent<HTMLInputElement>) => {
    setDetailProducts((prevState) => ({
      ...prevState,
      name: e.target.value
    }))
  }

  const getValueNewPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setDetailProducts((prevState) => ({
      ...prevState,
      new_price: parseInt(e.target.value)
    }))
  }

  const getValueProductTpe = (e: ChangeEvent<HTMLSelectElement>) => {
    setDetailProducts((prevState) => ({
      ...prevState,
      category: e.target.value
    }))
  }

  const getValueOldPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setDetailProducts((prevState) => ({
      ...prevState,
      old_price: parseInt(e.target.value)
    }))
  }

  const toggleRotate = (e: MouseEvent<HTMLImageElement>) => {
    const newRotation = rotation - 360
    setRotation(newRotation)
    const imageElement = e.currentTarget
    imageElement.style.transform = `rotate(${newRotation}deg)`
    setImagePreview(null)
  }

  const listTypeProducts = [
    { id: 1, type: 'Kid' },
    { id: 2, type: 'Men' },
    { id: 3, type: 'Women' }
  ]

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formDataWithID = { ...detailProduct, id: new Date().toString() }
    dispatch(addProduct(formDataWithID))
    setDetailProducts(defaultProduct)
    setImagePreview(null)
  }
  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <div className='product-add mt-8 mx-8 rounded-[20px] bg-white py-8 px-10'>
        <div className='mt-5'>
          <p className='mb-2'>Product title</p>
          <input
            type='text'
            placeholder=''
            spellCheck={false}
            value={detailProduct.name}
            onChange={getValueNameProduct}
            className='pl-5 border w-full h-12 rounded-xl'
          />
        </div>
        <div className='flex w-full gap-5 flex-wrap mt-5'>
          <div className=''>
            <p className='mb-2'>Price</p>
            <input
              type='text'
              placeholder=''
              spellCheck={false}
              value={detailProduct.new_price}
              onChange={getValueNewPrice}
              className='pl-5 border w-full h-12 rounded-xl'
            />
          </div>
          <div className=''>
            <p className='mb-2'>Offer Price</p>
            <input
              type='text'
              placeholder=''
              spellCheck={false}
              value={detailProduct.old_price}
              onChange={getValueOldPrice}
              className='pl-5 border w-full h-12 rounded-xl'
            />
          </div>
          <div className=''>
            <p className='mb-2'>Category type</p>
            <select
              name=''
              id=''
              value={detailProduct.category}
              className='border rounded-md h-12 px-5'
              onChange={getValueProductTpe}
            >
              <option value=''>Select a product type</option>
              {listTypeProducts.map((product) => (
                <option key={product.id} value={product.id}>
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
        <div className='flex mt-5 w-40 gap-5 items-center'>
          <button className='border h-10 w-full rounded-md'>ADD</button>
          <img src={reload} alt='' className='h-6' onClick={toggleRotate} style={{ transition: 'transform 0.9s' }} />
        </div>
      </div>
    </form>
  )
}

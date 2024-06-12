import React, { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react'
import './AddProducts.css'
import { upload_area, reload } from '@images/index'
import { Product, defaultProduct } from '@interface/Product'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from './product.reducer'
import { RootState } from 'store'
import { useParams } from 'react-router-dom'
import { updateProduct } from '@apis/admin'
export const AddProducts = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [imageApi, setImageApi] = useState<File | null>(null)
  const [rotation, setRotation] = useState(0)

  const [detailProduct, setDetailProducts] = useState<Product>(defaultProduct)

  const dispatch = useDispatch()
  const productStore = useSelector((state: RootState) => state.product.editProduct)
  const { productId } = useParams<{ productId: string }>()

  const listTypeProducts = [
    { id: 1, type: 'Kid' },
    { id: 2, type: 'Men' },
    { id: 3, type: 'Women' }
  ]
  const handleUpdateProduct = async () => {
    const product = {
      name: detailProduct.name,
      category: detailProduct.category,
      image: detailProduct.image,
      new_price: detailProduct.new_price,
      old_price: detailProduct.old_price
    }
    const data = await updateProduct(Number(productId), JSON.stringify(product))
  }
  const handleCreateProduct = async () => {
    const product = {
      name: detailProduct.image,
      category: detailProduct.category,
      image: detailProduct.image,
      new_price: detailProduct.new_price,
      old_price: detailProduct.old_price
    }

    // const data = await updateProduct(Number(productId), detailProduct)
    // console.log(data)
  }

  // check param to set value default
  useEffect(() => {
    if (productId === undefined) {
      setDetailProducts(defaultProduct)
      setImagePreview(null)
    }
  }, [detailProduct, productId])

  // check data in store to set value default
  useEffect(() => {
    if (productStore) setDetailProducts(productStore)
    if (productStore && productStore.image) {
      setImagePreview(productStore.image)
    } else {
      setImagePreview(null)
    }
  }, [productStore])

  /**
   * on change value image
   * @param e
   */
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      setImageApi(file)
      const objectUrl = URL.createObjectURL(file)
      setImagePreview(objectUrl)

      setDetailProducts((prevState) => ({
        ...prevState,
        image: objectUrl
      }))
    }
  }

  /**
   * on change value name product
   * @param e
   */
  const getValueNameProduct = (e: ChangeEvent<HTMLInputElement>) => {
    setDetailProducts((prevState) => ({
      ...prevState,
      name: e.target.value
    }))
  }

  /**
   * on change value new price
   * @param e
   */
  const getValueNewPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const newPrice = inputValue === '' ? 0 : parseInt(inputValue)
    setDetailProducts((prevState) => ({
      ...prevState,
      new_price: newPrice
    }))
  }

  /**
   * on change value name product
   * @param e
   */
  const getValueProductTpe = (e: ChangeEvent<HTMLSelectElement>) => {
    setDetailProducts((prevState) => ({
      ...prevState,
      category: parseInt(e.target.value)
    }))
  }

  /**
   * on change value old price
   * @param e
   */
  const getValueOldPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const newPrice = inputValue === '' ? 0 : parseInt(inputValue)
    setDetailProducts((prevState) => ({
      ...prevState,
      old_price: newPrice
    }))
  }

  /**
   * on change value toggle rotate to set image default value
   * @param e
   */
  const toggleRotate = (e: MouseEvent<HTMLImageElement>) => {
    const newRotation = rotation - 360
    setRotation(newRotation)
    const imageElement = e.currentTarget
    imageElement.style.transform = `rotate(${newRotation}deg)`
    setImagePreview(null)
    setImageApi(null)
  }

  /**
   * submit form
   * @param event
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formDataWithID = { ...detailProduct, id: new Date().toString() }
    dispatch(addProduct([formDataWithID]))
    setDetailProducts(defaultProduct)
    setImagePreview(null)
    setImageApi(null)
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
            value={detailProduct.image}
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
              <option value={0}>Select a product type</option>
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
          {productId ? (
            <button className='border h-10 w-full rounded-md' onClick={handleUpdateProduct}>
              UPDATE
            </button>
          ) : (
            <button className='border h-10 w-full rounded-md' onClick={handleCreateProduct}>
              ADD
            </button>
          )}
          <img src={reload} alt='' className='h-6' onClick={toggleRotate} style={{ transition: 'transform 0.9s' }} />
        </div>
      </div>
    </form>
  )
}

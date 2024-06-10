import { cross_icon } from '@images/index'
import { ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from 'store'
import { addProduct, removeProduct, resetProductList, udpateProduct } from '../product/product.reducer'
import './ListProduct.css'
import { Product } from '@interface/Product'
import axiosInstance from '@config/axios'
export const ListProducts = () => {
  const productList = useSelector((state: RootState) => state.product.productList)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const listTypeProducts = [
    { id: 1, type: 'Kid' },
    { id: 2, type: 'Men' },
    { id: 3, type: 'Women' }
  ]

  const getValueProductTpe = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
  }

  const clickToDetailProduct = (productId: string) => {
    dispatch(udpateProduct(productId))
    navigate(`/admin/product/${productId}`)
  }

  const handleDeleteProduct = (productID: string) => {
    dispatch(removeProduct(productID))
  }

  const getTypeProduct = (typeId: any) => {
    const name = listTypeProducts.find((item) => item.id === parseInt(typeId))
    return name?.type
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch(resetProductList())
        const response = await axiosInstance.get<Product[]>('/product/getAllProducts')
        const listProducts = response.data
        dispatch(addProduct(listProducts))
      } catch (err) {
        console.log(err)
      }
    }
    fetchProducts()
  }, [dispatch])

  return (
    <div className='admin-list-products__contain w-full mt-8 mx-8 rounded-[20px] bg-white py-8 px-10'>
      <p className='mb-2'>Category type</p>
      <select name='' id='' className='border rounded-md h-12 px-5 mb-5' onChange={getValueProductTpe}>
        {listTypeProducts.map((product) => (
          <option key={product.id} value={product.type}>
            {product.type}
          </option>
        ))}
      </select>
      <div className='admin-list-products__title justify-items-center grid grid-cols-custom-6 overflow-x-auto text-base font-semibold gap-3 xl:gap-[75px] py-5 text-#[454545] items-center '>
        <p>Product</p>
        <p>Title</p>
        <p>Category</p>
        <p>New Price</p>
        <p>Old Price</p>
        <p>Remove</p>
      </div>
      <hr className='h-1 bg-[#e2e2e2] border-0' />
      <div className='overflow-auto product-list'>
        {productList.map((ele, index) => (
          <div
            className='admin-list-products justify-items-center text-sm lg:text-base xl:text-lg grid grid-cols-custom-6 gap-3 xl:gap-[75px] py-5 text-#[454545] items-center'
            key={index}
          >
            <img src={ele.image} alt='' className='h-16 w-16 object-contain' />
            <p className='hover:underline cursor-pointer w-full' onClick={() => ele.id && clickToDetailProduct(ele.id)}>
              {ele.name}
            </p>
            <p>{getTypeProduct(ele.category || 0)}</p>
            <button className=' w-8 h-6 lg:w-16 lg:h-12 border-[#ebebeb] border-[2px]'>{ele.new_price}</button>
            <button className=' w-8 h-6 lg:w-16 lg:h-12 border-[#ebebeb] border-[2px]'>{ele.old_price}</button>
            <img
              src={cross_icon}
              onClick={() => {
                ele.id && handleDeleteProduct(ele.id)
              }}
              alt='icon_remove'
              className='cursor-pointer'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

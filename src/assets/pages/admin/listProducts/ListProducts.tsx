import { cross_icon } from '@images/index'
import { ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from 'store'
export const ListProducts = () => {
  const productList = useSelector((state: RootState) => state.product.productList)
  const navigate = useNavigate()

  const listTypeProducts = [
    { id: 1, type: 'Kid' },
    { id: 2, type: 'Men' },
    { id: 3, type: 'Women' }
  ]

  const getValueProductTpe = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
  }

  const clickToDetailProduct = (productId: string) => {
    navigate(`/admin/product/${productId}`)
  }

  return (
    <div className='w-full mt-8 mx-8 rounded-[20px] bg-white py-8 px-10'>
      <p className='mb-2'>Category type</p>
      <select name='' id='' className='border rounded-md h-12 px-5' onChange={getValueProductTpe}>
        {listTypeProducts.map((product) => (
          <option key={product.id} value={product.type}>
            {product.type}
          </option>
        ))}
      </select>
      <div className='grid grid-cols-custom-6 overflow-x-auto text-base font-semibold gap-3 xl:gap-[75px] py-5 text-#[454545] items-center '>
        <p>Product</p>
        <p>Title</p>
        <p>Category</p>
        <p>New Price</p>
        <p>Old Price</p>
        <p>Remove</p>
      </div>
      <hr className='h-1 bg-[#e2e2e2] border-0' />
      {productList.map((ele, index) => (
        <div
          className='text-sm lg:text-base xl:text-lg grid grid-cols-custom-6 gap-3 xl:gap-[75px] py-5 text-#[454545] items-center'
          key={index}
        >
          <img src={ele.image} alt='' className='min-w-12' />
          <p className='hover:underline cursor-pointer' onClick={() => ele.id && clickToDetailProduct(ele.id)}>
            {ele.name}
          </p>
          <p>{ele.category}</p>
          <button className=' w-8 h-6 lg:w-16 lg:h-12 border-[#ebebeb] border-[2px]'>{ele.new_price}</button>
          <button className=' w-8 h-6 lg:w-16 lg:h-12 border-[#ebebeb] border-[2px]'>{ele.old_price}</button>
          <img src={cross_icon} onClick={() => {}} alt='icon_remove' className='cursor-pointer' />
        </div>
      ))}
    </div>
  )
}

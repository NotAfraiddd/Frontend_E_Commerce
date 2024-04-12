import React, { useContext } from 'react'
import { InterfaceShopCategory } from './InterfaceShopCategory'
import './Shop.css'
import { ShopContext } from '@context/ShopContext'
export default function ShopCategory({ category }: InterfaceShopCategory) {
  const { all_product } = useContext(ShopContext)
  return <div className='shop-category'>ShopCategory</div>
}

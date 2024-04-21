import all_product from '@data/all_product'
import React, { createContext, useEffect, useState } from 'react'
import { InterfaceShopContext } from '.'
export const ShopContext = createContext<InterfaceShopContext>({})

const getDefaultCart = () => {
  return all_product.map(() => 0)
}

const ShopContextProvider = ({ children }: InterfaceShopContext) => {
  const [cartItems, setCartItems] = useState(getDefaultCart)

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  useEffect(() => {
    console.log('cartItems', cartItems)
  }, [cartItems])

  const contextValue = { all_product, cartItems, addToCart, removeToCart }

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
}

export default ShopContextProvider

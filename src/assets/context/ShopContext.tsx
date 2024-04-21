import all_product from '@data/all_product'
import React, { createContext, useState } from 'react'
import { InterfaceShopContext } from '.'
export const ShopContext = createContext<InterfaceShopContext>({})

const ShopContextProvider = ({ children }: InterfaceShopContext) => {
  const getDefaultCart = () => {
    return all_product.map(() => 0)
  }
  const [cartItems, setCartItems] = useState(getDefaultCart)

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        let itemInfor = all_product.find((item) => item.id === Number(key))
        if (itemInfor) totalAmount += itemInfor.new_price * cartItems[key]
      }
    }
    return totalAmount
  }

  const getTotalItemsInCart = () => {
    let totalItems = 0
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        totalItems += cartItems[key]
      }
    }
    return totalItems
  }

  const contextValue: InterfaceShopContext = {
    all_product,
    cartItems,
    addToCart,
    getTotalCartAmount,
    getTotalItemsInCart,
    removeToCart
  }

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
}

export default ShopContextProvider

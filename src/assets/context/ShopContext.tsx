import all_product from '@data/all_product'
import React, { createContext } from 'react'
import { InterfaceShopContext } from '.'
export const ShopContext = createContext<InterfaceShopContext>({})

const ShopContextProvider = ({ children }: InterfaceShopContext) => {
  const contextValue = { all_product }
  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
}

export default ShopContextProvider

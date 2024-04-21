import { InterfaceItem } from '@components/Item/InterfaceShopCategory'
import { ReactNode } from 'react'

export interface InterfaceShopContext {
  all_product?: any
  cartItems?: any
  children?: ReactNode
  addToCart?: (itemId: number) => void
  removeToCart?: (itemId: number) => void
}

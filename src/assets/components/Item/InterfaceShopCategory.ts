export interface InterfaceItem {
  id?: number
  name?: string
  category?: string
  image?: string
  new_price?: number
  old_price?: number
  banner?: string
}

export interface InterfaceProduct {
  product: InterfaceItem
}

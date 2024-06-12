export interface Product {
  id?: string
  name?: string
  image?: string
  category?: number
  new_price?: number
  old_price?: number
}

export const defaultProduct: Product = {
  id: '',
  name: '',
  image: '',
  category: 0,
  new_price: 0,
  old_price: 0
}

export const intialProductList: Product[] = []

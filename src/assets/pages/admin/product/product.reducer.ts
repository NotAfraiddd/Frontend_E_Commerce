import { Product, intialProductList } from '@interface/Product'
import { createAction, createReducer } from '@reduxjs/toolkit'

interface ProductState {
  productList: Product[]
  editProduct: Product | null
}

const initalState: ProductState = {
  productList: intialProductList,
  editProduct: null
}

export const addProduct = createAction<Product[]>('product/addProduct')
export const removeProduct = createAction<string>('product/removeProduct')
export const udpateProduct = createAction<string>('product/udpateProduct')

const productReducer = createReducer(initalState, (builder) => {
  builder
    .addCase(addProduct, (state, action) => {
      const product = action.payload
      state.productList = [...state.productList, ...product]
    })
    .addCase(removeProduct, (state, action) => {
      const productId = action.payload
      state.productList = state.productList.filter((item) => item.id !== productId)
    })
    .addCase(udpateProduct, (state, action) => {
      const productId = action.payload
      state.editProduct = state.productList.find((item) => item.id === productId) || null
    })
})

export default productReducer

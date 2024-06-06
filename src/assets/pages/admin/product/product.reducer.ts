import { Product, intialProductList } from "@interface/Product";
import { createAction, createReducer } from "@reduxjs/toolkit";

interface ProductState {
    productList: Product[]
}

const initalState: ProductState = {
    productList: intialProductList
}

export const addProduct = createAction<Product>('product/addProduct')
export const removeProduct = createAction<string>('product/removeProduct')

const productReducer = createReducer(initalState,builder =>{
    builder
    .addCase(addProduct,(state,action) =>{
        const product = action.payload;
        state.productList.push(product)
    })
    .addCase(removeProduct,(state,action)=>{
        const productId = action.payload
        state.productList = state.productList.filter(item => item.id !== productId);
    })
})

export default productReducer
import { Product, intialProductList } from "@interface/Product";
import { createAction, createReducer } from "@reduxjs/toolkit";

interface ProductState {
    productList: Product[]
}

const initalState: ProductState = {
    productList: intialProductList
}

export const addProduct = createAction<Product>('product/addPorduct')

const productReducer = createReducer(initalState,builder =>{

})

export default productReducer
import { Product } from "@interface/Product";
import { createReducer } from "@reduxjs/toolkit";

interface ProductState {
    productList: Product[]
}

const initalState: ProductState = {
    productList: []
}

const productReducer = createReducer(initalState,builder =>{

})

export default productReducer
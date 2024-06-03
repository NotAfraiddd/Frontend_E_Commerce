import productReducer from "@pages/admin/product/product.reducer";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer:{product: productReducer}
})

// get Rootestate and Appdispatch from store.
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
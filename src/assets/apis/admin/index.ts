import axiosInstance from '@config/axios'
import { Product } from '@interface/Product'

export const getAllProducts = async () => {
  const response = await axiosInstance.get<Product[]>('/product/getAllProducts')
  return response.data
}

export const createNewProduct = async () => {
  const response = await axiosInstance.get<Product[]>('/product/add')
  return response.data
}

export const updateProduct = async (productId: number, updatedFields: string): Promise<Product | undefined> => {
  const response = await axiosInstance.post<Product>(`/product/${productId}/update`, updatedFields)
  return response.data
}

// user
export const login = async () => {
  const response = await axiosInstance.get('/auth/login')
  return response.data
}

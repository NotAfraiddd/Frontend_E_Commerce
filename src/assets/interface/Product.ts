export interface Product {
    name?: string,
    image?: string,
    category?: string,
    new_price?: number,
    old_price?:number,
}

export const defaultProduct: Product = {
    name: '',
    image: '',
    category: '',
    new_price: 0,
    old_price: 0
};
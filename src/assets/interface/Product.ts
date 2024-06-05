import { product_1, product_10, product_14 } from "@images/index";

export interface Product {
    id?:string,
    name?: string,
    image?: string,
    category?: string,
    new_price?: number,
    old_price?:number,
}

export const defaultProduct: Product = {
    id:'',
    name: '',
    image: '',
    category: '',
    new_price: 0,
    old_price: 0
};

export const intialProductList: Product[] = [
    {
        id:'1',
        name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket',
        image: product_1,
        category: 'Men',
        new_price: 85,
        old_price: 120
    },
    {
        id:'2',
        name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket',
        image: product_14,
        category: 'Men',
        new_price: 85,
        old_price: 120
    },
    {
        id:'3',
        name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket',
        image: product_10,
        category: 'Men',
        new_price: 85,
        old_price: 120
    }
];
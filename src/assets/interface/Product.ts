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

export const intialProductList: Product[] = [
    {
        name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket',
        image: '../../images/user/product_1.png',
        category: 'Men',
        new_price: 85,
        old_price: 120
    },
    {
        name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket',
        image: '../../images/user/product_14.png',
        category: 'Men',
        new_price: 85,
        old_price: 120
    },
    {
        name: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket',
        image: '../../images/user/product_12.png',
        category: 'Men',
        new_price: 85,
        old_price: 120
    }
];
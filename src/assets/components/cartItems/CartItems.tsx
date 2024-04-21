import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '@context/ShopContext'
import { cross_icon } from '@images/index'
import { InterfaceItem } from '@components/Item/InterfaceShopCategory'
export default function CartItems() {
  const { addToCart, all_product, removeToCart, cartItems } = useContext(ShopContext)
  return (
    <div className='cart-items'>
      <div className='cart-items__main'>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((ele: InterfaceItem) => {
        if (ele.id && cartItems[ele.id] > 0) {
          const numberCarts = ele.new_price && ele.new_price * cartItems[ele.id]
          return (
            <div className='cart-items__format' key={ele.id}>
              <img src={ele.image} alt='' />
              <p>{ele.name}</p>
              <p>{ele.new_price}</p>
              <button className='cart-items__quantity'>{cartItems[ele.id]}</button>
              <p>{numberCarts}</p>
              <img
                src={cross_icon}
                onClick={() => {
                  if (removeToCart && ele.id) {
                    removeToCart(cartItems[ele.id])
                  }
                }}
                alt=''
              />
            </div>
          )
        }
      })}
    </div>
  )
}

import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '@context/ShopContext'
import { cross_icon } from '@images/index'
import { InterfaceItem } from '@components/Item/InterfaceShopCategory'
export default function CartItems() {
  const { addToCart, all_product, removeToCart, cartItems } = useContext(ShopContext)
  return (
    <div className='cart-items my-20 mx-40'>
      <div className='cart-items__main grid grid-cols-custom-6 text-lg font-semibold gap-[75px] py-5 text-#[454545] items-center '>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='h-1 bg-[#e2e2e2] border-0' />

      {all_product.map((ele: InterfaceItem) => {
        if (ele.id && cartItems[ele.id] > 0) {
          const numberCarts = ele.new_price && ele.new_price * cartItems[ele.id]
          return (
            <div
              className='cart-items__format  grid grid-cols-custom-6 text-lg font-semibold gap-[75px] py-5 text-#[454545] items-center'
              key={ele.id}
            >
              <img src={ele.image} alt='' className='' />
              <p>{ele.name}</p>
              <p>{ele.new_price}</p>
              <button className='cart-items__quantity w-16 h-12 border-[#ebebeb] border-[2px]'>
                {cartItems[ele.id]}
              </button>
              <p>${numberCarts}</p>
              <img
                src={cross_icon}
                onClick={() => {
                  if (removeToCart && ele.id) {
                    removeToCart(cartItems[ele.id])
                  }
                }}
                alt='icon_remove'
                className='cursor-pointer'
              />
            </div>
          )
        }
      })}
      <div className='cart-items__down flex my-24'>
        <div className='cart-items__total w-1/2 flex flex-1 flex-col pr-20'>
          <h1 className='text-2xl font-semibold'>Cart Totals</h1>
          <div className='flex flex-col gap-4 my-5'>
            <div className='cart-items__total-item pb-3 flex justify-between border-b'>
              <p>Subtotal</p>
              <p>${0}</p>
            </div>
            <div className='cart-items__total-item pb-3 flex justify-between border-b'>
              <p>Subtotal</p>
              <p>Free</p>
            </div>
            <div className='cart-items__total-item pb-3 flex justify-between border-b'>
              <h3 className='font-semibold'>Total</h3>
              <h3 className='font-semibold'>${0}</h3>
            </div>
          </div>
          <button className='w-64 h-16 bg-[#ff5a5a] text-white text-base mt-3'>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-items__promocode text-[#555] w-1/2 flex flex-1 items-center flex-col text-base font-medium'>
          <p>If you have a promo code, Enter it here</p>
          <div className='cart-items__promobox flex w-[500px] mt-4 pl-5 h-14 bg-[#eaeaea]'>
            <input type='text' placeholder='promo code' className='bg-transparent w-4/5 focus-within:outline-none' />
            <button className='w-1/5 bg-black text-white'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

import { logo, cart_icon } from '@images/index'
import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menu, setMenu] = useState('shop')
  return (
    <div className='navbar flex justify-around p-4'>
      <div className='nav-logo flex gap-3 items-center'>
        <img src={logo} alt='Logo' />
        <p className='text-4xl font-semibold'>SHOPPER</p>
      </div>
      <ul className='nav-menu flex items-center list-none gap-14 text-xl'>
        <li
          className='nav-item'
          onClick={() => {
            setMenu('shop')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to='/'>
            Shop
          </Link>
          {menu === 'shop' ? <hr /> : <></>}
        </li>
        <li
          className='nav-item'
          onClick={() => {
            setMenu('mens')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to='/mens'>
            Men
          </Link>
          {menu === 'mens' ? <hr /> : <></>}
        </li>
        <li
          className='nav-item'
          onClick={() => {
            setMenu('womens')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to='/womens'>
            Women
          </Link>
          {menu === 'womens' ? <hr /> : <></>}
        </li>
        <li
          className='nav-item'
          onClick={() => {
            setMenu('kids')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to='/kids'>
            Kids
          </Link>
          {menu === 'kids' ? <hr /> : <></>}
        </li>
      </ul>
      <div className='nav-login-cart flex items-center gap-11'>
        <div className='relative'>
          <img src={cart_icon} alt='cart_icon' className='object-contain' />
          <div className='nav-cart-count bg-red-500 flex justify-center items-center text-white rounded-full w-6 h-6 absolute right-[-10px] top-[-8px]'>
            0
          </div>
        </div>
        <Link style={{ textDecoration: 'none' }} to='/login'>
          <button className='xl:w-40 lg:w-28 md:w-20 h-14 active:bg-[#f3f3f3] outline-none border-[#7a7a7a] border cursor-pointer rounded-full'>
            Login
          </button>
        </Link>
      </div>
    </div>
  )
}

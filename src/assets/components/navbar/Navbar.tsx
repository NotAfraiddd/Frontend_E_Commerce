import { logo, cart_icon, dropdown_icon } from '@images/index'
import './Navbar.css'
import { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '@context/ShopContext'

export default function Navbar() {
  const [menu, setMenu] = useState('shop')
  const menuRef = useRef<HTMLUListElement>(null)
  const { getTotalItemsInCart } = useContext(ShopContext)
  const dropdown_toggle = (ele: any) => {
    menuRef.current?.classList.toggle('nav-menu-invisible')
    ele.target.classList.toggle('open')
  }

  return (
    <div className='navbar flex justify-between py-4 px-10'>
      <div className='nav-logo flex gap-3 items-center'>
        <img src={logo} alt='Logo' />
        <p className='text-logo text-base sm:text-xl md:text-2xl lg:text-3xl xl:4xl font-semibold'>SHOPPER</p>
      </div>
      <img
        src={dropdown_icon}
        onClick={dropdown_toggle}
        alt=''
        className='nav-dropdown w-10 h-10 p-1 rounded-full border-black border-2'
      />
      <ul ref={menuRef} className='nav-menu flex items-center list-none gap-14 text-xl'>
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
          <Link style={{ textDecoration: 'none' }} to='/cart'>
            <img src={cart_icon} alt='cart_icon' className='object-contain' />{' '}
          </Link>
          <div className='nav-cart-count bg-red-500 flex justify-center items-center text-white rounded-full w-6 h-6 absolute right-[-10px] top-[-8px]'>
            {getTotalItemsInCart?.()}
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

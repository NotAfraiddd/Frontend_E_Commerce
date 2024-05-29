import React from 'react'
import './NavbarAdmin.css'
import { nav_logo, nav_profile } from '@images/index'
export const NavbarAdmin = () => {
  return (
    <div className='navbar-admin py-4 flex items-center justify-between px-6 h-20'>
      <img src={nav_logo} alt='' className='w-40 lg:w-48 xl:w-52' />
      <img src={nav_profile} alt='' className='w-20' />
    </div>
  )
}

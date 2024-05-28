import React from 'react'
import './NavbarAdmin.css'
import { nav_logo, nav_profile } from '@images/index'
export const NavbarAdmin = () => {
  return (
    <div className='navbar py-4 flex items-center justify-between px-6'>
      <img src={nav_logo} alt='' />
      <img src={nav_profile} alt='' />
    </div>
  )
}

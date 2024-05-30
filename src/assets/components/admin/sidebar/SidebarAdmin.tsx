import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { arrow_left, arrow_right, Product_Cart, Product_list_icon } from '@images/index'
import useWindowDimensions from './windowDimensions'
import './SidebarAdmin.css'

export const SidebarAdmin = () => {
  const { width } = useWindowDimensions()
  const sidebarRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const [isCollapsed, setCollapsed] = useState(false)
  useEffect(() => {
    if (sidebarRef.current) {
      if (width <= 1024 || isCollapsed) {
        sidebarRef.current.classList.add('collapsed')
      } else {
        sidebarRef.current.classList.remove('collapsed')
      }
    }
  }, [width, isCollapsed])

  const handleCollapsed = () => {
    setCollapsed((prevState) => !prevState)
  }

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <div
      ref={sidebarRef}
      className='sidebar flex-shrink-0 flex flex-col max-w-60 h-full border-r justify-between bg-white'
    >
      <div className='flex flex-col gap-4 w-full'>
        <Link to={'/admin/list-products'} style={{ textDecoration: 'none' }}>
          <div
            className={`flex items-center h-14 mt-5 justify-center gap-4 hover:bg-[#fff8f8] ${isActive(
              '/admin/list-products'
            )}`}
          >
            <img src={Product_list_icon} alt='' />
            {width > 1024 && !isCollapsed && <p className='item-sidebar__text'>Product List</p>}
          </div>
        </Link>
        <Link to={'/admin/product/add'} style={{ textDecoration: 'none' }}>
          <div
            className={`flex items-center h-14 justify-center gap-4 hover:bg-[#fff8f8] ${isActive(
              '/admin/product/add'
            )}`}
          >
            <img src={Product_Cart} alt='' />
            {width > 1024 && !isCollapsed && <p className='item-sidebar__text'>Add Product</p>}
          </div>
        </Link>
      </div>
      <div
        className='w-full text-center cursor-pointer flex items-center justify-center gap-4 py-4'
        onClick={handleCollapsed}
      >
        {width > 1024 && !isCollapsed && <p className='font-semibold item-sidebar__text'>Collapse menu</p>}
        <img src={width > 1024 && !isCollapsed ? arrow_left : arrow_right} alt='' className='w-8' />
      </div>
    </div>
  )
}

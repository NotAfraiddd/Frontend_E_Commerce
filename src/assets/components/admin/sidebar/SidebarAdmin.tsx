import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { arrow_left, arrow_right, Product_Cart, Product_list_icon } from '@images/index'
import useWindowDimensions from './windowDimensions'
import './SidebarAdmin.css'

export const SidebarAdmin = () => {
  const { width } = useWindowDimensions()
  const sidebarRef = useRef<HTMLDivElement>(null)
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

  return (
    <div ref={sidebarRef} className='sidebar flex flex-col h-full max-w-64 border-r justify-between'>
      <div className=''>
        <Link to={'/list-products'} style={{ textDecoration: 'none' }}>
          <div className='flex items-center h-14 mt-5 justify-center gap-4 hover:bg-slate-200'>
            <img src={Product_list_icon} alt='' />
            {width > 1024 && !isCollapsed && <p className='item-sidebar__text'>Product List</p>}
          </div>
        </Link>
        <Link to={'/product/add'} style={{ textDecoration: 'none' }}>
          <div className='flex items-center h-14 justify-center gap-4 hover:bg-slate-200'>
            <img src={Product_Cart} alt='' />
            {width > 1024 && !isCollapsed && <p className='item-sidebar__text'>Add Product</p>}
          </div>
        </Link>
      </div>
      <div className='p-4 text-center cursor-pointer flex items-center justify-around' onClick={handleCollapsed}>
        <p className='font-semibold item-sidebar__text'>{!isCollapsed && 'Collapse menu'}</p>
        <img src={!isCollapsed ? arrow_left : arrow_right} alt='' className='w-8' />
      </div>
    </div>
  )
}

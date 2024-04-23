import React from 'react'
import './Footer.css'
import { logo_big, instagram_icon, pintester_icon, whatsapp_icon } from '@images/index'

export const Footer = () => {
  return (
    <div className='footer flex flex-col justify-center items-center gap-12'>
      <div className='footer-logo flex items-center gap-5'>
        <img src={logo_big} alt='Logo-big' />
        <p className='text-[#383838] text-[46px] font-bold'>SHOPPER</p>
      </div>
      <ul className='footer-links flex list-none lg:gap-12 gap-5 justify-center text-[#252525] text-xl flex-wrap px-2'>
        <li className='footer-item cursor-pointer'>Company</li>
        <li className='footer-item cursor-pointer'>Products</li>
        <li className='footer-item cursor-pointer'>Offices</li>
        <li className='footer-item cursor-pointer'>About</li>
        <li className='footer-item cursor-pointer'>Contact</li>
      </ul>
      <div className='footer-social-icon flex gap-5'>
        <div className='footer-icons-container p-2 pb-1 bg-[#fbfbfb] border-[#ebebeb]'>
          <img src={instagram_icon} alt='instagram_icon' />
        </div>
        <div className='footer-icons-container p-2 pb-1 bg-[#fbfbfb] border-[#ebebeb]'>
          <img src={pintester_icon} alt='pintester_icon' />
        </div>
        <div className='footer-icons-container p-2 pb-1 bg-[#fbfbfb] border-[#ebebeb]'>
          <img src={whatsapp_icon} alt='whatsapp_icon' />
        </div>
      </div>
      <div className='footer-copyright flex flex-col items-center gap-7 w-full mb-7 text-[#1a1a1a] text-xl break-words text-center'>
        <hr className='w-4/5 rounded-lg h-1 bg-[#c7c7c7]' />
        <p>Copyright © 2024 - All Right Reserved</p>
      </div>
    </div>
  )
}

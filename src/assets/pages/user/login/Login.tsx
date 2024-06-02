import React from 'react'
import './Login.css'
export default function Login() {
  return (
    <div className='login w-full py-28 bg-[#fce3fe]'>
      <div className='login-container bg-white px-10 py-5 w-96 sm:w-[550px] sm:h-fit mx-auto'>
        <h1 className='my-5 font-semibold text-2xl text-center text-[#ff4141]'>Sign Up</h1>
        <div className='login-fields flex flex-col gap-7 mt-7'>
          <input
            type='text'
            placeholder='Your name'
            className='border rounded-xl h-[72px] w-full pl-5 border-[#c9c9c9] text-lg text-[#5c5c5c] focus-visible:outline-none'
          />
          <input
            type='email'
            placeholder='Your email'
            className='border rounded-xl h-[72px] w-full pl-5 border-[#c9c9c9] text-lg text-[#5c5c5c] focus-visible:outline-none'
          />
          <input
            type='password'
            placeholder='Your Password'
            className='border rounded-xl h-[72px] w-full pl-5 border-[#c9c9c9] text-lg text-[#5c5c5c] focus-visible:outline-none'
          />
        </div>
        <button className='w-full h-[72px] rounded-xl text-2xl cursor-pointer bg-[#ff4141] mt-7 text-white border'>
          Continue
        </button>
        <div className='login-text mt-5 text-lg font-medium text-[#5c5c5c]'>
          <span>
            Already have an accounts? <span className='text-[#ff4141]'>Login here</span>
          </span>
        </div>
        <div className='login-agree flex mt-5 gap-3 text-[#5c5c5c] text-lg font-medium'>
          <input type='checkbox' name='' id='' className='w-5 h-5 mt-1' />
          <span>By continuing, I agree to the terms of use & privacy policy.</span>
        </div>
      </div>
    </div>
  )
}

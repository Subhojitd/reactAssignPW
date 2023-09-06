import React from 'react'

const SignUp = () => {
  return (
    <div>
        <div>
            <input placeholder='Email,Phone number' className=' px-1 w-full h-[35px] outline-none rounded bg-gray-200' type="email" />
            <input placeholder='Full Name' className=' px-1 w-full h-[35px] outline-none rounded bg-gray-200' type="text" />
            <input placeholder='User Name' className=' px-1 w-full h-[35px] outline-none rounded bg-gray-200' type="text" />
            <input placeholder='Password' className=' px-1 w-full h-[35px] outline-none rounded bg-gray-200 mt-1.5'  type="password" />
            <input placeholder='Confirm Password' className=' px-1 w-full h-[35px] outline-none rounded bg-gray-200 mt-1.5'  type="password" />
            <button className='w-full h-[35px] bg-[#4cb5f9] text-white rounded-md mt-2'  >Sign Up</button>
            <p className="text-sm text-center my-1">Already have an account , <span className='text-[#4cb5f9] cursor-pointer'>Login</span></p>
          </div>
    </div>
  )
}

export default SignUp
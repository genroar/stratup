import React from 'react'
import Heading from '../atoms/Heading'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import { RxCross1 } from "react-icons/rx";
import ButtonCross from '../atoms/ButtonCross';

function Modelsignup() {
  return (
<div className="flex flex-col gap-[150px]">
<div className=''>
        <div className='main flex items-center px-[50px] py-[20px]'>
          <ButtonCross />
          <div className='flex justify-center items-center w-full'><img className='w-[160px]' src="/assits/assits/image/header-Logo.png" alt="" /></div>
        </div>
        <div className='w-full h-[15px] bg-gray-400 shadow-md'>
          <div className='w-full rounded-r-[10px] bg-gray-700 h-[15px]'>

          </div>
        </div>
      </div>
<div className='flex justify-center items-center flex-col '>
          <div className="flex flex-col gap-[30px] w-[360px] text-center ">
      <Heading level="4">Sign in</Heading>
      <div className="flex flex-col gap-[25px]">
        <div className="flex flex-col gap-[20px]">
          <input className='w-[360px] h-[40px] rounded-[20px] p-[10px] outline-none border-2 border-opacity-10 border-gray-500 ' type="text" placeholder='First name*' />
          <input className='w-[360px] h-[40px] rounded-[20px] p-[10px] outline-none border-2 border-opacity-10 border-gray-500 ' type="text" placeholder='Last name*' />
          <input className='w-[360px] h-[40px] rounded-[20px] p-[10px] outline-none border-2 border-opacity-10 border-gray-500 ' type="Email" placeholder='Email' />
          <input className='w-[360px] h-[40px] rounded-[20px] p-[10px] outline-none border-2 border-opacity-10 border-gray-500 ' type="phone" placeholder='Phone numbr*' />

        </div>
        <div className="flex flex-col gap-[10px]">
          <Button variant="primary">Submit Form</Button>
        </div>
      </div>
    </div>
    </div>
</div>
  )
}

export default Modelsignup
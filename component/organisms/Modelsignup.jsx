import React from 'react'
import Heading from '../atoms/Heading'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
function Modelsignup() {
  return (
    <div>
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
  )
}

export default Modelsignup
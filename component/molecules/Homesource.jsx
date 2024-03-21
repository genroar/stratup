import React from 'react'
import Homesrc from '../atoms/Homesrc'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Checkbox from '../atoms/Checkbox'
function Homesource() {
  return (
    <div className='main w-[930px]'>
      <div className='flex w-[930px] justify-between flex-wrap'>
      <div>
        <span className='text-[15px] leading-[18.6px] font-normal'>Brand</span>
        <Homesrc parent='Type or select' child='umair'></Homesrc>
      </div>
      <div>
        <span className='text-[15px] font-normal leading-[18.6px]'>Watch Model</span>
        <Homesrc parent='Type or select' child='umair'></Homesrc>
      </div>
      <div>
        <span className='text-[15px] font-normal'>Year</span>
        <Homesrc parent='Type or select' child='umair'></Homesrc>
      </div>
      <div>
        <span className='text-[15px] font-normal'>Condition</span>
        <Homesrc parent='Select' child='umair'></Homesrc>
      </div>
      <div>
        <span className='text-[15px] font-normal'>Email</span>
        <Homesrc parent='Type or select' child='umair'></Homesrc>
      </div>
      <div>
        <span className='text-[15px] font-normal'>Phone Number</span>
        <Homesrc parent='Type' child='umair'></Homesrc>
      </div>
      </div>
      <div className='box'>
        <input type="checkbox" />
      </div>
      <div className='button bg-gray-700 w-[235px] h-[40px] flex justify-center items-center rounded-[20px] text-white text-[16px] text-medium font-medium float-right'>
        <Button children='Submit'></Button>
      </div>
    </div>
    )
}

export default Homesource
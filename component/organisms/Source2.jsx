import React from 'react'
import '../../app/globals.css'
import Homesrc from '../atoms/Homesrc'
import Button from '../atoms/Button'
import AnchorTag from '../atoms/Anchortag'
import Heading from '../atoms/Heading'
import ButtonCross from '../atoms/ButtonCross'
function Source2() {
  return (
    <div className='flex flex-col gap-[40px] '>
      <div className=''>
        <div className='main flex items-center container  py-[20px]'>
          <ButtonCross />
          <div className='flex justify-center items-center w-full'><img className='w-[160px]' src="/assits/assits/image/header-Logo.png" alt="" /></div>
        </div>
        <div className='w-full h-[15px] bg-border2 '>
        </div>
      </div>
      <div className="bg sourcebg flex justify-between container gap-[30px] ">
        <div className="left shadow-top w-[73%] rounded-[20px]  py-[30px] ">
          <div className=' mx-8 '>
            <div className='flex flex-col gap-[10px]'>
              <span className='text-[24px] font-medium text-gray-700'>Source</span>
              <p className='text-[15px] font-normal text-gray-900 text-opacity-60'>Let us fins the watch you want transparently and for set fee</p>
            </div>
            <div className='flex justify-between gap-[30px] mt-[10px] flex-wrap'>
              <div>
                <span className='text-[15px] leading-[18.6px] font-normal text-gray-500'>Brand</span>
                <Homesrc parent='Type or select' child='umair'></Homesrc>
              </div>
              <div>
                <span className='text-[15px] font-normal leading-[18.6px] text-gray-500'>Watch Model</span>
                <Homesrc parent='Type or select' child='umair'></Homesrc>
              </div>
              <div>
                <span className='text-[15px] font-normal text-gray-500'>Year</span>
                <Homesrc parent='Type or select' child='umair'></Homesrc>
              </div>
              <div>
                <span className='text-[15px] font-normal text-gray-500'>Condition</span>
                <Homesrc parent='Select' child='umair'></Homesrc>
              </div>
              <div>
                <span className='text-[15px] font-normal text-gray-500'>Email</span>
                <Homesrc parent='Type or select' child='umair'></Homesrc>
              </div>
              <div>
                <span className='text-[15px] font-normal text-gray-500'>Phone Number</span>
                <Homesrc parent='Type' child='umair'></Homesrc>
              </div>
            </div>
            <div className='box flex gap-[10px] mt-[10px]'>
              <div className='w-[11.5px] h-[12.5px] '><input type="checkbox" /></div>
              <span className='text-[13px] leading-[16.12px] mt-[4px]'>I accept the <AnchorTag>Terms & Conditions</AnchorTag></span>
            </div>
            <div className='w-[835px]'>
              <div className='button bg-gray-700 w-[235px] h-[40px] flex justify-center items-center rounded-[20px] py-[20px] my-[25px] text-white text-[16px] text-medium font-medium float-right'>
                <Button variant='Submit'>SUBMIT</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className='shadow-top w-[320px] h-[231px] flex flex-col justify-center items-center rounded-[20px]'>
            <div className='box flex flex-col gap-[25px] '>
              <div className='text-center'><Heading level='4'>Our sourcing fees are</Heading></div>
              <div className='bg-gray-700 bg-opacity-10 w-[259px] h-[141px] rounded-[20px] flex flex-col justify-center items-center gap-[10px]'>
                <p className='text-[15px] font-normal leading-[18.6px] text-gray-900'>500 AED for watches below 10k</p>
                <p className='text-[15px] font-normal leading-[18.6px] text-gray-900'>1,000 AED for watches below 100k</p>
                <p className='text-[15px] font-normal leading-[18.6px] text-gray-900'>1,500 AED for watches below 200k</p>
                <p className='text-[15px] font-normal leading-[18.6px] text-gray-900'>1.8% for watches above 200k</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Source2


// right

{/* <div className='shadow-top w-[320px] h-[231px] flex flex-col justify-center items-center rounded-[20px]'>
<div className='box flex flex-col gap-[25px] '>
  <div className='text-center'><Heading level='4'>Our sourcing fees are</Heading></div>
  <div className='bg-gray-700 bg-opacity-10 w-[259px] h-[141px] rounded-[20px] flex flex-col justify-center items-center gap-[10px]'>
    <p className='text-[15px] font-normal leading-[18.6px] text-gray-900'>500 AED for watches below 10k</p>
    <p className='text-[15px] font-normal leading-[18.6px] text-gray-900'>1,000 AED for watches below 100k</p>
    <p className='text-[15px] font-normal leading-[18.6px] text-gray-900'>1,500 AED for watches below 200k</p>
    <p className='text-[15px] font-normal leading-[18.6px] text-gray-900'>1.8% for watches above 200k</p>
  </div>
</div>
</div> */}

// left



import React from 'react'
import '../../app/globals.css'
import Homesrc from '../atoms/Homesrc'
import Button from '../atoms/Button'
import AnchorTag from '../atoms/Anchortag'
import Heading from '../atoms/Heading'
import ButtonCross from '../atoms/ButtonCross'
import Container from '../atoms/Container'
function Source2() {
  return (
    <Container>
      <div className='flex flex-col gap-[40px] '>
      <div className=''>
        <div className='main flex items-center   py-[20px]'>
          <ButtonCross />
          <div className='flex justify-center items-center w-full'><img className='w-[160px]' src="/assits/assits/image/header-Logo.png" alt="" /></div>
        </div>
      </div>
      <div className="bg sourcebg  w-[100%] justify-between xl:flex ">
        <div className="left shadow-top xl:w-[73%] lg:w-[100%]  gap-[30px] rounded-[20px]  ">
          <div className=' mx-8 xl:pt-[20px] lg:pt-[20px] lg:pb-[90px] md:pt-[20px] md:pb-[90px] sm:pt-[20px] sm:pb-[30px] pt-[20px] pb-[30px]'>
            <div className='flex flex-col xl:text-start lg:text-start md:text-start pb-[15px] sm:text-center text-center gap-[10px]'>
              <span className='text-[24px] font-medium text-gray-700'>Source</span>
              <p className='text-[15px] font-normal text-gray-900 text-opacity-60'>Let us fins the watch you want transparently and for set fee</p>
            </div>
            <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[20px]  '>
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
            <div className=' '>
              <div className='button bg-gray-700 xl:w-[235px] lg:w-[235px] md:w-[235px] sm:w-full h-[40px] flex justify-center items-center rounded-[20px] py-[20px] my-[25px] text-white text-[16px] text-medium font-medium xl:float-right lg:float-right md:float-right '>
                <Button variant='Submit'>SUBMIT</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="right xl:w-[25%] lg:w-[100%] lg:mt-[30px] md:mt-[30px] sm:mt-[30px] mt-[30px]">
          <div className='shadow-top py-[30px] flex flex-col justify-center items-center rounded-[20px]'>
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
    </Container>
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



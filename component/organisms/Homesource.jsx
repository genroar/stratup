import React from 'react'
import '../../app/globals.css'
import Homesrc from '../atoms/Homesrc'
import Button from '../atoms/Button'
import AnchorTag from '../atoms/Anchortag'
import Heading from '../atoms/Heading'
function Homesource() {
  return (
    
      <div className="">
              <div className='  source-outer   mt-[-48px]  bg-opacity-10  bg-white px-[20px] py-[20px] pr-[10px] rounded-tr-[50px] rounded-bl-[50px]  rounded-br-[50px]'>
        <div className='xl:flex block  justify-between main '>
          <div className='xl:w-[70%] w-full'>
            <div className='flex flex-col  gap-[10px]'>
              <span className='text-[24px] font-medium text-gray-700'>Source</span>
              <p className='text-[15px] xl:text-start lg:text-start md:text-start sm:text-center text-center font-normal text-gray-900 text-opacity-60'>Let us fins the watch you want transparently and for set fee</p>
            </div>
            <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 sm:w-[390px]-grid-cols-1 gap-[20px] mt-[10px] flex-wrap'>
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
              <div className=''><input type="checkbox" /></div>
              <span className='text-[13px] leading-[16.12px] mt-[4px]'>I accept the <AnchorTag>Terms & Conditions</AnchorTag></span>
            </div>
            <div className=''>
              <div className='button bg-gray-700 w-[235px] h-[40px] flex justify-center items-center rounded-[20px] py-[20px] my-[25px] text-white text-[16px] text-medium font-medium float-right'>
                <Button children='Submit'></Button>
              </div>
            </div>
          </div>
          <div className='box flex flex-col gap-[25px] xl:w-[24%] mr-[10px] w-full xl:mt-[0px] mt-[30px]'>
            <div className='text-center'><Heading level='4'>Our sourcing fees are</Heading></div>
            <div className='bg-gray-700 bg-opacity-10 h-[141px] rounded-[20px] flex flex-col justify-center items-center gap-[10px]'>
              <p className='text-[15px] font-normal leading-[18.6px] text-gray-900'>500 AED for watches below 10k</p>
              <p className='text-[15px] font-normal leading-[18.6px] text-gray-900'>1,000 AED for watches below 100k</p>
              <p className='text-[15px] font-normal leading-[18.6px] text-gray-900'>1,500 AED for watches below 200k</p>
              <p className='text-[15px] font-normal leading-[18.6px] text-gray-900'>1.8% for watches above 200k</p>
            </div>
          </div>
        </div>

      </div>
      </div>
  )
}

export default Homesource
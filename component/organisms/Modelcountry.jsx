import React from 'react'
import Heading from '../atoms/Heading'
import Other from '../atoms/Other'
import { RxCross1 } from "react-icons/rx";

function Modelcountry() {
  return (
    <div className='flex flex-col gap-[50px]'>
      <div className=''>
        <div className='main flex items-center px-[50px] py-[20px]'>
          <button><RxCross1 /></button>
          <div className='flex justify-center items-center w-full'><img className='w-[160px]' src="/assits/assits/image/header-Logo.png" alt="" /></div>
        </div>
        <div className='w-full h-[15px] bg-gray-400 shadow-md'>
          <div className='w-[180px] rounded-r-[10px] bg-gray-700 h-[15px]'>

          </div>
        </div>
      </div>
      <div className=' flex flex-col justify-center items-center gap-[20px]'>
        <div className='text flex flex-col text-center'>
          <Heading level='4'>Your country</Heading>
          <span className='text-[15px] font-normal'>Where are you located?</span>
          <span className='text-[13px] font-normal text-gray-900'>Select an option below</span>
        </div>
        <div className='image w-[360px] flex flex-wrap flex-row gap-[20px] justify-center items-center'>
         <button> <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" /></button>
         <button> <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" /></button>
         <button> <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" /></button>
         <button> <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" /></button>
         <button> <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" /></button>
         <button> <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" /></button>
         <button> <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" /></button>
         <button> <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" /></button>
        </div>
        <div className='button'>
          <Other parent='Other' child='umair'></Other>
        </div>
      </div>
    </div>
  )
}

export default Modelcountry



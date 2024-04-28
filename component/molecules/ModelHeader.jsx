import React from 'react'
import { RxCross1 } from "react-icons/rx";

function ModelHeader() {
  return (
    <div className=''>
      <div className='main flex items-center px-[50px] py-[10px]'>
        <div className=' xl:shadow-top xl:w-[30px] xl:h-[30px] xl:flex xl:items-center xl:justify-center  lg:shadow-top lg:w-[30px] lg:h-[30px] lg:flex lg:items-center lg:justify-center  md:shadow-top md:w-[30px] md:h-[30px] md:flex md:items-center md:justify-center sm:shadow-top sm:w-[30px] sm:h-[30px] sm:flex sm:items-center sm:justify-center bg-black  ' ><RxCross1 /></div>
        <div className='flex justify-center items-center w-full'><img className='w-[160px]' src="/assits/assits/image/header-Logo.png" alt="" /></div>
      </div>
    </div>
  )
}

export default ModelHeader
import React from 'react'
import { RxCross1 } from "react-icons/rx";

function ModelHeader() {
  return (
    <div className=''>
        <div className='main flex items-center px-[50px] py-[10px]'>
        <div><RxCross1 /></div>
        <div className='flex justify-center items-center w-full'><img className='w-[160px]' src="/assits/assits/image/header-Logo.png" alt="" /></div>
        </div>
        <div className='w-full h-[15px] bg-gray-500 shadow-md'>
            <div className='w-[180px] rounded-r-[10px] bg-gray-700 h-[15px]'>

            </div>
        </div>
    </div>
  )
}

export default ModelHeader
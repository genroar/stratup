import React from 'react'
import Modelhead2 from '../../atoms/Modelhead2'
import { LiaLessThanSolid } from 'react-icons/lia';
import { RxCross1 } from "react-icons/rx";

function ModelCondition() {
  return (
<div className='flex flex-col gap-[200px]'>
<div className=''>
        <div className='main flex items-center px-[50px] py-[20px]'>
        <button><RxCross1 /></button>
        <div className='flex justify-center items-center w-full'><img className='w-[160px]' src="/assits/assits/image/header-Logo.png" alt="" /></div>
        </div>
        <div className='w-full h-[15px] bg-gray-400 shadow-md'>
            <div className='w-[540px] rounded-r-[10px] bg-gray-700 h-[15px]'>

            </div>
        </div>
    </div>
<div className='w-full flex flex-col justify-center items-center'>
<div className='w-[384px] flex flex-col gap-[20px] '>
<div className='mr-[65px]'><Modelhead2 icon={<LiaLessThanSolid />} heading='Condition' description='What is the condition of your watch?' subDescription='Select an option below'/></div>
     <div className=''>
       <button> <WatchModel text='New (Unworn)' /></button>
       <button> <WatchModel text='Used (Like New)' /></button>
       <button> <WatchModel text='Used (Signs of Use)' /></button>
    </div>
   </div>
</div>
</div>
  )
}

export default ModelCondition
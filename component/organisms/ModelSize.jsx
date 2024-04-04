import React from 'react'
import WatchModel from '../atoms/WatchModel'
import Modelhead from '../atoms/Modelhead'
import { LiaLessThanSolid } from 'react-icons/lia';
import Other from '../atoms/Other';
import { RxCross1 } from "react-icons/rx";

function ModelSize() {
  return (
<div className='flex flex-col gap-[150px]'>
<div className=''>
        <div className='main flex items-center px-[50px] py-[20px]'>
          <button><RxCross1 /></button>
          <div className='flex justify-center items-center w-full'><img className='w-[160px]' src="/assits/assits/image/header-Logo.png" alt="" /></div>
        </div>
        <div className='w-full h-[15px] bg-gray-400 shadow-md'>
          <div className='w-[1270px] rounded-r-[10px] bg-gray-700 h-[15px]'>

          </div>
        </div>
      </div>
<div className='flex flex-col justify-center items-center'>
         <div className='w-[730px] flex flex-col gap-[20px]'>
    <div className='w-[650px] flex justify-center items-center flex-col gap-[20px]'><Modelhead icon={<LiaLessThanSolid />} heading='Case size' description='What year is size of the case?' subDescription='Select an option below' /></div>
     <div className=' w-[730px] flex flex-wrap gap-[10px]'>
       <button> <WatchModel text='28mm' /></button>
       <button> <WatchModel text='33mm' /></button>
       <button> <WatchModel text='33mm' /></button>
       <button> <WatchModel text='36mm' /></button>
       <button> <WatchModel text='40mm' /></button>
       <button> <WatchModel text='41mm' /></button>
       <button> <WatchModel text='42mm' /></button>
       <button> <WatchModel text='44mm' /></button>
    </div>
    <div className='flex justify-center items-center'><Other parent='Other' /></div>
   </div>
    </div>
</div>
  )
}

export default ModelSize
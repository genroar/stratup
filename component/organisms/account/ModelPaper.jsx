import React from 'react'
import WatchModel from '../../atoms/WatchModel'
import Modelhead2 from '../../atoms/Modelhead2'
import { LiaLessThanSolid } from 'react-icons/lia';
import Other from '../../atoms/Other';
import { RxCross1 } from "react-icons/rx";

function ModelPaper() {
  return (
<div className="flex flex-col gap-[150px]">
<div className=''>
        <div className='main flex items-center px-[50px] py-[20px]'>
          <button><RxCross1 /></button>
          <div className='flex justify-center items-center w-full'><img className='w-[160px]' src="/assits/assits/image/header-Logo.png" alt="" /></div>
        </div>
        <div className='w-full h-[15px] bg-gray-400 shadow-md'>
          <div className='w-[720px] rounded-r-[10px] bg-gray-700 h-[15px]'>

          </div>
        </div>
      </div>
<div className='flex flex-col justify-center items-center'>
<div className='w-[384px] flex flex-col justify-center items-center'>
      <div className='flex s'>
        <Modelhead2  icon={<LiaLessThanSolid />} heading='Original box & Papers' description='Do you have the original box & papers?' subDescription='Select an option below'  />
      </div>
     <div className='ml-[40px]'>
     <div className='flex flex-col gap-[10px] '>
        <WatchModel text='Box & Papers' />
        <WatchModel text='Box Only' />
        <WatchModel text='Papers Only' />
        <WatchModel text='No Box and Papers' />
    </div>
     </div>
    </div>
</div>
</div>
  )
}

export default ModelPaper
import React from 'react'
import WatchModel from '../atoms/WatchModel'
import Modelhead2 from '../atoms/Modelhead2'
import { LiaLessThanSolid } from 'react-icons/lia';
import Other from '../atoms/Other';

function ModelPaper() {
  return (
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
  )
}

export default ModelPaper
import React from 'react'
import WatchModel from '../atoms/WatchModel'
import Modelhead2 from '../atoms/Modelhead2'
import { LiaLessThanSolid } from 'react-icons/lia';

function ModelCondition() {
  return (
   <div className='w-[384px] flex flex-col gap-[20px] '>
<div className='mr-[65px]'><Modelhead2 icon={<LiaLessThanSolid />} heading='Condition' description='What is the condition of your watch?' subDescription='Select an option below'/></div>
     <div className=''>
        <WatchModel text='New (Unworn)' />
        <WatchModel text='Used (Like New)' />
        <WatchModel text='Used (Signs of Use)' />
    </div>
   </div>
  )
}

export default ModelCondition
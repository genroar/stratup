import React from 'react'
import WatchModel from '../atoms/WatchModel'
import Modelhead from '../atoms/Modelhead'
import { LiaLessThanSolid } from 'react-icons/lia';
import Other from '../atoms/Other';

function ModelSize() {
  return (
   <div className='w-[730px] flex flex-col gap-[20px]'>
    <div className='w-[650px] flex justify-center items-center flex-col gap-[20px]'><Modelhead icon={<LiaLessThanSolid />} heading='Case size' description='What year is size of the case?' subDescription='Select an option below' /></div>
     <div className=' w-[730px] flex flex-wrap gap-[10px]'>
        <WatchModel text='28mm' />
        <WatchModel text='33mm' />
        <WatchModel text='33mm' />
        <WatchModel text='36mm' />
        <WatchModel text='40mm' />
        <WatchModel text='41mm' />
        <WatchModel text='42mm' />
        <WatchModel text='44mm' />
    </div>
    <div className='flex justify-center items-center'><Other parent='Other' /></div>
   </div>
  )
}

export default ModelSize
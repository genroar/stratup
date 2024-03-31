import React from 'react'
import WatchModel from '../atoms/WatchModel'
import Modelhead from '../atoms/Modelhead'
import { LiaLessThanSolid } from 'react-icons/lia';
import Other from '../atoms/Other';
function ModelYear() {
  return (
  <div className='w-[730px]  flex flex-col gap-[20px]'>
    <div className='ml-[170px]'>
      <Modelhead icon={<LiaLessThanSolid />} heading='Year' description='What year is your watch?' subDescription='Select an option below' />
    </div>
       <div className='w-[730px] flex flex-wrap gap-[10px]'>
        <WatchModel text='2024' />
        <WatchModel text='2023' />
        <WatchModel text='2022' />
        <WatchModel text='2021' />
        <WatchModel text='2020' />
        <WatchModel text='2019' />
        <WatchModel text='2018' />
        <WatchModel text='2017' />
    </div>
    <div className='flex justify-center items-center w-[630px]'><Other child='Other' parent='Other'/></div>
  </div>
  )
}

export default ModelYear
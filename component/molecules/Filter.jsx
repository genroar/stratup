import React from 'react'
import Heading from '../atoms/Heading'
import Filterdrop from '../atoms/Filterdrop'

function Filter() {
  return (
    <div className='main py-[35px]  gap-[20px]  flex flex-col'>
    <div>
        <span className='text-[24px] font-medium text-gray-600'>Filter by</span>
    </div>
    <div className='flex flex-col w-[300px] gap-[5px]'>
        <Filterdrop  style=' text-[20px] font-medium text-gray-500' parent='Brand' child='umair' ></Filterdrop>
        <Filterdrop style='text-gray-400 text-[20px] font-medium' parent='Model' child='umair' ></Filterdrop> 
        <Filterdrop style=' text-[20px] font-medium text-gray-500' parent='Year' child='umair' ></Filterdrop>
        <Filterdrop style=' text-[20px] font-medium text-gray-500' parent='Condition' child='umair' ></Filterdrop>
        <Filterdrop style=' text-[20px] font-medium text-gray-500' parent='Condition' child='umair' ></Filterdrop>
        <Filterdrop style=' text-[20px] font-medium text-gray-500' parent='Country' child='umair' ></Filterdrop>
    </div>
    </div>
  )
}

export default Filter
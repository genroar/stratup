import React from 'react'
import Heading from '../atoms/Heading'
import Filterdrop from '../atoms/Filterdrop'

function Filter() {
  return (
    <div className='main gap-[20px]  flex flex-col'>
    <div>
        <Heading level='4'>Filter by</Heading>
    </div>
    <div className='flex flex-col w-[400px] gap-[5px]'>
        <Filterdrop parent='Brand' child='umair' ></Filterdrop>
        <Filterdrop parent='Model' child='umair' ></Filterdrop> 
        <Filterdrop parent='Year' child='umair' ></Filterdrop>
        <Filterdrop parent='Condition' child='umair' ></Filterdrop>
        <Filterdrop parent='Condition' child='umair' ></Filterdrop>
        <Filterdrop parent='Country' child='umair' ></Filterdrop>
    </div>
    </div>
  )
}

export default Filter
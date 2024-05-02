import React from 'react'
import WatchModel from '../../atoms/WatchModel'
import Modelhead from '../../atoms/Modelhead'
import { LiaLessThanSolid } from 'react-icons/lia';
import Other from '../../atoms/Other';
import { RxCross1 } from "react-icons/rx";
import ButtonCross from '@/component/atoms/ButtonCross';


  function  ModelYear({ onSelectYear, onSelectType }) {

  const handlebrandYear = (year) => {
    onSelectYear(year);
  }

  return (
    <div className=' flex justify-center items-center'>
      <div className='xl:w-[55%] lg:w-[55%] md:w-[70%]'>
        <div className='  flex flex-col gap-[20px]'>
          <div className=''>
            <Modelhead onclick={onSelectType} icon={<LiaLessThanSolid />} heading='Year' description='What year is your watch?' subDescription='Select an option below' />
          </div>
          <div className='grid grid-cols-2 gap-[10px]'>
            <button onClick={ () => handlebrandYear('year1')} ><WatchModel text='2024' /></button>
            <button onClick={ () => handlebrandYear('year2')}> <WatchModel text='2023' /></button>
            <button onClick={ () => handlebrandYear('year3')}> <WatchModel text='2022' /></button>
            <button onClick={ () => handlebrandYear('year4')}> <WatchModel text='2021' /></button>
            <button onClick={ () => handlebrandYear('year5')}> <WatchModel text='2020' /></button>
            <button onClick={ () => handlebrandYear('year6')}> <WatchModel text='2019' /></button>
            <button onClick={ () => handlebrandYear('year7')}> <WatchModel text='2018' /></button>
            <button onClick={ () => handlebrandYear('year8')}> <WatchModel text='2017' /></button>
          </div>
          <div className='flex justify-center items-center w-[100%]'><Other child='Other' parent='Other' /></div>
        </div>
      </div>
    </div>
  )
}

export default ModelYear
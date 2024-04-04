import React from 'react'
import WatchModel from '../../atoms/WatchModel'
import Modelhead from '../../atoms/Modelhead'
import { LiaLessThanSolid } from 'react-icons/lia';
import Other from '../../atoms/Other';
import { RxCross1 } from "react-icons/rx";
import ButtonCross from '@/component/atoms/ButtonCross';

function ModelYear({ onSelectYear }) {

  const handlebrandYear = (year) => {
    onSelectYear(year);
  }

  return (
    <div className='flex flex-col gap-[100px]'>
      <div className=''>
        <div className='main flex items-center px-[50px] py-[20px]'>
          <ButtonCross />
          <div className='flex justify-center items-center w-full'><img className='w-[160px]' src="/assits/assits/image/header-Logo.png" alt="" /></div>
        </div>
        <div className='w-full h-[15px] bg-gray-400 shadow-md'>
          <div className='w-[627px] rounded-r-[10px] bg-gray-700 h-[15px]'>

          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-[730px]  flex flex-col gap-[20px]'>
          <div className='ml-[170px]'>
            <Modelhead icon={<LiaLessThanSolid />} heading='Year' description='What year is your watch?' subDescription='Select an option below' />
          </div>
          <div className='w-[730px] flex flex-wrap gap-[10px]'>
            <button onClick={ () => handlebrandYear('year1')} ><WatchModel text='2024' /></button>
            <button onClick={ () => handlebrandYear('year2')}> <WatchModel text='2023' /></button>
            <button onClick={ () => handlebrandYear('year3')}> <WatchModel text='2022' /></button>
            <button onClick={ () => handlebrandYear('year4')}> <WatchModel text='2021' /></button>
            <button onClick={ () => handlebrandYear('year5')}> <WatchModel text='2020' /></button>
            <button onClick={ () => handlebrandYear('year6')}> <WatchModel text='2019' /></button>
            <button onClick={ () => handlebrandYear('year7')}> <WatchModel text='2018' /></button>
            <button onClick={ () => handlebrandYear('year8')}> <WatchModel text='2017' /></button>
          </div>
          <div className='flex justify-center items-center w-[740px]'><Other child='Other' parent='Other' /></div>
        </div>
      </div>
    </div>
  )
}

export default ModelYear
import React from 'react';
import WatchModel from '../atoms/WatchModel';
import Modelhead from '../atoms/Modelhead';
import { LiaLessThanSolid } from 'react-icons/lia';
import Other from '../atoms/Other';
import { RxCross1 } from "react-icons/rx";

function Modelmeterial() {
  return (
  <div className="flex flex-col gap-[150px]">
        <div className=''>
        <div className='main flex items-center px-[50px] py-[20px]'>
          <button><RxCross1 /></button>
          <div className='flex justify-center items-center w-full'><img className='w-[160px]' src="/assits/assits/image/header-Logo.png" alt="" /></div>
        </div>
        <div className='w-full h-[15px] bg-gray-400 shadow-md'>
          <div className='w-[1320px] rounded-r-[10px] bg-gray-700 h-[15px]'>

          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col gap-[20px] w-[730px]'>
    <div className='flex justify-center items-center w-[630px]'>
    <Modelhead
        icon={<LiaLessThanSolid />}
        heading='Case material'
        description='What year is your watch?'
        subDescription='Select an option below'
      />
    </div>
      <div className='w-[730px] flex flex-wrap flex-row gap-[10px]'>
        <WatchModel text='Steel' />
        <WatchModel text='Yellow Gold' />
        <WatchModel text='White Gold' />
        <WatchModel text='Rose Gold' />
        <WatchModel text='Two Tone' />
        <WatchModel text='Titanium' />
        <WatchModel text='Carbon' />
        <WatchModel text='Platinum' />
      </div>
      <div className='flex justify-center items-center'><Other parent='Other'/></div>
    </div>
    </div>
  </div>
  );
}

export default Modelmeterial;

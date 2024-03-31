import React from 'react';
import WatchModel from '../atoms/WatchModel';
import Modelhead from '../atoms/Modelhead';
import { LiaLessThanSolid } from 'react-icons/lia';
import Other from '../atoms/Other';
function Modelmeterial() {
  return (
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
  );
}

export default Modelmeterial;

import React from 'react';
import Modelhead from '../../atoms/Modelhead';
import { LiaLessThanSolid } from 'react-icons/lia';
import { RxCross1 } from "react-icons/rx";
import WatchModel from '@/component/atoms/WatchModel';

function ModelCondition({onSeleCondition, onSelectType}) {
  const handleSelectCondition  = (condition) => {
    onSeleCondition(condition)
  }
  return (
    <div className='flex flex-col  pt-[100px] items-center justify-center'>
      <div className='flex flex-col items-center justify-center w-full'>
        <div className='w-[384px] flex flex-col gap-[20px] '>
          <div className='mr-[65px]'><Modelhead onclick={onSelectType} icon={<LiaLessThanSolid />} heading='Condition' description='What is the condition of your watch?' subDescription='Select an option below'/></div>
          <div className='flex flex-col gap-[10px]'>
            <button onClick={() => handleSelectCondition("condition1")} className='w-[360px] shadow-sm rounded-[20px] h-[51px]'> <WatchModel text='New (Unworn)' /></button>
            <button onClick={() => handleSelectCondition("condition1")} className='w-[360px] shadow-sm rounded-[20px] h-[51px]'> <WatchModel text='Used (Like New)' /></button>
            <button onClick={() => handleSelectCondition("condition1")} className='w-[360px] shadow-sm rounded-[20px] h-[51px]'> <WatchModel text='Used (Signs of Use)' /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelCondition;

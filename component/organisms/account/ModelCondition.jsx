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
    <div className='flex  flex-col items-center justify-center'>
      <div className='xl:w-[35%] lg:w-[40%] md:w-[50%] sm:w-[45%] w-[50%]'>
        <div className=' flex flex-col gap-[20px] '>
          <div className=''><Modelhead onclick={onSelectType} icon={<LiaLessThanSolid />} heading='Condition' description='What is the condition of your watch?' subDescription='Select an option below'/></div>
          <div className='flex justify-center items-center flex-col gap-[10px]'>
            <button onClick={() => handleSelectCondition("condition1")} className='w-full shadow-sm rounded-[20px] h-[51px]'> <WatchModel text='New (Unworn)' /></button>
            <button onClick={() => handleSelectCondition("condition1")} className='w-full shadow-sm rounded-[20px] h-[51px]'> <WatchModel text='Used (Like New)' /></button>
            <button onClick={() => handleSelectCondition("condition1")} className='w-full shadow-sm rounded-[20px] h-[51px]'> <WatchModel text='Used (Signs of Use)' /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelCondition;

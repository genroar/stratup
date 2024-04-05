import React from 'react';
import WatchModel from '../atoms/WatchModel';
import Modelhead from '../atoms/Modelhead';
import { LiaLessThanSolid } from 'react-icons/lia';
import Other from '../atoms/Other';
import { RxCross1 } from 'react-icons/rx';
import ButtonCross from '../atoms/ButtonCross';

function ModelSize({ onSelectSize }) { // Destructure onSelectSize from props
  const handleSizeSelect = (size) => {
    onSelectSize(size);
  };

  return (
    <div className='flex flex-col  pt-[100px] items-center justify-center'>
      <div>
        {/* <div className='w-full h-[15px] bg-gray-400 shadow-md'>
          <div className='w-[1270px] rounded-r-[10px] bg-gray-700 h-[15px]'></div>
        </div> */}
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='w-[730px] flex flex-col gap-[20px]'>
          <div className='w-[650px] flex justify-center items-center flex-col gap-[20px]'>
            <Modelhead icon={<LiaLessThanSolid />} heading='Case size' description='What year is size of the case?' subDescription='Select an option below' />
          </div>
          <div className='w-[730px] flex flex-wrap gap-[10px]'>
            <button onClick={() => handleSizeSelect("size 1")}> <WatchModel text='28mm' /></button>
            <button onClick={() => handleSizeSelect("size 2")}> <WatchModel text='33mm' /></button>
            <button onClick={() => handleSizeSelect("size 3")}> <WatchModel text='33mm' /></button>
            <button onClick={() => handleSizeSelect("size 4")}> <WatchModel text='36mm' /></button>
            <button onClick={() => handleSizeSelect("size 5")}> <WatchModel text='40mm' /></button>
            <button onClick={() => handleSizeSelect("size 6")}> <WatchModel text='41mm' /></button>
            <button onClick={() => handleSizeSelect("size 7")}> <WatchModel text='42mm' /></button>
            <button onClick={() => handleSizeSelect("size 8")}> <WatchModel text='44mm' /></button>
          </div>
          <div className='flex items-center justify-center'><Other parent='Other' /></div>
        </div>
      </div>

    </div>
  );
}

export default ModelSize;
 
import React from 'react';
import WatchModel from '../atoms/WatchModel';
import Modelhead from '../atoms/Modelhead';
import { LiaLessThanSolid } from 'react-icons/lia';
import Other from '../atoms/Other';
import { RxCross1 } from "react-icons/rx";

<<<<<<< HEAD
function ModelSize() {
  return (
    <div className='flex flex-col pt-[100px] items-center justify-center'>
      <div>
        <div className='main flex items-center px-[50px] py-[20px]'>
          <button><RxCross1 /></button>
          <div className='flex items-center justify-center w-full'>
            <img className='w-[160px]' src="/assits/assits/image/header-Logo.png" alt="" />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
=======
function ModelSize({ onSelectSize }) {
  const handleSizeSelect = (size) => {
    onSelectSize(size);
  };

  return (
    <div className='flex flex-col pt-[100px]'>
      <div className='flex flex-col justify-center items-center'>
>>>>>>> 6ed3838a63a5cda0fb0bd463e0269938a26faf37
        <div className='w-[730px] flex flex-col gap-[20px]'>
          <div className='flex justify-center'>
            <Modelhead icon={<LiaLessThanSolid />} heading='Case size' description='What year is size of the case?' subDescription='Select an option below' />
          </div>
          <div className='w-[730px] flex flex-wrap gap-[10px]'>
<<<<<<< HEAD
            <button> <WatchModel text='28mm' /></button>
            <button> <WatchModel text='33mm' /></button>
            <button> <WatchModel text='33mm' /></button>
            <button> <WatchModel text='36mm' /></button>
            <button> <WatchModel text='40mm' /></button>
            <button> <WatchModel text='41mm' /></button>
            <button> <WatchModel text='42mm' /></button>
            <button> <WatchModel text='44mm' /></button>
=======
            <button onClick={() => handleSizeSelect("28mm")}><WatchModel text='28mm' /></button>
            <button onClick={() => handleSizeSelect("33mm")}><WatchModel text='33mm' /></button>
            <button onClick={() => handleSizeSelect("33mm")}><WatchModel text='33mm' /></button>
            <button onClick={() => handleSizeSelect("36mm")}><WatchModel text='36mm' /></button>
            <button onClick={() => handleSizeSelect("40mm")}><WatchModel text='40mm' /></button>
            <button onClick={() => handleSizeSelect("41mm")}><WatchModel text='41mm' /></button>
            <button onClick={() => handleSizeSelect("42mm")}><WatchModel text='42mm' /></button>
            <button onClick={() => handleSizeSelect("44mm")}><WatchModel text='44mm' /></button>
>>>>>>> 6ed3838a63a5cda0fb0bd463e0269938a26faf37
          </div>
          <div className='flex justify-center items-center'><Other parent='Other' /></div>
        </div>
      </div>
    </div>
  );
}

export default ModelSize;

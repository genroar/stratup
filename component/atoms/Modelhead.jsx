import React from 'react';
import { LiLessThanSolid } from 'react-icons/lia';
import Heading from './Heading';

function Modelhead({ icon, heading, description, subDescription }) {
  return (
<<<<<<< HEAD

    <div className='flex items-center justify-center gap-[100px]'>
      <button>{icon}</button>
      <div className='flex flex-col text-center'>

    <div className='flex items-center'>
      <div className=''> <button>{icon}</button></div>
=======
<<<<<<< HEAD

    <div className='flex items-center justify-center'>
      {/* <button>{icon}</button> */}
      <div className='flex flex-col text-center'>

    <div className='flex items-center'>
      <div className=' '> <button>{icon}</button></div>
>>>>>>> d5f360ddf88fb9094166517f2299b06c8bde3ca4
          <div className='flex items-center '>
     
      <div className='flex flex-col text-center justify-center w-[360px]'>

        <Heading level='4'>{heading}</Heading>
        <span className='text-[15px] font-normal'>{description}</span>
        <span className='text-gray-800 text-opacity-50 text-[13px] font-normal'>{subDescription}</span>
<<<<<<< HEAD
=======
=======
    <div className="flex items-center">
      {/* <button>{icon}</button> */}
      <div className="flex flex-col text-center">
        <div className="flex items-center">
          <div className=" ">
            {" "}
            <button>{icon}</button>
          </div>
          <div className="flex items-center ">
            <div className="flex flex-col text-center justify-center w-[360px]">
              <Heading level="4">{heading}</Heading>
              <span className="text-[15px] font-normal">{description}</span>
              <span className="text-gray-800 text-opacity-50 text-[13px] font-normal">
                {subDescription}
              </span>
            </div>
          </div>
        </div>
>>>>>>> b05280e5aa458a4c7b9571e19139cd494b324bab
>>>>>>> d5f360ddf88fb9094166517f2299b06c8bde3ca4
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Modelhead;

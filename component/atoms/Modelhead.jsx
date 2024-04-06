import React from "react";
import { AiOutlineLessThan } from "react-icons/ai";
import Heading from "./Heading";

function Modelhead({ icon, heading, description, subDescription }) {
  return (
<<<<<<< HEAD
    <div className='flex items-center justify-center gap-[100px]'>
      <button>{icon}</button>
=======
    <div className='flex items-center justify-center'>
>>>>>>> 6ed3838a63a5cda0fb0bd463e0269938a26faf37
      <div className='flex flex-col text-center'>
        <div className='flex items-center'>
          <div className=''>
            <button>{icon}</button>
          </div>
<<<<<<< HEAD
          <div className='flex items-center justify-center'>
            <div className='flex flex-col text-center'>
=======
          <div className='flex items-center'>
            <div className='flex flex-col text-center justify-center w-[360px]'>
>>>>>>> 6ed3838a63a5cda0fb0bd463e0269938a26faf37
              <Heading level='4'>{heading}</Heading>
              <span className='text-[15px] font-normal'>{description}</span>
              <span className='text-gray-800 text-opacity-50 text-[13px] font-normal'>{subDescription}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modelhead;

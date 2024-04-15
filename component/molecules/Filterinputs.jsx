import Input from '../atoms/Input'
import React, { useState } from 'react';
import { TbMathGreater } from "react-icons/tb";

function Filterinputs() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
  return (    
    <div className='main'>
            <div className='relative flex gap-[10px]'>
        <div>
            <Input variant='four' type='search' children='Search' ></Input>
        </div>
        <div className='bg-gray-800 absolute w-[40px] h-[40px] left-[588px]  flex justify-center items-center rounded-[47px]'>
            <img src="/assits/assits/svg/search.svg" alt="" />
        </div>
        <div className="dropdown flex items-center justify-center border bg-gray-300 bg-opacity-30 border-gray-700 rounded-[30px] px-[20px] h-[40px]">
                <button className="dropdown-toggle" onClick={toggleDropdown}>
                    <div className='flex w-[165px] py-[20px] justify-between'>
                        <div><span className='text-[20px] text-medium flex justify-center items-center text-gray-600 text-opacity-80'>Oder by</span></div>
                        <div className='flex justify-center items-center'><TbMathGreater /></div>
                    </div>
                </button>
                {isOpen && (
                    <div className="dropdown-menu">
                        <p>Dropdown menu 2</p>
                    </div>
                )}
            </div>
    </div>
    </div>
  )
}

export default Filterinputs
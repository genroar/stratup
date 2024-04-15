import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading';
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const FAQdrop = ({ parent, child }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={toggleDropdown} className='cursor-pointer pt-[20px] flex justify-between' >
      <div><p className='text-[24px] font-medium text-border '>{parent}  </p>
        <div className='mt-4'>
          {isOpen && <span className='text-Faqchild text-[15px] font-light ' >{child}</span>}
        </div>
      </div>
      <div className='w-[17.43px] h-[9.85px]'>
        {isOpen ? <MdExpandLess className='ml-[10px] cursor-pointer' onClick={toggleDropdown} /> : <MdExpandMore className='ml-[10px] cursor-pointer' onClick={toggleDropdown} />}
      </div>
    </div>
  );
};

FAQdrop.propTypes = {
  parent: PropTypes.string.isRequired,
  child: PropTypes.string.isRequired,
};

export default FAQdrop;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading';

const FAQdrop = ({ parent, child }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='pt-[20px]' >
      <p className='text-24px cursor-pointer ' onClick={toggleDropdown}>{parent}  </p>
      {isOpen && <Heading level='6'>{child}</Heading>}
    </div>
  );
};

FAQdrop.propTypes = {
  parent: PropTypes.string.isRequired,
  child: PropTypes.string.isRequired,
};

export default FAQdrop;

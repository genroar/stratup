import React from 'react';
import Input from '../atoms/Input';

function Listingsearch({ shadowClass }) {
  return (
    <div className='main relative '>
      <div className={`input relative ${shadowClass}`}>
        <Input variant='secondary' type='search' placeholder='search' />
      </div>
      <div className='svg bg-gray-700 w-[40px] h-[40px] flex justify-center top-[1px] items-center rounded-[100%] absolute right-0'>
        <img src="/assits/assits/svg/search.svg" alt="" />
      </div>
    </div>
  );
}

export default Listingsearch;

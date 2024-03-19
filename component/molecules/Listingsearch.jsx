import React from 'react'
import Input from '../atoms/Input'
function Listingsearch() {
  return (
    <div className='main flex '>
      <div className='input'>
      <Input variant='secondary' type='search' children='search'></Input>
      </div>
      <div className='svg  bg-gray-800 w-[40px] h-[40px] flex justify-center items-center rounded-[47px] left-[-40px] relative'>
        <img src="/assits/assits/svg/search.svg" alt="" />
      </div>
    </div>
  )
}

export default Listingsearch
import React from 'react'
import Input from '../atoms/Input'
function Listingsearch() {
  return (
    <div className='relative flex main '>
      <div className='input '>
      <Input variant='secondary' type='search' placeholder='search'></Input>
      </div>
      <div className='svg  bg-gray-800 w-[40px] h-[40px] flex justify-center items-center rounded-[100%]  absolute right-0'>
        <img src="/assits/assits/svg/search.svg" alt="" />
      </div>
    </div>
  )
}

export default Listingsearch
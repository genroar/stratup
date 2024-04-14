import React from 'react'
import Input from '../atoms/Input'
function Listingsearch({shadowClass}) {
  return (
    <div className='main relative'>
      <div className={`input relative ${shadowClass}`}>
      <Input variant='secondary' type='search' placeholder='Search'></Input>
      </div>
      <div className='svg  bg-gray-800 w-[40px] h-[40px] flex justify-center items-center rounded-[100%]  absolute top-[2px] right-[0px]'>
        <img src="/assits/assits/svg/search.svg" alt="" />
      </div>
    </div>
  )
}

export default Listingsearch
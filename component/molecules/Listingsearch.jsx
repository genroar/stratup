import React from 'react'
import Input from '../atoms/Input'
function Listingsearch({shadowClass}) {
  return (
<<<<<<< HEAD
    <div className='main relative'>
      <div className={`input relative ${shadowClass}`}>
      <Input variant='secondary' type='search' placeholder='Search'></Input>
      </div>
      <div className='svg  bg-gray-800 w-[40px] h-[40px] flex justify-center items-center rounded-[100%]  absolute top-[2px] right-[0px]'>
=======
    <div className='relative flex main '>
      <div className='input '>
      <Input variant='secondary' type='search' placeholder='search'></Input>
      </div>
      <div className='svg  bg-gray-800 w-[40px] h-[40px] flex justify-center items-center rounded-[100%]  absolute right-0'>
>>>>>>> fc298d79642f07bd59211e6bcda80187166603be
        <img src="/assits/assits/svg/search.svg" alt="" />
      </div>
    </div>
  )
}

export default Listingsearch
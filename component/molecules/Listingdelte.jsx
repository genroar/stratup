import React from 'react'
import Heading from '../atoms/Heading'
import { BsFillTagFill } from "react-icons/bs";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
function Listingdelte() {
  return (
    <div className='flex justify-between w-[990px] px-[20px] py-[20px] items-center'>
        <div className='text'>
            <Heading level='3'>Listings</Heading>
        </div>
        <div className='lft flex items-center gap-[15px]'>
            <div className='flex gap-[6px]'>
                <button className='text-green-500 bg-green-100 w-[35px] h-[35px] rounded-[100%] flex justify-center items-center'><BsFillTagFill /></button>
                <span className='text-[13px] items-center flex  font-normal text-gray-800 text-opacity-80'>Mark as sold</span>
            </div>
            <div className='flex gap-[6px]'>
                <button className='w-[35px] h-[35px] rounded-[100%] flex justify-center items-center text-blue-500 bg-blue-100'><HiPencil /></button>
                <span className='text-[13px] items-center flex  font-normal text-gray-800 text-opacity-80'>Edit</span>
            </div>
            <div className='flex gap-[6px]   '>
                <button className='w-[35px] h-[35px] rounded-[100%] flex justify-center items-center text-red-500 bg-red-100'><MdDelete /></button>
                <span className='text-[13px] font-normal items-center flex  text-gray-800 text-opacity-80'>Delete</span>
            </div>
        </div>  
    </div>
  ) 
}

export default Listingdelte
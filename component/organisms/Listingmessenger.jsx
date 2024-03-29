import React from 'react'
import { IoSend } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { PiImageLight } from "react-icons/pi";

function Listingmessenger() {
    return (
        <div className='w-[990px] rounded-[20px] shadow-sm flex flex-col gap-[150px] '>
           <div className='flex flex-col gap-[20px]'>
           <div className='head flex w-[990px] justify-between py-[10px] px-[20px] bg-gray-700 bg-opacity-50 items-center rounded-tl-[20px] rounded-tr-[20px]'>
                <div className='flex gap-[10px]'>
                    <img src="/assits/assits/image/not.png" alt="" />
                    <div className=' flex items-center text-white'><span className='text-[13px] font-normal'>Susy Gala</span></div>
                </div>
                <div className='w-[30px] h-[30px] rounded-[100%] bg-white flex justify-center items-center'><BsThreeDots /></div>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <div className='px-[30px] flex gap-[10px]'>
                    <div> <img src="/assits/assits/image/not.png" alt="" /></div>
                    <div className='shadow-sm w-[575px] px-[20px] py-[20px] flex flex-col gap-[10px] rounded-[20px]'>
                        <span className='text-[13px] font-normal text-gray-800 text-opacity-50'>12/01/23 12:00</span>
                        <span className='text-[12px] font-normal text-gray-900'>Strap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watches Strap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watchesStrap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watchesStrap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watchesStrap Up is a</span>
                    </div>
                </div>
                <div className="flex gap-[10px] px-[30px]">
                    <div><img src="/assits/assits/image/not1.png" alt="" /></div>
                    <div className='w-[575px] px-[20px] py-[20px] flex flex-col gap-[10px] bg-gray-700 bg-opacity-10 rounded-[20px]'>
                        <span className='text-[13px] font-normal text-gray-800 text-opacity-50'>12/01/23 12:00</span>
                        <span className='text-[12px] font-normal text-gray-900'>Strap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watches Strap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watchesStrap Up is a premier luxury watch concierge based in Dubai, offering a rang</span>
                    </div>
                </div>
            </div>
           </div>
            <div className='flex gap-[10px] py-[20px] px-[10px]'>
                <div className='image relative'>
                    <div><input className='w-[910px] h-[40px] rounded-[20px] bg-gray-700 bg-opacity-10 outline-none px-[38px]' type="text" placeholder='Type a message' /></div>
                    <div className='absolute top-[12px] left-[10px] text-[20px] border-r border-blue-300 '><PiImageLight className='pr-[5px]' /></div>
                </div>
                <div className='bg-gray-700 w-[40px] h-[40px] rounded-[20px] flex justify-center items-center text-white'><IoSend /></div>
            </div>
        </div>
    )
}

export default Listingmessenger
import React from 'react'
import Heading from '../atoms/Heading'
import { FaTag } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

function Listingstok() {
    return (
        <div className=''>
            <div className='heade flex w-[990px] px-[10px] py-[10px] justify-between items-center'>
                <div className=''><Heading level='3'>Listing</Heading></div>
                <div className='flex gap-[20px]'>
                    <div className='py-[13px]'><span className='text-[18px] font-medium text-gray-900  text-opacity-50'>Profit/Loss: 2000 AED</span></div>
                    <div className='flex gap-[8px]'>
                        <div className='flex items-center gap-[10px]'>
                            <div className='bg-green-50 w-[35px] h-[35px] rounded-[100%] flex justify-center items-center text-[20px] text-green-500'><FaTag /></div>
                            <div><span className='text-[15px] font-normal text-gray-900 text-opacity-80'>Upload to listings</span></div>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <div className='bg-red-50 w-[35px] h-[35px] rounded-[100%] flex justify-center items-center text-[20px] text-red-500'><MdDelete /></div>
                            <div><span className='text-[15px] font-normal text-gray-900 text-opacity-80'>Delete</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inner-stok flex shadow-sm w-[990px] px-[10px] py-[10px] rounded-[20px] gap-[20px]">
                <div className='flex flex-col gap-[14px]'>
                    <div className='relative'>
                        <img src="/assits/assits/image/stok.png" alt="" />
                        <div className='absolute bottom-[77px] left-[7px]'><img src="/assits/assits/image/stok2.png" alt="" /></div>
                    </div>
                    <div className='flex gap-[7px]'>
                        <div><img src="/assits/assits/image/stok1.png" alt="" /></div>
                        <div><img src="/assits/assits/image/stok1.png" alt="" /></div>
                        <div><img src="/assits/assits/image/stok1.png" alt="" /></div>
                    </div>
                </div>
                <div className='main flex gap-[40px]'>
            <div className='head divide-y-2'>
                <div className='1 w-[360px] divide-y-2 '>
                <div className='flex justify-between py-[5px]'>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-700 text-opacity-50'>Brand</span>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-900'>Rolex</span>
                </div>
                <div className='flex justify-between py-[5px]'>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-700 text-opacity-50'>Model</span>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-900'>Datejust </span>
                </div>
                <div className='flex justify-between py-[5px]'>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-700 text-opacity-50'>Year</span>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-900'>2017</span>
                </div>
                <div className='flex justify-between py-[5px]'>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-700 text-opacity-50'>Serial</span>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-900'>II</span>
                </div>
                <div className='flex justify-between py-[5px]'>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-700 text-opacity-50'>Condition</span>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-900'>New (Unworn) </span>
                </div>
                <div className='flex justify-between py-[5px]'>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-700 text-opacity-50'>Box & Papers</span>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-900'>Only Box</span>
                </div>
                </div>
            </div>
            <div className='head divide-y-2'>
                <div className='1 w-[360px] divide-y-2 '>
                <div className='flex justify-between py-[5px]'>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-700 text-opacity-50'>Case material</span>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-900'>Steel</span>
                </div>
                <div className='flex justify-between py-[5px]'>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-700 text-opacity-50'>Case diameter</span>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-900'>28mm </span>
                </div>
                <div className='flex justify-between py-[5px]'>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-700 text-opacity-50'>Date of purchase</span>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-900'>11/02/2023</span>
                </div>
                <div className='flex justify-between py-[5px]'>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-700 text-opacity-50'>Date of sale</span>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-900'>31/03/2023 </span>
                </div>
                <div className='flex justify-between py-[5px]'>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-700 text-opacity-50'>Purchase price</span>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-900'>14 000 AED</span>
                </div>
                <div className='flex justify-between py-[5px]'>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-700 text-opacity-50'>Sell price</span>
                    <span className='text-[15px] font-normal leading-[18.6px] text-gray-900'>16 000 AED</span>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Listingstok
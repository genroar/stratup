import React from 'react'
import { IoAnalyticsOutline } from 'react-icons/io5';
import Heading from '../atoms/Heading';
import Weekdrop from '../atoms/Weekdrop';
function Dashanalitic() {
  return (
    <div className='w-[100%] '>
                     <div className='mt-[20px] mx-[10px] px-[20px] py-[10px] shadow-sm  rounded-[20px]'>
                    <div className='main  flex justify-between pb-[15px]'>
                        <div className=' flex items-center gap-[10px]'>
                        <div className='w-[20px] h-[20px] border border-gray-700 flex justify-center items-center ' style={{ borderWidth: '1.5px' }}><IoAnalyticsOutline /></div>
                        <div><Heading level='4'>Analytics</Heading></div>
                        </div>
                        <div className='down'>
                            <Weekdrop/>
                        </div>
                    </div>
                    <div className="box flex justify-between gap-[15px]">
                        <div className="box1 flex flex-col bg-gray-700 bg-opacity-10 w-[214px] px-[10px] py-[10px] rounded-[10px]">
                            <span className='text-[15px] font-normal leading-[18.6px]'>Impressions</span>
                            <span className='text-[28px] font-semibold leading-[34.73px]'>128</span>
                        </div>
                        <div className="box1 flex flex-col bg-gray-700 bg-opacity-20 w-[214px] px-[10px] py-[10px] rounded-[10px]">
                            <span className='text-[15px] font-normal leading-[18.6px]'>Clicks</span>
                            <span className='text-[28px] font-semibold leading-[34.73px]'>87</span>
                        </div>
                        <div className="box1 flex flex-col bg-gray-700 bg-opacity-30 w-[214px] px-[10px] py-[10px] rounded-[10px]">
                            <span className='text-[15px] font-normal leading-[18.6px]'>Offers Submitted</span>
                            <span className='text-[28px] font-semibold leading-[34.73px]'>84%</span>
                        </div>
                        <div className="box1 flex flex-col bg-gray-700 bg-opacity-40 w-[214px] px-[10px] py-[10px] rounded-[10px]">
                            <span className='text-[15px] font-normal leading-[18.6px]'>Messages</span>
                            <span className='text-[28px] font-semibold leading-[34.73px]'>54%</span>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Dashanalitic
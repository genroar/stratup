import React from 'react'
import Heading from '../atoms/Heading'
import { BsLightningChargeFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { IoAnalyticsOutline } from "react-icons/io5";
import Header from '../organisms/Header';
import Weekdrop from '../atoms/Weekdrop';
function Dashboard() {
    return (
        <div className='main'>
            <div><Heading level='3'>Dashboard</Heading></div>
            <div className='inner shadow-sm w-[990px] px-[20px] py-[20px] rounded-[20px] justify-between'>
                <div className='box flex justify-between'>
                    <div className='activ flex w-[465px] h-[80px] shadow-sm px-[20px] rounded-[20px] justify-between'>
                        <div className='flex justify-center items-center gap-[10px]'>
                            <div className='w-[50px] h-[50px] bg-gray-700 bg-opacity-30 rounded-[100%] flex justify-center items-center text-[30px] text-gray-700'><BsLightningChargeFill /></div>
                            <Heading level='5'>Active listings</Heading>
                        </div>
                        <div className='4 flex justify-center items-center'>
                            <span className='text-[36px] leading-[44.65px] font-semibold'>4</span>
                        </div>
                    </div>
                    <div className='activ flex w-[465px] h-[80px] shadow-sm px-[20px] rounded-[20px] justify-between'>
                        <div className='flex justify-center items-center gap-[10px]'>
                            <div className='w-[50px] h-[50px] bg-gray-700 bg-opacity-30 rounded-[100%] flex justify-center items-center text-[30px] text-gray-700'><AiFillMessage /></div>
                            <Heading level='5'>Notifications</Heading>
                        </div>
                        <div className='4 flex justify-center items-center'>
                            <span className='text-[36px] leading-[44.65px] font-semibold'>15</span>
                        </div>
                    </div>
                </div>
                <div className='mt-[20px] mx-[10px] px-[20px] py-[20px] shadow-sm  rounded-[20px]'>
                    <div className='main  flex justify-between py-[10px]'>
                        <div className=' flex items-center gap-[10px]'>
                        <div className='w-[20px] h-[20px] border border-gray-700 flex justify-center items-center ' style={{ borderWidth: '1.5px' }}><IoAnalyticsOutline /></div>
                        <div><Heading level='4'>Analytics</Heading></div>
                        </div>
                        <div className='down'>
                            <Weekdrop/>
                        </div>
                    </div>
                    <div className="box flex justify-between">
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
        </div>
    )
}

export default Dashboard
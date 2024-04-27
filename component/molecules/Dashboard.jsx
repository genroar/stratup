import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { BsLightningChargeFill } from "react-icons/bs";
import Heading from '../atoms/Heading';
import Dashanalitic from './Dashanalitic';

function Dashboard() {
    return (
        <div className='main'>
            <div><Heading level='3'>Dashboard</Heading></div>
            <div className='inner shadow-sm w-full px-[20px] py-[20px] rounded-[20px] justify-between'>
                <div className='box flex gap-[20px] justify-between'>
                    <div className='activ flex w-[50%] h-[80px] shadow-sm px-[10px] rounded-[20px] justify-between'>
                        <div className='flex justify-center items-center gap-[10px]'>
                            <div className='w-[50px] h-[50px] bg-gray-700 bg-opacity-30 rounded-[100%] flex justify-center items-center text-[30px] text-gray-700'><BsLightningChargeFill /></div>
                            <Heading level='5'>Active listings</Heading>
                        </div>
                        <div className='4 flex justify-center items-center'>
                            <span className='text-[36px] leading-[44.65px] font-semibold'>4</span>
                        </div>
                    </div>
                    <div className='activ flex w-[50%] h-[80px] shadow-sm px-[20px] rounded-[20px] justify-between'>
                        <div className='flex justify-center items-center gap-[10px]'>
                            <div className='w-[50px] h-[50px] bg-gray-700 bg-opacity-30 rounded-[100%] flex justify-center items-center text-[30px] text-gray-700'><AiFillMessage /></div>
                            <Heading level='5'>Notifications</Heading>
                        </div>
                        <div className='4 flex justify-center items-center'>
                            <span className='text-[36px] leading-[44.65px] font-semibold'>15</span>
                        </div>
                    </div>
                </div>
                   <div> <Dashanalitic/></div>
            </div>
        </div>
    )
}

export default Dashboard;

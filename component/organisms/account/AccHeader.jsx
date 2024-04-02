import React from 'react';
import '../../../app/globals.css'
import CustomImage from '@/component/atoms/CustomImage';
import Navigation from '@/component/molecules/Navigation';
import Heading from '@/component/atoms/Heading';
import { IoIosNotifications } from "react-icons/io";
import Button from '@/component/atoms/Button';


function AccHeader() {
  return (
    <div className='flex w-full py-[15px] header items-center px-[50px]  h-[65px] justify-between'>
      <div>
        <CustomImage variant='logo' src='/assits/assits/image/header-logo.png' alt='logo' />
      </div>
      <div>
        <Navigation />
      </div>
      <div className='flex items-center gap-[20px]' >
        <Heading level='4' >En/Ar</Heading>
        <button className=' rounded-[20px] text-white w-[170px] h-[40px] bg-buttonGray flex justify-center items-center ' >+ Create Listing</button>
        <IoIosNotifications className='w-[30px] h-[30px] rounded-full bg-buttonGray px-[5px] py-[5px] fill-white  ' />
        <div className='w-[40px] h-[40px] rounded-full ' >
        <img src="/assits/assits/image/profile.png"  alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default AccHeader;

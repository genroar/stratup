import React from 'react'
import Header from '../organisms/Header'
import Heading from '../atoms/Heading'
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import Footer from '../organisms/Footer';
function Location() {
  return (
    <div className='main'>
        <div className='header'>
            <Header/>
        </div>
        <div className='flex my-[50px] w-[93%] justify-between m-auto'>
            <div className=' justify-center items-center  flex'>
                <div className='let flex flex-col gap-[10px]'>
                <span className='text-[20px] font-medium text-gray-700 leading-[28.52px]'>Call us at this number</span>
                <Heading level='5'>+ 9 (999)-999-99-99</Heading>
                <span className='text-[20px] font-medium text-gray-700 leading-[28.52px]'>Company location</span>
                <Heading level='5'>Moscow, Russia, Lenin Square Street 62/3</Heading>
                <span className='text-[20px] font-medium text-gray-700 leading-[28.52px]'>Contact us by mail</span>
                <Heading level='5'>Stratup@mail.com</Heading>
                <span className='text-[20px] font-medium text-gray-700 leading-[28.52px]'>Follow us on social networks</span>
                <div className='icon flex flex-row gap-[20px]'>
                 <div className='w-[30px] h-[30px] bg-gray-700 flex justify-center rounded-[5px] items-center text-white text-[25px]'><RiFacebookFill /></div>
                 <div className='w-[35px]  text-white text-[25px] h-[35px] rounded-[100%] flex justify-center items-center bg-gray-700'><IoLogoTwitter /></div>
                 <div className='w-[35px]  text-white text-[25px] h-[35px] rounded-[10px] flex justify-center items-center bg-gray-700'><IoLogoInstagram /></div>
                </div>
                </div>
            </div>
            <div className='rigt'>
              <a href=""><img src="/assits/assits/image/location.png" alt="umair" /></a>
            </div>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
    </div>
  )
}

export default Location
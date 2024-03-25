import React from 'react'
import Header from '../organisms/Header'
import Heading from '../atoms/Heading'
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
function Location() {
  return (
    <div className='main'>
        <div className='header'>
            <Header/>
        </div>
        <div className=''>
            <div className='let'>
                <span className='text-[20px] font-medium text-gray-700 leading-[28.52px]'>Call us at this number</span>
                <Heading level='5'>+ 9 (999)-999-99-99</Heading>
                <span className='text-[20px] font-medium text-gray-700 leading-[28.52px]'>Company location</span>
                <Heading level='5'>Moscow, Russia, Lenin Square Street 62/3</Heading>
                <span className='text-[20px] font-medium text-gray-700 leading-[28.52px]'>Contact us by mail</span>
                <Heading level='5'>Stratup@mail.com</Heading>
                <span className='text-[20px] font-medium text-gray-700 leading-[28.52px]'>Follow us on social networks</span>
                <div className='icon flex flex-row gap-[20px]'>
                 <div><RiFacebookFill /></div>
                 <div><IoLogoTwitter /></div>
                 <div><IoLogoInstagram /></div>
                </div>
            </div>
            <div className='rigt'>

            </div>
        </div>
    </div>
  )
}

export default Location
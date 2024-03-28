import React from 'react'
import { LiaLessThanSolid } from "react-icons/lia";
import Heading from '../atoms/Heading';

function Notificationoffer() {
    return (
        <div className='w-[990px] '>
            <div className="text flex items-center gap-[10px] py-[20px]">
                <div className='flex justify-center items-center bg-gray-800 w-[30px] h-[30px] rounded-[100%] text-white'><LiaLessThanSolid /></div>
                <Heading level='3'>New offer</Heading>
                <span className='text-[15px] flex items-center font-normal text-gray-800 text-opacity-50'>12/01/23</span>
            </div>
            <div className='offer'>
                <div className="offer-inner w-[990px] shadow-sm rounded-[20px] py-[20px] px-[20px]">
                    <div className='image relative flex items-center gap-[10px] pb-[20px]'>
                        <div>
                            <img src="/assits/assits/image/not.png" alt="" />
                            <div className='absolute top-[26px] left-[22px]'><img src="/assits/assits/svg/Group 86.svg" alt="" /></div>
                        </div>
                        <div><span className='text-[13px] font-normal'>Susy Gala</span></div>
                    </div>
                    <div>
                        <span className='text-[15px] font-normal text-gray-800 text-opacity-80'>Strap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watches Strap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watchesStrap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watchesStrap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watchesStrap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watches
                            Strap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watches</span>
                    </div>
                </div>
            </div>
            <div className="buuton bg-gray-800 mt-[10px] flex items-center justify-between w-[100px] h-[41px] rounded-[20px] float-end">
                <a className='none text-white pl-[23px]' href="#">Answer</a>
            </div>
        </div>
    )
}

export default Notificationoffer
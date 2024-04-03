import React from 'react'
import Heading from '../atoms/Heading'
import Submitment from './Submitment'
import CardSubmit from './CardSubmit'
function RolexDay() {
    return (
        <div className='flex gap-[20px]'>
            <div>
                <div className='flex w-[930px] justify-between'>
                    <div className='py-[15px]'><span className='text-[24px] font-normal text-gray-900'>Rolex, Daytona</span></div>
                    <div className='flex gap-[20px] items-center justify-center'>
                        <div><span className='text-[20px] font-semibold text-gray-900'>AED 5,500</span></div>
                        <div><span className='text-[13px] font-normal text-gray-900 text-opacity-50'>Negotiable</span></div>
                    </div>
                </div>
                  <div className='card-image'>
                    <div><img className='w-[940px]' src="/assits/assits/image/card.png" alt="" /></div>
                    <div className='flex flex-row gap-px]'>
                        <div><img src="/assits/assits/image/card 1.png" alt="" /></div>
                        <div><img src="/assits/assits/image/card 2.png" alt="" /></div>
                        <div><img src="/assits/assits/image/card 3.png" alt="" /></div>
                        <div><img src="/assits/assits/image/card 4.png" alt="" /></div>

                    </div>
                </div>
                <div className="description py-[20px]">
                    <div className='pb-[6px]'><span className='text-[20px] pb-[20px] font-medium text-gray-800'>Watch Description</span></div>
                    <div className='w-[930px]'><span className='text-[15px] font-light'>Strap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watches Strap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watchesStrap Up is a premier luxury watch concierge based in Dubai, offering a range</span></div>
                </div>
            </div>
            <div className='py-[70px]'><CardSubmit /></div>
        </div>
    )
}

export default RolexDay
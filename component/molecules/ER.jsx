import React from 'react'
import Heading from '../atoms/Heading'
import CustomImage from '../atoms/CustomImage'

function ER() {
  return (
    <div className='w-[960px]'>
        <div className='main flex w-[930px] justify-between items-center py-[15px]'>
            <div><span className='text-[24px] font-normal'>Rolex, Daytona</span></div>
            <div className='right flex flex-row gap-[20px]'> 
            <span className='text-[20px] font-semibold leading-[24.8px]'>AED 5,500</span>
            <span className='text-[13px] justify-center items-center flex font-normal leading-[16.5px]'>Negotiable</span>
            </div>
        </div>
        <div className='image'>
        <img className='W-[960px] h-[460px]' src="/assits/assits/image/card.png" alt="umair" />
        </div>
        <div className='flex flex-row gap-[15px]'>
            <CustomImage variant='third' src='/assits/assits/image/card 1.png'></CustomImage>
            <CustomImage variant='third' src='/assits/assits/image/card 2.png'></CustomImage>
            <CustomImage variant='third' src='/assits/assits/image/card 3.png'></CustomImage>
            <CustomImage variant='third' src='/assits/assits/image/card 4.png'></CustomImage>
        </div> 
        <div className='text py-[15px] flex flex-col gap-[8px]'>
        <div><span className='text-[20px] font-bold'>Watch Description</span></div>
        <div className='p'>
        <span className='text-[15px] font-light leading-[18.5px]'>Strap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watches Strap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watchesStrap Up is a premier luxury watch concierge based in Dubai, offering a range</span>
        </div>
        </div>
    </div>
  )
}

export default ER

import React from 'react'
import Listingdelte from '../molecules/Listingdelte'
import Listingoverlaymalicule from '../molecules/Listingoverlaymalicule'
import ListingBtn from '../molecules/ListingBtn'

function Listingbanned() {
    return (
        <div className=''>
         <div className='flex flex-col gap-[20px]'>
         <Listingdelte />
            <Listingoverlaymalicule />
            <ListingBtn />
            <div className='shadow-sm rounded-[20px] w-[990px] py-[20px] px-[20px] flex flex-col gap-[10px]'>
                <div className='flex items-center gap-[10px]'>
                    <img src="/assits/assits/image/not.png" alt="" />
                    <div><span className='text-[13px] font-normal'>Susy Gala</span></div>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <img src="/assits/assits/image/not.png" alt="" />
                    <div><span className='text-[13px] font-normal'>Oleg viktorov</span></div>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <img src="/assits/assits/image/not.png" alt="" />
                    <div><span className='text-[13px] font-normal'>Oleg viktorov</span></div>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <img src="/assits/assits/image/not.png" alt="" />
                    <div><span className='text-[13px] font-normal'>Oleg viktorov</span></div>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <img src="/assits/assits/image/not.png" alt="" />
                    <div><span className='text-[13px] font-normal'>Oleg viktorov</span></div>
                </div>

            </div>
         </div>
       
        </div>
    )
}

export default Listingbanned
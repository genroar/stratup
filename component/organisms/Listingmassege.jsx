import React from 'react'
import Listingdelte from '../molecules/Listingdelte'
import Listingoverlaymalicule from '../molecules/Listingoverlaymalicule'
import ListingBtn from '../molecules/ListingBtn'

function Listingmassege() {
    return (
        <div>
                <Listingdelte />
            <div className='flex flex-col gap-[20px]'>
                <Listingoverlaymalicule />
                <ListingBtn />
                <div className='w-[990px] py-[20px] px-[20px] shadow-sm rounded-[20px]'>
                    <div className='flex  gap-[100px]'>
                        <div className='image relative flex items-center gap-[10px] pb-[20px]'>
                            <div>
                                <img src="/assits/assits/image/not.png" alt="" />
                                <div className='absolute top-[26px] left-[22px]'><img src="/assits/assits/svg/Group 86.svg" alt="" /></div>
                            </div>
                            <div><span className='text-[13px] font-normal'>Susy Gala</span></div>
                        </div>
                        <div className='py-[10px]'><span className='text-[13px] font-medium '>Hi! How are u!</span></div>
                    </div>
                    <div className='flex  gap-[100px]'>
                        <div className='image relative flex items-center gap-[10px] pb-[20px]'>
                            <div>
                                <img src="/assits/assits/image/not.png" alt="" />
                                <div className='absolute top-[26px] left-[22px]'><img src="/assits/assits/svg/Group 86.svg" alt="" /></div>
                            </div>
                            <div><span className='text-[13px] font-normal'>Susy Gala</span></div>
                        </div>
                        <div className='py-[10px]'><span className='text-[13px] font-medium '>Hi! How are u!</span></div>
                    </div>
                    <div className='flex  gap-[100px]'>
                        <div className='image relative flex items-center gap-[10px] pb-[20px]'>
                            <div>
                                <img src="/assits/assits/image/not.png" alt="" />
                                <div className='absolute top-[26px] left-[22px]'><img src="/assits/assits/svg/Group 86.svg" alt="" /></div>
                            </div>
                            <div><span className='text-[13px] font-normal'>Susy Gala</span></div>
                        </div>
                        <div className='py-[10px]'><span className='text-[13px] font-medium '>Hi! How are u!</span></div>
                    </div>
                    <div className='flex  gap-[100px]'>
                        <div className='image relative flex items-center gap-[10px] pb-[20px]'>
                            <div>
                                <img src="/assits/assits/image/not.png" alt="" />
                                <div className='absolute top-[26px] left-[22px]'><img src="/assits/assits/svg/Group 86.svg" alt="" /></div>
                            </div>
                            <div><span className='text-[13px] font-normal'>Susy Gala</span></div>
                        </div>
                        <div className='py-[10px]'><span className='text-[13px] font-medium '>Hi! How are u!</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listingmassege
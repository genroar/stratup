import React from 'react'
import Heading from '../atoms/Heading'
import CustomImage from '../atoms/CustomImage'
import Button from '../atoms/Button'
import Other from '../atoms/Other'

function WatchBrand() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="flex shadow-sm w-[1195px] justify-center items-center py-[50px] relative top-[-45px] rounded-br-[40px] rounded-bl-[40px] rounded-tr-[40px]">
                <div className='w-[360px]   flex flex-col text-center gap-[25px] '>
                    <div>
                        <Heading level='4'>Watch brand</Heading>
                        <Heading level='6'>What is the brand of your watch?</Heading>
                    </div>
                    <div className=' flex flex-col gap-[15px]'>
                        <p className='text-[13px] font-medium text-gray-900 bg-opacity-80'>Select an option below</p>
                        <div className='w-[360px] flex flex-wrap justify-between gap-[15px]'>
                            <div className='w-[170px] h-[70px] ring-1 ring-black ring-opacity-10 flex justify-center items-center rounded-[20px]'>
                                <button> <CustomImage variant='six' src='./assits/assits/image/image 7.png' alt='image' /></button>
                            </div>
                            <div className='w-[170px] h-[70px] ring-1 ring-black ring-opacity-10 flex justify-center items-center rounded-[20px]'>
                                <button> <CustomImage variant='six' src='/assits/assits/image/sell brand 2.png' alt='image' /></button>
                            </div>
                            <div className='w-[170px] h-[70px] ring-1 ring-black ring-opacity-10 flex justify-center items-center rounded-[20px]'>
                                <button> <CustomImage variant='six' src='/assits/assits/image/sell brand 2.png' alt='image' /></button>
                            </div>
                            <div className='w-[170px] h-[70px] ring-1 ring-black ring-opacity-10 flex justify-center items-center rounded-[20px]'>
                                <button> <CustomImage variant='six' src='/assits/assits/image/image 7.png' alt='image' /></button>
                            </div>
                            <div className='w-[170px] h-[70px] ring-1 ring-black ring-opacity-10 flex justify-center items-center rounded-[20px]'>
                                <button> <CustomImage variant='six' src='/assits/assits/image/image 7.png' alt='image' /></button>
                            </div>
                            <div className='w-[170px] h-[70px] ring-1 ring-black ring-opacity-10 flex justify-center items-center rounded-[20px]'>
                                <button> <CustomImage variant='six' src='/assits/assits/image/sell brand 2.png' alt='image' /></button>
                            </div>
                            <div className='w-[170px] h-[70px] ring-1 ring-black ring-opacity-10 flex justify-center items-center rounded-[20px]'>
                                <button>  <CustomImage variant='six' src='/assits/assits/image/image 7.png' alt='image' /></button>
                            </div>
                            <div className='w-[170px] h-[70px] ring-1 ring-black ring-opacity-10 flex justify-center items-center rounded-[20px]'>
                                <button>  <CustomImage variant='six' src='/assits/assits/image/image 7.png' alt='image' /></button>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <Other parent='Other' child='More' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchBrand;
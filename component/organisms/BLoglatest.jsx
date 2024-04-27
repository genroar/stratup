import React from 'react'
import Heading from '../atoms/Heading'
import { useRouter } from 'next/router'

function BLoglatest() {
    let router = useRouter();
    const handleClick = () => {
        router.push('/news');
    };
    return (

        <div>
            <div className='py-[50px]'>
                <Heading level='1'>Latest posts</Heading>
            </div>
            <div className=' grid grid-cols-4 flex-wrap m-auto gap-[20px]'>
                <div className='bottom cursor-pointer relative'>
                    <div className='image block' onClick={handleClick}>
                        <img src="/assits/assits/image/blog latest 1.png" className='w-[100%]' alt="" />
                    </div>
                    <div className=' absolute bottom-[10px] text-white left-[20px]'>
                        <span className='text-[32px] font-medium '>Title</span>
                    </div>
                </div>
                <div className='bottom cursor-pointer relative'>
                    <div className='image block' onClick={handleClick}>
                        <img src="/assits/assits/image/blog latest 2.png" className='w-[100%]' alt="" />
                    </div>
                    <div className=' absolute bottom-[10px] text-white left-[20px]'>
                        <span className='text-[32px] font-medium '>Title</span>
                    </div>
                </div>
                <div className='bottom cursor-pointer relative'>
                    <div className='image block' onClick={handleClick}>
                        <img src="/assits/assits/image/blog latest 3.png" className='w-[100%]' alt="" />
                    </div>
                    <div className=' absolute bottom-[10px] text-white left-[20px]'>
                        <span className='text-[32px] font-medium '>Title</span>
                    </div>
                </div>
                <div className='bottom cursor-pointer relative'>
                    <div className='image block' onClick={handleClick}>
                        <img src="/assits/assits/image/blog latest 4.png" className='w-[100%]' alt="" />
                    </div>
                    <div className=' absolute bottom-[10px] text-white left-[20px]'>
                        <span className='text-[32px] font-medium '>Title</span>
                    </div>
                </div>
                <div className='bottom cursor-pointer relative'>
                    <div className='image block' onClick={handleClick}>
                        <img src="/assits/assits/image/blog latest 5.png" className='w-[100%]' alt="" />
                    </div>
                    <div className=' absolute bottom-[10px] text-white left-[20px]'>
                        <span className='text-[32px] font-medium '>Title</span>
                    </div>
                </div>
                <div className='bottom cursor-pointer relative' onClick={handleClick}>
                    <div className='image block'>
                        <img src="/assits/assits/image/blog latest 6.png" className='w-[100%]' alt="" />
                    </div>
                    <div className=' absolute bottom-[10px] text-white left-[20px]'>
                        <span className='text-[32px] font-medium '>Title</span>
                    </div>
                </div>
                <div className='bottom cursor-pointer relative'>
                    <div className='image block' onClick={handleClick}>
                        <img src="/assits/assits/image/blog latest 7.png" className='w-[100%]' alt="" />
                    </div>
                    <div className=' absolute bottom-[10px] text-white left-[20px]'>
                        <span className='text-[32px] font-medium '>Title</span>
                    </div>
                </div>
                <div className='bottom cursor-pointer relative'>
                    <div className='image block' onClick={handleClick}>
                        <img src="/assits/assits/image/blog latest 7.png" className='w-[100%]' alt="" />
                    </div>
                    <div className=' absolute bottom-[10px] text-white left-[20px]'>
                        <span className='text-[32px] font-medium '>Title</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BLoglatest
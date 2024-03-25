import React from 'react'
import Heading from '../atoms/Heading'
import Other from '../atoms/Other'

function Modelcountry() {
  return (
    <div className=' flex flex-col justify-center items-center gap-[20px]'>
        <div className='text flex flex-col text-center'>
        <Heading level='4'>Your country</Heading>
        <span className='text-[15px] font-normal'>Where are you located?</span>
        <span className='text-[13px] font-normal text-gray-900'>Select an option below</span>
        </div>
        <div className='image w-[360px] flex flex-wrap flex-row gap-[20px] justify-center items-center'>
        <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" />
        <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" />
        <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" />
        <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" />
        <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" />
        <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" />
        <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" />
        <img className='w-[170px] h-[70px]' src="/assits/assits/image/UAE1.png" alt="" />
        </div>
        <div className='button'>
        <Other parent='Other' child='umair'></Other>
        </div>
    </div>
  )
}

export default Modelcountry



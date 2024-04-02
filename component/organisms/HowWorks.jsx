import React from 'react'
import Worksinput from '../molecules/Worksinput'
import Head from 'next/head'
import Heading from '../atoms/Heading'
import WorksButtons from '../molecules/WorksButtons'
import Filterdrop from '../atoms/Filterdrop'

function HowWorks() {
  return (
    <div className='flex flex-col bg-gray-200 '>
    <div className='flex flex-col items-center justify-center gap-[10px] py-[150px]'>
    <div className='text-center'><Heading level='1'>Find out how much your watch is worth</Heading></div>
        <Worksinput/>
    </div>
<div className="pb-[100px]">
<div className='rounded-[50px] bg-white shadow-lg w-[1300px] m-auto'>
     <div className='flex flex-col items-center work justify-center py-[20px] gap-[20px] border-b-2 border-gray-500'>
     <div className='text-center'><Heading level='1'>How it works</Heading></div>
      <div className='pb-[20px]'><WorksButtons/></div>
     </div>
     <div className='flex w-[1300px] gap-[50px] px-[20px] py-[20px]'>
      <div><img className='' src="/assits/assits/image/work.png" alt="" /></div>
      <div className="text flex flex-col justify-center">
        <div className="items-center">
          <Heading level='1'>Overview</Heading>
        </div>
        <div className='p w-[682px] flex flex-col gap-[10px]'>
          <span className='text-[20px] font-thin text-gray-900'>Submit a free listing with ease. Fill in your watch details and directly get offers from interested individuals.Submit a free listing with ease. Fill in your watch details and directly get offers from interested individuals.</span>
          <span className='text-[20px] font-thin text-gray-900'>Submit a free listing with ease. Fill in your watch details and directly get offers from interested individuals.Submit a free listing with ease. Fill in your watch details and directly get offers from interested individuals.</span>
        </div>
      </div>
     </div>
    </div>
</div>
    </div>
  )
}

export default HowWorks
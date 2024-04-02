import React from 'react';
import Heading from '../atoms/Heading';

function News() {
  return (
    <div className='new'>
          <div className='main flex justify-between px-[48px] py-[50px] '>
        <div className='left'> 
           <div className='text flex flex-col'>
           <div>
                <div><span className='text-[20px] font-medium text-gray-800 text-opacity-50'>12/01/24</span></div>
                <div><span className='text-[36px] font-medium text-gray-900'>Title</span></div>
            </div>
            <div className='w-[645px] border-b-2 py-[10px]  border-gray-500'><span className='text-[20px] font-normal text-gray-800'>Topic #1</span></div>
            <div className='w-[645px] flex flex-col gap-[10px]'>
                <span className='text-[15px] font-normal  text-gray-800 text-opacity-80'>Our company guarantees comfortable cooperation, high-quality teaching and excellent experts our company guarantees comfortable cooperation, high-quality teaching and excellent experts oasd ur company Our company guarantees comfortable cooperation, high-quality teaching and excellent experts our company guarantees comfortable cooperation, high-quality teaching and excellent experts oasd ur company</span>
                <span className='text-[15px] font-normal text-gray-800 text-opacity-80'>Our company guarantees comfortable cooperation, high-quality teaching and excellent experts our company guarantees comfortable cooperation, high-quality teaching and excellent experts oasd ur company Our company guarantees comfortable cooperation, high-quality teaching and excellent experts our company guarantees comfortable cooperation, high-quality teaching and excellent experts oasd ur company </span>
            </div>
           </div>
        </div>
        <div className="right">
            <div><img className='w-[580px] h-[425px]' src="/assits/assits/image/new.png" alt="" /></div>
        </div>
    </div>
    <div className='UNDER flex  px-[45px] gap-[40px]'>
        <div className=''>
            <div className='border-b-2 py-[10px]  border-gray-500 w-[630px]'><span className='text-[20px] font-medium text-gray-800'>Topic #2</span></div>
            <div className='mt-[10px]'><span className='text-[15px]  font-normal text-gray-800 text-opacity-80'>Our company guarantees comfortable cooperation, high-quality teaching and <br/> excellent experts our company guarantees comfortable cooperation, high-quality <br/> teaching and excellent experts oasd ur company</span></div>
        </div>
        <div className=''>
            <div className='border-b-2 py-[10px]  border-gray-500 w-[580px]'><span className='text-[20px] font-medium text-gray-800'>Topic #3</span></div>
            <div className='mt-[10px] pb-[50px]'><span className='text-[15px] font-normal text-gray-800 text-opacity-80'>Our company guarantees comfortable cooperation, high-quality teaching and <br/> excellent experts our company guarantees comfortable cooperation, high-quality <br/> teaching and  excellent experts oasd ur company</span></div>
        </div>
    </div>
    </div>
  );
}

export default News;

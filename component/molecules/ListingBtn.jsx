import React from 'react'
import Button from '../atoms/Button'

function ListingBtn() {
  return (
    <div className='btn'>
        <div className='btn-inner flex w-[990px] shadow-sm rounded-[20px] py-[10px] px-[10px]'>
            <div className='w-[87px] h-[35px] rounded-[20px] bg-gray-700 text-[white] flex justify-center items-center'><Button>Analysis</Button></div>
            <div className='w-[87px] h-[35px] rounded-[20px] flex justify-center items-center'><Button>Messages</Button></div>
            <div className='w-[87px] h-[35px] rounded-[20px]  flex justify-center items-center'><Button>Offers</Button></div>
        </div>
    </div>
  )
}

export default ListingBtn
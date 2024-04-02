import React from 'react'
import Listingsearch from '../molecules/Listingsearch'
import Heading from '../atoms/Heading'
import Button from '../atoms/Button'
import Product from '../molecules/Product'

function BuyHome() {
  return (
    <div className=' rounded-tr-[40px]  shadow-sm rounded-br-[40px] rounded-bl-[40px] py-[20px]' >
        <div className='px-[15px]'>
            <Listingsearch />
          </div>
          <div className="w-[1180px] flex flex-col gap-[30px]">
            <div className="flex justify-between pt-[10px] " >
              <div className='pl-[20px]'><Heading level="1">Recent listings</Heading></div>
              <Button variant='oval' >View All Listing</Button>
            </div>
            <div>
              <div className="flex gap-[25px] w-[1200px] justify-center items-center flex-wrap" >
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </div>
          </div>
    </div>
  )
}

export default BuyHome
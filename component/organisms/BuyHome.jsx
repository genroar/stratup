import React from 'react'
import Listingsearch from '../molecules/Listingsearch'
import Heading from '../atoms/Heading'
import Button from '../atoms/Button'
import Product from '../molecules/Product'

function BuyHome() {
  return (
    <div className=' border-2 rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px] py-[20px]' >
        <div>
            <Listingsearch />
          </div>
          <div className="w-[1170px] flex flex-col gap-[30px]">
            <div className="flex justify-between pt-[10px]" >
              <Heading lbevel="1">Recent listings</Heading>
              <Button variant='oval' >View All Listing</Button>
            </div>
            <div>
              <div className="flex gap-[30px] flex-wrap" >
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
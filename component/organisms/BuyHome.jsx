import React from 'react'
import Listingsearch from '../molecules/Listingsearch'
import Heading from '../atoms/Heading'
import Button from '../atoms/Button'
import Product from '../molecules/Product'

function BuyHome() {
  return (
<<<<<<< HEAD
    <div className='p-[20px] product_tab rounded-tr-[40px]  shadow-sm rounded-br-[40px] rounded-bl-[40px]' >
        <div className=''>
            <Listingsearch  shadowClass='search_shadow'/>
=======
    <div className=' rounded-tr-[40px] shadow-top shadow-sm rounded-br-[40px] rounded-bl-[40px] py-[20px]' >
        <div className='px-[15px]'>
            <Listingsearch />
>>>>>>> fc298d79642f07bd59211e6bcda80187166603be
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="flex justify-between pt-[20px] items:center" >
              <div className=''><Heading level="1">Recent listings</Heading></div>
              <Button variant='oval' >View All Listing</Button>
            </div>
            <div>
              <div className="flex gap-[30px] items-center flex-wrap" >
              <Product  productClass='product_cols'/>
              <Product  productClass='product_cols'/>
              <Product  productClass='product_cols'/>
              <Product  productClass='product_cols'/>
              <Product  productClass='product_cols'/>
              <Product  productClass='product_cols'/>
              <Product  productClass='product_cols'/>
                <Product  productClass='product_cols'/>
              </div>
            </div>
          </div>
    </div>
  )
}

export default BuyHome
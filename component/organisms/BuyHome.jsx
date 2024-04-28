import React from 'react';
import Listingsearch from '../molecules/Listingsearch';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Product from '../molecules/Product';

function BuyHome() {
  return (
    <div className=' rounded-tr-[40px] shadow-top shadow-sm rounded-br-[40px] rounded-bl-[40px] py-[20px]' >
        <div className='px-[15px]'>
            <Listingsearch />
          </div>
          <div className="flex flex-col px-[20px] gap-[30px]">
            <div className="flex justify-between pt-[20px] items:center" >
              <div><Heading level="1">Recent listings</Heading></div>
              <Button variant='oval' >View All Listing</Button>
            </div>
            <div>
              <div className="flex gap-[30px] justify-between items-center flex-wrap" >
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
  );
}

export default BuyHome

import React from 'react';
import Listingsearch from '../molecules/Listingsearch';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Product from '../molecules/Product';

function BuyHome() {
  return (
    <div className='p-[20px]  rounded-tr-[40px] shadow-top shadow-sm rounded-br-[40px] rounded-bl-[40px] py-[20px]'>
      <div className=''>
        <Listingsearch shadowClass={`shadow-top rounded-[20px]`}  />
      </div>
      <div className="flex flex-col gap-[30px]">
        <div className="flex justify-between pt-[20px] items:center">
          <div><Heading level="1">Recent listings</Heading></div>
          <Button variant='oval'>View All Listing</Button>
        </div>
        <div className="flex gap-[30px] items-center flex-wrap">
          <Product productClass='product_cols' />
          <Product productClass='product_cols' />
          <Product productClass='product_cols' />
          <Product productClass='product_cols' />
          <Product productClass='product_cols' />
          <Product productClass='product_cols' />
          <Product productClass='product_cols' />
          <Product productClass='product_cols' />
        </div>
      </div>
    </div>
  );
}

export default BuyHome;

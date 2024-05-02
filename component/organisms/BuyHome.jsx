import React from 'react';
import Listingsearch from '../molecules/Listingsearch';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Product from '../molecules/Product';

function BuyHome() {
  return (
    <div className='mt-[-55px] rounded-tr-[40px] py-[20px] px-[20px] xl:shadow-top lg:shadow-top md:shadow-top  rounded-br-[40px] rounded-bl-[40px]' >
        <div className='shadow-search rounded-[20px]'>
            <Listingsearch />
          </div>
          <div className="flex flex-col px-[20  px] gap-[30px]">
            <div className="flex justify-between pt-[20px] items:center" >
              <div><Heading level="2">Recent listings</Heading></div>
              <Button variant='oval' >View All Listing</Button>
            </div>
            <div>
<<<<<<< HEAD
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-[30px] justify-center items-center" >
                <div>
                  <Product  productClass='product_cols'/>
                </div>
                <div>
                  <Product  productClass='product_cols'/>
                </div>
                <div>
                  <Product  productClass='product_cols'/>
                </div>
                <div>
                  <Product  productClass='product_cols'/>
                </div>
                <div>
                  <Product  productClass='product_cols'/>
                </div>
                <div>
                  <Product  productClass='product_cols'/>
                </div>
                <div>
                  <Product  productClass='product_cols'/>
                </div>
                <div>
                  <Product  productClass='product_cols'/>
                </div>
                
=======
              <div className="flex gap-[30px] justify-between items-center flex-wrap" >
              <Product  productClass='product_cols'/>
              <Product  productClass='product_cols'/>
              <Product  productClass='product_cols'/>
              <Product  productClass='product_cols'/>
              <Product  productClass='product_cols'/>
              <Product  productClass='product_cols'/>
              <Product  productClass='product_cols'/>
              <Product  productClass='product_cols'/>
>>>>>>> origin/CodeUpdate
              </div>
            </div>
          </div>

    </div>
  );
}

export default BuyHome

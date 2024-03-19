import React from "react";
import ListingButton from "../molecules/ListingButton";
import Listingsearch from "../molecules/Listingsearch";
import Heading from "../atoms/Heading";
import Product from "../molecules/Product";
import Button from "../atoms/Button";

function Listing() {
  return (
    <div className=" margin-auto">
      <ListingButton />
      <div className=" h-[1005px] w-[1200px] border-2 rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px]  py-[20px]  ">
        <div className="  m-auto w-[1170px] flex flex-col gap-[30px]  ">
          <div>
            <Listingsearch  />
          </div>
          <div className="w-[1170px] flex flex-col gap-[30px]">
            <div className="flex justify-between" >
              <Heading lbevel="1">Recent listings</Heading>
              <Button variant='oval' >View All Listing</Button>
            </div>
            <div className=" flex flex-wrap gap-[30px] ">
              <div className="flex gap-[30px]" >
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
              <div className="flex  gap-[30px]" >
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;

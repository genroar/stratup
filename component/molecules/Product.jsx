import React from "react";
import CustomImage from "../atoms/CustomImage";
import Heading from "../atoms/Heading";
import '../assets/css/product.css'

function Product({productClass}) {
  return (
      <div className={`rounded-[25px] relative ${productClass}`}>
        <div className="image-outer w-full relative h-[250px]  ">
          <div>
            <CustomImage
              src="/assits/assits/image/home recent 1.png"
              variant="prime"
            ></CustomImage>
          </div>
          <div className="absolute top-[8px] left-[8px]  ">
            <CustomImage src="/assits/assits/image/UAE.png"></CustomImage>
          </div>
        </div>
        <div className="text-outer flex flex-col gap-[8px] justify-center divide-y  bg-lightGray rounded-br-[25px] rounded-bl-[25px] px-[15px] py-[15px]">
          <div className="">
            <Heading level="5">Rolex</Heading>
          </div>
          <div className="pt-[5px]">
            <Heading level="6">Datejust</Heading>
          </div>
          <div className="flex justify-between pt-[5px]" >
            <p className="text-[14px] font-normal ">2017</p>
            <p className="text-[14px] font-normal text-semiTransparentGray ">New</p>
          </div>
          <div className="flex justify-between pt-[5px]" >
            <p className="text-[14px] font-semibold ">AED 5,500</p>
            <p className="text-[14px] font-normal text-semiTransparentGray ">Negotiatable</p>
          </div>
        </div>
      </div>
  );
}

export default Product;

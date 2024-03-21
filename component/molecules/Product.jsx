import React from "react";
import CustomImage from "../atoms/CustomImage";
import Heading from "../atoms/Heading";

function Product() {
  return (
      <div className="w-[270px] h-[398px]  rounded-[25px] ">
        <div className="image-outer relative h-[250px]  ">
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
        <div className="text-outer flex flex-col gap-[8px] justify-center divide-y  bg-gray-100 rounded-br-[25px] rounded-bl-[25px] px-[15px] py-[10px] w-[270px] h-[148px] ">
          <div>
            <Heading level="5">Rolex</Heading>
          </div>
          <div>
            <Heading level="6">Datejust</Heading>
          </div>
          <div className="flex justify-between" >
            <p className="text-[14px] font-normal ">2017</p>
            <p className="text-[14px] font-normal text-gray-800 ">New</p>
          </div>
          <div className="flex justify-between" >
            <p className="text-[14px] font-semibold ">AED 5,500</p>
            <p className="text-[14px] font-normal text-gray-800 ">Negotiatable</p>
          </div>
        </div>
      </div>
  );
}

export default Product;

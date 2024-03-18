import React from "react";
import CustomImage from "../atoms/CustomImage";
import Heading from "../atoms/Heading";

function Product() {
  return (
    <div className="w-[320px]">
      <div>
        <div className="relative">
          <CustomImage 
            variant="second"
            src="/assits/assits/image/home recent 1.png"
          ></CustomImage>
        </div>
        <div className="absolute top-[5px] left-[5px]">
          <CustomImage
            variant="five"
            src="/assits/assits/image/UAE.png"
          ></CustomImage>
        </div>
      </div>
      <div className="divide-y w-[320px] px-[15px] py-[10px] rounded-br-[20px] rounded-bl-[20px] bg-gray-100 ">
        <div className=" py-[10px]">
          <Heading level="5">Rolex</Heading>
        </div>
        <div className=" py-[10px]">
          <Heading level="6">Datejust </Heading>
        </div>
        <div className="flex justify-between">
          <span className="text-[14.6px] font-normal text-spanGray py-[10px]">2017</span>
          <span className="text-[14.6px] font-normal text-gray-800 text-opacity-50 py-[10px]">
            New
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[14.6px] font-semibold text-gray-800  py-[10px]">
            AED 5,500
          </span>
          <span className="text-[14.6px] font-normal text-gray-800 text-opacity-50 py-[10px]">
            Negotiable
          </span>
        </div>
      </div>
    </div>
  );
}

export default Product;

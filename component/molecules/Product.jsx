import React from "react";
import CustomImage from "../atoms/CustomImage";
import Heading from "../atoms/Heading";
import { useRouter } from 'next/router';

function Product({ productClass, src, FlagSrc, ProductTitle, Date, Year, YearStatus, ProductPrice, ProductCategory }) {
  const router = useRouter();

  const handleProductClick = () => {
    router.push('/card');
  }

  return (
    <div className={`rounded-[25px] relative ${productClass}`} onClick={handleProductClick}>
      <div className="image-outer w-full relative h-[250px]  ">
        <div>
          <CustomImage
            src={src}
            variant="prime"
          ></CustomImage>
        </div>
        <div className="absolute top-[8px] left-[8px]  ">
          <CustomImage src={FlagSrc}></CustomImage>
        </div>
      </div>
      <div className="text-outer flex flex-col gap-[8px] justify-center divide-y  bg-lightGray rounded-br-[25px] rounded-bl-[25px] px-[15px] py-[15px]">
        <div className="">
          <Heading level="5">
            {ProductTitle}
          </Heading>
        </div>
        <div className="pt-[5px]">
          <Heading level="6">{Date}</Heading>
        </div>
        <div className="flex justify-between pt-[5px]" >
          <p className="text-[14px] font-normal ">{Year}</p>
          <p className="text-[14px] font-normal text-semiTransparentGray ">{YearStatus}</p>
        </div>
        <div className="flex justify-between pt-[5px]" >
          <p className="text-[14px] font-semibold customtext ">{ProductPrice}</p>
          <p className="text-[14px] font-normal text-semiTransparentGray ">{ProductCategory}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;

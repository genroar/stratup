import React from "react";
import Heading from "../atoms/Heading";

function Banner() {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 xl:gap-[20px] lg:gap-[20px] md:gap-[20px] sm:gap-[40px] gap-[40px] xl:pt-[70px] lg:pt-[100px] md:pt-[80px] sm:pt-[50px] pt-[35px] pb-[40px] items-center justify-between main_bnr ">
        <div className="flex flex-col gap-[20px]">
          <h1 className="xl:text-[60px] lg:text-[55px] md:text-[60px] sm:text-[55px] text-[32px]  xl:leading-[60px] leading-[35px] sm:leading-[50px] md:leading-[60px] font-medium text-customGray1">
            Your Portal to <br /> Luxury Timepieces
          </h1>
          <Heading level="6">
            Facilitating the sale and purchase of luxury watches between
            individuals
          </Heading>
        </div>
        <div className="xl:mr-[-30px] lg-[-30px] md:mr-[-30px] sm-[0px] mr-[0px]" >
          <img src="/assits/assits/image/home image 1.png" alt="" />
        </div>
    </div>
  );
}

export default Banner;

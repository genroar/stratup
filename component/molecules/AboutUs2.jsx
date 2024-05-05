import React from "react";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import FAQdrop1 from "../atoms/FAQdrop1";

function AboutUs2() {
  return (
    <div className="rounded flex flex-col  rounded-tr-[40px] rounded-tl-[40px] pt-[35px] pb-[30px]  " >
      <div className="about  px-[30px] xl:gap-[74px] lg:gap-[74px] md:gap-[40px] sm:gap-[20px] gap-[20px] items-center grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        <div className="  ">
          <img className="w-full" src="/assits/assits/image/about2.png" alt="" />
        </div>
        <div className="gap-[20px] raltive flex flex-col ">
          <Heading level="2">About us</Heading>
          <div className=" flex flex-col gap-[15px] ">
          <span className="xl:text-[20px] lg:text-[20px] md:text-[17px] text-gray-700 sm:text-[15px] text-[14px] font-thin text-overtext">
            Strap Up is a premier luxury watch concierge based in Dubai, offering a range of  services including buying, selling, sourcing, and consigning high-end watches Strap  Up is a
            </span>
            <span className="xl:text-[20px] lg:text-[20px] md:text-[17px] text-gray-700 sm:text-[15px] text-[14px] font-thin text-overtext">
            Strap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watches Strap  Up is a
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutUs2;

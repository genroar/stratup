import React from "react";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import FAQdrop1 from "../atoms/FAQdrop1";

function AboutUs2() {
  return (
    <div className="rounded flex flex-col  rounded-tr-[40px] rounded-tl-[40px] pt-[35px] pb-[30px]  " >
      <div className="about  px-[30px] xl:gap-[74px] lg:gap-[74px] md:gap-[40px] sm:gap-[20px] gap-[20px] items-center grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        <div className="  ">
          <img className="w-full" src="/assits/assits/image/home about us.png" alt="" />
        </div>
        <div className="gap-[20px] raltive flex flex-col ">
          <Heading level="2">About us</Heading>
          <div className=" flex flex-col gap-[15px] ">
            <Heading level="5">
            Strap Up is a premier luxury watch concierge based in Dubai, offering a range of  services including buying, selling, sourcing, and consigning high-end watches Strap  Up is a
            </Heading>
            <Heading level="5">
            Strap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watches Strap  Up is a
            </Heading>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutUs2;

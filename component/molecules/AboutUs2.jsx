import React from "react";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import FAQdrop1 from "../atoms/FAQdrop1";

function AboutUs2() {
  return (
    <div className="rounded flex flex-col gap-[60px]  rounded-tr-[40px] rounded-tl-[40px] pt-[35px] pb-[30px]  " >
      <div className="about flex px-[30px] gap-[74px] items-center ">
        <div className=" w-[600px] ">
          <img src="/assits/assits/image/home about us.png" alt="" />
        </div>
        <div className="gap-[20px] raltive flex flex-col ">
          <Heading level="2">About us</Heading>
          <div className=" flex flex-col gap-[15px] ">
            <Heading level="5">
            Strap Up is a premier luxury watch concierge based in Dubai, offering a range of  <br/>services including buying, selling, sourcing, and consigning high-end watches Strap  Up is a
            </Heading>
            <Heading level="5">
            Strap Up is a premier luxury watch concierge based in Dubai, offering a range of <br/> services including buying, selling, sourcing, and consigning high-end watches Strap <br/> Up is a
            </Heading>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutUs2;

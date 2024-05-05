import React from "react";
import BLog from "../organisms/BLog";
import Container from "../atoms/Container";
import Heading from "../atoms/Heading";
import BLoglatest from "../organisms/BLoglatest";

function  Blogtemp() {


  return (
    <div className="py-10">
      <Container>
        <div className="pb-6">
          <span className="xl:text-[36px] lg:text-[36px] md:text-[32px] sm:text-[32px] text-[32px] font-medium  text-customGray">Blog</span>
        </div>
        <BLog />
        <BLoglatest />
      </Container>
    </div>
  );
}

export default Blogtemp;

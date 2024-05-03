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
          <Heading level="1">Blog</Heading>
        </div>
        <BLog />
        <BLoglatest />
      </Container>
    </div>
  );
}

export default Blogtemp;

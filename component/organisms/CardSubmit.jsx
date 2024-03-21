import React from "react";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import SourceSpan from "../atoms/SourceSpan";

function CardSubmit() {
  return (
    <div className=" flex flex-col gap-[30px] ">
      <div className="buttons flex flex-col w-[340px] gap-[10px] ">
        <Button variant="primary">Submit offer</Button>
        <div className="inner flex gap-[40px] ">
          <Button variant="oval">Send a message</Button>
          <Button variant="oval">Call</Button>
        </div>
      </div>
      <div className="info w-[340px]   ">
        <div className="pb-[15px]">
          <Heading level="4">Info</Heading>
        </div>
        <div className="shadow px-[18px] divide-y rounded-[15px] ">
          <div className="flex py-[7px] gap-[85px]">
            <SourceSpan variant="primary">Brand</SourceSpan>
            <SourceSpan variant="secondary">Rolex</SourceSpan>
          </div>
          <div className="flex py-[7px] gap-[80px]">
            <SourceSpan variant="primary">Model</SourceSpan>
            <SourceSpan variant="secondary">Daytona</SourceSpan>
          </div>
          <div className="flex py-[7px] gap-[96px]">
            <SourceSpan variant="primary">Year</SourceSpan>
            <SourceSpan variant="secondary">2022</SourceSpan>
          </div>
          <div className="flex py-[7px] gap-[55px]">
            <SourceSpan variant="primary">Condition</SourceSpan>
            <SourceSpan variant="secondary">Brand New</SourceSpan>
          </div>
          <div className="flex py-[7px] gap-[30px]">
            <SourceSpan variant="primary">Case material</SourceSpan>
            <SourceSpan variant="secondary">Carbon</SourceSpan>
          </div>
          <div className="flex py-[7px] gap-[30px]">
            <SourceSpan variant="primary">Case Diametr</SourceSpan>
            <SourceSpan variant="secondary">35mm</SourceSpan>
          </div>
          <div className="flex py-[7px] gap-[30px]">
            <SourceSpan variant="primary">Box & Papers</SourceSpan>
            <SourceSpan variant="secondary">Box & Papers </SourceSpan>
          </div>
        </div>
      </div>
      <div className="location-outer flex flex-col gap-[20px] w-[340px] ">
        <div className="location">
          <div className="pb-[15px]" >
            <Heading level="4">Location</Heading>
          </div>
          <div className="shadow rounded-[15px] px-[18px] ">
            <div className="flex py-[7px] gap-[85px]">
              <SourceSpan variant="primary">Brand</SourceSpan>
              <SourceSpan variant="secondary">Rolex</SourceSpan>
            </div>
          </div>
        </div>
        <div className="  location">
          <div className="pb-[21px] " >
            <Heading level="4">Menaged By</Heading>
          </div>
          <div className="w-[340px] flex items-center justify-center  " >
            <div className="  w-[138px] h-[23px] ">
              <img src="/assits/assits/image/header-logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSubmit;

import React from "react";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import SourceSpan from "../atoms/SourceSpan";
import { useRouter } from 'next/router';

function CardSubmit() {
  const router = useRouter();

  const handleProductClick = () => {
    router.push('/submintform');
  }

  return (
    <div className="flex flex-col gap-[20px] w-full">
      <div className="buttons flex flex-col w-[360px] gap-[10px] ">
        <div className="" onClick={handleProductClick}>
          <Button variant="primary">Submit offer</Button>
        </div>
        <div className="inner flex gap-[20px] ">
          <button className="bg-white h-[40px] border-[1px] cursor-pointer border-black border-opacity-[10px] text-center w-[175px] rounded-[40px] text-[16px] font-normal  text-buttonGray">Send amessage</button>
          <button className="bg-white h-[40px] border-[1px] cursor-pointer border-black border-opacity-[10px] text-center w-[175px] rounded-[40px] text-[16px] font-normal  text-buttonGray">Call</button>
        </div>
      </div>
      <div className="info w-full ">
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
      <div className="location-outer flex flex-col gap-[10px] w-[360px] ">
        <div className="location">
          <div className="pb-[15px]" >
            <Heading level="4">Location</Heading>
          </div>
          <div className="shadow rounded-[15px] px-[18px] divide-y">
            <div className="flex py-[7px] gap-[85px]">
              <SourceSpan variant="primary">Brand</SourceSpan>
              <SourceSpan variant="secondary">Rolex</SourceSpan>
            </div>
          </div>
        </div>
        <div className="location">
          <div className="pb-[15px]" >
            <Heading level="4">Managed By</Heading>
          </div>
          <div className="w-[360px] rounded-[15px] shadow-sm h-[53px] flex items-center justify-center">
            <div className="w-[138px] h-[23px] ">
              <img src="/assits/assits/image/header-logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="description py-[20px] xl:hidden lg:flex md:block sm:block block flex-col">
                    <div className='pb-[6px]'><span className='text-[20px] pb-[20px] font-medium text-gray-800'>Watch Description</span></div>
                    <div className=''><span className='text-[15px] font-light '>Strap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watches Strap Up is a premier luxury watch concierge based in Dubai, offering a range of services including buying, selling, sourcing, and consigning high-end watchesStrap Up is a premier luxury watch concierge based in Dubai, offering a range</span></div>
                </div>
    </div>
  );
}

export default CardSubmit;

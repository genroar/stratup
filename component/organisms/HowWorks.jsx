import React from "react";
import '..//../app/globals.css'
import Heading from "../atoms/Heading";
import Worksinput from "../molecules/Worksinput";
import WorksButtons from "../molecules/WorksButtons";
import CustomImage from "../atoms/CustomImage";

function HowWorks() {
  return (
    <div className=" bg-gray-100 pt-[100px] pb-[80px] rounded-tr-[40px] flex flex-col   " >
      <div className="flex flex-col gap-[30px] items-center " >
        <Heading level="1">Find out how much your watch is worth</Heading>
        <Worksinput />
      </div>
      <div className="bg-white mt-[110px] w-[1150px] shadow flex flex-col    rounded-[40px] ml-[60px]  " >
        <div className="flex w-[1150px] flex-col border-b-[1px] items-center text-center gap-[30px] py-[20px] " >
          <Heading level="1" >How it works</Heading>
          <WorksButtons />
        </div>
        <div className="flex px-[25px] gap-[45px] py-[25px] items-center" >
          <CustomImage variant="work" src="/assits/assits/image/home overview.png"  ></CustomImage>
          <div className="flex flex-col gap-[25px]" >
            <Heading level="1" >Overview</Heading>
            <div className="flex flex-col gap-[10px] " >
              <Heading>Submit a free listing with ease. Fill in your watch details and directly get <br /> offers from interested individuals.Submit a free listing with ease. Fill in <br /> your watch details and directly get offers from interested individuals.</Heading>
              <Heading>Submit a free listing with ease. Fill in your watch details and directly get <br /> offers from interested individuals.Submit a free listing with ease. Fill in <br /> your watch details and directly get offers from interested individuals.</Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWorks;

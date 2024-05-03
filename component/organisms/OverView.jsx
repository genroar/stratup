import React from "react";
import Heading from "../atoms/Heading";

function OverView() {
  return (
    <div>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xl:gap-[50px] lg:gap-[50px] md:gap-[30px] sm:gap-[30px] gap-[30px] px-[20px] py-[20px] over-view">
        <div className="">
          <img className="w-full" src="/assits/assits/image/work.png" alt="" />
        </div>
        <div className="flex flex-col justify-center text">
          <div className="items-center">
            <Heading level="1">Overview</Heading>
          </div>
          <div className="p flex flex-col gap-[10px] pr-[30px]">
            <span className="xl:text-[20px] lg:text-[20px] md:text-[17px] text-gray-700 sm:text-[15px] text-[14px] font-thin text-overtext">
              Submit a free listing with ease. Fill in your watch details and
              directly get offers from interested individuals.Submit a free
              listing with ease. Fill in your watch details and directly get
              offers from interested individuals.
            </span>
            <span className="xl:text-[20px] lg:text-[20px] md:text-[17px] text-gray-700 sm:text-[15x] text-[14px] font-thin text-overtext">
              Submit a free listing with ease. Fill in your watch details and
              directly get offers from interested individuals.Submit a free
              listing with ease. Fill in your watch details and directly get
              offers from interested individuals.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverView;

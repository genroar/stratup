import React from "react";
import Heading from "../atoms/Heading";

function OverView() {
  return (
    <div>
      <div className="flex container gap-[50px] px-[20px] py-[20px]">
        <div>
          <img className="" src="/assits/assits/image/work.png" alt="" />
        </div>
        <div className="flex flex-col justify-center text">
          <div className="items-center">
            <Heading level="1">Overview</Heading>
          </div>
          <div className="p w-[682px] flex flex-col gap-[10px] pr-[30px]">
            <span className="text-[20px]  font-thin text-gray-900">
              Submit a free listing with ease. Fill in your watch details and
              directly get offers from interested individuals.Submit a free
              listing with ease. Fill in your watch details and directly get
              offers from interested individuals.
            </span>
            <span className="text-[20px] font-thin text-gray-900">
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

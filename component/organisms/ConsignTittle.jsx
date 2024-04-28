import React from "react";
import Heading from "../atoms/Heading";

function ConsignTittle() {
  return (
    <div>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-[50px] px-[20px] py-[20px]">
        <div className="">
          <img className="w-full" src="/assits/assits/image/work.png" alt="" />
        </div>
        <div className="flex flex-col justify-center text">
          <div className="items-center">
            <Heading level="1">Consign a Watch</Heading>
          </div>
          <div className="p flex flex-col gap-[10px]">
            <span className="text-[20px] font-thin text-gray-900">
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

export default ConsignTittle;

import React from "react";
import Heading from "../atoms/Heading";
import CustomImage from "../atoms/CustomImage";
import Button from "../atoms/Button";
import Other from "../atoms/Other";
import { RxCross1 } from "react-icons/rx";
import ButtonCross from "../atoms/ButtonCross";
import WatchBrand from "./WatchBrand";

function WatchFiltration() {

  const handleBrandSelect = (brand) => {
    // Do something with the selected brand
    console.log("Selected brand:", brand);
  };

  return (
    <div>
      <div className="flex flex-col gap-[50px]">
        <div className="">
          <div className="main flex items-center px-[50px] py-[20px]">
            <ButtonCross />
            <div className="flex justify-center items-center w-full">
              <img
                className="w-[160px]"
                src="/assits/assits/image/header-Logo.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-[15px] bg-gray-400 shadow-md">
            <div className="w-[180px] rounded-r-[10px] bg-gray-700 h-[15px]"></div>
          </div>
        </div>

        <WatchBrand onSelectBrand={handleBrandSelect} />
      </div>
    </div>
  );
}

export default WatchFiltration;

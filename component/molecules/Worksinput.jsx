import React from "react";
import Input from "../atoms/Input";
import CustomImage from "../atoms/CustomImage";

function Worksinput() {
  return (
    <div className="relative flex ">
      <Input variant="buy" placeholder="Input Referance"></Input>

      <div className="bg-gray-500 absolute left-[630px]  top-[2px] rounded-full w-[37px] h-[37px] flex items-center justify-center ">
        <CustomImage
          src="/assits/assits/svg/search.svg"
          alt="search"
        ></CustomImage>
      </div>
    </div>
  );
}

export default Worksinput;

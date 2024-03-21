import React from "react";
import Input from "../atoms/Input";
import CustomImage from "../atoms/CustomImage";

function Worksinput() {
  return (
    <div className="flex relative ">
      <Input variant="third" children="Input Referance"></Input>
      <div className="bg-gray-500 absolute left-[797px] rounded-full w-[37px] h-[37px] flex items-center justify-center ">
        <CustomImage src="/assits/assits/svg/search.svg" alt="search" ></CustomImage>
      </div>
    </div>
  );
}

export default Worksinput;

import React from "react";
import Input from "../atoms/Input";
import CustomImage from "../atoms/CustomImage";

function Worksinput({inputClass}) {
  return (
    <div className={`relative flex xl:w-[65%] lg:w-[65%] md:w-[90%] shadow-search rounded-[20px] sm:w-[95%] w-[95%] ${inputClass}`}>
      <Input variant="buy" placeholder="Input Referance"></Input>
      <div className="bg-gray-500 absolute right-[0px]  top-[2px] rounded-full w-[37px] h-[37px] flex items-center justify-center ">
        <CustomImage
          src="/assits/assits/svg/search.svg"
          alt="search"
        ></CustomImage>
      </div>
    </div>
  );
}

export default Worksinput;

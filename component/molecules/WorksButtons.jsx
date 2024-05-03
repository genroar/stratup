import React, { useState } from "react";
import Button from "../atoms/Button";

function WorksButtons({ view, ad, consign, source }) {
  const [activeButton, setActiveButton] = useState('view');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const stylebut = ["xl:text-[20px]  lg:text-[20px] md:text-[20px] sm:text-[20px]  xm:text-[20px] text-[14px] font-normal "]

  return (
    <div className="flex xl:w-[58%]  lg:w-[58%] md:w-[75%] sm:w-[95%] xm:w-[98%] w-[99%] xl:gap-[10px] lg:gap-[10px] md:gap-[10px] sm:gap-[10px] xm:gap-[10px] gap-[5px] bg-gray-100  rounded-[25px] ">
      <button
        onClick={() => {
          handleButtonClick("view");
          view();
        }}
        className={` h-[55px] text-center cursor-pointer xl:w-[150px] lg:w-[150px] md:w-[150px] sm:w-[150px] xm:w-[150px] w-[130px] flex justify-center text-[20px] font-normal  items-center ${stylebut} text-buttonGray rounded-[40px] ${
          activeButton === "view" ? "bg-buttonGray text-white " : ""
        }`}
      >
        Overview
      </button>
      <button
        onClick={() => {
          handleButtonClick("ad");
          ad();
        }}
        className={` h-[55px] text-center cursor-pointer w-[160px]  flex justify-center items-center ${stylebut} text-buttonGray rounded-[40px] ${
          activeButton === "ad" ? "bg-buttonGray text-white " : ""
        }`}      >
        Submit Ad
      </button>
      <button
        onClick={() => {
          handleButtonClick("consign");
          consign();
        }}
        className={` h-[55px] text-center cursor-pointer w-[212px]  flex justify-center items-center ${stylebut} text-buttonGray rounded-[40px] ${
          activeButton === "consign" ? "bg-buttonGray text-white " : ""
        }`}      >
        Consign a watch
      </button>
      <button
        onClick={() => {
          handleButtonClick("source");
          source();
        }}
        className={` h-[55px] text-center cursor-pointer w-[201px]  flex justify-center items-center ${stylebut} text-buttonGray rounded-[40px] ${
          activeButton === "source" ? "bg-buttonGray text-white " : ""
        }`}      >
        Source a watch
      </button>
    </div>
  );
}

export default WorksButtons;

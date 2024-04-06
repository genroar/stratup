import React, { useState } from "react";
import Button from "../atoms/Button";

function WorksButtons({ view, ad, consign, source }) {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex w-[753px] gap-[10px] bg-gray-100 rounded-[25px] ">
      <button
        onClick={() => {
          handleButtonClick("view");
          view();
        }}
        className={` h-[55px] text-center cursor-pointer w-[150px]  flex justify-center items-center text-[20px] font-normal text-buttonGray rounded-[40px] ${
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
        className={` h-[55px] text-center cursor-pointer w-[160px]  flex justify-center items-center text-[20px] font-normal text-buttonGray rounded-[40px] ${
          activeButton === "ad" ? "bg-buttonGray text-white " : ""
        }`}      >
        Submit Ad
      </button>
      <button
        onClick={() => {
          handleButtonClick("consign");
          consign();
        }}
        className={` h-[55px] text-center cursor-pointer w-[212px]  flex justify-center items-center text-[20px] font-normal text-buttonGray rounded-[40px] ${
          activeButton === "consign" ? "bg-buttonGray text-white " : ""
        }`}      >
        Consign a watch
      </button>
      <button
        onClick={() => {
          handleButtonClick("source");
          source();
        }}
        className={` h-[55px] text-center cursor-pointer w-[201px]  flex justify-center items-center text-[20px] font-normal text-buttonGray rounded-[40px] ${
          activeButton === "source" ? "bg-buttonGray text-white " : ""
        }`}      >
        Source a watch
      </button>
    </div>
  );
}

export default WorksButtons;

import React, { useState } from "react";

function ProButtons({ genrel, password, address }) {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <div className="w-[990px] flex gap-[6px] py-[8px] border rounded-[20px] px-[8px]">
        <button
           onClick={() => {
            handleButtonClick("genrel");
            genrel();
          }}
          className={`w-[86px] h-[35px] font-regular text-gray-400  flex items-center justify-center  rounded-[20px] ${
            activeButton === "genrel" ? "bg-buttonGray text-white " : ""
          }`}
        >
          Genrel
        </button>
        <button
          onClick={() => {
            handleButtonClick("password");
            password();
          }}
          className={`w-[97px] h-[35px] font-regular text-gray-400 flex items-center justify-center  rounded-[20px] ${
            activeButton === "password" ? "bg-buttonGray text-white" : ""
          }`}
        >
          Password
        </button>
        <button
          onClick={() => {
            handleButtonClick("address");
            address();
          }}
          className={`w-[128px] h-[35px] font-regular text-gray-400 flex items-center justify-center  rounded-[20px] ${
            activeButton === "address" ? "bg-buttonGray text-white" : ""
          }`}
        >
          Address details
        </button>
      </div>
    </div>
  );
}

export default ProButtons;

import React, { useState } from "react";

function ListingButton({ buy, sell, source, consign }) {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex w-[600px] shadow-md divide-y transform rotate-y-1 rounded-tr-[25px] rounded-tl-[25px]">
      <button
        onClick={() => {
          buy();
          handleButtonClick("buy");
        }}
        className={`w-[150px] h-[60px] font-medium text-gray-700  flex items-center justify-center text-[20px] rounded-tl-[25px] ${
          activeButton === "buy" ? "bg-buttonGray text-white " : ""
        }`}
      >
        Buy
      </button>
      <button
        onClick={() => {
          sell();
          handleButtonClick("sell");
        }}
        className={`w-[150px] h-[60px]  font-medium text-gray-700  flex items-center justify-center  text-[20px] ${
          activeButton === "sell" ? "bg-buttonGray text-white " : ""
        }`}
        variant=""
      >
        Sell
      </button>
      <button
        onClick={() => {
          source();
          handleButtonClick("source");
        }}
        className={`w-[150px] h-[60px]  font-medium text-gray-700  flex items-center justify-center text-[20px] ${
          activeButton === "source" ? "bg-buttonGray text-white " : ""
        }`}
        variant="tr-radius"
      >
        Source
      </button>
      <button
        onClick={() => {
          consign();
          handleButtonClick("consign");
        }}
        className={`w-[150px] h-[60px]  font-medium text-gray-700  flex items-center justify-center text-[20px] rounded-tr-[25px] ${
          activeButton === "consign" ? "bg-buttonGray text-white " : ""
        }`}
        variant="rectangle"
      >
        Consign
      </button>
    </div>
  );
}

export default ListingButton;

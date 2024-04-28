import React, { useState } from "react";

function ListingBtn({ analytic , msg , offer }) {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <div className="w flex gap-[6px] py-[8px] border rounded-[20px] px-[8px] ">
        <button
          onClick={() => {
            handleButtonClick("analytic");
            analytic();
          }}
          className={`w-[86px] h-[35px] font-regular text-gray-400  flex items-center justify-center  rounded-[20px] ${
            activeButton === "analytic" ? "bg-buttonGray text-white " : ""
          }`}
        >
          Analytic
        </button>
        <button
          onClick={() => {
            handleButtonClick("msg");
            msg();
          }}
          className={`w-[97px] h-[35px] font-regular text-gray-400 flex items-center justify-center  rounded-[20px] ${
            activeButton === "msg" ? "bg-buttonGray text-white" : ""
          }`}
        >
          Message
        </button>
        <button
          onClick={() => {
            handleButtonClick("offer");
            offer();
          }}
          className={`w-[75px] h-[35px] font-regular text-gray-400 flex items-center justify-center  rounded-[20px] ${
            activeButton === "offer" ? "bg-buttonGray text-white" : ""
          }`}
        >
          offer
        </button>
      </div>
    </div>
  );
}

export default ListingBtn;

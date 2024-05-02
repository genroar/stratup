import React, { useState } from 'react';

function ListingButton({ buy, sell, source, consign }) {
  const [activeButton, setActiveButton] = useState('buy');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex xl:w-[40%] lg:w-[40%] md:w-[60%] sm:w-[55%] w-[95%] divide-x-[1px] divide-gray-300 shadow-top listingbutton rounded-tr-[25px] h-[60px]  rounded-tl-[25px]" >
      <button onClick={() => { buy(); handleButtonClick('buy'); }} className={`w-[135px] xl:w-[150px] lg:w-[150px] md:w-[130px] sm:w-[100px] h-[60px] font-medium text-gray-700  flex items-center justify-center text-[20px] rounded-tl-[25px] ${activeButton === "buy" ? "bg-buttonGray text-white " : ""
        }`} >Buy</button>
      <button onClick={() => { sell(); handleButtonClick('sell'); }} className={`w-[135px] xl:w-[150px] lg:w-[150px] md:w-[130px] sm:w-[100px] h-[60px]  font-medium text-gray-700  flex items-center justify-center  text-[20px]  ${activeButton === "sell" ? "bg-buttonGray text-white " : ""
        }`} variant=''>Sell</button>
      <button onClick={() => { source(); handleButtonClick('source'); }} className={`w-[135px] xl:w-[150px] lg:w-[150px] md:w-[130px] sm:w-[100px] h-[60px]  font-medium text-gray-700  flex items-center justify-center text-[20px] ${activeButton === "source" ? "bg-buttonGray text-white " : ""
        }`} variant='tr-radius'>Source</button>
      <button onClick={() => { consign(); handleButtonClick('consign'); }} className={`w-[135px] xl:w-[150px] lg:w-[150px] md:w-[130px] sm:w-[100px] h-[60px]  font-medium text-gray-700  flex items-center justify-center text-[20px] rounded-tr-[25px] ${activeButton === "consign" ? "bg-buttonGray text-white " : ""
        }`} variant='rectangle'>Consign</button>

    </ div>
  );
}

export default ListingButton;
 
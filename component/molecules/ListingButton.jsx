import React, { useState } from 'react';

function ListingButton({ buy, sell, source, consign }) {
  const [activeButton, setActiveButton] = useState('buy');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex xl:w-[40%] lg:w-[40%] md:w-[60%] sm:w-[55%] w-[95%] xl:divide-x-[1px] md:divide-x-[1px] lg:divide-x-[1px] sm:divide-x-[1px] divide-gray-300 shadow-top listingbutton rounded-tr-[25px] h-[60px]  xl:rounded-tl-[25px] lg:rounded-tl-[25px] md:rounded-tl-[25px] sm:rounded-tl-[25px] rounded-tl-[20px]  xl:ml-[0px] lg:ml-[0px] md:ml-[0px] sm:ml-[0px]   ml-[8px]" >
      <button onClick={() => { buy(); handleButtonClick('buy'); }} className={`w-[135px] xl:w-[150px] lg:w-[150px] md:w-[130px] sm:w-[100px] h-[60px] font-medium text-gray-700  flex items-center justify-center text-[20px] xl:rounded-tl-[25px] md:rounded-tl-[25px] lg:rounded-tl-[25px] sm:rounded-tl-[25px]  rounded-tl-[64px]               xl:rounded-tr-[0px] md:rounded-tr-[0px] lg:rounded-tr-[0px] sm:rounded-tr-[0px]  rounded-tr-[64px]           xl:rounded-bl-[0px] md:rounded-bl-[0px] lg:rounded-bl-[0px] sm:rounded-bl-[0px]  rounded-bl-[64px]          xl:rounded-br-[0px] md:rounded-br-[0px] lg:rounded-br-[0px] sm:rounded-br-[0px]  rounded-br-[64px] ${activeButton === "buy" ? "bg-buttonGray text-white " : ""
        }`} >Buy</button>
      <button onClick={() => { sell(); handleButtonClick('sell'); }} className={`w-[135px] xl:w-[150px] lg:w-[150px] md:w-[130px] sm:w-[100px] h-[60px]  font-medium text-gray-700  flex items-center justify-center  text-[20px]     xl:rounded-tl-[0px] md:rounded-tl-[0px] lg:rounded-tl-[0px] sm:rounded-tl-[0px]  rounded-tl-[64px]               xl:rounded-tr-[0px] md:rounded-tr-[0px] lg:rounded-tr-[0px] sm:rounded-tr-[0px]  rounded-tr-[64px]           xl:rounded-bl-[0px] md:rounded-bl-[0px] lg:rounded-bl-[0px] sm:rounded-bl-[0px]  rounded-bl-[64px]          xl:rounded-br-[0px] md:rounded-br-[0px] lg:rounded-br-[0px] sm:rounded-br-[0px]  rounded-br-[64px] ${activeButton === "sell" ? "bg-buttonGray text-white " : ""
        }`} variant=''>Sell</button>
      <button onClick={() => { source(); handleButtonClick('source'); }} className={`w-[135px] xl:w-[150px] lg:w-[150px] md:w-[130px] sm:w-[100px] h-[60px]  font-medium text-gray-700  flex items-center justify-center text-[20px]  xl:rounded-tl-[0px] md:rounded-tl-[0px] lg:rounded-tl-[0px] sm:rounded-tl-[0px]  rounded-tl-[64px]               xl:rounded-tr-[0px] md:rounded-tr-[0px] lg:rounded-tr-[0px] sm:rounded-tr-[0px]  rounded-tr-[64px]           xl:rounded-bl-[0px] md:rounded-bl-[0px] lg:rounded-bl-[0px] sm:rounded-bl-[0px]  rounded-bl-[64px]          xl:rounded-br-[0px] md:rounded-br-[0px] lg:rounded-br-[0px] sm:rounded-br-[0px]  rounded-br-[64px] ${activeButton === "source" ? "bg-buttonGray text-white " : ""
        }`} variant='tr-radius'>Source</button>
      <button onClick={() => { consign(); handleButtonClick('consign'); }} className={`w-[135px] xl:w-[150px] lg:w-[150px] md:w-[130px] sm:w-[100px] h-[60px]  font-medium text-gray-700  flex items-center justify-center text-[20px] xl:rounded-tl-[0px] md:rounded-tl-[0px] lg:rounded-tl-[0px] sm:rounded-tl-[0px]  rounded-tl-[64px]               xl:rounded-tr-[0px] md:rounded-tr-[0px] lg:rounded-tr-[0px] sm:rounded-tr-[0px]  rounded-tr-[64px]           xl:rounded-bl-[0px] md:rounded-bl-[0px] lg:rounded-bl-[0px] sm:rounded-bl-[0px]  rounded-bl-[64px]          xl:rounded-br-[0px] md:rounded-br-[0px] lg:rounded-br-[0px] sm:rounded-br-[0px]  rounded-br-[64px] ${activeButton === "consign" ? "bg-buttonGray text-white " : ""
        }`} variant='rectangle'>Consign</button>

    </ div>
  );
}

export default ListingButton;
 
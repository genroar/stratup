import React, { useState } from 'react';

function ListingButton({ buy, sell, source, consign }) {
  const [activeButton, setActiveButton] = useState('buy');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
<<<<<<< HEAD
    <div className="flex w-[40%] divide-x-[1px] divide-gray-300 shadow-t-custom listingbutton transform rotate-y-1 rounded-tr-[25px] h-[60px] rounded-tl-[25px]">
=======
    <div className='flex w-[600px] divide-x-[1px] divide-gray-300 shadow-t-custom listingbutton transform rotate-y-1 rounded-tr-[25px] h-[60px] rounded-tl-[25px]'>
    <div className="flex w-[600px] divide-x-[1px] divide-gray-300 shadow-t-custom listingbutton transform rotate-y-1 rounded-tr-[25px] h-[60px] rounded-tl-[25px]">
>>>>>>> eea2462e70bc188551c1f3fb2282c20cf1ebe139
      <button onClick={() => { buy(); handleButtonClick('buy'); }} className={`w-[150px] h-[60px] font-medium text-gray-700  flex items-center justify-center text-[20px] rounded-tl-[25px] ${activeButton === "buy" ? "bg-buttonGray text-white " : ""
        }`} >Buy</button>
      <button onClick={() => { sell(); handleButtonClick('sell'); }} className={`w-[150px] h-[60px]  font-medium text-gray-700  flex items-center justify-center  text-[20px]  ${activeButton === "sell" ? "bg-buttonGray text-white " : ""
        }`} variant=''>Sell</button>
      <button onClick={() => { source(); handleButtonClick('source'); }} className={`w-[150px] h-[60px]  font-medium text-gray-700  flex items-center justify-center text-[20px] ${activeButton === "source" ? "bg-buttonGray text-white " : ""
        }`} variant='tr-radius'>Source</button>
      <button onClick={() => { consign(); handleButtonClick('consign'); }} className={`w-[150px] h-[60px]  font-medium text-gray-700  flex items-center justify-center text-[20px] rounded-tr-[25px] ${activeButton === "consign" ? "bg-buttonGray text-white " : ""
        }`} variant='rectangle'>Consign</button>

      </div>
    </div>
  );
}

export default ListingButton;

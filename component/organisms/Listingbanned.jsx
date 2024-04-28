import React, { useState } from "react";
import Listingmessenger from "./Listingmessenger";

function Listingbanned() {
  const [showMessenger, setShowMessenger] = useState(true);
  const [showSender, setShowSender] = useState(false); 

  const toggleMessenger = () => {
    setShowMessenger(false);
    setShowSender(true); 
  };

  return (
    <div className="">
      {!showSender && (
        <div className="shadow-sm rounded-[20px] w-[990px] py-[20px] px-[20px] flex flex-col gap-[10px]">
          <button onClick={toggleMessenger}>
            <div className="flex items-center rounded-[10px] py-[4px] pl-[5px] hover:bg-gray-100 gap-[10px]">
              <img src="/assits/assits/image/not.png" alt="" />
              <div>
                <span className="text-[13px] font-normal">Susy Gala</span>
              </div>
            </div>
          </button>
          <button onClick={toggleMessenger}>
            <div className="flex items-center rounded-[10px] py-[4px] pl-[5px] hover:bg-gray-100 gap-[10px]">
              <img src="/assits/assits/image/not.png" alt="" />
              <div>
                <span className="text-[13px] font-normal">Susy Gala</span>
              </div>
            </div>
          </button>
          <button onClick={toggleMessenger}>
            <div className="flex items-center rounded-[10px] py-[4px] pl-[5px] hover:bg-gray-100 gap-[10px]">
              <img src="/assits/assits/image/not.png" alt="" />
              <div>
                <span className="text-[13px] font-normal">Susy Gala</span>
              </div>
            </div>
          </button>
          <button onClick={toggleMessenger}>
            <div className="flex items-center rounded-[10px] py-[4px] pl-[5px] hover:bg-gray-100 gap-[10px]">
              <img src="/assits/assits/image/not.png" alt="" />
              <div>
                <span className="text-[13px] font-normal">Susy Gala</span>
              </div>
            </div>
          </button>
        </div>
      )}
      {!showMessenger && <Listingmessenger />}
    </div>
  );
}

export default Listingbanned;

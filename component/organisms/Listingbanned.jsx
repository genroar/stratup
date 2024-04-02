import React, {useState} from "react";
import Listingdelte from "../molecules/Listingdelte";
import Listingoverlaymalicule from "../molecules/Listingoverlaymalicule";
import ListingBtn from "../molecules/ListingBtn";
import Listingmessenger from "./Listingmessenger";

function Listingbanned() {

    const [showMessenger, setShowMessenger] = useState(false); // State to control the visibility of Listingmessenger

    // Function to toggle the visibility of Listingmessenger
    const toggleMessenger = () => {
      setShowMessenger(!showMessenger);
    };

  return (
    <div className="">
      <div className="shadow-sm rounded-[20px] w-[990px] py-[20px] px-[20px] flex flex-col gap-[10px]">
        <button onClick={toggleMessenger} >
          <div className="flex items-center rounded-[10px] py-[4px] pl-[5px] hover:bg-gray-100 gap-[10px]">
            <img src="/assits/assits/image/not.png" alt="" />
            <div>
              <span className="text-[13px] font-normal">Susy Gala</span>
            </div>
          </div>
        </button>
        <button onClick={toggleMessenger} >
          <div className="flex items-center rounded-[10px] py-[4px] pl-[5px] hover:bg-gray-100 gap-[10px]">
            <img src="/assits/assits/image/not.png" alt="" />
            <div>
              <span className="text-[13px] font-normal">Susy Gala</span>
            </div>
          </div>
        </button>
        <button onClick={toggleMessenger} >
          <div className="flex items-center rounded-[10px] py-[4px] pl-[5px] hover:bg-gray-100 gap-[10px]">
            <img src="/assits/assits/image/not.png" alt="" />
            <div>
              <span className="text-[13px] font-normal">Susy Gala</span>
            </div>
          </div>
        </button>
        <button onClick={toggleMessenger} >
          <div className="flex items-center rounded-[10px] py-[4px] pl-[5px] hover:bg-gray-100 gap-[10px]">
            <img src="/assits/assits/image/not.png" alt="" />
            <div>
              <span className="text-[13px] font-normal">Susy Gala</span>
            </div>
          </div>
        </button>
      </div>
      <div className="" >
        {showMessenger && <Listingmessenger/>}
      </div>
    </div>
  );
}

export default Listingbanned;

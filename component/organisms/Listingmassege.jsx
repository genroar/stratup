import React, {useState} from "react";
import Listingdelte from "../molecules/Listingdelte";
import Listingoverlaymalicule from "../molecules/Listingoverlaymalicule";
import ListingBtn from "../molecules/ListingBtn";
import Listingmessenger from "./Listingmessenger";

function Listingmassege() {
  const [showMessenger, setShowMessenger] = useState(true); // State to control the visibility of Listingmessenger
  const [showSender, setShowSender] = useState(false); // State to control the visibility of sender

  // Function to toggle the visibility of Listingmessenger and sender
  const toggleMessenger = () => {
    setShowMessenger(false);
    setShowSender(true);
  };
  


  return (
    <div>
      
      {!showSender && 
        <div className="w-[990px] flex flex-col py-[20px] px-[20px] shadow-sm rounded-[20px]">
        <button onClick={toggleMessenger} >
          <div className="flex rounded-[10px] py-[4px] pl-[5px] hover:bg-gray-100 gap-[100px]">
            <div className="image  relative flex items-center gap-[10px] ">
              <div>
                <img src="/assits/assits/image/not.png" alt="" />
                <div className="absolute top-[26px] left-[22px]">
                  <img src="/assits/assits/svg/Group 86.svg" alt="" />
                </div>
              </div>
              <div>
                <span className="text-[13px] font-normal">Susy Gala</span>
              </div>
            </div>
            <div className="py-[10px]">
              <span className="text-[13px] font-medium ">Hi! How are u!</span>
            </div>
          </div>
        </button>
        <button>
          <div className="flex rounded-[10px] py-[4px] pl-[5px] hover:bg-gray-100 gap-[100px]">
            <div className="image relative flex items-center gap-[10px] ">
              <div>
                <img src="/assits/assits/image/not.png" alt="" />
                <div className="absolute top-[26px] left-[22px]">
                  <img src="/assits/assits/svg/Group 86.svg" alt="" />
                </div>
              </div>
              <div>
                <span className="text-[13px] font-normal">Susy Gala</span>
              </div>
            </div>
            <div className="py-[10px]">
              <span className="text-[13px] font-medium ">Hi! How are u!</span>
            </div>
          </div>
        </button>
        <button>
          <div className="flex rounded-[10px] py-[4px] pl-[5px] hover:bg-gray-100 gap-[100px]">
            <div className="image relative flex items-center gap-[10px] ]">
              <div>
                <img src="/assits/assits/image/not.png" alt="" />
                <div className="absolute top-[26px] left-[22px]">
                  <img src="/assits/assits/svg/Group 86.svg" alt="" />
                </div>
              </div>
              <div>
                <span className="text-[13px] font-normal">Susy Gala</span>
              </div>
            </div>
            <div className="py-[10px]">
              <span className="text-[13px] font-medium ">Hi! How are u!</span>
            </div>
          </div>
        </button>
        <button>
          <div className="flex rounded-[10px] py-[4px] pl-[5px] hover:bg-gray-100 gap-[100px]">
            <div className="image relative flex items-center gap-[10px] ">
              <div>
                <img src="/assits/assits/image/not.png" alt="" />
                <div className="absolute top-[26px] left-[22px]">
                  <img src="/assits/assits/svg/Group 86.svg" alt="" />
                </div>
              </div>
              <div>
                <span className="text-[13px] font-normal">Susy Gala</span>
              </div>
            </div>
            <div className="py-[10px]">
              <span className="text-[13px] font-medium ">Hi! How are u!</span>
            </div>
          </div>
        </button>
      </div>
      }
      {!showMessenger && <Listingmessenger/>}
    </div>
  );
}

export default Listingmassege;

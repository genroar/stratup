import React, { useState } from "react";
import ProfileButton from "@/component/atoms/ProfileButton";
import { HiViewGrid } from "react-icons/hi";
import { FaTag } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { PiWatchFill } from "react-icons/pi";
import { IoLogOut } from "react-icons/io5";

function Sidebar({ dashboard, listing, profile, notification, stock }) {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex py-[25px] justify-between flex-col w-[320px] shadow-lg h-[657px] rounded-[20px]">
      <div>
        <ProfileButton
          onClick={() => {
            handleButtonClick("dashboard");
            dashboard(); // Call the dashboard function
          }}
          className={`w-[86px] h-[35px] font-regular text-gray-400  flex items-center justify-center  rounded-[20px] ${
            activeButton === "dashboard" ? "bg-buttonGray text-white " : ""
          }`}
          variant="primary"
        >
          <HiViewGrid className=" w-[30px] h-[30px]" />
          Dashboard
        </ProfileButton>
        <ProfileButton
          onClick={listing}
          className={`w-[86px] h-[35px] font-regular text-gray-400  flex items-center justify-center  rounded-[20px] ${
            activeButton === "listing" ? "bg-buttonGray text-white " : ""
          }`}
          variant="primary"
        >
          <FaTag className=" w-[30px] h-[30px]" />
          Listing
        </ProfileButton>
        <ProfileButton
          onClick={notification}
          className={`w-[86px] h-[35px] font-regular text-gray-400  flex items-center justify-center  rounded-[20px] ${
            activeButton === "notification" ? "bg-buttonGray text-white " : ""
          }`}
          variant="primary"
        >
          <FaBell className=" w-[30px] h-[30px]" />
          Notification
        </ProfileButton>
        <ProfileButton
          onClick={profile}
          className={`w-[86px] h-[35px] font-regular text-gray-400  flex items-center justify-center  rounded-[20px] ${
            activeButton === "profile" ? "bg-buttonGray text-white " : ""
          }`}
          variant="primary"
        >
          <IoPersonSharp className=" w-[30px] h-[30px]" />
          Profile
        </ProfileButton>
        <ProfileButton
          onClick={stock}
          className={`w-[86px] h-[35px] font-regular text-gray-400  flex items-center justify-center  rounded-[20px] ${
            activeButton === "stock" ? "bg-buttonGray text-white " : ""
          }`}
          variant="primary"
        >
          <PiWatchFill className=" w-[30px] h-[30px]" />
          Stock Management
        </ProfileButton>
      </div>
      <button>
        <div className="flex px-[30px] gap-[20px]">
          <IoLogOut className="fill-red-600 w-[30px] h-[30px] " />
          <p className="text-[18px] font-normal text-red-900 text-opacity-60 ">
            Logout
          </p>
        </div>
      </button>
    </div>
  );
}

export default Sidebar;

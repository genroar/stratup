// Sidebar.js
import React, { useState } from "react";
import ProfileButton from "@/component/atoms/ProfileButton";
import { HiViewGrid } from "react-icons/hi";
import { FaTag } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { PiWatchFill } from "react-icons/pi";
import { IoLogOut } from "react-icons/io5";

function Sidebar({ dashboard, listing, profile, notification, stock }) {
  const [activeButton, setActiveButton] = useState('dashboard');

  
  const handleButtonClick = (buttonName, callback) => {
    setActiveButton(buttonName);
    callback();
  };

  return (
    <div className="flex  justify-between flex-col w-[25%] shadow-top h-[100vh]  rounded-[10px]">
      <div>
        <ProfileButton onClick={() => handleButtonClick("dashboard", dashboard)} isActive={activeButton === "dashboard"} icon={<HiViewGrid className={`w-[30px] h-[30px] ${activeButton === "dashboard" ? "bg-gray-600 rounded-[10px]  w-[50px] h-[50px] px-[11px] py-[11px] flex ml-[-10px] justify-center  text-white" : "bg-white"}`} />}>
          Dashboard
        </ProfileButton>
        <ProfileButton onClick={() => handleButtonClick("listing", listing)} isActive={activeButton === "listing"} icon={<FaTag className={`w-[30px] h-[30px] ${activeButton === "listing" ? "bg-gray-600 rounded-[10px] flex   w-[50px] h-[50px] px-[11px] py-[11px] ml-[-10px] justify-center  text-white" : "bg-white"}`} />}>
          Listing
        </ProfileButton>
        <ProfileButton onClick={() => handleButtonClick("notification", notification)} isActive={activeButton === "notification"} icon={<FaBell className={`w-[30px] h-[30px] ${activeButton === "notification" ? "bg-gray-600 rounded-[10px]  w-[50px] h-[50px] px-[11px] py-[11px] flex  ml-[-10px] justify-center text-white" : "bg-white"}`} />}>
          Notification
        </ProfileButton>
        <ProfileButton onClick={() => handleButtonClick("profile", profile)} isActive={activeButton === "profile"} icon={<IoPersonSharp className={`w-[30px] h-[30px] ${activeButton === "profile" ? "bg-gray-600 rounded-[10px]  w-[50px] h-[50px] px-[11px] py-[11px] flex  ml-[-10px] justify-center text-white" : "bg-white"}`} />}>
          Profile
        </ProfileButton>
        <ProfileButton onClick={() => handleButtonClick("stock", stock)} isActive={activeButton === "stock"} icon={<PiWatchFill className={`w-[30px] h-[30px] ${activeButton === "stock" ? "bg-gray-600 rounded-[10px] w-[50px] h-[50px] px-[11px] py-[11px] flex  justify-center ml-[-10px] text-white " : "bg-white"}`} />}>
          Stock Management
        </ProfileButton>
      </div>
      <button>
        <div className="flex px-[30px] gap-[20px]">
          <IoLogOut className="fill-red-600 w-[30px] h-[30px]" />
          <p className="text-[18px] font-normal text-red-900 text-opacity-60">Logout</p>
        </div>
      </button>
    </div>
  );
}

export default Sidebar;

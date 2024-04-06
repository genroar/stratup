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
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName, callback) => {
      setActiveButton(buttonName);
      callback();           
    };

    return (
      <div className="flex py-[px] justify-between flex-col w-[320px] shadow-lg h-[657px] rounded-[20px]">
        <div>
          <ProfileButton onClick={() => handleButtonClick("dashboard", dashboard)} isActive={activeButton === "dashboard"}>
            <HiViewGrid className="w-[30px] h-[30px]" />
            Dashboard
          </ProfileButton>
          <ProfileButton onClick={() => handleButtonClick("listing", listing)} isActive={activeButton === "listing"}>
            <FaTag className="w-[30px] h-[30px]" />
            Listing
          </ProfileButton>
          <ProfileButton onClick={() => handleButtonClick("notification", notification)} isActive={activeButton === "notification"}>
            <FaBell className="w-[30px] h-[30px]" />
            Notification
          </ProfileButton>
          <ProfileButton onClick={() => handleButtonClick("profile", profile)} isActive={activeButton === "profile"}>
            <IoPersonSharp className="w-[30px] h-[30px]" />
            Profile
          </ProfileButton>
          <ProfileButton onClick={() => handleButtonClick("stock", stock)} isActive={activeButton === "stock"}>
            <PiWatchFill className="w-[30px] h-[30px]" />
            Stock Management
          </ProfileButton>
        </div>
        <button>
          <div className="flex px-[30px] gap-[20px]">
            <IoLogOut className="fill-red-600 w-[30px] h-[30px]" />
            <p className="text-[18px] font-normal text-red-900 text-opacity-60">
              Logout
            </p>
          </div>
        </button>
      </div>
    );
  }

  export default Sidebar;

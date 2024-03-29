import React, { useState } from "react";
import ProfileButton from "@/component/atoms/ProfileButton";
import { HiViewGrid } from "react-icons/hi";
import { FaTag } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { PiWatchFill } from "react-icons/pi";
import { IoLogOut } from "react-icons/io5";

function Sidebar({ dashboard, listing, profile, notification ,stock}) {
  return (
    <div className="flex py-[25px] justify-between flex-col w-[320px] shadow-lg h-[657px] rounded-[20px]">
      <div>
        {" "}
        <ProfileButton onClick={dashboard} variant="primary">
          <HiViewGrid  className=" w-[30px] h-[30px]"/>
          Dashboard
        </ProfileButton>
        <ProfileButton onClick={listing} variant="primary">
          <FaTag className=" w-[30px] h-[30px]" />
          Listing
        </ProfileButton>
        <ProfileButton onClick={notification} variant="primary">
          <FaBell className="  w-[30px] h-[30px]" />
          Notification
        </ProfileButton>
        <ProfileButton onClick={profile} variant="primary">
          <IoPersonSharp className=" w-[30px] h-[30px]" />
          Profile
        </ProfileButton>
        <ProfileButton onClick={stock} variant="primary">
          <PiWatchFill className=" w-[30px] h-[30px]" />
          Stock Managment
        </ProfileButton>
      </div>
    <button>
    <div className="flex px-[30px] gap-[20px]" >
      <IoLogOut  className="fill-red-600 w-[30px] h-[30px] " />
      <p className="text-[18px] font-normal text-red-900 text-opacity-60 " >Logout</p>
      </div>
    </button>
    </div>
  );
}

export default Sidebar;

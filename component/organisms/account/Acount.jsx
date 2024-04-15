import React, { useState } from "react";
import "../../../app/globals.css";
import Sidebar from "./Sidebar";
import Dashboard from "@/component/molecules/Dashboard";
import Profile from "./Profile";
import Notificationbar from "../Notificationbar";
import Stockmenag from "./Stockmenag";
import Listingoverall from "../Listingoverall";



function Acount() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className=" mt-[50px]  flex gap-[20px] mx-auto w-full">
      <Sidebar
        dashboard={() => handleTabChange("dashboard")}
        listing={() => handleTabChange("listing")}
        notification={() => handleTabChange("notification")}
        profile={() => handleTabChange("profile")}
        stock={() => handleTabChange("stock")}
      />
      
      <div className="">
        {activeTab === "dashboard" && <Dashboard/>}
        {activeTab === "listing" && <Listingoverall/>}
        {activeTab === "notification" && <Notificationbar/>}
        {activeTab === "profile" && <Profile/>}
        {activeTab === "stock" && <Stockmenag/>}
      </div>
    </div>
  );
}

export default Acount;

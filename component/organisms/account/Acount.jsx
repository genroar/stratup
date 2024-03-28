import React, { useState } from "react";
import "../../../app/globals.css";
import Sidebar from "./Sidebar";
import Dashboard from "@/component/molecules/Dashboard";
import Profile from "./Profile";
import Notificationbar from "../Notificationbar";



function Acount() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className=" flex gap-[20px] ml-[40px] max-w-full margin-auto">
      <Sidebar
        dashboard={() => handleTabChange("dashboard")}
        listing={() => handleTabChange("listing")}
        notification={() => handleTabChange("notification")}
        profile={() => handleTabChange("profile")}
      />
      
      <div className="h-[1005px] w-[1200px]">
        {activeTab === "dashboard" && <Dashboard/>}
        {activeTab === "listing" && 'ddf'}
        {activeTab === "notification" && <Notificationbar/>}
        {activeTab === "profile" && <Profile/>}
        {activeTab === "stock" && <Profile/>}
      </div>
    </div>
  );
}

export default Acount;

import React, { useState } from "react";
import "../../../app/globals.css";
import BuyHome from "../BuyHome";
import Rolex from "@/component/molecules/Rolex";
import Homesource from "../Homesource";
import Sidebar from "./Sidebar";



function Profile() {
  const [activeTab, setActiveTab] = useState("buy");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className=" flex gap-[20px] mt-[100px] ml-[100px] margin-auto">
      <Sidebar
        buy={() => handleTabChange("buy")}
        sell={() => handleTabChange("sell")}
        source={() => handleTabChange("source")}
        consign={() => handleTabChange("consign")}
      />
      
      <div className="h-[1005px] w-[1200px]">
        {activeTab === "buy" && <BuyHome />}
        {activeTab === "sell" && <Rolex />}
        {activeTab === "source" && <Homesource />}
        {activeTab === "consign" && <Rolex />}
      </div>
    </div>
  );
}

export default Profile;

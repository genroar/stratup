import Dashboard from "@/component/molecules/Dashboard";
import AccHeader from "@/pages/AccHeader";
import { useState } from "react";
import "../../../app/globals.css";
import Notificationbar from "../Notificationbar";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import Stockmenag from "./Stockmenag";
import Listings from "./listings";





function Acount() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };




  return (
    <div>
      <div className=" mt-[50px]  flex gap-[20px] mx-auto -w-full margin-auto">
        <Sidebar
          dashboard={() => handleTabChange("dashboard")}
          listing={() => handleTabChange("listing")}
          notification={() => handleTabChange("notification")}
          profile={() => handleTabChange("profile")}
          stock={() => handleTabChange("stock")}
        />

        <div className="h-[1005px] w-[1200px]">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "listing" && <Listings />}
          {activeTab === "notification" && <Notificationbar />}
          {activeTab === "profile" && <Profile />}
          {activeTab === "stock" && <Stockmenag />}
        </div>
      </div>
    </div>
  );
}

export default Acount;

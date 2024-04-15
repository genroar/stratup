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
    <div className="mt-10">
      <div className="flex gap-[20px]">
        <Sidebar
          dashboard={() => handleTabChange("dashboard")}
          listing={() => handleTabChange("listing")}
          notification={() => handleTabChange("notification")}
          profile={() => handleTabChange("profile")}
          stock={() => handleTabChange("stock")}
        />

        <div className="w-[75%]">
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

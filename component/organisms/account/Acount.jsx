import React, { useState } from "react";
import "../../../app/globals.css";
import Sidebar from "./Sidebar";
import Dashboard from "@/component/molecules/Dashboard";
import Profile from "./Profile";
import Notificationbar from "../Notificationbar";
import Stockmenag from "./Stockmenag";
import Listingoverall from "../Listingoverall"; // Import the Listingoverall component
import AccHeader from "@/pages/accheader";

function Acount() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <AccHeader setActiveTab={setActiveTab} />
      <div className='main_dashboard' >
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
              {/* Render components based on active tab */}
              {activeTab === "dashboard" && <Dashboard />}
              {activeTab === "listing" && <Listingoverall />}
              {activeTab === "notification" && <Notificationbar />}
              {activeTab === "profile" && <Profile />}
              {activeTab === "stock" && <Stockmenag />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Acount;

// Notificationbar.js
import React, { useState } from "react";
import Notificationoffer from "./Notificationoffer";
import NotifictionButton from "../molecules/NotifictionButton";

function Notificationbar() {
  const [activeTab, setActiveTab] = useState(null);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setIsButtonVisible(false); // Hide the button when a tab is clicked
  };

  const toggleNotificationButton = () => {
    setActiveTab(null); // Reset activeTab state
    setIsButtonVisible(true); // Show the button when the back button is clicked
  };

  return (
    <div>
      {isButtonVisible && (
        <div className="border border-opacity-10 w-[990px] rounded-[20px] py-[20px] px-[20px]">
          <div className="text py-[20px]">
            <span className="text-[24px] font-medium">Notifications</span>
          </div>
          <NotifictionButton
            off={() => handleTabChange("off")}
            offf={() => handleTabChange("offf")}
            offer={() => handleTabChange("offer")}
            Wach={() => handleTabChange("wach")}
            watch={() => handleTabChange("watch")}
          />
        </div>
      )}

      {activeTab && (
        <div>
          <Notificationoffer toggleNotificationButton={toggleNotificationButton} />
        </div>
      )}
    </div>
  );
}

export default Notificationbar;

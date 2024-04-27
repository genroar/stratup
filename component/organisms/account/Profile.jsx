import Heading from "@/component/atoms/Heading";
import React, { useState } from "react";
import Profilegenrel from "./Profilegenrel";
import ProButtons from "@/component/molecules/ProButtons";

import ProPassword from "./ProPassword";
import ProDetail from "./ProDetail";

function Profile() {
  const [activeTab, setActiveTab] = useState("Genrel");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };


  return (
    <div className="flex relative flex-col gap-[10px]">
      <div>
        <Heading level="3">Profile</Heading>
      </div>
      <ProButtons
        genrel={() => handleTabChange("Genrel")}
        password={() => handleTabChange("password")}
        address={() => handleTabChange("address")}
      />
      <div className="h-[1005px] w-[1200px]">
        {activeTab === "Genrel" && <Profilegenrel />}
        {activeTab === "password" && <ProPassword />}
        {activeTab === "address" && <ProDetail />}
      </div>
    </div>
  );
}

export default Profile;

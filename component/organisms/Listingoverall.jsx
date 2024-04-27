import React, { useState } from "react";
import Listingdelte from "../molecules/Listingdelte";
import Listingoverlaymalicule from "../molecules/Listingoverlaymalicule";
import ListingBtn from "../molecules/ListingBtn";
import Dashanalitic from "../molecules/Dashanalitic";
import Listingmassege from "./Listingmassege";
import Listingbanned from "./Listingbanned";

function Listingoverall() {
  const [activeTab, setActiveTab] = useState("analytic");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="main">
      <Listingdelte />
      <div className="flex flex-col  gap-[20px]">
        <Listingoverlaymalicule />
        <ListingBtn
          analytic={() => handleTabChange("analytic")}
          msg={() => handleTabChange("msg")}
          offer={() => handleTabChange("offer")}
        />
        <div className="h-[1005px] ">
          {activeTab === "analytic" && <Dashanalitic />}
          {activeTab === "msg" && <Listingmassege />}
          {activeTab === "offer" && <Listingbanned />}
        </div>
      </div>
    </div>
  );
}

export default Listingoverall;

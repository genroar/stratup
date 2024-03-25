import React, { useState } from "react";
import ListingButton from "../molecules/ListingButton";
import BuyHome from "./BuyHome";
import Rolex from "../molecules/Rolex";
import Source from "./Source";

function Listing() {
  const [activeTab, setActiveTab] = useState("buy");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="margin-auto">
      <ListingButton
        buy={() => handleTabChange("buy")}
        sell={() => handleTabChange("sell")}
        source={() => handleTabChange("source")}
        consign={() => handleTabChange("consign")}
      />
      <div className="h-[1005px] w-[1200px] border-2 rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px] py-[20px]">
        {activeTab === "buy" && <BuyHome />}
        {activeTab === "sell" && <Rolex />}
        {activeTab === "source" && <Source />}
        {activeTab === "consign" && <Rolex />}
      </div>
    </div>
  );
}

export default Listing;
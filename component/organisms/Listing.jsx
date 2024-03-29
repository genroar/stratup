import React, { useState } from "react";
import '../../app/globals.css'
import ListingButton from "../molecules/ListingButton";
import BuyHome from "./BuyHome";
import Rolex from "../molecules/Rolex";
import Homesource from "./Homesource";

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
      <div className="h-[1005px] w-[1200px]">
        {activeTab === "buy" && <BuyHome />}
        {activeTab === "sell" && <Rolex />}
        {activeTab === "source" && <Homesource />}
        {activeTab === "consign" && <Rolex />}
      </div>
    </div>
  );
}

export default Listing;
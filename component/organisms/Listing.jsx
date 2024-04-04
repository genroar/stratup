import React, { useState } from "react";
import '../../app/globals.css'
import ListingButton from "../molecules/ListingButton";
import BuyHome from "./BuyHome";
import Rolex from "./WatchBrand";
import Homesource from "./Homesource";

function Listing() {
  const [activeTab, setActiveTab] = useState("buy");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="">
      <ListingButton
        buy={() => handleTabChange("buy")}
        sell={() => handleTabChange("sell")}
        source={() => handleTabChange("source")}
        consign={() => handleTabChange("consign")}
      />
      <div className=" w-[1200px] flex flex-col justify-center source items-center  rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px]">
        {activeTab === "buy" && <BuyHome />}
        <div className="py-[50px]">
        <div >{activeTab === "sell" && <Rolex />}</div>
        {activeTab === "source" && <Homesource/>}
        <div className="">{activeTab === "consign" && <Rolex />}</div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
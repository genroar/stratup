import React, { useState } from "react";
import "../../app/globals.css";
import ListingButton from "../molecules/ListingButton";
import BuyHome from "./BuyHome";
import WatchBrand from "./WatchBrand";
import Homesource from "./Homesource";
import HomeConsign from "./HomeConsign";
import HomeSell from "./HomeSell";

function Listing() {
  const [activeTab, setActiveTab] = useState("buy");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className=" container">
      <ListingButton
        buy={() => handleTabChange("buy")}
        sell={() => handleTabChange("sell")}
        source={() => handleTabChange("source")}
        consign={() => handleTabChange("consign")}
      />
      <div className="flex flex-col container justify-center  source items-center  shadow-opacity-10  rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px]">
        {activeTab === "buy" && <BuyHome />}
        <div className="py-[50px] w-full">
          <div>{activeTab === "sell" && <HomeSell sellShadow={`shadow-top`} />}</div>
          <div className="mt-[-5px]">{activeTab === "source" && <Homesource />}</div>
          <div className="mt-[-50px] rounded-[50px]">{activeTab === "consign" && <HomeConsign consignShadow={`shadow-top py-[70px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px]`} />}</div>
        </div>
      </div>
    </div>
  );
}

export default Listing;

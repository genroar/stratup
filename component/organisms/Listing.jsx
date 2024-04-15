import React, { useState } from "react";
import "../../app/globals.css";
import ListingButton from "../molecules/ListingButton";
import BuyHome from "./BuyHome";
import WatchBrand from "./WatchBrand";
import Homesource from "./Homesource";

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
      <div className="flex flex-col container justify-center source items-center shadow-black shadow-opacity-10  rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px]">
        {activeTab === "buy" && <BuyHome />}
        <div className="py-[50px]">
          <div>{activeTab === "sell" && <WatchBrand shadow={`shadow-top`} />}</div>
          {activeTab === "source" && <Homesource />}
          <div className="">{activeTab === "consign" && <WatchBrand shadow={`shadow-top`} />}</div>
        </div>
      </div>
    </div>
  );
}

export default Listing;

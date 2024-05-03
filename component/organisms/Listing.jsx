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
    <div className="">
      <ListingButton
        buy={() => handleTabChange("buy")}
        sell={() => handleTabChange("sell")}
        source={() => handleTabChange("source")}
        consign={() => handleTabChange("consign")}
      />
      <div className=" flex-col justify-center  source items-center  shadow-top  rounded-tr-[50px] rounded-br-[50px]  rounded-bl-[50px]">
        <div className="xl:py-[50px] lg:py-[50px] md:py-[50px] pt-[50px] pb-[30px] w-full">
          {activeTab === "buy" && <BuyHome />}
          <div>{activeTab === "sell" && <HomeSell  />}</div>
          <div className="mt-[-5px]">{activeTab === "source" && <Homesource />}</div>
          <div className="mt-[-50px] rounded-[50px]">{activeTab === "consign" && <HomeConsign consignShadow={` pt-[50px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px]`} />}</div>
        </div>
      </div>
    </div>
  );
}

export default Listing;

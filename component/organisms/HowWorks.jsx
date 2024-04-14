import React, {useState} from "react";
import Worksinput from "../molecules/Worksinput";
import Head from "next/head";
import Heading from "../atoms/Heading";
import WorksButtons from "../molecules/WorksButtons";
import Filterdrop from "../atoms/Filterdrop";
import OverView from "./OverView";

function HowWorks() {
  const [activeTab, setActiveTab] = useState('view');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex flex-col  bg-lightGray ">
      <div className="flex flex-col w-[835px] container  justify-center gap-[10px] py-[150px]">
        <div className="text-center">
          <Heading level="1">Find out how much your watch is worth</Heading>
        </div>
        <Worksinput />
      </div>
      <div className="pb-[100px]">
        <div className="rounded-[50px] container bg-white shadow-lg ">
          <div className="flex flex-col items-center work justify-center py-[20px] gap-[20px] border-b-2 border-gray-500">
            <div className="text-center">
              <Heading level="1">How it works</Heading>
            </div>
            <div className="pb-[20px]">
              <WorksButtons
                view={() => handleTabChange("view")}
                ad={() => handleTabChange("ad")}
                consign={() => handleTabChange("consign")}
                source={() => handleTabChange("source ")}
              />
            </div>
          </div>
          <div className="flex w-[1300px] gap-[50px] px-[20px] py-[20px]">
            {activeTab === "view" && <OverView />}
            {activeTab === "ad" && 'ad'}
            {activeTab === "consign" && 'consign'}
            {activeTab === "source" && 'source'}
          </div>

        </div>
      </div>
    </div>
  );
}

export default HowWorks;

import { useState } from "react";
import Heading from "../atoms/Heading";
import WorksButtons from "../molecules/WorksButtons";
import Worksinput from "../molecules/Worksinput";
import AdTittle from "./AdTittle";
import ConsignTittle from "./ConsignTittle";
import OverView from "./OverView";
import SourceTittle from "./SourceTittle";

function HowWorkshead() {
  const [activeTab, setActiveTab] = useState('view');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex flex-col   bg-lightGray ">
      <div className="py-[80px]">
        <div className="rounded-[50px] container bg-white shadow-lg ">
          <div className="flex flex-col items-center work justify-center pb-[17px] pt-[20px] gap-[17px] border-b-[1px] border-gray-400 border-opacity-30 ">
            <div className="text-center">
              <Heading level="1">How it works</Heading>
            </div>
            <div className="pb-[8px] w-full flex justify-center">
              <WorksButtons
                view={() => handleTabChange("view")}
                ad={() => handleTabChange("ad")}
                consign={() => handleTabChange("consign")}
                source={() => handleTabChange("source")}
              />
            </div>
          </div>
          <div className="flex gap-[50px] px-[5px] py-[5px]">
            {activeTab === "view" && <OverView />}
            {activeTab === "ad" && <AdTittle/>} 
            {activeTab === "consign" && <ConsignTittle />}
            {activeTab === "source" &&  <SourceTittle /> }
          </div>

        </div>
      </div>
    </div>
  );
}

export default HowWorkshead;

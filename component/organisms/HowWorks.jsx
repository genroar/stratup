import { useState } from "react";
import Heading from "../atoms/Heading";
import WorksButtons from "../molecules/WorksButtons";
import Worksinput from "../molecules/Worksinput";
import AdTittle from "./AdTittle";
import ConsignTittle from "./ConsignTittle";
import OverView from "./OverView";
import SourceTittle from "./SourceTittle";
import Container from "../atoms/Container";

function HowWorks() {
  const [activeTab, setActiveTab] = useState('view');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="rounded-tl-[50px] rounded-tr-[50px]  bg-lightGray ">
      <Container>
        <div className="flex flex-col justify-center items-center gap-[30px]  xl:py-[150px] lg:py-[150px] md:py-[50px] sm:py-[50px] py-[30px]">
          <div className="text-center mb-[-10px] ">
            <Heading level="1">Find out how much your watch is worth</Heading>
          </div>
          <Worksinput />
        </div>
        <div className="xl:pb-[100px] lg:pb-[100px] pb-[50px]">
          <div className="rounded-[50px] bg-white shadow-lg ">
            <div className="flex flex-col items-center work justify-center pb-[17px] pt-[20px] gap-[17px] border-b-[1px] border-gray-400 border-opacity-30 ">
              <div className="text-center pt-[10px]">
                <Heading level="2">How it works</Heading>
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
              {activeTab === "ad" && <AdTittle />}
              {activeTab === "consign" && <ConsignTittle />}
              {activeTab === "source" && <SourceTittle />}
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}

export default HowWorks;

import React from "react";
import WatchModel from "../../atoms/WatchModel";
import Modelhead from "../../atoms/Modelhead";
import { LiaLessThanSolid } from "react-icons/lia";
import Other from "../../atoms/Other";
import { RxCross1 } from "react-icons/rx";

      
      function ModelPaper({onSelectPaper, onSelectType }) {
  const handlePaperSelect = (paper) => {
    onSelectPaper(paper);
  };

  return (
    <div className="flex justify-center items-center gap-[90px] flex-col ">
      <div className=" ">
        <div className="w-[390px] flex  gap-[20px] flex-col">
          <div className="flex s">
            <Modelhead
              onclick={ onSelectType}
              icon={<LiaLessThanSolid  /> }
              heading="Original box & Papers"
              description="Do you have the original box & papers?"
              subDescription="Select an option below"
            />
          </div>
          <div className="ml-[40px]">
            <div className="flex flex-col gap-[10px] ">
              <button onClick={() => handlePaperSelect('paper1')} ><WatchModel text="Box & Papers" /></button>
              <button onClick={() => handlePaperSelect('paper2')} ><WatchModel text="Box Only" /></button>
              <button onClick={() => handlePaperSelect('paper3')} ><WatchModel text="Papers Only" /></button>
              <button onClick={() => handlePaperSelect('paper4')} ><WatchModel text="No Box and Papers" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelPaper;

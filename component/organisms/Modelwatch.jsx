import React from "react";
import { RxCross1 } from "react-icons/rx";
import WatchModel from "../atoms/WatchModel";
import Modelhead from "../atoms/Modelhead";
import { LiaLessThanSolid } from "react-icons/lia";
import Other from "../atoms/Other";
import ButtonCross from "../atoms/ButtonCross";
function Modelwatch({ onSelectModel }) {
  const handlModelSelelct = (Model) => {
    onSelectModel(Model);
  };

  return (
    <div className="flex  pt-[100px] items-center justify-center">
      <div className="flex flex-col ">
        <div className="flex flex-col items-center justify-center">
          <div className="w-[730px]  flex flex-col gap-[20px]">
            <div className="flex items-center justify-center ">
              <Modelhead
                icon={<LiaLessThanSolid />}
                heading="Watch Model"
                description="What is the model of your watch?"
                subDescription="Find or select an option below"
              />
            </div>
            <div className="w-[730px] flex flex-wrap gap-[10px]">
              <button onClick={() => handlModelSelelct("Model1")}>
                <WatchModel text="Model 1" />
              </button>
              <button onClick={() => handlModelSelelct("Model2")}>
                {" "}
                <WatchModel text="Model 5" />
              </button>
              <button onClick={() => handlModelSelelct("Model3")}>
                {" "}
                <WatchModel text="Model 2" />
              </button>
              <button onClick={() => handlModelSelelct("Model4")}>
                {" "}
                <WatchModel text="Model 6" />
              </button>
              <button onClick={() => handlModelSelelct("Model5")}>
                {" "}
                <WatchModel text="Model 3" />
              </button>
              <button onClick={() => handlModelSelelct("Model6")}>
                {" "}
                <WatchModel text="Model 7" />
              </button>
              <button onClick={() => handlModelSelelct("Model7")}>
                {" "}
                <WatchModel text="Model 4" />
              </button>
              <button onClick={() => handlModelSelelct("Model8")}>
                {" "}
                <WatchModel text="Model 8" />
              </button>
            </div>
            <div className="flex justify-center items-center w-[73[]0px]">
              <Other child="Other" parent="Other" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modelwatch;

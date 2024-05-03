import React from "react";
import { RxCross1 } from "react-icons/rx";
import WatchModel from "../atoms/WatchModel";
import Modelhead from "../atoms/Modelhead";
import { LiaLessThanSolid } from "react-icons/lia";
import Other from "../atoms/Other";
import ButtonCross from "../atoms/ButtonCross";

function Modelwatch({ onSelectModel, onSelectType }) {
  const handlModelSelelct = (Model) => {
    onSelectModel(Model);
  };

  return (
    <div className="flex w-[100%] items-center justify-center">
      <div className="">
        <div className="">
          <div className="flex xl:w-[700px] lg:w-[700px] md:w-[100%] flex-col gap-[20px]">
            <div className=" ">
              <Modelhead
                icon={<LiaLessThanSolid  /> }
                onclick = {onSelectType}
                heading="Watch Model"
                description="What is the model of your watch?"
                subDescription="Find or select an option below"
              />
            </div>
            <div className="  grid grid-cols-2 gap-[10px]">
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
            <div className="flex justify-center items-center">
              <Other child="Other" parent="Other" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modelwatch;

import React from "react";
import { LiLessThanSolid } from "react-icons/lia";
import Heading from "./Heading";

function Modelhead({ icon, heading, description, subDescription }) {
  return (
    <div className="flex items-center">
      {/* <button>{icon}</button> */}
      <div className="flex flex-col text-center">
        <div className="flex items-center">
          <div className=" ">
            {" "}
            <button>{icon}</button>
          </div>
          <div className="flex items-center ">
            <div className="flex flex-col text-center justify-center w-[360px]">
              <Heading level="4">{heading}</Heading>
              <span className="text-[15px] font-normal">{description}</span>
              <span className="text-gray-800 text-opacity-50 text-[13px] font-normal">
                {subDescription}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modelhead;

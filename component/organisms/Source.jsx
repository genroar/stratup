import React from "react";
import Heading from "../atoms/Heading";
import SourceSpan from "../atoms/SourceSpan";
import FAQdrop from "../atoms/FAQdrop1";

function Source() {
  return (
    <div className="" >
      <div className="left 	 flex-flex-col gap-[25px] ">
        <div>
          <Heading level="3">Source</Heading>
          <SourceSpan variant="secondary">
            Let us fins the watch you want transparently and for set fee
          </SourceSpan>
        </div>
        <div className="inner">
            <div className="main">
                <div><FAQdrop  ></FAQdrop></div>
            </div>
            <div className="main"></div>
            <div className="main"></div>
        </div>
      </div>
    </div>
  );
}

export default Source;

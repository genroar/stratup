import ProfileInput from "@/component/atoms/Profileinput";
import SaveButton from "@/component/atoms/SaveButton";
import SourceSpan from "@/component/atoms/SourceSpan";
import React from "react";

function ProDetail() {
  return (
    <div className="flex relative w-[990px] flex-col gap-[20px]">
      <div className="flex   gap-[20px] py-[20px] px-[20px] border rounded-[20px]">
          <div className="flex flex-col gap-[20px]" >
          <div className="flex  flex-col gap-[10px]">
          <SourceSpan variant="primary">Country</SourceSpan>
          <ProfileInput variant="primary" type="text"></ProfileInput>
        </div>
        <div className="flex flex-col gap-[10px]">
          <SourceSpan variant="primary">Address</SourceSpan>
          <ProfileInput variant="primary" type="text"></ProfileInput>
        </div>
          </div>
          <div className="flex flex-col gap-[20px]" >
          <div className="flex flex-col gap-[10px]">
          <SourceSpan variant="primary">City</SourceSpan>
          <ProfileInput variant="primary" type="text"></ProfileInput>
        </div  >
        <div className="flex flex-col gap-[10px]">
          <SourceSpan variant="primary">Street</SourceSpan>
          <ProfileInput variant="primary" type="text"></ProfileInput>
        </div>
          </div>
      </div>
      <SaveButton />
    </div>
  );
}

export default ProDetail;

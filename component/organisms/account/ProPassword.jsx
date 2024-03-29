import ProfileInput from "@/component/atoms/Profileinput";
import SaveButton from "@/component/atoms/SaveButton";
import SourceSpan from "@/component/atoms/SourceSpan";
import React from "react";

function ProPassword() {
  return (
    <div className="flex relative w-[990px] flex-col gap-[20px]" >
      <div className="flex flex-col gap-[20px] py-[20px] px-[20px] border rounded-[20px]">
        <div className="flex flex-col gap-[10px]">
          <SourceSpan variant="primary">Password</SourceSpan>
          <ProfileInput variant="primary" type="password"></ProfileInput>
        </div>
        <div className="flex flex-col gap-[10px]">
          <SourceSpan variant="primary">Re-password</SourceSpan>
          <ProfileInput variant="primary" type="password"></ProfileInput>
        </div>
      </div>
      <SaveButton  />
    </div>
  );
}

export default ProPassword;

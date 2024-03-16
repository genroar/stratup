import React from "react";
import Heading from "../atoms/Heading";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

function SignUpmol() {
  return (
    <div className="flex flex-col gap-[30px] w-[360px] text-center border-2 border-gray-500 ">
      <Heading level="4">Sign up</Heading>
      <div className="flex flex-col gap-[20px]">
          <Input variant="primary" children="First name*" type="text"></Input>
          <Input variant="primary" children="Last name*" type="text"></Input>
          <Input variant="primary" children="Email**" type="email"></Input>
          <Input variant="primary" children="Password*" type="password"></Input>
        <div className="flex flex-col gap-[10px]">
          <Button variant="primary">Sign up</Button>
        </div>
      </div>
    </div>
  );
}

export default SignUpmol;

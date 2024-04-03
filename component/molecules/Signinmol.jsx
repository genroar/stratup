import React from "react";
import { useReducer } from "react";
import Heading from "../atoms/Heading";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useRouter } from "next/router";

function Signinmol() {

  const router = useRouter();
  const handleButtonClick = () => {
    router.push('/signup')
  } 

  return (
    <div className="flex flex-col gap-[30px] w-[360px] text-center ">
      <Heading level="4">Sign in</Heading>
      <div className="flex flex-col gap-[25px]">
        <div className="flex flex-col gap-[20px]">
          <Input variant="primary" placeholder="Email*" type="email"></Input>
          <Input variant="primary" placeholder="Password*" type="password"></Input>
        </div>
        <div className="flex flex-col gap-[10px]">
          <Button variant="primary">Sign in</Button>
          <Button onClick={handleButtonClick} variant="secondary">Sign up</Button>
        </div>
      </div>
    </div>
  );
}

export default Signinmol;

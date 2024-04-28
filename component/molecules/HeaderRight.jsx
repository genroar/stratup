import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "../atoms/Button";
import Dropdown from "../atoms/Dropdown";

function HeaderRight() {

 const router = useRouter()

 const handleLogin = () => {
  router.push("/login")
 }

  return (
    <div className="xl:flex lg:flex flex xl:flex-row lg:flex-row flex-col gap-[10px]">
      <Button
        onClick={handleLogin}
        variant="success"
      >
        Login
      </Button>
      <Dropdown />
    </div>
  );
}

export default HeaderRight;

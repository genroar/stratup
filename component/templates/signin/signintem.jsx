import Signinmol from "@/component/molecules/Signinmol";
import Header from "@/component/organisms/Header";
import React from "react";

function SignIntem() {
  return (
    <div>
      <div className="w-full py-[15px] header">
        <Header />
      </div>
      <div className=" flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
        <Signinmol />
      </div>
    </div>
  );
}

export default SignIntem;

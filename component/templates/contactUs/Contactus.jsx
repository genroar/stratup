import AboutUs from "@/component/organisms/AboutUs";
import Chat from "@/component/organisms/Chat";
import Header from "@/component/organisms/Header";
import HowWorks from "@/component/organisms/HowWorks";
import React from "react";

function Contactus() {
  return (
    <div>
      <Header />
      <AboutUs />
      <HowWorks />
      <div className="px-[60px] py-[50px] " >
        <Chat />
      </div>
    </div>
  );
}

export default Contactus;

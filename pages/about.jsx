import AboutUs2 from "@/component/molecules/AboutUs2";
import AboutUs from "@/component/organisms/AboutUs";
import Chat from "@/component/organisms/Chat";
import Footer from "@/component/organisms/Footer";
import Header from "@/component/organisms/Header";
import HowWorks from "@/component/organisms/HowWorks";
import React from "react";

function About() {
  return (
    <div>
      <Header />
      <AboutUs2 />
      <HowWorks />
      <div className="py-[50px]" >
        <Chat />
      </div>
      <Footer/>
    </div>
  );
}

export default About;

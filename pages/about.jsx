import AboutUs2 from "@/component/molecules/AboutUs2";
import AboutUs from "@/component/organisms/AboutUs";
import Chat from "@/pages/Chat";
import Footer from "@/component/templates/Footer";
import Header from "@/component/templates/Header";
import HowWorks from "@/component/organisms/HowWorks";
import React from "react";
import HowWorkshead from "@/component/organisms/Howworkshead";
import Header2 from "@/component/organisms/Header2";

function About() {
  return (
    <div>
      <Header />
      <AboutUs2/>
      <HowWorkshead />
      <div className="py-[50px]" >
        <Chat />
      </div>
      <Footer/>
    </div>
  );
}

export default About;

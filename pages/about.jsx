import AboutUs2 from "@/component/molecules/AboutUs2";
import AboutUs from "@/component/organisms/AboutUs";
import Chat from "@/pages/Chat";
import Footer from "@/component/templates/Footer";
import Header from "@/component/templates/Header";
import HowWorks from "@/component/organisms/HowWorks";
import React from "react";
import HowWorkshead from "@/component/organisms/Howworkshead";
import Header2 from "@/component/organisms/Header2";
import Container from "@/component/atoms/Container"; 

function About() {
  return (
    <div>
     <div>
     <Header />
      <AboutUs2/>
      <HowWorkshead />
     </div>
      <Container>
      <div className="py-[50px]" >
        <Chat />
      </div>
      </Container>
     <div>
     <Footer/>
     </div>
    </div>
  );
}

export default About;

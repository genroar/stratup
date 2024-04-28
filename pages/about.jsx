import AboutUs2 from "@/component/molecules/AboutUs2";
import HowWorkshead from "@/component/organisms/Howworkshead";
import Chat from "./Chat";
import Footer from "@/component/templates/Footer";
import Header from "@/component/templates/Header";

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

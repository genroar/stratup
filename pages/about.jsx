import AboutUs2 from "@/component/molecules/AboutUs2";
import HowWorkshead from "@/component/organisms/Howworkshead";
import Chat from "./Chat";
import Footer from "@/component/templates/Footer";
import Header from "@/component/templates/Header";
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

import Banner from "@/component/organisms/Banner";
import Listing from "@/component/organisms/Listing";
import AboutUs from "../organisms/AboutUs";
import FAQ from "../organisms/FAQ";
import Header2 from "../organisms/Header2";
import HowWorks from "../organisms/HowWorks";
import Container from "../atoms/Container";

function Home() {
  return (

    <div className="">
      <Container>
        <div>
          <Banner />
          <div className="px-[40px] flex items-center justify-center">
            <Listing />
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </Container>
      <div className="mt-[50px]">
        <HowWorks />
      </div>
      <Container>
        <AboutUs />
        <FAQ />
      </Container>
    </div>

  );
}

export default Home;

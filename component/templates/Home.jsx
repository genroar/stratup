import FAQ from "../organisms/FAQ";
import AboutUs from "../organisms/About-Us";
import Footer2 from "../organisms/Footer2";
import Header2 from "../organisms/Header2";
import HowWorks from "../organisms/HowWorks";
import Container from "../atoms/Container";
import Banner from "../organisms/Banner";
import Listing from "../organisms/Listing";

function Home() {
  return (
    <div className="">
      <Container>
        <div>
          <Banner />
          <div className="xl:px-[40px] lg:px-[40px] md:px-[20px] px-[0px] items-center justify-center">
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
        <div className="">
          <AboutUs />
        </div>
        <FAQ />
      </Container>
    </div>
  );
}

export default Home;

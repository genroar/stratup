import FAQ from "../organisms/FAQ";
import AboutUs from "../organisms/AboutUs";
import Footer2 from "../organisms/Footer2";
import Header2 from "../organisms/Header2";
import HowWorks from "../organisms/HowWorks";
import Banner from "@/component/organisms/Banner";
import Listing from "@/component/organisms/Listing";

function Home() {
  return (
    <div>
      <Header2 />
      <div className="">
        <div>
          <Banner />
          <div className="px-[80px] flex items-center justify-center">
            <Listing />
          </div>
          <div>
            <div></div>
          </div>
        </div>
        <div className="mt-[50px]">
        <HowWorks/>
        </div>
        <AboutUs/>
        <FAQ/>
      </div>
      <Footer2/>
    </div>
  );
}

export default Home;

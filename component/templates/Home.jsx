import Banner from "@/component/organisms/Banner";
import Listing from "@/component/organisms/Listing";
import Footer from "@/component/templates/Footer";
import AboutUs from "../organisms/AboutUs";
import FAQ from "../organisms/FAQ";
import Header2 from "../organisms/Header2";
import HowWorks from "../organisms/HowWorks";
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
        <HowWorks/>
        <AboutUs/>
        <FAQ/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

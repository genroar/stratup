import React from "react";
import Header from "./Header";
import Footer from "@/component/templates/Footer";
import Banner from "@/component/organisms/Banner";
import Listing from "@/component/organisms/Listing";
import HowWorks from "../organisms/HowWorks";
import AboutUs from "../organisms/AboutUs";
import FAQ from "../organisms/FAQ";
function Home() {
  return (
    <div>
      <div className="">
        <Header />
        <div>
          <Banner />
          <div className="flex items-center justify-center">
            <Listing />
          </div>
          <div>
            <div></div>
          </div>
        </div>
        <HowWorks/>
        <AboutUs/>
        <FAQ/>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

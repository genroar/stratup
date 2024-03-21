import React from "react";
import AboutUs from "@/component/organisms/AboutUs";
import Banner from "@/component/organisms/Banner";
import Header from "@/component/organisms/Header";
import HowWorks from "@/component/organisms/HowWorks";
import Listing from "@/component/organisms/Listing";

function Home1() {
  return (
    <div className="">
      <Header />
      <Banner />
      <div className="mx-8 pb-[100px] " >
        <Listing />
      </div>
      <HowWorks />
      <AboutUs />
    </div>
  );
}

export default Home1;

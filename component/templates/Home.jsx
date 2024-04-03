import React from "react";
import Header from "@/component/organisms/Header";
import Footer from "@/component/organisms/Footer";
import Banner from "@/component/organisms/Banner";
import Listing from "@/component/organisms/Listing";
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
        <Footer />
      </div>
    </div>
  );
}

export default Home;

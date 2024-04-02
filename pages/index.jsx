import React from "react";
import "../../strapup/app/globals.css";
import Header from "@/component/organisms/Header";
import Footer from "@/component/organisms/Footer";
import Banner from "@/component/organisms/Banner";
import Listing from "@/component/organisms/Listing";
import HowWorks from "@/component/organisms/HowWorks";
import AboutUs from "@/component/organisms/AboutUs";
import FAQ from "@/component/organisms/FAQ";
import ModelHeader from "@/component/molecules/ModelHeader";
import Modelcountry from "@/component/organisms/Modelcountry";
import ModelCondition from "@/component/molecules/ModelCondition";
function index() {
  return (
    <div className="">
      <Header />
      <div>
        <Banner />
        <div className="flex justify-center items-center">
          <Listing />
        </div>
        <div>
      <div> <HowWorks/></div>
      <div className="bg-white rounded-tl-[20px] rounded-tr-[20px] w-[100%]"><AboutUs/></div>
      <div className="mb-[20px]"><FAQ/></div>
        </div>
      </div>
      <Footer />
      {/* <Modelcountry/> */}
      <ModelCondition/>

      
    </div>
  );
}

export default index; 

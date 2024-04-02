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
import Modelprice from "@/component/organisms/Modelprice";
import Modelsignup from "@/component/organisms/Modelsignup";
import ModelYear from "@/component/molecules/ModelYear";
import ModelSize from "@/component/molecules/ModelSize";
import Modelmeterial from "@/component/molecules/Modelmeterial";
import ModelPaper from "@/component/molecules/ModelPaper";
import Photo from "@/component/organisms/Photo";
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
      {/* <ModelCondition/> */}
      {/* <Modelprice/> */}
      {/* <Modelsignup/> */}
      {/* <ModelYear/> */}
      {/* <ModelSize/> */}
      {/* <Modelmeterial/> */}
      {/* <ModelPaper/> */}
      {/* <Photo/> */}
      
    </div>
  );
}

export default index; 

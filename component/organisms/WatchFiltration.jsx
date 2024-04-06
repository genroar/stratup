import ButtonCross from "../atoms/ButtonCross";
import ModelSize from "./ModelSize";
import Modelwatch from "./Modelwatch";
import WatchBrand from "./WatchBrand";
import ModelYear from "./account/ModelYear";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import ModelCondition from "./account/ModelCondition";
import Modelmeterial from "./Modelmeterial";
import ModelPaper from "./account/ModelPaper";
import Photo from "./Photo";
import Modelprice from "./Modelprice";
import Modelcountry from "./Modelcountry";
import Modelsignup from "./Modelsignup";

function WatchFiltration() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectCondition, setSelectedCondition] = useState(null);
  // selelctbrand

  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const totalSteps = 10;

  const handleBrandSelect = (brand) => {
    // Do something with the selected brand
    console.log("Selected brand:", brand);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
    console.log(currentStep);
  };

  // modelwatch

  const handlModelSelelct = (model) => {
    console.log("selected model", model);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
    console.log(progress);
  };

  //model year

  const handlebrandYear = (year) => {
    console.log("selected model", year);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
    console.log(progress);
  };

  //modle condition

  const handleSelectCondition = (condition) => {
    console.log("selected condition", condition);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
    console.log(progress);
  };

  // modelsize

  const handelSizeSelect = (size) => {
    console.log("Select size", size);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
    console.log(progress);
  };

  // modle material

  const handleSelectMaterial = (material) => {
    console.log("Select material", material);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
    console.log(progress);
  };

  // model paper 

  const handleSelectPaper = (paper) => {
    console.log("Select paper", paper);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
    console.log(progress);
  };
 // model paper 

 const handlePicSelect = (pic) => {
  console.log("Select pic", pic);
  setCurrentStep(currentStep + 1);
  setProgress((currentStep / totalSteps) * 100);
  console.log(progress);
};

  // model price 

  const handlePriceSelect = (price) => {
    console.log("Select price", price);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
    console.log(progress);
  };
  
   // model country 

   const handleCountrySelect = (country) => {
    console.log("Select country", country);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
    console.log(progress);
  };

     // model country 

     const handleSignSelect = (signup) => {
      console.log("Select signup", signup);
      setCurrentStep(currentStep + 1);
      setProgress((currentStep / totalSteps) * 100);
      console.log(progress);
    };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
    setProgress(((currentStep - 2) / totalSteps) * 100);
  };

  return (
    <div>
      <div className="flex flex-col ">
        <div className="">
          <div className="main flex items-center px-[50px] py-[20px]">
            <ButtonCross />
            <div className="flex items-center justify-center w-full">
              <img
                className="w-[160px]"
                src="/assits/assits/image/header-Logo.png"
                alt=""
              />
            </div>
          </div>
        <ProgressBar progress={currentStep} totalSteps={totalSteps} />
        </div>
        {currentStep === 1 && <WatchBrand onSelectBrand={handleBrandSelect} />}
        {currentStep === 2 && <Modelwatch onSelectModel={handlModelSelelct} />}
        {currentStep === 3 && <ModelYear onSelectYear={handlebrandYear} />}
        {currentStep === 4 && <ModelCondition onSeleCondition={handleSelectCondition} />}
        {currentStep === 5 && <ModelSize onSelectSize={handelSizeSelect} />}
        {currentStep === 6 && <Modelmeterial onSelectMaterial={handleSelectMaterial} />}
        {currentStep === 7 && <ModelPaper onSelectPaper={handleSelectPaper} />}
        {currentStep === 8 && <Photo onSelectPic={handlePicSelect} />}
        {currentStep === 9 && <Modelprice onSelectPrice={handlePriceSelect} />}
        {currentStep === 10 && <Modelcountry onSelcetCountry={handleCountrySelect} />}
        {currentStep === 11 && <Modelsignup   onSelectSign={handleSignSelect} />}
      </div>
    </div>
  );
}

export default WatchFiltration;

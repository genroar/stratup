import { useState } from "react";
import ButtonCross from "../atoms/ButtonCross";
import ModelCondition from "./account/ModelCondition";
import ModelYear from "./account/ModelYear";
import Modelprice from "./Modelprice";
import Modelsignup from "./Modelsignup";
import Modelwatch from "./Modelwatch";
import Photo from "./Photo";
import ProgressBar from "./ProgressBar";
import Submitment from "./Submitment";
import WatchBrand from "./WatchBrand";

function ConsignFiltration() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectCondition, setSelectedCondition] = useState(null);
  // selelctbrand

  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0)
  const totalSteps = 8;

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

 // model photo 

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
  

  // model signup 

  const handleSginSelect = (signup) => {
    console.log("Select signup", signup);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
    console.log(progress);
  };
  
   // model submitment 

   const handleSubSlect = (sub) => {
    console.log("Select sub", sub);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
    console.log(progress);
  };
  


  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
  };

//   const handlePrevStep = () => {
//     setCurrentStep(currentStep - 1);
//     setProgress(((currentStep - 2) / totalSteps) * 100);
//   };

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
        {currentStep === 1 && <WatchBrand   onSelectBrand={handleBrandSelect}  />}
        {currentStep === 2 && <Modelwatch   onSelectModel={handlModelSelelct} />}
        {currentStep === 3 && <ModelYear   onSelectYear={handlebrandYear} />}
        {currentStep === 4 && <ModelCondition   onSeleCondition={handleSelectCondition} />}
        {currentStep === 5 && <Modelprice   onSelectPrice={handlePriceSelect} />}
        {currentStep === 6 && <Photo   onSelectPic={handlePicSelect} />}
        {currentStep === 7 && <Modelsignup   onSelectSign={handlePicSelect} />}
        {currentStep === 8 && <Submitment  />}
      </div>
    </div>
  );
}

export default ConsignFiltration;

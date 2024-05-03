import React, { useState } from "react";
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
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8;
  const [progress, setProgress] = useState(0);

  const handleBrandSelect = (brand) => {
    console.log("Selected brand:", brand);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
  };

  const handlModelSelelct = (model) => {
    console.log("selected model", model);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
  };

  const handlebrandYear = (year) => {
    console.log("selected model", year);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
  };

  const handleSelectCondition = (condition) => {
    console.log("selected condition", condition);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
  };

  const handlePicSelect = (pic) => {
    console.log("Select pic", pic);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
  };

  const handlePriceSelect = (price) => {
    console.log("Select price", price);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
  };

  const handleSginSelect = (signup) => {
    console.log("Select signup", signup);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
  };

  const handleSubSlect = (sub) => {
    console.log("Select sub", sub);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
  };

  return (
    <div>
      <div className="flex flex-col">
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
          <ProgressBar progress={progress} totalSteps={totalSteps} />
        </div>
       <div className="pt-[20px]">
       {currentStep === 1 && <WatchBrand onSelectBrand={handleBrandSelect} />}
        {currentStep === 2 && (
          <Modelwatch
            onSelectModel={handlModelSelelct}
            onSelectType={() => setCurrentStep(currentStep - 1)}
          />
        )}
        {currentStep === 3 && (
          <ModelYear
            onSelectYear={handlebrandYear}
            onSelectType={() => setCurrentStep(currentStep - 1)}
          />
        )}
        {currentStep === 4 && (
          <ModelCondition
            onSeleCondition={handleSelectCondition}
            onSelectType={() => setCurrentStep(currentStep - 1)}
          />
        )}
        {currentStep === 5 && (
          <Modelprice
            onSelectPrice={handlePriceSelect}
            onSelectType={() => setCurrentStep(currentStep - 1)}
          />
        )}
        {currentStep === 6 && (
          <Photo
            onSelectPic={handlePicSelect}
            onSelectType={() => setCurrentStep(currentStep - 1)}
          />
        )}
        {currentStep === 7 && (
          <Modelsignup
            sub={'Submit Form'}
            onSelectSign={handleSginSelect}
            onSelectType={() => setCurrentStep(currentStep - 1)}
          />
        )}
        {currentStep === 8 && <Submitment />}
       </div>
      </div>
    </div>
  );
}

export default ConsignFiltration;

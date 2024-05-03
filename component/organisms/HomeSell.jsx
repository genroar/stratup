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

function HomeSell() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectCondition, setSelectedCondition] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const totalSteps = 10;

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

  const handelSizeSelect = (size) => {
    console.log("Select size", size);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
  };

  const handleSelectMaterial = (material) => {
    console.log("Select material", material);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
  };

  const handleSelectPaper = (paper) => {
    console.log("Select paper", paper);
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

  const handleCountrySelect = (country) => {
    console.log("Select country", country);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
  };

  const handleSignSelect = (signup) => {
    console.log("Select signup", signup);
    setCurrentStep(currentStep + 1);
    setProgress((currentStep / totalSteps) * 100);
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
    <div className={`  py-[50px] mt-[-50px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px]`} >
        {currentStep === 1 && <WatchBrand onSelectBrand={handleBrandSelect} />}
        {currentStep === 2 && <Modelwatch onSelectModel={handlModelSelelct} onSelectType={handlePrevStep}/>}
        {currentStep === 3 && <ModelYear onSelectYear={handlebrandYear} onSelectType={handlePrevStep} />}
        {currentStep === 4 && <ModelCondition onSeleCondition={handleSelectCondition} onSelectType={handlePrevStep} />}
        {currentStep === 5 && <ModelSize onSelectSize={handelSizeSelect} onSelectType={handlePrevStep} />}
        {currentStep === 6 && <Modelmeterial onSelectMaterial={handleSelectMaterial}  onSelectType={handlePrevStep}/>}
        {currentStep === 7 && <ModelPaper onSelectPaper={handleSelectPaper} onSelectType={handlePrevStep}/>}
        {currentStep === 8 && <Photo onSelectPic={handlePicSelect} onSelectType={handlePrevStep}/>}
        {currentStep === 9 && <Modelprice onSelectPrice={handlePriceSelect} onSelectType={handlePrevStep}/>}
        {currentStep === 10 && <Modelcountry onSelcetCountry={handleCountrySelect} onSelectType={handlePrevStep}/>}
        {currentStep === 11 && <Modelsignup sub={'SignUp'} onSelectSign={handleSignSelect} onSelectType={handlePrevStep}/>}
    </div>
  );
}

export default HomeSell;

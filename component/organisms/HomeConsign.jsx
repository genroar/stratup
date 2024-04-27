import { useState } from "react";
import Modelprice from "./Modelprice";
import Modelsignup from "./Modelsignup";
import Modelwatch from "./Modelwatch";
import Photo from "./Photo";
import Submitment from "./Submitment";
import WatchBrand from "./WatchBrand";
import ModelCondition from "./account/ModelCondition";
import ModelYear from "./account/ModelYear";

function HomeConsign({consignShadow}) {
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
    <div className={`${consignShadow}`} >
      <div className="flex flex-col">
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
  );
}

export default HomeConsign;

import React from "react";

const FilterHeader = () => {

    const handleBrandSelect = (brand) => {
        console.log("Selected brand:", brand);
        setCurrentStep(currentStep + 1);
        setProgress((currentStep / totalSteps) * 100);
      };
    

    return(
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
    )
}
export default FilterHeader
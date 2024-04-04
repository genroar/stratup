import React from "react";
import Heading from "../atoms/Heading";
import CustomImage from "../atoms/CustomImage";
import Button from "../atoms/Button";
import Other from "../atoms/Other";
import { RxCross1 } from "react-icons/rx";
import ButtonCross from "../atoms/ButtonCross";
import WatchBrand from "./WatchBrand";
import Modelwatch from "./Modelwatch";
import ModelSize from "./ModelSize";
import ModelYear from "./account/ModelYear";

function WatchFiltration() {

  // selelctbrand

  const handleBrandSelect = (brand) => {
    // Do something with the selected brand
    console.log("Selected brand:", brand);
  };

  // modelwatch 

  const handlModelSelelct = (model) => {
    console.log('selected model' , model)
  }

  //model year

  
  const handlebrandYear = (year) => {
    console.log('selected model' , year)
  }

  // modelsize 

  const handelSizeSelect = (size) =>{
    console.log("Select size", size)
  }
  return (
    <div>
      <div className="flex flex-col gap-[50px]">
        <div className="">
          <div className="main flex items-center px-[50px] py-[20px]">
            <ButtonCross />
            <div className="flex justify-center items-center w-full">
              <img
                className="w-[160px]"
                src="/assits/assits/image/header-Logo.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-[15px] bg-gray-400 shadow-md">
            <div className="w-[180px] rounded-r-[10px] bg-gray-700 h-[15px]"></div>
          </div>
        </div>

        <WatchBrand onSelectBrand={handleBrandSelect} />
        <Modelwatch onSelectModel={handlModelSelelct} />
        <ModelYear onSelectYear={handlebrandYear} />
        <ModelSize onSelectSize={handelSizeSelect} />
      </div>
    </div>
  );
}

export default WatchFiltration;

import "../../../app/globals.css"
// import { GoPlus } from "react-icons";
import React, { useState } from "react";
import ProfileInput from "@/component/atoms/Profileinput";
import SourceSpan from "@/component/atoms/SourceSpan";
import SaveButton from "@/component/atoms/SaveButton";

// Define the URL of your default image
const DEFAULT_IMAGE_URL = "path_to_your_default_image.jpg";

function Profilegenrel() {
  const [imageSrc, setImageSrc] = useState(null);
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file instanceof Blob) {
      const reader = new FileReader();

      reader.onload = () => {
        setImageSrc(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file selected");
    }
  };
  
  return (
    <div className="flex relative flex-col gap-[20px]">
      <div className="rounded-[20px] flex flex-col divide-y border px-[20px] w-[990px] py-[20px] ">
        <div className="relative pb-[40px] image ">
          <img src="/assits/assits/image/profile.png" alt="" />
          <label
            htmlFor="fileInput"
            className=" absolute z-40 top-[100px] left-[110px] cursor-pointer "
            >
            {/* <GoPlus className="w-10 rounded-full bg-gray-600 px-[6px] py-[7px] h-10 text-white" /> */}
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            className="hidden "
            onChange={handleImageUpload}
            />
          {imageSrc && (
            <img
            src={imageSrc}
            alt="Uploaded"
            className="w-[150px] h-[150px] absolute top-[0px] rounded-full"
            />
          )}
        </div>
        <div className="flex pt-[10px] gap-[40px]">
          <div className="main flex flex-col gap-[20px] ">
            <div className="box flex flex-col gap-[10px] ">
              <SourceSpan variant="primary">First Name</SourceSpan>
              <ProfileInput variant="primary" type="text"></ProfileInput>
            </div>
            <div className="box flex flex-col gap-[10px] ">
              <SourceSpan variant="primary">Last Name</SourceSpan>
              <ProfileInput variant="primary" type="text"></ProfileInput>
            </div>
          </div>
          <div className="main flex flex-col gap-[20px]">
            <div className="box flex flex-col gap-[10px] ">
              <SourceSpan variant="primary">Email</SourceSpan>
              <ProfileInput variant="primary" type="email"></ProfileInput>
            </div>
            <div className="box flex flex-col gap-[10px] ">
              <SourceSpan variant="primary">Phone</SourceSpan>
              <ProfileInput variant="primary" type="number"></ProfileInput>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[432px] left-[990px] " >
        <SaveButton />
      </div>
    </div>
  );
}
export default Profilegenrel;

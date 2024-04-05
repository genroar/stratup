import React, { useState, useRef } from "react";
import Heading from "../atoms/Heading";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import Button from "../atoms/Button";

function Photo({ onSelectPic }) {
  const handlePicSelect = (pic) => {
    onSelectPic(pic);
  };

  const [photos, setPhotos] = useState([
    "/assits/assits/image/photo1.png",
    "/assits/assits/image/photo2.png",
    "/assits/assits/image/photo3.png",
    "/assits/assits/image/photo4.png",
    "/assits/assits/image/photo4.png",
  ]);

  const fileInputRef = useRef(null);

  const handleAddPhoto = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotos([...photos, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePhoto = (index) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
  };

  return (
    <div className="flex flex-col  pt-[100px] items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="main flex flex-col justify-center items-center text-center gap-[20px]">
          <div className="inner w-[360px] gap-[10px] flex flex-col ">
            <div className="flex flex-col gap-[10px] text">
              <span className="text-[20px] font-medium text-gray-700">
                Photos
              </span>
              <span className="text-[15px] font-normal">
                Upload photos for our experts to review
              </span>
            </div>
            <div className="upload bg-gray-700 bg-opacity-25 w-[360px] flex justify-between items-center px-[20px] rounded-[20px] h-[56px]">
              <div className="image items-center flex gap-[15px]">
                <div className="text-gray-700">
                  <img src="/assits/assits/svg/upload.svg" alt="" />
                </div>
                <div>
                  <span className="text-gray-700 text-[15px] font-medium">
                    Upload image
                  </span>
                </div>
              </div>
              <div className="flex items-center plus ">
                <button
                  className="text-gray-700 text-[30px]"
                  onClick={handleAddPhoto}
                >
                  <FiPlus />
                </button>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>
          <div className="photos flex w-[360px] flex-wrap gap-[13px]">
            {photos.map((photo, index) => (
              <div key={index} className="relative rounded-[10px] w-[80px] h-[80px]">
                <img src={photo} style={{ width: "80px", height: "80px", borderRadius: '10px' }}  alt="" />
                <button
                  className="bg-black bg-opacity-40 w-[20px] h-[20px] text-white rounded-[10px] absolute bottom-[60px] left-[60px]"
                  onClick={() => handleDeletePhoto(index)}
                >
                  <RxCross2 />
                </button>
              </div>
            ))}
          </div>
           
            <Button onClick={() => handlePicSelect("pic1")} variant='primary' >Next</Button>
        </div>
      </div>
    </div>
  );
}

export default Photo;

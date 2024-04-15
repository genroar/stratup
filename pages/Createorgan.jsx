import React, { useState, useRef } from 'react';
import { useRouter, } from 'next/router'; // Import useRouter from Next.js
import Createlisting from '../component/atoms/Createlisting';
import { AiOutlinePlus } from "react-icons/ai";
import Checkbox from "@/component/atoms/Checkbox"
import AnchorTag from '../component/atoms/Anchortag';
import Button from '../component/atoms/Button';
import { RxCross2 } from "react-icons/rx";
import { FiPlus } from 'react-icons/fi';
import { RxCross1 } from "react-icons/rx";

import Heading from '../component/atoms/Heading';
function Createorgan() {

  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/account")
  }

  const [photos, setPhotos] = useState([
    '/assits/assits/image/photo2.png',
    '/assits/assits/image/photo4.png',
    '/assits/assits/image/photo3.png',
    '/assits/assits/image/photo1.png',
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
    <div className=" shadow-top flex pb-[50px] flex-col gap-[50px]">
      <div className=''>
        <div className='main flex items-center px-[50px] py-[20px]'>
          <button onClick={handleButtonClick} ><RxCross1 /></button>
          <div className='flex justify-center items-center w-full'><img className='w-[160px]' src="/assits/assits/image/header-Logo.png" alt="" /></div>
        </div>
        <div className='w-full h-[15px] bg-gray-400 shadow-md'>
          <div className='w-full rounded-r-[10px] bg-gray-700 h-[15px]'>

          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-[990px] shadow-sm rounded-[20px]'>
          <div className='px-[20px] py-[10px]'><Heading level='3'>Listing Creation</Heading></div>
          <div className='w-[990px] flex flex-wrap gap-[20px] px-[20px] justify-between'>
            <div className='text flex flex-col gap-[5px]'>
              <span className='text-[15px] font-normal'>Brand</span>
              <Createlisting parent='Type or select' child='Type or select' />
            </div>
            <div className='text flex flex-col gap-[5px]'>
              <span className='text-[15px] font-normal'>Watch Model</span>
              <Createlisting parent='Type or select' child='Type or select' />
            </div>
            <div className='text flex flex-col gap-[5px]'>
              <span className='text-[15px] font-normal'>Year</span>
              <Createlisting parent='Type' child='Type' />
            </div>
            <div className='text flex flex-col gap-[5px]'>
              <span className='text-[15px] font-normal'>Condition</span>
              <Createlisting parent='select' child='select' />
            </div>
            <div className='text flex flex-col gap-[5px]'>
              <span className='text-[15px] font-normal'>Case Diameter</span>
              <Createlisting parent=' select' child='select' />
            </div>
            <div className='text flex flex-col gap-[5px]'>
              <span className='text-[15px] font-normal'>Case material</span>
              <Createlisting parent='select' child='select' />
            </div>
            <div className='text flex flex-col gap-[5px]'>
              <span className='text-[15px] font-normal'>Box & Papers</span>
              <Createlisting parent='select' child='select' />
            </div>
            <div className='text flex flex-col gap-[5px]'>
              <span className='text-[15px] font-normal'>Price</span>
              <Createlisting parent='Type' child='Type ' />
            </div>
            <div className='text flex flex-col gap-[5px]'>
              <span className='text-[15px] font-normal'>Price type</span>
              <Createlisting parent='select' child='select' />
            </div>
            <div className='text flex flex-col gap-[5px]'>
              <span className='text-[15px] font-normal'>Country</span>
              <Createlisting parent='Type' child='Type' />
            </div>
          </div>
          <div className='px-[20px] py-[10px]'><span className='text-[15px] font-normal'>Images</span></div>
          <div className="inner flex gap-[15px] shadow-sm w-[928px] rounded-[10px] py-[10px] px-[10px]">
            <div className=" flex">
              <div className="upload bg-gray-700 bg-opacity-50 w-[80px] h-[80px]  rounded-[10px] ">
                <div className="image  gap-[15px]">
                  <div className='flex justify-center items-center flex-col'>
                    <div className="plus mt-[15px] flex justify-center items-center">
                      <button className="text-white text-[30px]" onClick={handleAddPhoto}>
                        <FiPlus />
                      </button>
                      <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                      />
                    </div>
                    <div>
                      <span className="text-white text-[10px] font-medium  ">Upload image</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="photos flex w-[1010px] flex-wrap gap-[13px]">
              {photos.map((photo, index) => (
                <div key={index} className="relative w-[80px] h-[80px]">
                  <img src={photo} className='w-[80px] h-[80px] rounded-[10px]  ' alt="" />
                  <button
                    className="bg-black bg-opacity-40 w-[20px] h-[20px] text-white rounded-[10px] absolute bottom-[60px] left-[60px]"
                    onClick={() => handleDeletePhoto(index)}
                  >
                    <RxCross2 />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className='cheack flex px-[20px] pt-[10px] pb-[40px] gap-[10px]'>
            <div><input type="checkbox" name="" id="" /></div>
            <span className=''>I accept the <AnchorTag>Terms & Conditions</AnchorTag></span>
          </div>
          <div className='w-[990px]'>
            <div className=' relative w-[235px] cursor-pointer h-[40px] bg-gray-700 rounded-[20px] flex justify-center items-center text-white flex-col float-right bottom-[50px]'>
              <Button >Add</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Createorgan;
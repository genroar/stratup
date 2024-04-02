import React from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import Heading from "../atoms/Heading";
function Contact() {
  return (
    <div className="">
      <div className=" flex flex-col gap-[20px] ">
        <div  className="flex flex-col gap-[10px]" >
        <Heading level="4" >Call us at this number</Heading>
        <span className="text-[18px] text-contactGray  text-opacity-80  " >+ 9 (999)-999-99-99</span>
        </div>
        <div className="flex flex-col gap-[10px]">
        <Heading level="4" >Call us at this number</Heading>
        <span className="text-[18px] text-contactGray text-opacity-80 " >+ 9 (999)-999-99-99</span>
        </div>
        <div className="flex flex-col gap-[10px]">
        <Heading level="4" >Call us at this number</Heading>
        <span className="text-[18px] text-contactGray   text-opacity-80" >+ 9 (999)-999-99-99</span>
        </div>
        <div className="flex flex-col gap-[10px]" >
          <Heading level="4" >Follow us on social networks</Heading>
        <div className="icon flex flex-row gap-[10px]">
          <button>
            <RiFacebookBoxFill className="w-[30px] h-[30px]" />
          </button>
          <button>
            <AiFillTwitterCircle className="w-[30px] h-[30px]" />
          </button>
          <button>
            <AiFillInstagram className="w-[30px] h-[30px]" />
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

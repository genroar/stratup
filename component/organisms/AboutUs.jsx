  import React from "react";
  import Heading from "../atoms/Heading";
  import Button from "../atoms/Button";
  import FAQdrop1 from "../atoms/FAQdrop1";
  import { TbMathGreater } from "react-icons/tb";
  import { TiMathGreaterThan } from 'react-icons/ti';

  function AboutUs() {
    return (
      <div className="rounded flex flex-col gap-[60px]  rounded-tr-[40px] rounded-tl-[40px] pt-[35px] pb-[30px]  " >
        <div className="about flex px-[30px] gap-[30px] items-center ">
          <div className=" w-[600px] ">
            <img src="/assits/assits/image/home about us.png" alt="" />
          </div>
          <div className="gap-[20px] raltive flex flex-col ">
            <Heading level="2">About us</Heading>
            <div className=" flex flex-col gap-[15px] ">
              <Heading level="5">
                Describtion of the project - Our company guarantees comfortable{" "}
                <br />
                cooperation, high-quality teaching and excellent experts. Our
                company <br /> guarantees comfortable cooperation, high-quality
                teaching and excellent <br /> experts our company guarantees
                comfortable{" "}
              </Heading>
              <Heading level="5">
                Describtion of the project - Our company guarantees comfortable{" "}
                <br />
                cooperation, high-quality teaching and excellent experts. Our
                company <br /> guarantees comfortable cooperation, high-quality
                teaching and excellent <br /> experts our company guarantees
                comfortable{" "}
              </Heading>
            </div>
            <div className="relative ">
              <div className="absolute mt-[-12px] left-[425px]" > 
              <div className="flex w-[142px] h-[40px] rounded-[40px] border-[1px] border-border items-center justify-between px-[10px] text-[16px] font-medium "><button className="text-border">Read more</button>
                <div><TbMathGreater  className="text-border"/></div>
              </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    );
  }

  export default AboutUs;

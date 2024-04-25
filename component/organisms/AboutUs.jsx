import { TbMathGreater } from "react-icons/tb";
import Heading from "../atoms/Heading";

function AboutUs() {
  return (
    <div className="rounded flex flex-col   rounded-tr-[40px] rounded-tl-[40px] pt-[35px] pb-[30px]  " >
      <div className="about flex  gap-[30px] container items-center ">
        <div className=" w-[600px]">
          <img src="/assits/assits/image/home about us.png" alt="" />
        </div>
        <div className="gap-[30px] raltive flex flex-col ">
          <div className="text flex flex-col gap-[13px] ">
            <Heading level="2">About us</Heading>
            <div className=" flex flex-col gap-[12px] ">
              <span className=" leading-lineHeight text-[18px] font-regular leading-[26px] text-gray-700 ">
                Describtion of the project - Our company guarantees comfortable{" "}
                <br />
                cooperation, high-quality teaching and excellent experts. Our
                company <br /> guarantees comfortable cooperation, high-quality
                teaching and excellent <br /> experts our company guarantees
                comfortable{" "}
              </span>
              <span className=" leading-lineHeight text-[18px] font-regular leading-[26px] text-gray-700 ">
                Describtion of the project - Our company guarantees comfortable <br /> cooperation, high-quality teaching and excellent experts. Our company <br />  guarantees comfortable cooperation, high-quality teaching and excellent <br />  experts our company guarantees comfortable high-quality teaching and <br />  excellent experts our company guarantees comfortable high-quality <br />  teaching and excellent experts our company guarantees comfortable
              </span>
            </div>
          </div>
          <div className="relative ">
            <div className="absolute mt-[-12px] left-[508px]" >
              <div className="flex w-[142px] h-[40px] rounded-[40px] border-[1px] border-border items-center justify-between px-[10px] text-[16px] font-medium "><button className="text-border">Read more</button>
                <div><TbMathGreater className="text-border" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;

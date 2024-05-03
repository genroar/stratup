import { IoIosArrowForward } from "react-icons/io";
import Heading from "../atoms/Heading";
import { useRouter } from 'next/router';

function AboutUs() {
  
  const router = useRouter()

  const handleButtonClick = () => {
    router.push('/about');
  };

  return (
    <div className="">
      <div className="rounded flex flex-col rounded-tr-[40px] rounded-tl-[40px] pt-[35px] pb-[30px]">
        <div className="about grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-[30px] items-center">
          <div className="">
            <img className='w-full' src="/assits/assits/image/home about us.png" alt="" />
          </div>
          <div className="gap-[30px] relative flex flex-col">
            <div className="text flex flex-col md:mt-4 sm:mt-4 gap-[13px]">
              <Heading level="2">About us</Heading>
              <div className=" flex flex-col gap-[12px]">
                <span className="leading-lineHeight text-[18px] font-regular leading-[26px] text-gray-700 ">
                  Description of the project - Our company guarantees comfortable cooperation, high-quality teaching and excellent experts. Our
                  company guarantees comfortable cooperation, high-quality
                  teaching and excellent experts our company guarantees
                  comfortable
                </span>
                <span className="leading-lineHeight text-[18px] font-regular leading-[26px] text-gray-700 ">
                  Description of the project - Our company guarantees comfortable cooperation, high-quality teaching and excellent experts. Our company guarantees comfortable cooperation, high-quality teaching and excellent experts our company guarantees comfortable high-quality teaching and excellent experts our company guarantees comfortable high-quality teaching and excellent experts our company guarantees comfortable
                </span>
              </div>
            </div>
            <div className="relative ">
              <div className="xl:float-right lg:float-right md:float-right mt-[-12px]">
                <div className="flex xl:w-[142px] h-[40px] lg:w-[142px] md:w-[142px] sm:w-[full] rounded-[40px] border-[1px] border-border items-center justify-between px-[10px] text-[16px] font-medium">
                  <button className="text-border items-center gap-[18px] flex justify-between" onClick={handleButtonClick}>Read more <IoIosArrowForward className="text-gray-600" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

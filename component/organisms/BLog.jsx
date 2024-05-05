import React from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import CustomImage from "../atoms/CustomImage";

function Blog() {

  const router = useRouter();
  const handleClick = () => {
    router.push('news');
  };

  const position = ["md:"]
  const headingStyle = [""]
  const paragraphStyle = [""]

  return (
    <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1  gap-[20px] justify main">
      <div className="relative w-[100%] lft">
        <div className="block  cursor-pointer image1" onClick={handleClick}>
          <img  src="/assits/assits/image/blog 1.png" className="w-[100%]" alt="" />
        </div>
        <div className="text absolute bottom-[15px] text-white xl:left-[35px] lg:left-[35px] md:left-[35px] sm:left-[35px] left-[17px]">
          <span className="text-[32px] font-medium">Title</span>
          <p className="text-[14px] leading-[17.36px] w-[95%]  pt-[10px]">
            Our company guarantees comfortable cooperation, high-quality teaching and excellent experts our company guarantees comfortable cooperation, high-quality teaching and excellent experts oasd ur company
          </p>
        </div>
      </div>
      <div className="right flex flex-col w-[100%] gap-[20px]">
        <div className="flex justify-between  gap-[20px] ">
          <div className="relative w-[50%] ">
            <div className="block cursor-pointer " onClick={handleClick}>
              <img className="w-[100%]" src="/assits/assits/image/blog-2.png" />
            </div>
            <div className="absolute xl:bottom-[20px] lg:bottom-[20px] md:bottom-[20px] sm:bottom-[20px] bottom-[10px] text-white left-[15px]">
              <span className="text-[32px] font-medium">Title</span>
              <p className="text-[14px] leading-[17.36px]  pt-[10px]">
                Our company guarantees comfortable cooperation, high-quality teaching and excellent experts.
              </p>
            </div>
          </div>
          <div className="relative w-[50%] ">
            <div className="block cursor-pointer  " onClick={handleClick}>
              <img className="w-[100%]" src="/assits/assits/image/blog3.png" />
            </div>
            <div className="absolute xl:bottom-[40px] lg:bottom-[40px] md:bottom-[40px] sm:bottom-[40px] bottom-[10px] text-white left-[15px]">
              <span className="text-[32px] font-medium">Title</span>
              <p className="text-[14px] leading-[17.36px]  pt-[10px]">
                Our company guarantees comfortable cooperation, high-quality teaching and excellent experts.
              </p>
            </div>
          </div>
        </div>
        <div className="relative bottom">
          <div className="block cursor-pointer   image" onClick={handleClick}>
            <img src="/assits/assits/image/blog 4.png" className="w-[100%]" alt="" />
          </div>
          <div className=" absolute xl:bottom-[20px] lg:bottom-[20px] md:bottom-[20px] sm:bottom-[20px] bottom-[10px] text-white xl:left-[20px] lg:left-[20px] md:left-[20px] sm:left-[20px] left-[13px]">
            <span className="text-[32px] font-medium">Title</span>
            <p className="text-[14px] leading-[17.36px]  pt-[10px]">
              Our company guarantees comfortable cooperation, high-quality teaching and excellent experts our company guarantees comfortable cooperation, high-quality teaching and excellent experts oasd ur company
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;

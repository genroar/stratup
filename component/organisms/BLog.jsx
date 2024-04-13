import React from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import CustomImage from "../atoms/CustomImage";

function Blog() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/news');
  };

  const handleClick = () => {
    router.push('news');
  };

  return (
    <div className="flex justify-between main">
      <div className="relative lft">
        <div className="block image1" onClick={handleClick}>
          <img src="/assits/assits/image/blog 1.png" alt="" />
        </div>
        <div className="text absolute bottom-[20px] text-white left-[35px]">
          <span className="text-[32px] font-medium">Title</span>
          <p className="text-[14px] leading-[17.36px] w-[550px] pt-[10px]">
            Our company guarantees comfortable cooperation, high-quality teaching and excellent experts.
          </p>
        </div>
      </div>
      <div className="right flex flex-col gap-[20px]">
        <div className="flex justify-between tp">
          <div className="relative ">
            <div className="block " onClick={handleClick}>
              <CustomImage variant="four" src="/assits/assits/image/blog-2.png" />
            </div>
            <div className="absolute bottom-[20px] text-white left-[15px]">
              <span className="text-[32px] font-medium">Title</span>
              <p className="text-[14px] leading-[17.36px] w-[270px] pt-[10px]">
                Our company guarantees comfortable cooperation, high-quality teaching and excellent experts.
              </p>
            </div>
          </div>
          <div className="relative ">
            <div className="block " onClick={handleClick}>
              <CustomImage variant="four" src="/assits/assits/image/blog3.png" />
            </div>
            <div className="absolute bottom-[40px] text-white left-[15px]">
              <span className="text-[32px] font-medium">Title</span>
              <p className="text-[14px] leading-[17.36px] w-[270px] pt-[10px]">
                Our company guarantees comfortable cooperation, high-quality teaching and excellent experts.
              </p>
            </div>
          </div>
        </div>
        <div className="relative bottom">
          <div className="block image" onClick={handleClick}>
            <img src="/assits/assits/image/blog 4.png" alt="" />
          </div>
          <div className=" absolute bottom-[20px] text-white left-[20px]">
            <span className="text-[32px] font-medium">Title</span>
            <p className="text-[14px] leading-[17.36px] w-[581px] pt-[10px]">
              Our company guarantees comfortable cooperation, high-quality teaching and excellent experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;

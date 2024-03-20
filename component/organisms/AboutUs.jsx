import React from "react";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";

function AboutUs() {
  return (
    <div>
      <div className="about flex px-[30px] gap-[30px] items-center ">
        <div className=" w-[600px] ">
          <img src="/assits/assits/image/home about us.png" alt="" />
        </div>
        <div className="gap-[20px] raltive flex flex-col " >
          <Heading level="1">About us</Heading>
          <div className="para flex flex-col gap-[15px] ">
            <Heading level="5">
              Describtion of the project - Our company guarantees comfortable <br />
              cooperation, high-quality teaching and excellent experts. Our
              company <br /> guarantees comfortable cooperation, high-quality teaching
              and excellent <br /> experts our company guarantees comfortable{" "}
            </Heading>
            <Heading level="5">
              Describtion of the project - Our company guarantees comfortable <br />
              cooperation, high-quality teaching and excellent experts. Our
              company <br /> guarantees comfortable cooperation, high-quality teaching
              and excellent <br /> experts our company guarantees comfortable{" "}
            </Heading>
          </div>
          <div className="items-end " >
            <Button variant="aboutus">Read more</Button>
          </div>
        </div>
      </div>
      <div className="FAQ">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default AboutUs;

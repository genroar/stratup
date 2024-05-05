import React from "react";
import { useRouter } from 'next/router'; // Import useRouter from Next.js
import Heading from "@/component/atoms/Heading";
import SourceSpan from "@/component/atoms/SourceSpan";
import Button from "@/component/atoms/Button";

function Chat() {
  const router = useRouter(); 
  
  const handleButtonClick = () => {
    router.push('/contact');
  };

  return (
    <div className="flex items-center justify-center container w-full px-[10px] bg-gray-200 rounded-[25px]">
      <div className="w-[1340px] flex flex-col gap-[30px] items-center justify-center text-center  h-[258px]">
        <div className="flex flex-col gap-[5px]">
          <Heading level="1">Let’s Chat</Heading>
          <span className="xl:text-[20px] lg:text-[20px] md:text-[17px] text-gray-700 sm:text-[15px] text-[14px] font-thin text-overtext">
            Strap Up is a premier luxury watch concierge based in Dubai,
            offering a range of services including buying, <br /> selling,
            sourcing, and consigning high-end watches Strap Up is a
            </span>
        </div>
        <Button onClick={handleButtonClick} variant="contact">
          Contact us
        </Button>
      </div>
    </div>
  );
}

export default Chat;

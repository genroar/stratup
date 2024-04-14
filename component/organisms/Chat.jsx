import React from "react";
import { useRouter } from 'next/router'; // Import useRouter from Next.js
import Heading from "../atoms/Heading";
import SourceSpan from "../atoms/SourceSpan";
import Button from "../atoms/Button";
import Contact from "@/component/organisms/Contact";

function Chat() {
  const router = useRouter(); // Initialize useRouter
  
  const handleButtonClick = () => {
    // Navigate to the contact page when the button is clicked
    router.push('/contact');
  };

  return (
    <div className="flex items-center justify-center container w-full bg-gray-200 rounded-[25px]">
      <div className="w-[1340px] flex flex-col gap-[30px] items-center justify-center text-center  h-[258px]">
        <div className="flex flex-col gap-[5px]">
          <Heading level="1">Let’s Chat</Heading>
          <SourceSpan variant="secondary">
            Strap Up is a premier luxury watch concierge based in Dubai,
            offering a range of services including buying, <br /> selling,
            sourcing, and consigning high-end watches Strap Up is a
          </SourceSpan>
        </div>
        <Button onClick={handleButtonClick} variant="contact">
          Contact us
        </Button>
      </div>
    </div>
  );
}

export default Chat;

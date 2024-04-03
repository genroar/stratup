import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "../atoms/Button";
import Dropdown from "../atoms/Dropdown";

function HeaderRight({login}) {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex gap-[10px] h-[40px]">
      <Button
        onClick={() => {
          handleButtonClick("login");
          login();
        }}
        variant="success"
      >
        Login
      </Button>
      <Dropdown />
    </div>
  );
}

export default HeaderRight;

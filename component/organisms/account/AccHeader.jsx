import React, { useState } from "react";
import CustomImage from "@/component/atoms/CustomImage";
import Navigation from "@/component/molecules/Navigation";
import Heading from "@/component/atoms/Heading";
import { IoIosNotifications } from "react-icons/io";
import Button from "@/component/atoms/Button";
import Createorgan from "../Createorgan";

function AccHeader() {
  const [showCreate, setshowCreate] = useState(null);
  const toggleCreate = () => {
    setshowCreate(!showCreate);
  };

  return (
    <div>
      <div className="flex w-full py-3 header items-center px-6 h-16 justify-between">
        <div>
          <CustomImage
            variant="logo"
            src="/assits/assits/image/header-logo.png"
            alt="logo"
          />
        </div>
        <div>
          <Navigation />
        </div>
        <div className="flex items-center gap-4">
          <Heading level="4">En/Ar</Heading>
          <Button
            onClick={toggleCreate}
            variant="primary"
            className="w-40 h-10"
          >
            + Create Listing
          </Button>
          <IoIosNotifications className="w-8 h-8 bg-buttonGray px-1.5 py-1.5 rounded-full fill-white" />
          <div className="w-10 h-10 rounded-full">
            <img src="/assits/assits/image/profile.png" alt="profile" />
          </div>
        </div>
      </div>
      {showCreate && <Createorgan/>}
    </div>
  );
}

export default AccHeader;

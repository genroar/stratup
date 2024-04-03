import React , {useState} from "react";
import '../../app/globals.css';
import { useRouter } from 'next/router'
import CustomImage from "../atoms/CustomImage";
import Navigation from "../molecules/Navigation";
import HeaderRight from "../molecules/HeaderRight";
import SignUpmol from "../molecules/SignUpmol";

function Header() {

  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/Home')
  }

  const [activeTab, setActiveTab] = useState("genrel");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
       <div className="flex w-full py-[15px] header items-center px-[50px]  h-[65px] justify-between">
      <div>
        <button onClick={handleButtonClick} >
          <CustomImage
            variant="logo"
            src="/assits/assits/image/header-logo.png"
            alt="logo"
          />
        </button>
      </div>
      <div>
        <Navigation />
      </div>
      <div>
        <HeaderRight login={() => handleTabChange("login")} />
      </div>
    </div>
    {activeTab === "login" &&  <SignUpmol/>}

    </div>
  );
}

export default Header;

import React , {useState} from "react";
import '../../app/globals.css';
import { useRouter } from 'next/router'
import CustomImage from "../atoms/CustomImage";
import Navigation from "../molecules/Navigation";
import HeaderRight from "../molecules/HeaderRight";
import SignUpmol from "../molecules/SignUpmol";
import Link from "next/link"

function Header() {

  const router = useRouter();

  return (
    <div>
       <div className="flex w-full py-[15px] header items-center px-[50px]  h-[65px] justify-between">
      <div>
        <Link href="/" >
          <CustomImage
            variant="logo"
            src="/assits/assits/image/header-logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <Navigation />
      </div>
      <div>
        <HeaderRight />
      </div>
    </div>
    {/* {activeTab === "login" &&  <SignUpmol />} */}

    </div>
  );
}

export default Header;

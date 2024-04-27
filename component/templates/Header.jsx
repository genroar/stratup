import React, { useState } from "react";
import '../../app/globals.css';
import { useRouter } from 'next/router'
import CustomImage from "../atoms/CustomImage";
import Navigation from "../molecules/Navigation";
import HeaderRight from "../molecules/HeaderRight";
import SignUpmol from "../molecules/SignUpmol";
import Link from "next/link";
import Container from "../atoms/Container";

function Header() {
  const router = useRouter();

  return (
    <div className="w-full header">
      <div className="header">
        <Container>
          <div className="flex w-full py-[15px] items-center justify-between">
            <div>
              <Link href="/">
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
        </Container>
        {/* {activeTab === "login" && <SignUpmol />} */}
      </div>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import Heading from "../atoms/Heading";

import '../../app/globals.css';
import { useRouter } from 'next/router'
import CustomImage from "../atoms/CustomImage";
import Navigation from "../molecules/Navigation";
import HeaderRight from "../molecules/HeaderRight";
import SignUpmol from "../molecules/SignUpmol";
import Link from "next/link"
import Container from "../atoms/Container";

function Header2() {

  const router = useRouter();

  return (
    <div>
      <Container>
        <div className="flex w-full py-[15px]   items-center justify-between">
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
          <div className="flex gap-[15px] items-center" >
            <Heading level="4">En/Ar</Heading>
            <HeaderRight />
          </div>
        </div>
      </Container>

    </div>
  );
}


export default Header2;

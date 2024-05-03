import React, { useState } from "react";
import Heading from "../atoms/Heading";
import CustomImage from "../atoms/CustomImage";
import Navigation from "../molecules/Navigation";
import HeaderRight from "../molecules/HeaderRight";
import SignUpmol from "../molecules/SignUpmol";
import Link from "next/link";
import Container from "../atoms/Container";

function Header2() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <Container>
        <div className="flex w-full py-[15px] items-center">
          <div className="xl:w-[30%] lg:w-[30%] md:w-[50%] w-[50%]">
            <Link href="/">
              <CustomImage
                variant="logo"
                src="/assits/assits/image/header-logo.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="hidden lg:grid grid-cols-2 xl:w-[70%] lg:w-[70%] md:w-[50%] w-[50%]">
            <div>
              <Navigation />
            </div>
            <div className="flex justify-end gap-[15px] items-center">
              <Heading level="4">En/Ar</Heading>
              <HeaderRight />
            </div>
          </div>
          <div className="flex gap-[15px] items-center w-[50%] justify-end lg:hidden">
            <button onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {showMenu ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className={showMenu ? 'xl:hidden lg:hidden block humburger fixed z-10 w-full bg-[#FDFEFF] h-[100%] left-[0] top-[0]' : 'hidden lg:hidden'}>
            <div className="shadow-bottom">
              <Container>
                <div className="py-[15px] flex justify-between">
                  <div className="xl:w-[30%] lg:w-[30%] md:w-[50%] w-[50%]">
                    <Link href="/">
                      <CustomImage
                        variant="logo"
                        src="/assits/assits/image/header-logo.png"
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <button className="float-right z-50" onClick={toggleMenu}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {showMenu ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16m-7 6h7"
                        />
                      )}
                    </svg>
                  </button>
                </div>
              </Container>
            </div>
            <div className={`mt-4 absolute w-full text-center `}>
              <div>
                <Navigation />
              </div>
              <div className="lg:flex gap-[15px] flex flex-col-reverse items-center xl:my-[0] lg:my-[0] mt-[10px]">
              <div className="items-center flex justify-center"><Heading level="4">En/Ar</Heading></div>
                <div className="xl:my-[0] lg:my-[0] mt-[10px] flex items-center justify-center">
                  <HeaderRight />
                </div>
              </div>
            </div>
          </div>


        </div>
      </Container>
    </div>
  );
}











export default Header2;

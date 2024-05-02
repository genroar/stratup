import React from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import Link from "next/link";
import Heading from "../atoms/Heading";
import Header from "../templates/Header";
import Footer from "../templates/Footer";

function ContactUs() {
  return (
    <div>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1  gap-[40px] px-[40px] py-[40px] justify-between items-center ">
        <div className=" flex flex-col gap-[20px] ">
          <div className="flex flex-col gap-[10px]">
            <Heading level="4">Call us at this number</Heading>
            <span className="text-[18px] text-contactGray  text-opacity-80  ">
              + 9 (999)-999-99-99
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <Heading level="4">Company location</Heading>
            <span className="text-[18px] text-contactGray text-opacity-80 ">
              Moscow, Russia, Lenin Square Street 62/3
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <Heading level="4">Contact us by mail</Heading>
            <span className="text-[18px] text-contactGray   text-opacity-80">
              Stratup@mail.com
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <Heading level="4">Follow us on social networks</Heading>
            <div className="icon flex flex-row gap-[10px]">
              <button>
                <RiFacebookBoxFill className="w-[30px] h-[30px]" />
              </button>
              <button>
                <AiFillTwitterCircle className="w-[30px] h-[30px]" />
              </button>
              <button>
                <AiFillInstagram className="w-[30px] h-[30px]" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <Link href="">
            <img className="w-full" src="/assits/assits/image/Ma.png" alt="" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;

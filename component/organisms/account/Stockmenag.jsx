import Button from "@/component/atoms/Button";
import Heading from "@/component/atoms/Heading";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { TbDeviceWatchDollar } from "react-icons/tb";
import { TbDeviceWatchCheck } from "react-icons/tb";
import {React,useEffect} from "react";
import { getRelativePosition } from 'chart.js/helpers';
import Graph from "./Graph";


function Stockmenag() {
  return (
    <div className="w-[990px] flex flex-col gap-[20px]  ">
      <div className="flex justify-between">
        <Heading level="3">Stock Management</Heading>
        <Button variant="aboutus">+ Upload</Button>
      </div>
      <div className="flex gap-[20px] py-[20px]  flex-col rounded-[20px] border border-opacity-10 " >
        <div className=" rating w-[950px] flex flex-col items-center justify-center mx-auto h-[100px] rounded-[20px] border border-opacity-10 ">
          <div className="flex items-center ">
            <MdOutlineKeyboardArrowUp />
            <Heading level="1">14 000</Heading>
          </div>
          <p className="text-[13px] text-gray-800 text-opacity-50 ">
            Overall Profit/Loss
          </p>
        </div>
        <div className="w-[950px] flex gap-[30px] watches mx-auto ">
          <div className="w-[460px] h-[80px] flex justify-between px-[15px] py-[15px] border border-opacity-10 rounded-[20px] ">
            <div className="icon items-center flex gap-[10px]">
              <TbDeviceWatchDollar className="bg-gray-300 rounded-full w-[50px] h-[50px] px-[8px] py-[8px] " />
              <Heading level="5">Watches sold</Heading>
            </div>
            <Heading level="1">4</Heading>
          </div>
          <div className="w-[460px] h-[80px] flex justify-between px-[15px] py-[15px] border border-opacity-10 rounded-[20px] ">
            <div className="icon items-center flex gap-[10px]">
              <TbDeviceWatchCheck className="bg-gray-300 rounded-full w-[50px] h-[50px] px-[8px] py-[8px] " />
              <Heading level="5">Watches Available</Heading>
            </div>
            <Heading level="1">10</Heading>
          </div>
        </div>
        <div className="flex border border-opacity-10 rounded-[20px] w-[950px] py-[20px] px-[20px] justify-between mx-auto " >
            <div className="flex flex-col gap-[50px] " >
                <Heading level="4" >Listed brands</Heading>
                <div className="flex flex-col divide-y" >
                    <div className="flex w-[320px] justify-between" >
                        <Heading level="5" >Rolex</Heading>
                        <Heading level="5" >3</Heading>
                    </div>
                    <div className="flex w-[320px] justify-between" >
                        <Heading level="5" >Rolex</Heading>
                        <Heading level="5" >3</Heading>
                    </div>
                    <div className="flex w-[320px] justify-between" >
                        <Heading level="5" >Rolex</Heading>
                        <Heading level="5" >3</Heading>
                    </div>
                    <div className="flex w-[320px] justify-between" >
                        <Heading level="5" >Rolex</Heading>
                        <Heading level="5" >3</Heading>
                    </div>
                    <div className="flex w-[320px] justify-between" >
                        <Heading level="5" >Rolex</Heading>
                        <Heading level="5" >3</Heading>
                    </div>
                </div>
            </div>
            <Graph/>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Stockmenag;

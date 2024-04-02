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
                        <Heading level="5" >Tissot</Heading>
                        <Heading level="5" >2</Heading>
                    </div>
                    <div className="flex w-[320px] justify-between" >
                        <Heading level="5" >Patek Philippe</Heading>
                        <Heading level="5" >2</Heading>
                    </div>
                    <div className="flex w-[320px] justify-between" >
                        <Heading level="5" >Tag Heurer</Heading>
                        <Heading level="5" >1</Heading>
                    </div>
                    <div className="flex w-[320px] justify-between" >
                        <Heading level="5" >Omega</Heading>
                        <Heading level="5" >1</Heading>
                    </div>
                </div>
            </div>
            <Graph/>
        </div>
      </div>
      <div className="w-[990px] rounded-[20px] border border-opcaity-10  " >
        <table>
          <thead className="bb-[1px] py-[5px] justify-between" > 
            <tr className="flex justify-between items-center px-[10px] w-[990px]" >
              <th><p className="text-[13px] text-gray-800 text-opacity-50 " >Brand</p></th>
              <th><p className="text-[13px] text-gray-800 text-opacity-50 " >Model</p></th>
              <th><p className="text-[13px] text-gray-800 text-opacity-50 " >Serial</p></th>
              <th><p className="text-[13px] text-gray-800 text-opacity-50 " >Year</p></th>
              <th><p className="text-[13px] text-gray-800 text-opacity-50 " >Condition</p></th>
              <th><p className="text-[13px] text-gray-800 text-opacity-50 " >Bought</p></th>
              <th><p className="text-[13px] text-gray-800 text-opacity-50 " >Sold</p></th>
              <th><p className="text-[13px] text-gray-800 text-opacity-50 " >Profit</p></th>
              <th className="flex items-center justify-center text-white h-[35px] w-[35px] rounded-full bg-buttonGray" >+</th>
            </tr>
          </thead>
          <tbody className="m-auto" >
            <button>
              <tr  className="flex justify-between items-center px-[10px] w-[970px] rounded-[20px] h-[45px] hover:bg-gray-800 hover:bg-opacity-20  " >
                <td className="text-[13px] text-gray-800 " >Rolex</td>
                <td className="text-[13px] text-gray-800 " >Daytone</td>
                <td className="text-[13px] text-gray-800 " >II</td>
                <td className="text-[13px] text-gray-800 " >2019</td>
                <td className="text-[13px] text-gray-800 " >New</td>
                <td>
                  <div className="flex gap-[10px]" >
                  <p className="text-[13px] text-gray-800 text-opacity-50 " >12/01/24 </p>
                  <p className="text-[13px] text-gray-800 " >12 000$ </p>
                  </div>
                </td>
                <td>
                  <div className="flex gap-[10px]" >
                  <p className="text-[13px] text-gray-800 text-opacity-50 " >12/01/24 </p>
                  <p className="text-[13px] text-gray-800 " >15 000$ </p>
                  </div>
                </td>
                <td className="text-[13px] text-gray-800 " >3 000$</td>
                <td></td>
              </tr>
            </button>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Stockmenag;

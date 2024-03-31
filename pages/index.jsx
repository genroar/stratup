import React from "react";
import "../../strapup/app/globals.css";
import Acount from '@/component/organisms/account/Acount';
import Header from '@/component/organisms/Header';
import Stockmenag from "@/component/organisms/account/Stockmenag";
import Source from "@/component/organisms/Source";

function index() {
  return (
    <div className="">
      <Header/>
      <div>
      <Stockmenag/>
      </div>
    </div>
  )
}

export default index;

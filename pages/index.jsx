import React from "react";
import "../../strapup/app/globals.css";
import Acount from '@/component/organisms/account/Acount';
import Header from '@/component/organisms/Header';

function index() {
  return (
    <div className="">
      <Header/>
      <div>
        <Acount/>
      </div>
    </div>
  )
}

export default index;

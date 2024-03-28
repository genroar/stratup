import React from "react";
import "../../strapup/app/globals.css";
import Notification from "@/component/molecules/Notification";
import Watch from "@/component/molecules/Watch";
import Notificationbar from "@/component/organisms/Notificationbar";
import Notificationoffer from "@/component/organisms/Notificationoffer";
import Acount from '@/component/organisms/account/Acount';
import Profile from '@/component/organisms/account/Profile';
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

import React from "react";
import "../../strapup/app/globals.css";
import Account from "./Account";
import Createlisting from "@/component/atoms/Createlisting";
import Createorgan from "@/component/organisms/Createorgan";

function index() {
  return (
    <div className="">
      <Account/>      
      <Createorgan/>
    </div>
)
}
export default index

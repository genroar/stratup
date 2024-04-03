import React from "react";
import "../../strapup/app/globals.css";
import Blog from "@/component/templates/Blogtemp";
import Header from "@/component/templates/Header";
import CardSubmit from "@/component/organisms/CardSubmit";
import Home from "@/component/templates/Home";
import BLog from "@/component/organisms/BLog";
import Blogtemp from "@/component/templates/Blogtemp";
import AboutUs from "@/component/organisms/AboutUs";
import About from "./about";
import Signintemp from "@/component/templates/Signintemp";
import SignUpmol from "@/component/molecules/SignUpmol";
import SignUptemp from "@/component/templates/SignUptemp";
import Homesource from "@/component/organisms/Homesource";

function index() {
  return (
    <div className="">
      <Home />
    </div>
  );
}
export default index;

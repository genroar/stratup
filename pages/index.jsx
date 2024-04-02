import React from "react";
import "../../strapup/app/globals.css";
import Buy from "@/component/templates/Buy";
import About from "./about";
import Contact from "@/component/organisms/Contact";

function index() {
  return (
    <div className="">
      <About/>
      <Contact/>      
    </div>
  )
}

export default index;

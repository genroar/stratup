import React from "react";
import "../../strapup/app/globals.css";
import SignIntem from "@/component/templates/signin/signintem";
import Header from "@/component/organisms/Header";


function Home() {
  return (
    <div className="">
      <Header />
      <div>
      <SignIntem />
      </div>
    </div>
  );
}

export default Home;

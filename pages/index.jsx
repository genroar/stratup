import React from "react";
import "../../strapup/app/globals.css";
import Product from "@/component/molecules/Product";
import Button from "@/component/atoms/Button";


function Home() {
  return (
    <div >

      <div className="mt-[100px]" >
        <Product />
      </div>
    </div>
  );
}

export default Home;

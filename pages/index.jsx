import React from "react";
import "../../strapup/app/globals.css";
import Homesrc from "@/component/atoms/Homesrc";
import Homesource from "@/component/organisms/Homesource";
import ER from "@/component/molecules/ER";
import Model from "@/component/atoms/WatchModel";
import WatchModel from "@/component/atoms/WatchModel";
import Modelmolicule from "@/component/molecules/Modelmolicule";
import ModelYear from "@/component/molecules/ModelYear";
import ModelCondition from "@/component/molecules/ModelCondition";
import ModelSize from "@/component/molecules/ModelSize";
import Listing from "@/component/organisms/Listing";
import Buy from "@/component/templates/Buy";
import Modelmeterial from "@/component/molecules/Modelmeterial";
function Home() {
  return (
    <div className="">
      {/* <Homesrc /> */}
       {/* <Homesource/>  */}
       {/* <ER /> */}
       {/* <Model/> */}
       {/* <Modelmolicule/> */}
       {/* <ModelYear /> */}
       {/* <ModelCondition/> */}
       {/* <ModelSize/> */}
       {/* <Listing /> */}      
       {/* <Buy /> */}
       <Modelmeterial />
    </div>
  );
}

export default Home;

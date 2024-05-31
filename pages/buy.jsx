import { useRouter } from "next/router";
import Header2 from "@/component/organisms/Header2";
import Buy from "@/component/templates/Buy";
import Footer2 from "@/component/organisms/Footer2";

export default function buy() {

  

  

  return (
    <div>
      <div className="shadow-top">
        <Header2 />
      </div>
      <Buy />
      <div className="xl:hidden lg:hidden md:hidden sm:hidden ">
        <Footer2/>
      </div>
    </div>
  );
}

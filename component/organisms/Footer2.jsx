import Link from "next/link";
import "../../app/globals.css";
import CustomImage from "../atoms/CustomImage";
import Input from "../atoms/Input";
import Container from "../atoms/Container";

function Footer2() {
  return (
    <div className="main-footer  ">
      <div className="footer xl:py-[50px]  lg:py-[50px] md:py-[50px] sm:flex sm:justify-center sm:items-center sm:py-[30px] py-[20px]">
        <Container>
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:gap-[50px] lg:gap-[50px] md:gap-[50px] sm:gap-[50px] gap-[20px] xl:divide-x-[1px]  xl:divide-border2">
            <div className="strap xl:flex lg:flex md:flex sm:hidden hidden flex-col gap-[20px]">
              <div className="text-white">
                <CustomImage src="/assits/assits/image/footer.png" />
                <p className="text-[18px] font-light leading-[25.67px] pt-[15px]">
                  Subscribe to receive updates, access to <br />
                  exclusive deals and more
                </p>
              </div>
              <div className="relative">
                <div className="border-b-[1px] border-bg-white text-white">
                  <Input variant="five2" type="Email" placeholder="E-mail" />
                </div>
                <div className="absolute right-[0] top-[0]">
                  <img src="/assits/assits/svg/greater.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="xl:flex lg:flex md:flex sm:hidden hidden flex-row gap-[100px] xl:pl-[100px] lg:pl-[100px] md:pl-[100px] sm:pl-[20px]">
              <div className="text-white flex flex-col gap-[15px]">
                <Link href="/">Home</Link>
                <Link href="/about">About US</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/blog">Blog</Link>
              </div>
              <div className="text-white  flex flex-col gap-[15px]">
                <Link href="/buy">Buy</Link>
                <Link href="/sell">Sell</Link>
                <Link href="sourcing">Sourcing</Link>
                <Link href="consign">Consign</Link>
              </div>
            </div>
            <div className="flex flex-col xl:gap-[10px] lg:gap-[10px] md:gap-[10px] sm:gap-[10px]  gap-[10px] xl:pl-[100px] lg:pl-[100px] md:pl-[20px]  xl:justify-end  lg:justify-end md:justify-center sm:justify-center sm:items-center justify-center items-center ">
              <span className="mb-4 text-[20px] xl:flex lg:flex md:flex sm:hidden hidden text-medium text-white">Follow us</span>
              <div className="flex flex-row xl:gap-[10px] lg:gap-[10px] md:gap-[10px] sm:gap-[20px] gap-[20px]  xl:justify-end  lg:justify-end md:justify-end sm:justify-center justify-center items-center" >
                <img src="/assits/assits/svg/facebook.svg" alt="" />
                <img src="/assits/assits/svg/twiter.svg" alt="" />
                <img src="/assits/assits/svg/insta.svg" alt="" />
              </div>
              <div className=""><span className="mb-4 text-[14px] xl:hidden lg:hidden md:hidden sm:flex flex text-medium text-white">strat up, 2023</span></div>
              <div className="bg-white w-[120px] h-[39px] xl:flex lg:flex md:flex sm:hidden hidden justify-center items-center rounded-[40px] text-gray-700">
                <button className="text-[15px] font-medium">Contact us</button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer2;

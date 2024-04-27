import Link from "next/link";
import "../../app/globals.css";
import CustomImage from "../atoms/CustomImage";
import Input from "../atoms/Input";
import Container from "../atoms/Container";
function Footer2() {
  return (
    <div className="main-footer ">
      <div className="footer py-[50px] ">
        <Container>
          <div className="grid grid-cols-3 gap-[50px] divide-x-[1px] divide-border2">
            <div className="strap flex flex-col gap-[20px]">
              <div className="text-white">
                <CustomImage src="/assits/assits/image/footer.png" />
                <p className="text-[18px] font-light leading-[25.67px] pt-[15px]">
                  Subscribe to recieve updates, acces to <br />
                  exlusive deald and more
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
            <div className=" flex gap-[100px] pl-[100px]">
              <div className="text-white flex flex-col gap-[15px]">
                <Link href="/">Home</Link>
                <Link href="/about">About US</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/blog">Blog</Link>
              </div>
              <div className="text-white flex flex-col gap-[15px]">
                <Link href="/buy">Buy</Link>
                <Link href="/sell">Sell</Link>
                <Link href="sourcing">Sourcing</Link>
                <Link href="consign">Consign</Link>
              </div>
            </div>
            <div className="gap-[40px] pl-[100px] justify-end">
              <div className="gap-[10px]">
                <span className="mb-4 text-[20px] text-medium text-white">Follow us</span>
                <div className="flex mb-4 flex-row gap-[10px]">
                  <img src="/assits/assits/svg/facebook.svg" alt="" />
                  <img src="/assits/assits/svg/twiter.svg" alt="" />
                  <img src="/assits/assits/svg/insta.svg" alt="" />
                </div>
                <div className="bg-white w-[120px] h-[39px] flex justify-center items-center rounded-[40px] text-gray-700">
                  <button className="text-[15px] font-medium ">Contact us</button>
                </div>
              </div>
             
          </div>
      </div>
      </Container>
    </div>
    </div >
  );
}

export default Footer2;

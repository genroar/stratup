import { useState } from "react";
import Button from "../atoms/Button";
import Dropprice from "../atoms/Dropprice";
import Heading from "../atoms/Heading";
import Input from "../atoms/Input";

function Modelprice({ onSelectPrice }) {
  const handlePriceSelect = (price) => {
    onSelectPrice(price);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  return (
    <div className="flex flex-col items-center justify-center pt-[100px]">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-[360px] flex flex-col gap-[20px] items-center text-center">
          <div className="">
            <div>
              <Heading level="4">Price</Heading>
            </div>
            <div>
              <span className="text-[15px] font-normal text-gray-700">
                How much does your watch cost?
              </span>
            </div>
            <div>
              <span className="text-[13px] font-normal text-gray-600 text-opacity-50">
                Enter the price you want to sell the watch for
              </span>
            </div>
          </div>
          <div className="">
            <Input variant="eight" type="input" placeholder="Type here" />
            <div className="relative bottom-[40px] float-end">
              <div className="relative inline-block text-left">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className=" justify-center w-[83px] h-[40px] rounded-[40px] border bg-buttonGray border-gray-300 shadow-sm items-center text-white flex text-sm font-medium"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  {selectedItem || "AED"}
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12l-8-8 1.5-1.5L10 9.25l6.5-6.75L18 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-[360px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                  >
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => handleItemClick("AED")}
                      >
                        AED
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => handleItemClick("PKR")}
                      >
                        PKR
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => handleItemClick("US Dollar")}
                      >
                        US Dollar
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-[-50px] text-center ">
            <div className="top-[0px]">
              <span className="text-[13px] font-normal text-gray-900">AND</span>
            </div>
            <div>
              <span className="text-gray-600 text-[13px] font-normal">
                Select the price type
              </span>
            </div>
          </div>
          <div className="">
            <Dropprice child="Fixed" parent="Fixed" />
          </div>
                <Button variant='primary' onClick={() => handlePriceSelect('price')} >Next</Button>
        </div>
      </div>
    </div>
  );
}

export default Modelprice;

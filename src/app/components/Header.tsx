import { PiStarFourFill } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[90%] mx-auto py-6 lg:px-6">
      <div className="relative flex justify-between items-center">
        <div className="flex space-x-1 items-center text-[28px] lg:text-[40px]">
          <PiStarFourFill className=" rotate-45" />
          <p className="font-semibold ">Positivus</p>
        </div>
        <div className="hidden lg:flex text-lg space-x-8 font-medium items-center">
          <p className="">About us</p>
          <p className="">Services</p>
          <p className="">Use Cases</p>
          <p className="">Pricing</p>
          <p className="">Blog</p>
          <p className="border border-black rounded-xl py-3 px-5">
            Request a quote
          </p>
        </div>
        <FaBars onClick={() => setOpen(!open)} className="text-[20px] lg:hidden"/>
        {/* mobile */}
        <div
          className={`lg:hidden flex flex-col bg-positivus-grey gap-6 rounded-lg p-4 text-[20px] font-medium items-center absolute w-full mx-auto transition-all ease-in-out duration-1000 ${
            open ? "top-12" : "top-[-20rem]"
          }`}
        >
          <p className="">About us</p>
          <p className="">Services</p>
          <p className="">Use Cases</p>
          <p className="">Pricing</p>
          <p className="">Blog</p>
          {/* <p className="border border-black rounded-xl py-2 px-4">
            Request a quote
          </p> */}
        </div>
      </div>
    </div>
  );
}

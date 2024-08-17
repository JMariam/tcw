import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function Case({ text }: any) {
  return (
    <div className="bg-positivus-dark lg:bg-transparent lg:border-r border-white lg:px-8 last-of-type:border-none p-12 lg:py-0 rounded-[3rem] lg:rounded-none">
      <p className="text-[16px] leading-[23px] font-[400] mb-3 text-white">
        {text}
      </p>
      <div className="flex items-center space-x-4">
        <p className="text-[18px] font-[400] text-positivus-green">
          Learn more
        </p>
        <FaArrowUpLong className="text-positivus-green text-[18px] rotate-45" />
      </div>
    </div>
  );
}

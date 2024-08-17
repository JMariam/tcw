import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

export default function Team({ name, title, img, text }: any) {
  return (
    <div className="border border-black border-b-4 rounded-[2.5rem] p-7">
      <div className="flex items-start justify-between">
        <img src={img} alt="" className="w-20" />
        <div className="self-end ">
          <p className="font-[700] text-[16px]">{name}</p>
          <div className="font-[500] text-[14px]">{title}</div>
        </div>
        <div className="text-positivus-green bg-positivus-dark rounded-[50%] p-2">
          <FaLinkedinIn className="" />
        </div>
      </div>
      <p className="pt-4 border-t border-black mt-4 font-[500] text-black">{text}</p>
    </div>
  );
}

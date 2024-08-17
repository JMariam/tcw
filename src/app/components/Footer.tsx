import { PiStarFourFill } from "react-icons/pi";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="overflow-hidden bg-positivus-dark lg:w-[90%] mx-auto px-14 py-10 lg:rounded-t-[1.5rem] mb-0 text-white">
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:justify-between items-center">
        <div className="flex space-x-1 items-center">
          <PiStarFourFill className="text-[32px] rotate-45" />
          <p className="font-semibold text-[32px]">Positivus</p>
        </div>
        <div className="flex flex-col lg:flex-row text-lg space-y-4 lg:space-y-0 lg:space-x-8 font-[300] items-center">
          <p className="underline">About us</p>
          <p className="underline">Services</p>
          <p className="underline">Use Cases</p>
          <p className="underline">Pricing</p>
          <p className="underline">Blog</p>
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            href="/"
            className="text-positivus-dark bg-white rounded-[50%] p-2"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="/"
            className="text-positivus-dark bg-white rounded-[50%] p-2"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="/"
            className="text-positivus-dark bg-white rounded-[50%] p-2"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
      <div className="lg:mt-6 mt-12 flex flex-col lg:flex-row justify-between text-center lg:text-start items-center gap-6">
        <div className="flex flex-col space-y-4">
          <p className="bg-positivus-green px-[0.15rem] mb-6 lg:mb-2 text-black text-[18px] rounded-lg w-fit self-center lg:self-start font-[500]">
            Contact Us:
          </p>
          <p className="text-white font-[300] text-[16px]">
            Email: info@positivus.com
          </p>
          <p className="text-white font-[300] text-[16px]">
            Phone: 555-567-8901
          </p>
          <p className="text-white font-[300] text-[16px]">
            Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
          </p>
        </div>
        <div className="bg-[#292A32] rounded-xl p-6 lg:px-12 lg:py-16">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="border border-white bg-transparent text-[16px] w-full caret-white outline-none rounded-lg px-3 py-2 lg:w-[185px] placeholder:text-white text-white"
          />
          <button className="bg-positivus-green text-[16px] text-black rounded-lg px-6 py-2 mt-4 lg:mt-0 lg:ml-4 w-full lg:w-fit">
            Subscribe to news
          </button>
        </div>
      </div>
      <div className="mt-10 pt-10 border-t border-white flex space-x-6">
        <p className="text-white font-[300] text-14px] lg:w-full w-[80%]">
          © 2023 Positivus. All Rights Reserved.
        </p>
        <Link href="/">
          <p className="text-white font-[300] text-[14px] underline">
            Privacy Policy
          </p>
        </Link>
      </div>
    </div>
  );
}

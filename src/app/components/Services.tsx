import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function Services() {
  return (
    <div className="w-[90%] mx-auto lg:p-6">
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-10">
        <p className="bg-positivus-green text-[40px] px-1 font-[600] rounded-md">
          Services
        </p>
        <p className="text-[16px] text-center lg:text-start lg:text-[18px] leading-[22px] font-[500] w-[105%] lg:w-[50%]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid lg:grid-cols-2 mt-16 mb-24 gap-12">
        <div className="bg-positivus-grey rounded-[3rem]  border border-black border-b-8 p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between space-y-8 lg:space-y-0">
          <div className="flex flex-col lg:space-y-24">
            <p className="flex flex-col font-[500] text-[26px] lg:text-[30px]">
              <span className="bg-positivus-green w-fit rounded-xl px-2">
                Search engine{" "}
              </span>
              <span className="rounded-xl w-fit px-2 bg-positivus-green">
                optimization
              </span>
            </p>
            <div className="hidden lg:flex items-center space-x-4">
              <FaArrowUpLong className="text-positivus-green text-4xl p-2 rounded-[50%] bg-positivus-dark rotate-45" />
              <p className="text-[20px] font-[400]">Learn more</p>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <FaArrowUpLong className="lg:hidden text-positivus-green text-4xl p-2 rounded-[50%] bg-positivus-dark rotate-45" />
            <img
              src="Ill2.png"
              alt=""
              className="w-[165px] h-[129px] lg:w-[210px] lg:h-[166px]"
            />
          </div>
        </div>
        <div className="bg-positivus-green rounded-[3rem]  border border-black border-b-8 p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between space-y-8 lg:space-y-0">
          <div className="flex flex-col space-y-24">
            <p className="flex flex-col font-[500] text-[26px] lg:text-[30px]">
              <span className="bg-white w-fit rounded-xl px-2">
                Pay-per-click{" "}
              </span>
              <span className="rounded-xl w-fit px-2 bg-white">
                advertising
              </span>
            </p>
            <div className="hidden lg:flex items-center space-x-4">
              <FaArrowUpLong className="text-positivus-green text-4xl p-2 rounded-[50%] bg-positivus-dark rotate-45" />
              <p className="text-[20px] font-[400]">Learn more</p>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <FaArrowUpLong className="lg:hidden text-positivus-green text-4xl p-2 rounded-[50%] bg-positivus-dark rotate-45" />
            <img
              src="Ill3.png"
              alt=""
              className="w-[165px] h-[129px] lg:w-[210px] lg:h-[166px]"
            />
          </div>{" "}
        </div>
        <div className="bg-positivus-dark rounded-[3rem]  border border-black border-b-8 p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between space-y-8 lg:space-y-0">
          <div className="flex flex-col space-y-24">
            <p className="flex flex-col font-[500] text-[26px] lg:text-[30px]">
              <span className="bg-white w-fit rounded-xl px-2">
                Social media{" "}
              </span>
              <span className="rounded-xl w-fit px-2 bg-white">marketing</span>
            </p>
            <div className="hidden lg:flex items-center space-x-4">
              <FaArrowUpLong className="text-positivus-dark text-4xl p-2 rounded-[50%] bg-white rotate-45" />
              <p className="text-[20px] font-[400] text-white">Learn more</p>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <FaArrowUpLong className="lg:hidden text-positivus-dark text-4xl p-2 rounded-[50%] bg-white rotate-45" />
            <img
              src="Ill4.png"
              alt=""
              className="w-[165px] h-[129px] lg:w-[210px] lg:h-[166px]"
            />
          </div>{" "}
        </div>
        <div className="bg-positivus-grey rounded-[3rem]  border border-black border-b-8 p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between space-y-8 lg:space-y-0">
          <div className="flex flex-col space-y-24">
            <p className="flex flex-col font-[500] text-[26px] lg:text-[30px]">
              <span className="bg-positivus-green w-fit rounded-xl px-2">
                Email{" "}
              </span>
              <span className="rounded-xl w-fit px-2 bg-positivus-green">
                Marketing
              </span>
            </p>
            <div className="hidden lg:flex items-center space-x-4">
              <FaArrowUpLong className="text-positivus-green text-4xl p-2 rounded-[50%] bg-positivus-dark rotate-45" />
              <p className="text-[20px] font-[400]">Learn more</p>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <FaArrowUpLong className="lg:hidden text-positivus-green text-4xl p-2 rounded-[50%] bg-positivus-dark rotate-45" />
            <img
              src="Ill7.png"
              alt=""
              className="w-[165px] h-[129px] lg:w-[210px] lg:h-[166px]"
            />
          </div>{" "}
        </div>
        <div className="bg-positivus-green rounded-[3rem]  border border-black border-b-8 p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between space-y-8 lg:space-y-0">
          <div className="flex flex-col space-y-24">
            <p className="flex flex-col font-[500] text-[26px] lg:text-[30px]">
              <span className="bg-white w-fit rounded-xl px-2">Content </span>
              <span className="rounded-xl w-fit px-2 bg-white">Creation</span>
            </p>
            <div className="hidden lg:flex items-center space-x-4">
              <FaArrowUpLong className="text-positivus-green text-4xl p-2 rounded-[50%] bg-positivus-dark rotate-45" />
              <p className="text-[20px] font-[400]">Learn more</p>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <FaArrowUpLong className="lg:hidden text-positivus-green text-4xl p-2 rounded-[50%] bg-positivus-dark rotate-45" />
            <img
              src="Ill6.png"
              alt=""
              className="w-[165px] h-[129px] lg:w-[210px] lg:h-[166px]"
            />
          </div>{" "}
        </div>
        <div className="bg-positivus-dark rounded-[3rem]  border border-black border-b-8 p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between space-y-8 lg:space-y-0">
          <div className="flex flex-col space-y-24">
            <p className="flex flex-col font-[500] text-[26px] lg:text-[30px]">
              <span className="bg-positivus-green w-fit rounded-xl px-2">
                Analytics and{" "}
              </span>
              <span className="rounded-xl w-fit px-2 bg-positivus-green">
                Tracking
              </span>
            </p>
            <div className="hidden lg:flex items-center space-x-4">
              <FaArrowUpLong className="text-positivus-dark text-4xl p-2 rounded-[50%] bg-white rotate-45" />
              <p className="text-[20px] font-[400] text-white">Learn more</p>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <FaArrowUpLong className="lg:hidden text-positivus-dark text-4xl p-2 rounded-[50%] bg-white rotate-45" />
            <img
              src="Ill8.png"
              alt=""
              className="w-[165px] h-[129px] lg:w-[210px] lg:h-[166px]"
            />
          </div>{" "}
        </div>
      </div>

      <div className="bg-positivus-grey rounded-[3rem] lg:h-[347px] flex items-center justify-between ">
        <div className="flex flex-col space-y-8 p-12 ">
          <p className="font-[500] text-[26px] lg:text-[30px]">Let&#39;s make things happen</p>
          <p className="leading[20px] lg:leading-[23px] text-[16px] lg:text-[18px] font-[400] lg:w-[70%]">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <p className="rounded-2xl font-[300] bg-positivus-dark w-fit text-white p-4 lg:py-5 lg:px-8 text-[20px]">
            Get your free proposal
          </p>
        </div>
        <div className="hidden lg:block w-[50%]">
          <img src="Ill5.png" alt="" className="h-[394px] w-[359px]" />
        </div>
      </div>
    </div>
  );
}

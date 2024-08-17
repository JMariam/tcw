import React, { useState } from "react";

const Contact: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("option1");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="w-[90%] mx-auto lg:p-6 my-8">
      <div className="flex flex-col mb-12 lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-10">
        <p className="bg-positivus-green text-[36px] px-1 font-[600] rounded-md">
          Contact Us
        </p>
        <p className="text-[16px] text-center lg:text-start lg:text-[18px] leading-[22px] font-[500] w-[105%] lg:w-[50%]">
          Connect with Us: Let&#39;s Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="bg-positivus-grey rounded-[2rem] flex justify-between py-12">
        <div className="px-6 lg:px-0 lg:pl-12">
          <div className="flex justify-between lg:justify-start lg:space-x-6 px-6 lg:px-0">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="w-6 h-6 "
                checked={selectedOption === "option1"}
                onChange={handleRadioChange}
                name="radio"
                value="option1"
              />
              <span className="ml-2 text-black text-[18px] font-[400]">
                Say Hi
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="w-6 h-6 "
                checked={selectedOption === "option2"}
                onChange={handleRadioChange}
                name="radio"
                value="option2"
              />
              <span className="ml-2 text-black text-[18px] font-[400]">
                Get a Quote
              </span>
            </label>
          </div>

          {selectedOption === "option1" && (
            <div className="flex flex-col mt-6 gap-6">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-[14px] font-[500]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="placeholder:text-[#898989] py-3 px-4 border border-black outline-none w-[320px] lg:w-[500px] bg-white rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-[14px] font-[500]">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="placeholder:text-[#898989] py-3 px-4 border border-black outline-none w-[320px] lg:w-[500px] bg-white rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-[14px] font-[500]">
                  Messages
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Messages"
                  className="placeholder:text-[#898989] w-[320px] py-3 px-4 border border-black outline-none lg:w-[500px] bg-white rounded-xl"
                ></textarea>
              </div>
              <button className="bg-positivus-dark text-[16px] text-white rounded-lg py-3 w-full">
                Send Message
              </button>
            </div>
          )}
          {selectedOption === "option2" && (
            <div className="flex flex-col mt-6 gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-[14px] font-[500]">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="placeholder:text-[#898989] py-3 px-4 border border-black outline-none w-[320px] lg:w-[500px] bg-white rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-[14px] font-[500]">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="placeholder:text-[#898989] py-3 px-4 border border-black outline-none w-[320px] lg:w-[500px] bg-white rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-[14px] font-[500]">
                Messages
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Messages"
                className="placeholder:text-[#898989] w-[320px] py-3 px-4 border border-black outline-none lg:w-[500px] bg-white rounded-xl"
              ></textarea>
            </div>
            <button className="bg-positivus-dark text-[16px] text-white rounded-lg py-3 w-full">
              Get a Quote
            </button>
          </div>
          )}
        </div>
        <div className="hidden lg:block w-[50%] relative left-[17rem]">
          <img src="/Illustration.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

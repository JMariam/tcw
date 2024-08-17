export default function Contact() {
  return (
    <div className="w-[90%] mx-auto lg:p-6 my-8">
      <div className="flex flex-col mb-12 lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-10">
        <p className="bg-positivus-green text-[36px] px-1 font-[600] rounded-md">
          Contact Us
        </p>
        <p className="text-[16px] text-center lg:text-start lg:text-[18px] leading-[22px] font-[500] w-[105%] lg:w-[50%]">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="bg-positivus-grey rounded-[2rem] flex justify-between py-8">
        <div className="w-[50%] pl-8">
          <p className="text-4xl">here yeah he</p>
        </div>
        <div className="hidden lg:block w-[50%] relative left-[16rem]">
          <img src="/Illustration.png" alt="" />
        </div>
      </div>
    </div>
  );
}

import { PiStarFourFill } from 'react-icons/pi';

export default function Header() {
  return (
    <div className="w-[90%] mx-auto py-6 lg:px-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-1 items-center">
        <PiStarFourFill className='text-[40px] rotate-45'/>
          <p className='font-semibold text-[40px]'>Positivus</p>
        </div>
        <div className="hidden lg:flex text-lg space-x-8 font-medium items-center">
          <p className="">About us</p>
          <p className="">Services</p>
          <p className="">Use Cases</p>
          <p className="">Pricing</p>
          <p className="">Blog</p>
          <p className="border border-black rounded-xl py-3 px-5">Request a quote</p>
        </div>
      </div>
    </div>
  );
}
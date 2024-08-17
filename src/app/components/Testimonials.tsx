export default function Testimonials({ text }: any) {
  return (
    <div className="">
      <div className="dialog_box bottom p-8 rounded-[2rem] relative border border-positivus-green text-white text-[10px] leading-[16px] font-[300]">
        {text}
      </div>
      <div className="mt-7 ml-[20%]">
          <p className="font-[400] text-[12px] text-positivus-green">John Smith</p>
          <div className="font-[300] text-[10px] text-white">Managing Director at XYXZ Corp</div>
        </div>
    </div>
  );
}

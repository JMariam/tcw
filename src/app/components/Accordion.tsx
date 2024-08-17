import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

interface AccordionItemProps {
  title: string;
  content: string;
  number: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  number,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`rounded-[2rem] border border-black border-b-4 p-6 lg:p-10 ${
        isOpen ? "bg-positivus-green" : "bg-positivus-grey"
      }`}
    >
      <div className="flex justify-between items-center w-full ">
        <button
          onClick={toggleAccordion}
          className="text-[17px] lg:text-[20px] font-[600] flex items-center text-start gap-4"
        >
          <span className="text-[24px] lg:text-[30px] font-[600] ">
            {number}
          </span>
          {title}
        </button>
        <button
          onClick={toggleAccordion}
          className="bg-positivus-grey p-2 rounded-[50%] border-[0.1px] border-black"
        >
          {isOpen ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {isOpen && (
        <div className="pt-4 lg:pt-6">
          <p className="text-[16px] leading-[23px] font-[400] pt-4 lg:pt-6 border-t border-slate-400">
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
  items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="flex flex-col space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          number={item.number}
        />
      ))}
    </div>
  );
};

export default Accordion;

"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

export default function FAQOptions({
  heading,
  content,
  startingDivider = false,
  endingDivider = true,
}: {
  startingDivider?: boolean;
  heading: string;
  content?: {
    subHeading: string;
    subPoints: string[];
  }[];
  endingDivider?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" px-3">
      {startingDivider && <FAQDivider />}
      <div className="flex items-center justify-between">
        <div className="py-5 sm:py-5 text-xl sm:text-3xl font-bold">{heading}</div>
        <div
          className={
            `hover:cursor-pointer transition-transform duration-300 ease-in-out ` +
            (isOpen ? "-rotate-45" : "rotate-0")
          }
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Plus size={30} />
        </div>
      </div>
      {isOpen && <div className="pb-4 sm:pb-5 text-base sm:text-xl hover:cursor-pointer">
        {
          content?.map((item, index) => (
            <div key={index}>
              <div className="text-2xl mb-2">{item.subHeading}</div>
              <ul className="pl-10">
                {item.subPoints?.map((point, idx) => (
                  <li key={idx} className="mb-2 list-disc ">{point}</li>
                ))}
              </ul>
            </div>
          ))
        }
      </div>}
      {endingDivider && <FAQDivider />}
    </div>
  );
}

export function FAQDivider() {
  return <div className="w-full h-[1px] bg-black"></div>;
}

import React from "react";

interface PercentageBadgeProps {
  value: string;
  className?: string;
  textSize?: string;
}

export const PercentageBadge: React.FC<PercentageBadgeProps> = ({ value, textSize = "5xl" }) => {
  return (
    <div className={`inline-block bg-[#FF9363] text-black font-extrabold text-${textSize} px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl shadow-[4px_4px_0_#e26f3e]`}>
      {value}
    </div>
  );
};




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
  content: string;
  endingDivider?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" px-3">
      {startingDivider && <FAQDivider />}
      <div className="flex items-center justify-between">
        <div className="py-5 text-4xl font-medium">{heading}</div>
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
      {isOpen && <div className="pb-5 text-lg hover:cursor-pointer">{content}</div>}
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
  textSize?: string;
}

export const PercentageBadge: React.FC<PercentageBadgeProps> = ({ value, textSize="5xl" }) => {
  return (
    <div className={`inline-block bg-[#FF9363] text-black font-extrabold text-${textSize} px-3 sm:px-5 py-1 sm:py-2 rounded-xl shadow-[4px_4px_0_#e26f3e]`}>
      {value}
    </div>
  );
};




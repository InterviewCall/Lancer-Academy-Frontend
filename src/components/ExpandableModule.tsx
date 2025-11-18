"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

export default function ExpandableModule({
  title,
  time,
  content,
}: {
  title?: string;
  time?: string;
  content?: { subHeading: string; subPoints: string[] }[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full p-7 px-5 sm:px-10 bg-white">
      <div className="w-full flex items-center justify-between">
        <div>
          <div className="font-semibold text-lg sm:text-2xl">{title}</div>
          <div className="font-medium text-base sm:text-xl text-gray-600">
            {time}
          </div>
        </div>
        <div
          className={
            `hover:cursor-pointer rounded-full p-2 bg-gray-50 transition-transform duration-300 ease-in-out ` +
            (isOpen ? "-rotate-45" : "rotate-0")
          }
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Plus />
        </div>
      </div>
      <div
        className={`pt-5 text-md sm:text-lg font-medium transition-all duration-300 transform origin-top
            ${
              isOpen
                ? "translate-y-0 opacity-100 scale-100 block"
                : "translate-y-2 opacity-0 scale-95 hidden"
            }
            `}
      >
        {content &&
          content.map((item, index) => (
            <div key={index}>
              <div>{item.subHeading}</div>
              <ul className="pl-10">{
                item.subPoints && item.subPoints.map((point, idx) => (
                  <li className="list-disc " key={idx}>
                    {point}
                  </li>
                ))
                }</ul>
            </div>
          ))}
      </div>
    </div>
  );
}

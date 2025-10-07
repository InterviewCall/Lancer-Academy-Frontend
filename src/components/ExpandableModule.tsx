"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

export default function ExpandableModule() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full  p-7 px-10 bg-white">
      <div className="w-full flex items-center justify-between">
        <div>
          <div className="font-semibold text-2xl">Introductory Module</div>
          <div className="font-medium text-xl text-gray-600">
            10 hours, 1 project, 7 live lessons
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
        className={`pt-5 text-lg font-medium transition-all duration-300 transform origin-top
            ${
              isOpen
                ? "translate-y-0 opacity-100 scale-100 block"
                : "translate-y-2 opacity-0 scale-95 hidden"
            }
            `}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A sit, eos
        totam sint aliquam inventore consequatur, reiciendis molestiae error
        doloribus deleniti beatae nobis minus temporibus pariatur eius sunt amet
        excepturi voluptatem alias velit porro cupiditate nihil. Voluptatum
        ullam, explicabo quaerat autem commodi repudiandae maxime temporibus,
        ipsam, veritatis maiores veniam quis.
      </div>
    </div>
  );
}

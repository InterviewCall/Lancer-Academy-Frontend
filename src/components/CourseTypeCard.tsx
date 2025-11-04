import React from "react";
import { Eye, LucideIcon } from "lucide-react";

interface CardItem {
  icon: LucideIcon;
  text: string | React.ReactNode;
  iconColor?: string;
  subpoints?: string[];
}

interface PartTimeCardProps {
  title: string;
  items: CardItem[];
  recommended?: boolean;
}

export default function CourseTypeCard({ title, items, recommended=false }: PartTimeCardProps) {
  return (
    <div className="w-full relative bg-white border border-gray-200 rounded-xl p-5 sm:p-9 shadow-sm hover:shadow-md transition">
      {/* Title */}
      {recommended && (
        <div className="absolute flex items-center justify-center gap-x-2 bg-green-300 -top-5 right-5 p-2 px-3 rounded-md font-medium text-base">
        <div>Recommended</div>
      </div>
      )}
      <h3 className="text-xl sm:text-4xl font-semibold text-gray-900 mb-4 text-start">
        {title}
      </h3>

      {/* List */}
      <ul className="space-y-3 text-gray-800 text-lg sm:text-3xl font-semibold">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              "flex items-start gap-2 py-4 sm:py-6 " +
              (index === items.length - 1
                ? "border-0 pb-0"
                : "border-b border-gray-300 ")
            }
          >
            <item.icon
              className={`w-4 h-4 sm:w-7 sm:h-7  ${
                item.iconColor || "text-gray-700"
              } mt-1`}
            />
            <div>
              {typeof item.text === "string" ? (
                <div
                  className="text-start"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              ) : (
                item.text
              )}

              {item.subpoints && (
                <ul className="list-disc list-inside text-sm sm:text-lg md:text-xl text-gray-600 mt-1 flex flex-col items-start">
                  {item.subpoints.map((sub, subIndex) => (
                    <li
                      key={subIndex}
                      dangerouslySetInnerHTML={{ __html: sub }}
                    />
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Button */}
      <div className="flex justify-start">
        <button className="bg-gray-200 gap-x-3 flex items-center justify-center rounded-lg text-base sm:text-2xl font-medium px-5 sm:px-6  py-2 sm:py-4  mt-3 sm:mt-6">
          <div>Show Syllabus</div>
          <Eye
            size={26}
            className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-gray-600"
          />
        </button>
      </div>
    </div>
  );
}

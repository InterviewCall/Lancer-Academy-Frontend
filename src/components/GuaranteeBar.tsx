import { FaCheckCircle } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";

export default function GuaranteeBar() {
  const items = [
    "Our guarantee: job or 100% money back",
    "96% grad employment rate",
    "No IT or STEM background needed",
  ];

  return (
    <div className="w-full sm:w-full relative flex justify-center mb-30">
      <div className="w-full flex items-center justify-center bg-white rounded-xl shadow-sm py-6 px-6">
        <div className="w-fit sm:w-full sm:flex flex-wrap justify-start  md:justify-around items-center gap-y-3 ">
          {items.map((text, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-lg font-medium text-gray-900"
            >
              <FaCheckCircle size={22} className="text-black" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

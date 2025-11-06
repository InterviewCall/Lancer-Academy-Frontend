import { FaCheckCircle } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";

export default function GuaranteeBar() {
  const items = [
    "Our guarantee: job or 100% money back",
    "94% grad employment rate",
    "No IT or STEM background needed",
  ];

  return (
    <div className="w-full sm:w-2/3 relative flex justify-center mb-30">
      <div className="w-full flex items-center justify-center bg-white rounded-xl shadow-sm py-6 px-6">
        <div className="w-fit sm:w-full sm:flex flex-wrap justify-start sm:justify-around items-center gap- ">
          {items.map((text, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-lg font-medium text-gray-900"
            >
              <FaCheckCircle size={22} className="text-black" />
              <span>{text}</span>

              {index === 0 && (
                <div className="mx-2 group p-1.5 rounded-md bg-gray-100 hover:cursor-pointer">
                  <MdStarRate size={18} className="text-black" />
                  <div className="absolute hidden group-hover:flex justify-center w-full left-0 top-[93%] sm:top-[85%]">
                    <div className="w-9/10 sm:w-6/10 border-red-50 rounded-2xl bg-gray-100 p-5 text-center font-light text-xl text-gray-800 shadow-lg ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa assumenda reprehenderit molestiae officiis sed
                      voluptatem provident voluptatibus, facilis sint quos!
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

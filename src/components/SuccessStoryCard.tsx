import React from "react";
import Image from "next/image";

interface SuccessStoryCardProps {
  image: string;
  now: string;
  quote: string;
  name: string;
}

const SuccessStoryCard: React.FC<SuccessStoryCardProps> = ({
  image,
  now,
  quote,
  name,
}) => {
  return (
    <div className="flex-shrink-0 snap-center w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col gap-4">
      {/* Top Section */}
      <div className="flex flex-col h-full justify-between">

        <div>
          <div className=" items-start gap-4">
            <Image
              src={image}
              alt={name}
              width={90}
              height={90}
              className="h-20 w-20 object-cover rounded-full"
            />
            {/* {image} here */}
          </div>
          <div className="text-lg my-2">
            <span className="text-gray-900 font-semibold">{now}</span>
          </div>

          {/* Quote */}
          <p className="text-gray-700 italic text-lg leading-relaxed pb-4">
            “{quote}”
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center h-[50px] justify-between border-t border-gray-200 pt-4">
          <div className="flex items-center gap-2 text-gray-900 font-medium">
            <span>{name}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;

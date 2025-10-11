import React from "react";
import Image from "next/image";

interface SuccessStoryCardProps {
  image: string;
  before: string;
  now: string;
  quote: string;
  name: string;
}

const SuccessStoryCard: React.FC<SuccessStoryCardProps> = ({
  image,
  before,
  now,
  quote,
  name,
}) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col gap-4">
      {/* Top Section */}
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
        <div className="text-lg">
          <span className="text-gray-500 text-lg font-medium mr-3">Before</span>
          <span className="text-gray-900 font-semibold">{before}</span>
          <div></div>
          <span className="text-gray-500 text-lg font-medium mt-2 mr-3">Now</span>
          <span className="text-gray-900 font-semibold">{now}</span>
        </div>

      {/* Quote */}
      <p className="text-gray-700 italic text-lg leading-relaxed">
        “{quote}”
      </p>

      {/* Bottom Section */}
      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <div className="flex items-center gap-2 text-gray-900 font-medium">
          
          <span>{name}</span>
        </div>
        
      </div>
    </div>
  );
};

export default SuccessStoryCard;

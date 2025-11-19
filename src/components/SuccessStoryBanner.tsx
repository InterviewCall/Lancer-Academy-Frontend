import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  image: string;
  name: string;
  quote: string;
  currentRole: string;
}

export default function SuccessStoryBanner(props: TestimonialCardProps) {
  const { image, name, quote, currentRole } = props;

  return (
    <div className="bg-white my-10 rounded-2xl shadow-sm border border-gray-200 px-0 sm:px-12 py-24 text-center w-full">
      {/* Avatar */}
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
      />

      {/* Name + LinkedIn */}
      <div className="flex justify-center items-center gap-2 text-gray-900 font-medium text-2xl">
        <span>{name}</span>
      </div>

      <div className="font-medium text-xl mb-6">
        {currentRole}
      </div>

      {/* Quote */}
      <div className="text-gray-900 text-2xl font-medium flex items-center justify-center leading-relaxed">
        <div className="w-8/10">
        “{quote}”
        </div>
      </div>

    </div>
  );
}


"use client";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useEffect } from "react";

const mentorImages = [
  { id: 1, src: "/mentors/mentor-1.svg" },
  { id: 2, src: "/mentors/mentor-2.svg" },
  { id: 3, src: "/mentors/mentor-3.svg" },
  { id: 4, src: "/mentors/mentor-4.svg" },
  { id: 5, src: "/mentors/mentor-5.svg" },
];

export default function Carousel({perView = 1}: {perView?: number}) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: { perView: perView },
  });

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (instanceRef.current) {
      interval = setInterval(() => {
        instanceRef.current?.next();
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [instanceRef]);


  return (
    <div className="component-landingPage-Carousel relative w-full h-full rounded-2xl ">
      {/* Slider */}
      <div
        ref={sliderRef}
        className="component-landingPage-Carousel max-w-full flex keen-slider rounded-lg overflow-hidden"
      >
        {mentorImages.map((image) => (
          <div
            key={image.id}
            className="keen-slider__slide w-full flex basis-1/3 items-center justify-center px-5"
          >
            <Image
              src={image.src}
              alt={`Mentor ${image.id}`}
              width={100}
              height={100}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="hidden absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        {/* <ChevronLeft /> */}
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="hidden  absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        {/* <ChevronRight /> */}
      </button>
    </div>
  );
}

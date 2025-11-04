"use client";

import { heroSectionVideoUrl } from "@/utits/externalUrls";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaCircleHalfStroke, FaPause, FaPlay } from "react-icons/fa6";
import { WiMoonFull } from "react-icons/wi";
import BookACallButton from "./BookACallButton";

export default function HeroSection() {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null!);

  useEffect(() => {
    if (isVideoActive) {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  }, [isVideoActive]);
  return (
    <div className="sm:flex items-start justify-center my-10 gap-x-15 w-9/10 py-14">
      <div className="hidden sm:basis-2/5 w-full sm:flex items-center justify-center relative">
        {isVideoActive && (
          <video
            className="w-full h-full rounded-xl object-cover"
            src={heroSectionVideoUrl}
            autoPlay={true}
            loop
            ref={videoRef}
          ></video>
        )}
        <div className="absolute w-full h-fit flex items-center justify-center bottom-[10%]">
          <div
            className=" bg-[#65bd82] p-9 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => {
              setIsVideoActive((prev) => !prev);
            }}
          >
            {isVideoActive ? <FaPause size={30} /> : <FaPlay size={30} />}
          </div>
        </div>
        {!isVideoActive && (
          <Image
            alt=""
            src={"/hero_image_2.svg"}
            width={60}
            height={60}
            className="w-full h-auto"
          />
        )}
      </div>
      <div className="sm:basis-3/5 w-auto">
        <div className="w-full flex justify-center">
          <div className="flex items-center justify-center sm:justify-start gap-0 bg-[#B8E9C8]  my-2 rounded-lg overflow-clip w-fit sm:w-fit px-1 sm:px-3 divide-x divide-gray-500  ">
            <div className="text-xs font-semibold bg-[#B8E9C8] flex items-stretch justify-evenly w-fit px-1 sm:px-2 my-2 ">
              <FaCircleHalfStroke
                size={22}
                className="inline-block pr-1 sm:pr-2 "
              />

              <div className="flex items-center justify-around text-sm sm:text-[16px]">
                <div className="text-center">Intermediate:</div>
                <div className="text-[#318f51] ml-1">6 months</div>
              </div>
            </div>

            <div className="text-xs font-semibold bg-[#B8E9C8] flex items-stretch justify-evenly w-fit px-1 sm:px-2 my-2 ">
              <WiMoonFull size={22} className="inline-block pr-1 sm:pr-2 " />
              {/* <WiMoonFull size={17} className="inline-block pr-1 sm:pr-2 sm:hidden" /> */}

              <div className="flex items-center justify-around text-sm sm:text-[16px]">
                <div className="text-center">Advanced:</div>
                <div className="text-[#318f51] ml-1">4 months</div>
              </div>
            </div>
            {/* <div className="hidden text-sm font-semibold bg-[#B8E9C8] w-fit px-2 my-1.5 ">
            <span>Money Back Guarantee</span>
          </div> */}
          </div>
        </div>
        {/* className="text-5xl text-center sm:text-start sm:text-9xl font-[700] my-10 leading-[82%]" */}
        {/* className=" text-center sm:text-start text-[clamp(3rem,9vw,300rem)] font-[700] my-10 leading-[82%]" */}
        <div className="relative">
          {/* <div className="pointer-events-none absolute inset-x-0 -top-6 h-64 sm:h-72
                  mx-4 rounded-[48px] bg-[#F8D2C1]/35 blur-2xl z-[1]"></div> */}
          <div className="text-center sm:text-start text-6xl sm:text-9xl font-[700] my-10 leading-[82%] z-[10]">
            Software Engineering Bootcamp
          </div>

          {/* <Image alt="" src={'/behindEclips_2.svg'} width={100} height={100} className="absolute w-full h-full top-10 z-[1]" /> */}
        </div>
        {/* className="font-[400] text-center sm:text-start leading-[100%] tracking-[-1.5%] px-10 sm:px-0 w-full text-lg sm:text-2xl" */}
        {/* className="font-[400] text-center sm:text-start leading-[100%] tracking-[-1.5%] px-10 sm:px-0 w-full text-lg sm:text-[clamp(1.5rem,2vw,150rem)]" */}
        <div className="font-[400] text-center sm:text-start leading-[100%] tracking-[-1.5%] px-10 sm:px-0 w-full text-lg sm:text-[clamp(1.5rem,2vw,150rem)]">
          Join our Software Engineering Bootcamp to learn a remote-friendly job
          that pays  
          <span className="font-semibold"> ₹10,00,000 </span>
          
          to start. Choose between a 4‑months Advanced
          Program or a 6‑months, Intermediate Program for more flexibility.
        </div>
        <div className="my-16 flex flex-col sm:block items-center justify-center relative">
          <div className="flex justify-center pr-[5%]">
            <Image
              alt=""
              src={"/Cohort start.svg"}
              width={100}
              height={100}
              className="h-auto sm:h-[80%] w-9/10 sm:w-[80%] sm:absolute sm:-top-14 sm:right-32"
            />
          </div>
          <BookACallButton />
        </div>
        <div className="sm:hidden w-full flex items-center justify-center relative px-2 sm:px-0">
          {isVideoActive && (
            <video
              className="w-full h-full rounded-xl object-cover"
              src={heroSectionVideoUrl}
              autoPlay={false}
              loop
              ref={videoRef}
            ></video>
          )}
          <div className="absolute w-full h-fit flex items-center justify-center bottom-[10%]">
            <div
              className=" bg-[#65bd82] p-9 rounded-full flex items-center justify-center "
              onClick={() => {
                setIsVideoActive((prev) => !prev);
              }}
            >
              {isVideoActive ? <FaPause size={30} /> : <FaPlay size={30} />}
            </div>
          </div>
          {!isVideoActive && (
            <Image
              alt=""
              src={"/hero_image_2.svg"}
              width={60}
              height={60}
              className="w-full h-auto"
            />
          )}
        </div>
      </div>
    </div>
  );
}

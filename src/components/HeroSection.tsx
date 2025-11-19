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
    <div className="flex flex-col md:flex-row items-start mb-10 justify-between mt-10 gap-10 pt-14">
      <div className="hidden md:basis-2/5 md:flex items-center justify-center relative translate-y-2">
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
            className="w-full h-full"
          />
        )}
      </div>
      <div className="md:basis-3/5 w-full">
        <div className="w-full flex justify-center md:justify-start">
          <div className="flex items-center bg-[#B8E9C8] my-1 rounded-lg px-3 py-2 md:px-4 gap-4">
    
            {/* Intermediate */}
            <div className="flex items-center gap-1 text-sm font-semibold whitespace-nowrap md:text-lg">
              <FaCircleHalfStroke size={14} className="text-black" />
              <span>Intermediate:</span>
              <span className="text-[#318f51]">7 months</span>
            </div>

            {/* Divider */}
            <div className="h-5 w-px bg-gray-500" />

            {/* Advanced */}
            <div className="flex items-center gap-1 text-sm font-semibold whitespace-nowrap md:text-lg">
              <WiMoonFull size={14} className="text-black" />
              <span>Advanced:</span>
              <span className="text-[#318f51]">4 months</span>
            </div>
          </div>
        </div>

        {/* className="text-5xl text-center lg:text-start lg:text-9xl font-[700] my-10 leading-[82%]" */}
        {/* className=" text-center lg:text-start text-[clamp(3rem,9vw,300rem)] font-[700] my-10 leading-[82%]" */}
        <div className="relative">
          {/* <div className="pointer-events-none absolute inset-x-0 -top-6 h-64 lg:h-72
                  mx-4 rounded-[48px] bg-[#F8D2C1]/35 blur-2xl z-[1]"></div> */}
          <div className="text-center md:text-start text-[clamp(3.5rem,7vw,6rem)] font-[700] pt-5 leading-[0.82] z-[10]">
            Full Stack and AI Software Engineering Program
          </div>

          {/* <Image alt="" src={'/behindEclips_2.svg'} width={100} height={100} className="absolute w-full h-full top-10 z-[1]" /> */}
        </div>
        {/* className="font-[400] text-center lg:text-start leading-[100%] tracking-[-1.5%] px-10 lg:px-0 w-full text-lg lg:text-2xl" */}
        {/* className="font-[400] text-center lg:text-start leading-[100%] tracking-[-1.5%] px-10 lg:px-0 w-full text-lg lg:text-[clamp(1.5rem,2vw,150rem)]" */}
        <div className="font-[400] text-center md:text-start leading-snug tracking-[-0.015em] pt-5 lg:pt-8 px-4 md:px-0 text-base w-full sm:text-lg md:text-xl lg:text-2xl">
          Join{" India's"} most practical job-oriented Softwware Engineering program designed for 
          <span className="font-semibold"> 12 LPA roles </span>
          Master full-stack development + AI skills through real industry projects built for Lancers Academy, InterviewCall, and WorkR
          <div className="mt-2">
            Choose between our <span className="font-semibold">4-month advanced</span> or <span className="font-semibold">7-month intermediate</span> track -- based on your schedule.
          </div>
        </div>
        <div className="mt-8 mb-5 flex flex-col md:flex-row items-center gap-x-2 gap-y-2 md:items-stretch relative">
            <BookACallButton />
          <div className="flex justify-center max-md:order-1">
            <Image
              alt=""
              src={"/Cohort start_2.svg"}
              width={100}
              height={100}
              className="h-auto md:h-[100%] w-9/10 md:w-[100%] md:-top-5 md:right-15"
            />
          </div>
        </div>
        <div className="md:hidden w-full flex items-center justify-center relative px-2 md:px-0">
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
              className="w-full h-full"
            />
          )}
        </div>
      </div>
    </div>
  );
}

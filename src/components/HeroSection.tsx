"use client";

import { heroSectionVideoUrl } from "@/utits/externalUrls";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaCircleHalfStroke, FaPause, FaPlay } from "react-icons/fa6";
import { WiMoonFull } from "react-icons/wi";

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
    <div className="sm:flex items-start justify-center my-10 gap-x-15 w-9/10">
      <div className="hidden sm:basis-2/5 w-full sm:flex items-center justify-center relative">
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
      <div className="sm:basis-3/5 w-full sm:w-auto">
        <div className="flex items-center justify-center sm:justify-start gap-0 bg-[#B8E9C8]  my-2 rounded-lg overflow-clip w-full sm:w-fit px-3 divide-x divide-gray-500  ">
          <div className="text-sm font-semibold bg-[#B8E9C8] flex items-stretch justify-evenly w-fit px-2 my-1.5 ">
            <FaCircleHalfStroke
              size={30}
              className="inline-block pr-2 "
            />
            <div className="flex items-center justify-around">
              <div className="text-center">Internship:</div>
              <div className="text-green-900 ml-1">10 months</div>
            </div>
          </div>

          <div className="text-sm font-semibold bg-[#B8E9C8] flex items-stretch justify-evenly w-fit px-2 my-1.5 ">
            <WiMoonFull size={30} className="inline-block pr-2 " />
            <div className="flex items-center justify-around">
              <div className="text-center">Full Time:</div>
              <div className="text-green-900 ml-1">4 months</div>
            </div>
          </div>
          {/* <div className="hidden text-sm font-semibold bg-[#B8E9C8] w-fit px-2 my-1.5 ">
            <span>Money Back Guarantee</span>
          </div> */}
        </div>
        <div className="text-5xl text-center sm:text-start sm:text-9xl font-[700] my-10 leading-[82%]">
          Software Engineering Bootcamp
        </div>
        <div className="font-[400] text-center sm:text-start leading-[100%] tracking-[-1.5%] px-10 sm:px-0 w-full text-lg sm:text-2xl">
          Join our Software Engineering Bootcamp part-time or full-time to learn
          a remote-friendly job that pays{" "}
          <span className="font-semibold"> ~$75,000 to start</span>
        </div>
        <div className="my-10 flex flex-col sm:flex-row items-center gap-y-11 gap-x-8 justify-center">
          <button className="px-12 sm:px-15 hover:cursor-pointer py-3 bg-black text-white text-xl sm:text-2xl rounded-xl mt-5">
            Book a call
          </button>
          <div>
            <Image alt="" src={'/Cohort start.svg'} width={100} height={100} className="h-full w-auto"/>
          </div>
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

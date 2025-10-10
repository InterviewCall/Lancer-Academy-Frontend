"use client";

import { heroSectionVideoUrl } from "@/utits/externalUrls";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";

export default function HeroSection() {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null!);

  useEffect(()=>{
    if(isVideoActive){
      if( videoRef.current ){
        videoRef.current.play();
      }
    }
  },[isVideoActive])
  return (
    <div className="sm:flex items-start justify-center my-10 gap-x-15 w-8/10">
      <div className="sm:basis-2/5 w-full flex items-center justify-center relative">
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
              setIsVideoActive((prev)=> !prev);
            }}
          >
            {isVideoActive ? <FaPause size={30}/> : <FaPlay size={30} />}
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
      <div className="sm:basis-3/5 ">
        <div className="flex items-center gap-2 my-2">
          <div className="text-sm font-semibold bg-[#B8E9C8] w-fit px-2 py-1 rounded-sm">
            10 months internship
          </div>

          <div className="text-sm font-semibold bg-[#B8E9C8] w-fit px-2 py-1 rounded-sm">
            4 months Full-time
          </div>
          <div className="text-sm font-semibold bg-[#B8E9C8] w-fit px-2 py-1 rounded-sm">
            Money back guarantee
          </div>
        </div>
        <div className="text-7xl sm:text-9xl font-[700] my-10 leading-[82%]">
          Software Engineering Bootcamp
        </div>
        <div className="font-[400] leading-[100%] tracking-[-1.5%] text-2xl">
          Join our Software Engineering Bootcamp part-time or full-time to learn
          a remote-friendly job that pays{" "}
          <span className="font-semibold"> ~$75,000 to start</span>
        </div>
        <div className="my-10 ">
          <button className="px-15 hover:cursor-pointer py-3 bg-black text-white text-2xl rounded-xl mt-5">
            Book a call
          </button>
        </div>
      </div>
    </div>
  );
}

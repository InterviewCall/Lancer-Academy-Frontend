import React from "react";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

export default function AIToolsSection() {
  return (
    <div className="w-full sm:w-6/10 space-y-16 border-black bg-[#fff8f4] rounded-2xl px-4 sm:px-10 pt-10">
      <div className="sm:flex space-y-10 justify-evenly items-center">
        <div className="sm:w-30/50 text-4xl sm:text-5xl font-semibold sm:leading-10 tracking-tight pr-16">
          <span className="text-[#ea6e39] ">Learn AI tools</span> used by 76%* of
          software engineers, while mastering the core skills to do the job
        </div>
        {/* box here */}

        <div className="sm:w-15/50 relative rounded-xl space-y-10 p-4 text-sm bg-[#ff976b]">
          <div className="absolute -bottom-[30%] right-[80%]">
            <Image alt="" src={"/orange_down_arrow.svg"} height={50} width={50} />
          </div>
          <div>
            Software fundamentals and AI experience make you more valuable and
            job-market ready.
          </div>
          <div>
          <div className="font-bold text-xl">78% </div>
            of organizations already use AI*
          </div>
        </div>
      </div>

      <div className="sm:flex  justify-between items-stretch">
        <div className="sm:w-2/5 flex justify-center items-end">
          <Image
            alt=""
            src={"/robot.svg"}
            height={100}
            width={100}
            className="hidden sm:block w-full h-auto"
          />
        </div>
        <div className="sm:w-3/5 px-5">
          <div className="font-semibold text-3xl">
            Automate your work with AI while learning coding and development:
          </div>
          <div className="sm:grid grid-cols-2 gap-x-8 gap-y-5 space-y-3 my-10">
            <div className="">
              <FaCircleCheck />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                quibusdam.
              </div>
            </div>
            <div className="">
              <FaCircleCheck />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                quibusdam.
              </div>
            </div><div className="">
              <FaCircleCheck />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                quibusdam.
              </div>
            </div><div className="">
              <FaCircleCheck />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                quibusdam.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

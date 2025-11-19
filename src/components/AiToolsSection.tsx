import React from "react";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

export default function AIToolsSection() {
  return (
    <div className="w-full space-y-16 border-black bg-[#ffffff] rounded-2xl px-4 sm:px-10 pt-10 my-10 mt-20">
      <div className="md:flex space-y-10 justify-evenly items-center">
        <div className="w-full lg:w-30/50 text-4xl sm:text-5xl font-semibold sm:leading-10 tracking-tight lg:pr-16">
          {/* <span className="text-[#ea6e39] ">Learn AI tools</span> used by 76%* of
          software engineers, while mastering the core skills to do the job */}
          <span className="text-[#ea6e39] ">Learn AI tools</span> used by today’s top engineers while mastering the core skills that make you truly job-ready
        </div>
        {/* box here */}

        <div className="block md:hidden lg:block md:w-15/50 relative rounded-xl space-y-10 p-4 text-sm bg-[#ff976b]">
          <div className="absolute -bottom-[28%] right-[80%]">
            <Image alt="" src={"/orange_down_arrow.svg"} height={50} width={50} />
          </div>
          <div>
            Software fundamentals + real AI experience make you more valuable and future-proof.
          </div>
          <div>
            <div className="font-bold text-xl">84% </div>
            of Indian tech teams now use AI tools in development.*
          </div>
        </div>
      </div>

      <div className="sm:flex  justify-between ">
        <div className=" sm:w-2/5 flex sm:hidden md:hidden lg:flex justify-center items-end">
          <Image
            alt=""
            src={"/robot.svg"}
            height={100}
            width={100}
            className="hidden sm:block w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-3/5 px-5">
          <div className="font-semibold text-3xl">
            Automate your workflow with AI while learning full-stack development:
          </div>
          <div className="sm:grid grid-cols-2 gap-x-8 gap-y-5 space-y-3 my-10">
            <div className="">
              <FaCircleCheck />
              <div>
                AI-assisted coding with GitHub Copilot and smart completion tools
              </div>
            </div>
            <div className="">
              <FaCircleCheck />
              <div>
                Debugging workflows enhanced by LLM-powered assistants
              </div>
            </div><div className="">
              <FaCircleCheck />
              <div>
                Automated code review and quality analysis
              </div>
            </div><div className="">
              <FaCircleCheck />
              <div>
                AI-powered rapid prototyping for UI, backend, and APIs
              </div>
            </div>
          </div>
          <Image
            alt=""
            src={"/robot.svg"}
            height={100}
            width={100}
            className="block sm:hidden w-full h-auto "
          />
          <div className="w-full hidden  relative bottom-[-10%] -right-10 mt-15 sm:flex lg:flex items-end justify-start gap-x-4 font-light text-xs text-gray-500">
            <div>
              *Source: India Developer Survey 2024
            </div>
            <div>
              **Source: Gartner AI Engineering Adoption Report
            </div>
          </div>
        </div>
      </div>

      <div className=" hidden md:flex items-stretch lg:hidden">
        <div className="basis-1/2">

          <Image
            alt=""
            src={"/robot.svg"}
            height={100}
            width={100}
            className="hidden sm:block w-full h-auto "
          />
        </div>

        <div className="h-full basis-1/2 flex flex-col justify-between">

          <div className="  relative rounded-xl space-y-10 p-4 text-sm bg-[#ff976b] ">
            <div>
              <div className="absolute -bottom-[28%] right-[80%]">
                <Image alt="" src={"/orange_down_arrow.svg"} height={50} width={50} />
              </div>
              <div>
                Software fundamentals + real AI experience make you more valuable and future-proof.
              </div>
              <div>
                <div className="font-bold text-xl">84% </div>
                of Indian tech teams now use AI tools in development.*
              </div>
            </div>

          </div>
          <div className="w-full md:flex relative bottom-[-10%] -right-10 mt-15 hidden lg:hidden items-end justify-start gap-x-4 font-light text-xs text-gray-500">
            <div>
              *Source: India Developer Survey 2024
            </div>
            <div>
              **Source: Gartner AI Engineering Adoption Report
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

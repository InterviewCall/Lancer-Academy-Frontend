"use client";

import Image from "next/image";
import BookACallButton from "./BookACallButton";
import { advisorImage } from "@/utits/externalUrls";
import { Rhombus } from "./DesignDivs";
import { handleClickBookACallButton } from "@/utits/onClickHandlers";

export default function BookACallReminder({ heading, subHeading }: { heading: string, subHeading: string }) {
  return (
    <div className="w-full bg-[#6cc989] md:rounded-xl flex flex-col items-center py-28 my-10 relative">
      <Image src={"/green_up_arrow.svg"} alt="" width={100} height={100} className="absolute -top-[4%]" />
      {/* <Rhombus background="#6cc989" /> */}
      <div className="">
        <Image alt="" src={advisorImage} width={150} height={150} className="h-full w-auto" />
      </div>
      <div className=" text-center text-3xl sm:text-5xl font-semibold mt-10">
        <div>
          {heading}
        </div>
        <div>{subHeading} </div>
      </div>
      <div className="mt-10 max-md:block hidden">
        {/* <BookACallButton /> */}
        <button onClick={()=> {handleClickBookACallButton()}} className="bg-[linear-gradient(180deg,#3A3A3A_0%,#1A1A1A_80%)] text-white px-20 font-medium py-4 rounded-xl text-lg">
              Book a call
            </button>
      </div>

      <div className="mt-10 max-md:hidden block">
        <BookACallButton />
      </div>
    </div>
  );
}

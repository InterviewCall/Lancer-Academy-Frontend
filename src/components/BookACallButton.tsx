'use client' ;

import { handleClickBookACallButton } from "@/utits/onClickHandlers";

export default function BookACallButton({
  text = "Book a call",
}: {
  text?: string;
}) {
  return (
    <button onClick={()=> {handleClickBookACallButton()}} className="px-[20px] md:px-[24px] lg:px-[21px] hover:cursor-pointer py-[10px] md:py-[11px] lg:py-[15px] bg-[linear-gradient(180deg,#3A3A3A_0%,#1A1A1A_80%)] text-white text-sm lg:text-xl rounded-xl mt-0">
      {text}
    </button>
  );
}

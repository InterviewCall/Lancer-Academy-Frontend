'use client' ;

import { handleClickBookACallButton } from "@/utits/onClickHandlers";

export default function BookACallButton({
  text = "Book a call",
}: {
  text?: string;
}) {
  return (
    <button onClick={()=> {handleClickBookACallButton()}} className="px-12 sm:px-15 hover:cursor-pointer py-3 bg-[linear-gradient(180deg,#3A3A3A_0%,#1A1A1A_80%)] text-white text-xl sm:text-2xl rounded-xl mt-5">
      {text}
    </button>
  );
}

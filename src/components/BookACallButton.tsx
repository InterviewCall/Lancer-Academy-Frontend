'use client' ;

import { handleClickBookACallButton } from "@/utits/onClickHandlers";

export default function BookACallButton({
  text = "Book a call",
}: {
  text?: string;
}) {
  return (
    <button onClick={()=> {handleClickBookACallButton()}} className="px-12 sm:px-15 hover:cursor-pointer py-3 bg-black text-white text-xl sm:text-2xl rounded-xl mt-5">
      {text}
    </button>
  );
}

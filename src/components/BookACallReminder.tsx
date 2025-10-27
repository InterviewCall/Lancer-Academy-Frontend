import Image from "next/image";
import BookACallButton from "./BookACallButton";
import { advisorImage } from "@/utits/externalUrls";
import { Rhombus } from "./DesignDivs";

export default function BookACallReminder({text}: {text: string}) {
  return (
    <div className="w-full sm:w-9/10 bg-[#6cc989] rounded-xl flex flex-col items-center py-15 my-10 relative">
      <Rhombus background="#6cc989" />
      <div className="">
        <Image alt="" src={advisorImage} width={150} height={150} className="h-full w-auto"/>
      </div>
      <div className="w-9/10 sm:w-5/10 text-center text-3xl sm:text-5xl font-semibold mt-10">
        {text}
      </div>
      <div className="mt-10">
        <BookACallButton /> 
      </div>
    </div>
  );
}

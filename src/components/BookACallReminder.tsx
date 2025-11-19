import Image from "next/image";
import BookACallButton from "./BookACallButton";
import { advisorImage } from "@/utits/externalUrls";
import { Rhombus } from "./DesignDivs";

export default function BookACallReminder({ heading, subHeading }: { heading: string, subHeading: string }) {
  return (
    <div className="w-full bg-[#6cc989] rounded-xl flex flex-col items-center py-15 my-10 relative">
      <Rhombus background="#6cc989" />
      <div className="">
        <Image alt="" src={advisorImage} width={150} height={150} className="h-full w-auto" />
      </div>
      <div className="w-9/10  text-center text-3xl sm:text-5xl font-semibold mt-10">
        <div>
          {heading}
        </div>
        <div>{subHeading} </div>
      </div>
      <div className="mt-10">
        <BookACallButton />
      </div>
    </div>
  );
}

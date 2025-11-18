import Image from "next/image";
import { Eye } from "lucide-react";

export default function CareerCoachingBanner() {
  return (
    <div className="w-full h-[740px] relative  pb-0 p-10 rounded-2xl bg-white flex flex-col items-center">
      <div className="sm:w-6/10 mb-3 text-center font-semibold text-4xl sm:text-5xl">
        Get the job with expert career coaching and AI-powered preparation
      </div>
      <div className="sm:w-7/10 sm:text-lg text-center">
        Breaking into Software Engineering becomes dramatically easier when
        you’re guided by people who’ve helped hundreds of engineers land offers.
        Practice interviews with experts who know exactly what interviewers look
        for. Transform your resume with feedback from mentors who’ve reviewed
        thousands. Use AI tools to automate your job search, track applications,
        and sharpen your interview skills.
      </div>
      <button className="flex items-center gap-x-3 hover:cursor-pointer rounded-xl bg-gray-200 px-5 py-3 font-medium my-5 text-lg">
        <Eye />
        <div>See everything included in your career-growth package</div>
      </button>

      <div className="absolute -bottom-[10%] flex justify-center h-fit w-full">
        <Image
          alt=""
          src={"/f1car2.svg"}
          height={100}
          width={100}
          className=" bottom-0 w-full sm:w-1/2 h-auto sm:-bottom-8 z-20 max-w-none"
        />
      </div>
    </div>
  );
}

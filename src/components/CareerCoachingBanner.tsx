import Image from "next/image";
import { Eye } from "lucide-react";

export default function CareerCoachingBanner(){
    return (
        <div className="w-9/10 p-10 rounded-2xl bg-white flex flex-col items-center">
            <div className="sm:w-6/10 mb-3 text-center font-semibold text-5xl">
              Get the job with expert career coaching and AI tools
            </div>
            <div className="sm:w-7/10 text-center">
              Finding a Software Engineering job is much easier with
              professional help. Prep for interviews with someone who knows the
              point of every question. Perfect your resume with someone who’s
              seen thousands. Automate the job search with AI.
            </div>
            <button className="flex items-center gap-x-3 hover:cursor-pointer rounded-xl bg-gray-200 px-5 py-3 font-medium my-5 text-lg">
              <Eye />
              <div>See whats included</div>
            </button>
            <div>
              <Image
                alt=""
                src={"/f1car.svg"}
                height={100}
                width={100}
                className="w-full h-auto"
              />
            </div>
          </div>
    )
}
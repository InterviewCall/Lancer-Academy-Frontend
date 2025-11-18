import { Eye } from "lucide-react";
import Carousel from "./Carousel";

export default function TutorSection() {
  return (
    <div className="w-full text-center my-10 rounded-4xl bg-white px-5 sm:px-10 p-10 flex flex-col items-center">
      <div className="font-semibold text-4xl mb-2 w-10/10 sm:w-6/10">
        <div>1-on-1 mentorship from top industry </div>
        <div>engineers</div>
      </div>
      <div className="mb-5 w-9/10 sm:w-4/10  text-base leading-4.5">
        Learn directly from experienced engineers working at leading tech
        companies — through weekly 1-on-1 sessions, daily mentor support,
        structured office hours, and an ever-growing masterclass library.
      </div>
      <div className="">
        <button className="rounded-lg flex items-center gap-x-3 bg-gray-200 px-5 py-3 font-semibold text-sm">
          <Eye />
          <div>
            See how our mentors accelerate your learning and career growth
          </div>{" "}
        </button>
      </div>
      <div className="sm:flex justify-center w-full mt-10">
        <div className="hidden sm:block basis-35/50  overflow-hidden rounded-2xl ">
          <Carousel perView={3} />
        </div>
        <div className="sm:basis-15/50 flex justify-start  text-center font-semibold ">
          {" "}
          <div className="ml-10 sm:w-2/3 mt-5 text-start">
            Backed by real industry experience: our mentors have{" "}
            <span className="text-[#ff976b] font-bold">7–12+ years</span>{" "}
            building software at top product companies — and they’re trained to
            teach, guide, and accelerate your growth at Lancrs Academy.
          </div>
        </div>
        <div className="sm:hidden w-full overflow- rounded-2xl  h-fit mt-5">
          <Carousel perView={2} />
        </div>
      </div>
    </div>
  );
}

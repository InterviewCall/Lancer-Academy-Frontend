import Carousel from "./Carousel";

export default function TutorSection(){
    return(
        <div className="w-9/10 sm:w-9/10 text-center my-10 rounded-4xl bg-white p-10 flex flex-col items-center">
            <div className="font-semibold text-3xl mb-2 w-10/10 sm:w-8/10">
              One on one tutoring from industry professionals
            </div>
            <div className="mb-5 w-9/10 sm:w-7/10 font-light text-xs">
              Learn directly from the pros with one on one mentoring sessions,
              daily office hours and a deep webinar library
            </div>
            <div>
              <button className="rounded-lg bg-gray-200 px-5 py-3 font-semibold text-sm">
                Take a look in how ours tutor can help
              </button>
            </div>
            <div className="sm:flex justify-between w-full mt-10">
              <div className="hidden sm:block basis-35/50  overflow-hidden rounded-2xl ">
                <Carousel perView={3} />
              </div>
              <div className="sm:basis-15/50 flex justify-center  text-center font-semibold text-sm">
                {" "}
                <div className="sm:w-1/2 mt-5">
                  Backed by experience: Our tutors have 5+ years on experience
                  in their field and mentorship training from Lancrs academy
                </div>
              </div>
              <div className="sm:hidden w-full overflow- rounded-2xl  h-fit mt-5">
                <Carousel perView={2} />
              </div>
            </div>
          </div>
    )
}
import ProjectCarousel from "./ProjectCarousel";

export default function GetExperiemce() {
  return (
    <div className="w-full rounded-xl p-4 bg-white my-3 flex flex-col items-center">
      <div className="text-4xl text-center font-semibold mt-10 sm:mt-15">
        Get real industry experience
      </div>
      <div className="text-center mt-2">
        How do you land your first tech job when every company wants “prior
        experience”?
      </div>
      <div className="text-center">
        At Lancrs Academy, you build that experience inside the program itself.
      </div>
      <div className="text-center sm:w-1/2 ">
        Our learners work on real business projects, solve real engineering
        problems, and ship portfolio-ready applications that hiring managers
        actually care about.
      </div>
      <button className="bg-gray-200 rounded-xl px-5 py-3 mt-5 hover:bg-gray-300 hover:cursor-pointer">
        Hands-on industry experience at Lancrs Academy
      </button>
      <div className="w-full">
        <ProjectCarousel />
      </div>
    </div>
  );
}

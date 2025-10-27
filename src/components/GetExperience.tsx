import ProjectCarousel from "./ProjectCarousel";

export default function GetExperiemce() {
  return (
    <div className="w-full sm:w-9/10 rounded-xl p-4 bg-white my-3 flex flex-col items-center">
      <div className="text-4xl text-center font-semibold mt-10 sm:mt-15">
        Get Real Experience
      </div>
      <div className="text-center my-2">How do you find a job when everything requires experience?</div>
      <div className="text-center my-2">
        You’ll have the opportunity to gain that experience at bootcamp!
      </div>
      <div className="text-center sm:w-1/2 my-2">
        Our students can apply to take on real business projects for client
        companies to put on their resumes and in their portfolios.
      </div>
      <button className="bg-gray-200 rounded-xl px-5 py-3 mt-5 hover:bg-gray-300 hover:cursor-pointer">
        Get hands on experience with lancrs
      </button>
      <div className="w-full">
        <ProjectCarousel />
      </div>
    </div>
  );
}


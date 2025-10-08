import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="sm:flex items-start justify-center my-10 gap-5 w-8/10">
      <div className="sm:basis-2/5 w-full flex items-center justify-center">
        <Image
          alt=""
          src={"/HeroSecitionImage.png"}
          width={60}
          height={60}
          className="w-3/4 h-auto"
        />
      </div>
      <div className="sm:basis-3/5 ">
        <div className="flex items-center gap-2 my-2">
          <div className="text-sm font-semibold bg-[#B8E9C8] w-fit px-2 py-1 rounded-sm">
            10 months internship
          </div>

          <div className="text-sm font-semibold bg-[#B8E9C8] w-fit px-2 py-1 rounded-sm">
            4 months Full-time
          </div>
          <div className="text-sm font-semibold bg-[#B8E9C8] w-fit px-2 py-1 rounded-sm">
            Money back guarantee
          </div>
        </div>
        <div className="text-5xl sm:text-8xl font-semibold my-10">
          Software Engineering Bootcamp
        </div>
        <div>
          Join our Software Engineering Bootcamp part-time or full-time to learn
          a remote-friendly job that pays{" "}
          <span className="font-semibold"> ~$75,000 to start</span>
        </div>
        <div className="my-10">
          <button className="px-10  py-2 bg-black text-white rounded-md mt-5">
            Book a call
          </button>
        </div>
      </div>
    </div>
  );
}

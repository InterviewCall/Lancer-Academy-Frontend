import Image from "next/image";

export default function StatsAfterCourse() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
      <div className="flex items-end justify-end w-full ">
        <Image
          alt=""
          src={"./programmer_img.svg"}
          width={100}
          height={100}
          className="w-full h-auto"
        />
      </div>

      <div className="relative flex gap-y-5 flex-col justify-between rounded-xl p-5 bg-white">
        <div className="font-semibold text-xl ">
          A career that fuels the modern tech industry
        </div>
        {/* <div className="absolute top-[95%] sm:top-[20%] -right-[5%] sm:-right-[5%]">
          <Image alt="" src={"/green_top_arrow.svg"} height={50} width={50} />
        </div> */}
        <div className="absolute font-medium w-8/10 rounded-md top-[95%] md:top-[24%] text-start md:text-center bg-[#6cc989] -right-[0%] md:-right-[64%] text-xs p-3">
          <div className="relative">
            <div className="absolute translate-y-[1px] top-[95%] md:-top-[49%] right-[75%] md:right-[75%]">
              <Image
                alt=""
                src={"/green_top_arrow.svg"}
                height={50}
                width={50}
              />
            </div>
            More than 120,000 entry-level Software Engineering openings in India
            each year, with thousands of remote and hybrid opportunities
          </div>
        </div>
        <div className="font-medium">
          Software Engineers build the apps, platforms, and tools you use every
          single day. Developers design, create, and maintain everything you see
          on your phone and computer. From unicorn startups to global product
          companies, every industry in India now depends on skilled Software
          Engineers — and the demand continues to grow.
        </div>
      </div>
      <div className="flex flex-col justify-end rounded-2xl bg-white p-5">
        <div className="">
          <div className="h-12 md:hidden"></div>
          <div className="font-semibold text-3xl">₹5.5L-₹7L</div>
          <div className="text-sm">Average starting package for our {"grad's"}</div>
          <div className="h-2.5 mt-1 w-82/100 bg-[#6CC98A] rounded-r-full"></div>
          <div className="font-semibold text-3xl mt-5">₹9L-₹16L</div>
          <div className="text-sm">Within 1-3 years of experience and skill growth</div>
          <div className="h-2.5 mt-1 w-full bg-[#6CC98A] rounded-r-full"></div>
          <div className="text-sm text-gray-400 mt-5">
            Source: Naukri.com, AmbitionBox, Glassdoor India
          </div>
        </div>
      </div>
    </div>
  );
}

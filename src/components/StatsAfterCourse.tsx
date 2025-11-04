import Image from "next/image";

export default function StatsAfterCourse() {
  return (
    <div className="w-9/10 sm:w-6/10 grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch">
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
          An essential profession in tech industry
        </div>
        {/* <div className="absolute top-[95%] sm:top-[20%] -right-[5%] sm:-right-[5%]">
          <Image alt="" src={"/green_top_arrow.svg"} height={50} width={50} />
        </div> */}
        <div className="absolute font-medium w-8/10 rounded-md top-[95%] sm:top-[24%] text-start sm:text-center bg-[#6cc989] -right-[0%] sm:-right-[64%] text-xs p-3">
          <div className="relative">
            <div className="absolute translate-y-[1px] top-[95%] sm:-top-[49%] right-[75%] sm:right-[75%]">
              <Image
                alt=""
                src={"/green_top_arrow.svg"}
                height={50}
                width={50}
              />
            </div>
            More than 46,000 entry-level job Software Engineering openings in
            the United States, with 15,100 remote or hybrid positions
          </div>
        </div>
        <div className="font-medium">
          Software Engineers build the apps and websites you use every day.
          Software Engineers, a.k.a. Developers, create and maintain everything
          in your phone and on your computer. Tech companies and household names
          in every industry need lots of Software Engineers.
        </div>
      </div>
      <div className="flex flex-col justify-end rounded-2xl bg-white p-5">
        <div>
          <div className="h-12 sm:hidden"></div>
          <div className="font-semibold text-3xl">₹10,00,000</div>
          <div className="font-medium">Our {`grad's`} staring pay</div>
          <div className="h-2.5 w-5/10 bg-[#6CC98A] rounded-r-full"></div>
          <div className="font-semibold text-3xl mt-5">$94,000</div>
          <div className="font-medium">In 1-3 years</div>
          <div className="h-2.5 w-9/10 bg-[#6CC98A] rounded-r-full"></div>
          <div className="hidden text-sm text-gray-400 mt-5">
            Source: Glassdoor.com
          </div>
        </div>
      </div>
    </div>
  );
}

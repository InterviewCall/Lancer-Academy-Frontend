import Image from "next/image";

export default function StatsAfterCourse() {
  return (
    <div className="w-7/10 grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch">
      <div>
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
        <div className="absolute font-medium w-full sm:w-8/10 rounded-md top-[95%] sm:top-[17%] text-start sm:text-center bg-[#6CC98A] -right-[10%] sm:-right-[50%] text-xs p-3">
          More than 46,000 entry-level job Software Engineering openings in the
          United States, with 15,100 remote or hybrid positions
        </div>
        <div className="font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui optio
          non nihil. Tempore ipsa perspiciatis accusamus beatae quia aliquam,
          delectus doloribus unde dolorum? Deleniti, blanditiis.
        </div>
      </div>
      <div className="flex flex-col justify-end rounded-2xl bg-white p-5">
        <div>
            <div className="h-20 sm:hidden"></div>
          <div className="font-semibold text-3xl">$75,000</div>
          <div className="font-medium">Our {`grad's`} staring pay</div>
          <div className="h-2.5 w-5/10 bg-[#6CC98A] rounded-r-full"></div>
          <div className="font-semibold text-3xl mt-5">$94,000</div>
          <div className="font-medium">In 1-3 years</div>
          <div className="h-2.5 w-9/10 bg-[#6CC98A] rounded-r-full"></div>
          <div className="text-sm text-gray-400 mt-5">
            Source: Glassdoor.com
          </div>
        </div>
      </div>
    </div>
  );
}

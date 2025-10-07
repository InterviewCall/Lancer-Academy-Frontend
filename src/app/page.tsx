import Carousel from "@/components/Carousel";
import ExpandableModule from "@/components/ExpandableModule";
import FlexCard from "@/components/FlexCard";
import GetExperiemce from "@/components/GetExperience";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Eye, Hand, Heart } from "lucide-react";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

const companyImages = [
  { id: 1, src: "/companies/Mask-group-1.svg" },
  { id: 2, src: "/companies/Mask-group-2.svg" },
  { id: 3, src: "/companies/Mask-group-3.svg" },
  { id: 4, src: "/companies/Mask-group-4.svg" },
  { id: 5, src: "/companies/Mask-group-5.svg" },
  { id: 6, src: "/companies/Mask-group-6.svg" },
  { id: 7, src: "/companies/Mask-group-7.svg" },
  { id: 8, src: "/companies/Mask-group-8.svg" },
  { id: 9, src: "/companies/Mask-group-9.svg" },
  { id: 10, src: "/companies/Mask-group-10.svg" },
  { id: 11, src: "/companies/Mask-group-11.svg" },
  { id: 12, src: "/companies/Mask-group-12.svg" },
  { id: 13, src: "/companies/Mask-group-13.svg" },
  { id: 14, src: "/companies/Mask-group-14.svg" },
  { id: 15, src: "/companies/Mask-group-15.svg" },
  { id: 16, src: "/companies/Mask-group-16.svg" },
  { id: 17, src: "/companies/Mask-group.svg" },
];

export default function Page() {
  return (
    <div className="flex flex-col w-full h-full border">
      <Navbar />
      <div className="flex-1 h-full overflow-y-hidden bg-red-50">
        <div className="w-full h-full overflow-y-scroll flex flex-col items-center text-black border">
          <HeroSection />

          <div className="w-2/3 my-10 relative">
            <div className="absolute w-full top-75/100 flex items-center justify-center">
              <div className="text-center rounded-lg bg-gray-300 hover:bg-gray-400 text-black hover:cursor-pointer px-5 py-3 text-sm font-semibold">
                All numbers come from our 2024 graduate outcomes report
              </div>
            </div>
            <Image
              src={"/courseStats.svg"}
              alt="Example"
              width={100}
              height={100}
              className="w-full h-auto"
            />
          </div>

          <div>
            <button className="px-4 py-3 border border-gray-500 hover:border-blue-100 text-gray-500 hover:text-blue-100 hover:cursor-pointer rounded-2xl">
              All numbers come form our 2024 graduate outcomes report
            </button>
          </div>

          <div className="w-9/10 sm:w-7/10 text-center my-10 rounded-4xl bg-transparent pt-20 pb-10 px-10">
            <div className="text-4xl sm:text-6xl font-semibold mb-5">
              Become a software engineer with Triple Ten
            </div>
            <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-start text gap-x-15 my-10 text-center">
              <div className="text-lg font-semibold w-2/3 sm:w-full my-5 flex flex-col items-center justify-start">
                <FaCircleCheck />
                <div>Our guarantee: job in tech or 100% money back*</div>
              </div>
              <div className="text-lg font-semibold w-2/3 sm:w-full my-5 flex flex-col items-center">
                <FaCircleCheck />
                No IT or STEM background needed
              </div>
              <div className="text-lg font-semibold w-2/3 sm:w-full my-5 flex flex-col items-center">
                <FaCircleCheck />
                4.8/5 rating across 1k+ reviews
              </div>
            </div>
            <div className="text-sm text-gray-600">
              *Get a relevant job in 10 months or your tuition back when you
              complete our included Career Services package and make a
              good-faith effort to find a job. Details in our Terms of Use.
            </div>
          </div>

          <div className="w-7/10">
            <Image
              alt=""
              src={"/stats.svg"}
              height={100}
              width={100}
              className="w-full h-auto"
            />
          </div>

          <FlexCard />

          <div className="my-10 w-7/10 sm:w-5/10 text-center text-4xl font-bold">
            Select the pace that fits your life and goals
            <div className="my-8 justify-center items-end sm:grid grid-cols-2 space-y-3 sm:space-y-0 gap-3">
              <Image
                className="w-full h-fit"
                alt=""
                src={"/courseType1.svg"}
                width={100}
                height={100}
              />
              <Image
                className="w-full h-auto"
                alt=""
                src={"/courseType2.svg"}
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="w-9/10 rounded-2xl flex justify-center gap-10 relative">
            <div className="absolute  w-full top-85/100 flex items-center justify-around">
              <div className="text-center rounded-lg bg-gray-300 hover:bg-gray-400 text-black hover:cursor-pointer px-5 py-3 text-sm font-semibold">
                Tell me more
              </div>
              <div className="text-center rounded-lg bg-gray-300 hover:bg-gray-400 text-black hover:cursor-pointer px-5 py-3 text-sm font-semibold">
                Take a closer look
              </div>
              <div className="mr-15 text-center rounded-lg bg-gray-300 hover:bg-gray-400 text-black hover:cursor-pointer px-5 py-3 text-sm font-semibold">
                Wow! Whats that?
              </div>
            </div>
            <Image
              className="w-full h-auto"
              alt=""
              src={"/howtogetnewcareer.svg"}
              width={100}
              height={100}
            />
          </div>

          <div className="font-semibold text-4xl my-10 w-6/10 text-center">
            Our grads get great jobs with both startups and industry giants
          </div>
          <div className="flex flex-wrap justify-center w-7/10 my-10 gap-6 sm:gap-10">
            {/* <Image
              alt=""
              src={"/allcompanies.svg"}
              height={100}
              width={100}
              className="w-full h-auto"
            /> */}
            {companyImages.map((image) => (
              <div key={image.id}>
                <Image
                  alt=""
                  src={image.src}
                  width={10}
                  height={10}
                  className="w-auto h-full"
                />
              </div>
            ))}
          </div>

          <div className="w-full flex items-center justify-center">
            <div className="w-9/10 sm:w-6/10 flex items-center justify-center">
              <Image
                alt=""
                src={"/onlinetrainingandsupport.svg"}
                height={100}
                width={100}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="w-9/10 sm:w-7/10 text-center my-10 rounded-4xl bg-white p-10 pb-0 flex flex-col items-center">
            <div className="font-semibold text-4xl mb-2 w-9/10 sm:w-8/10">
              All in one flexible learning experience
            </div>
            <div className="mb-5 w-9/10 sm:w-7/10 font-light text-sm">
              Learn conceots prctice cosing, build projects, schedule 1 on 1
              tutoring and get feedback all in one place
            </div>

            <div>
              <button className="rounded-lg bg-gray-200 px-5 py-3 font-semibold text-sm">
                This is how you will learn to code like a pro
              </button>
            </div>

            <div className="mt-10 w-9/10 rounded-2xl flex justify-center gap-10">
              <Image
                alt=""
                src={"/allinone.svg"}
                height={100}
                width={100}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="w-9/10 sm:w-8/10 text-center my-10 rounded-4xl bg-white p-10 flex flex-col items-center">
            <div className="font-semibold text-3xl mb-2 w-9/10 sm:w-8/10">
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
              <div className="hidden sm:block basis-4/5  overflow-hidden rounded-2xl ">
                <Carousel perView={3} />
              </div>
              <div className="sm:basis-1/5 text-center font-semibold text-sm">
                {" "}
                Backed by experience: Our tutors have 5+ years on experience in
                their field and mentorship training from Lancrs academy
              </div>
              <div className="sm:hidden w-full overflow- rounded-2xl  h-fit mt-5">
                <Carousel perView={2} />
              </div>
            </div>
          </div>

          <GetExperiemce />

          <div className="w-9/10 p-10 rounded-2xl bg-white flex flex-col items-center">
            <div className="w-6/10 text-center font-semibold text-5xl">
              Get the job with expert career coaching and AI tools
            </div>
            <div className="w-7/10 text-center">
              Finding a Software Engineering job is much easier with
              professional help. Prep for interviews with someone who knows the
              point of every question. Perfect your resume with someone who’s
              seen thousands. Automate the job search with AI.
            </div>
            <button className="flex items-center gap-x-3 hover:cursor-pointer rounded-xl bg-gray-200 px-5 py-3 font-medium mt-5 text-lg">
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

          <div className="flex flex-col items-center">
            <div className="mt-30 w-6/10 text-center text-5xl font-medium">
              Will you be certified?
            </div>
            <div className="my-3 w-5/10 text-center text-4xl font-medium">
              {"Of course! It’ll look great on your resume and LinkedIn :-)"}
            </div>
            <Image
              alt=""
              src={"/certificate.svg"}
              width={100}
              height={100}
              className="w-1/3 h-auto"
            />
          </div>

          <div className="w-6/10 my-10 space-y-1">
            <ExpandableModule />
            <ExpandableModule />
            <ExpandableModule />
            <ExpandableModule />
          </div>

          <div className="bg-white flex items-center justify-center w-8/10 my-10 relative rounded-tr-[100px] rounded-bl-[100px]">
            <div className="absolute -top-15 left-0 rounded-tl-2xl overflow-hidden">
              <Image
                alt=""
                src={"/g2.svg"}
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full  flex p-16">
              <div className="basis-1/3"></div>
              <div className="basis-2/3">
                <div className="text-4xl font-medium ">
                  We believe that you’ll get into tech in 10 months. In fact, we
                  put money on it.
                </div>
                <div className="flex items-center justify-evenly gap-x-3 my-3">
                  <div>
                    <div className="font-semibold text-lg">1</div>
                    Graduate and complete our included career prep and coaching
                    programs
                  </div>
                  <div>
                    <div className="font-semibold text-lg">2</div>Apply to
                    relevant jobs and stay in touch with your career coach
                  </div>
                  <div>
                    <div className="font-semibold text-lg">3</div>If you don’t
                    have a job after 300 days, we will refund 100% of your
                    tuition
                  </div>
                </div>
                <div className="flex items-center justify-end  w-full text-xs">
                  <div>
                  </div>
                  <div className="w-4/10 px-3 py-2 rounded-md bg-red-100">
                    <Hand />
                    The TripleTen money-back guarantee is legally binding. For
                    details, please see our Terms of use
                  </div>
                </div>
                <div className="bg-red-300 rounded-lg p-2 w-fit">
                  <Heart />
                </div>
                <div className="flex items-center ">
                  <div className="basis-1/3 font-medium text-xl">We also have fair refund policy</div>
                  <div className="basis-2/3 text-xs">After starting our Software Engineering bootcamp, you have 2 weeks to withdraw with a 100% refund. After that, you can get a partial refund on a transparent schedule. Check our Terms of Use for more info.</div>
                </div>
              </div>
            </div>
          </div>

          {/* end scrollable  */}
        </div>
      </div>
    </div>
  );
}

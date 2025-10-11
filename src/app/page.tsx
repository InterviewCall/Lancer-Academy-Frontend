import BookACallForm from "@/components/BookACallForm";
import BookACallReminder from "@/components/BookACallReminder";
import CareerCoachingBanner from "@/components/CareerCoachingBanner";
import Certificate from "@/components/Certificate";
import { PercentageBadge } from "@/components/FAQOptions";
import FAQSection from "@/components/FAQSection";
import FlexCard from "@/components/FlexCard";
import FreeBonusCourse from "@/components/FreeBonusCourse";
import GetExperiemce from "@/components/GetExperience";
import HeroSection from "@/components/HeroSection";
import {
  MoneyBackGuaranteeBannerLaptop,
  MoneyBackGuaranteeBannerMobile,
} from "@/components/MoneyBackGuaranteeBanner";
import Navbar from "@/components/Navbar";
import SuccessStoryCard from "@/components/SuccessStoryCard";
import SyllabusModules from "@/components/SyllabusModules";
import TutorSection from "@/components/TutorSection";
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
    <div className="bg-red-50 flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 h-full bg-red-50 z-[1]">
        <div className="w-full h-full flex flex-col items-center text-black bg-red-50">
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

          <div className="my-10 w-9/10 sm:w-5/10 text-center text-4xl font-bold">
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

          <div className="font-semibold text-4xl my-10 w-9/10 sm:w-6/10 text-center">
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

          <div className="w-9/10 sm:w-9/10 text-center my-10 rounded-4xl bg-white p-10 pb-0 flex flex-col items-center">
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

          <TutorSection />

          <GetExperiemce />

          <CareerCoachingBanner />

          <Certificate />

          <SyllabusModules />
          <BookACallReminder
            text="Ready to learn the skills that will get you into tech? Book a call with
                  one of our career advisors!"
          />
          <div className="w-7/10 flex flex-col items-center text-6xl font-bold my-10 leading-20">
            <div className="flex items-center justify-center">
              <span>1.1K+</span>
              <span className="px-5">
                <Image
                  alt=""
                  src={"./heart.svg"}
                  height={100}
                  width={100}
                  className="h-full w-auto"
                />
              </span>
              <span>Alumni.</span>
            </div>
            <div className="flex gap-3 items-center justify-center">
              <div className="-rotate-12">
                <PercentageBadge value="80%" />
              </div>
              <div>From a non STEM </div>
            </div>
            <div>background</div>
          </div>

          <div className=" w-9/10 grid grid-cols-1 sm:grid-cols-3 gap-1">
            <SuccessStoryCard
              before="Track Driver"
              image="/testimonial_LA.png"
              name="John Doe"
              now="Full Stack Developer"
              quote="The time commitment was another big thing because I didn't have to quit my job or anything. I could keep working those 40 hours I was, and then also try to fit it into my schedule while I was watching my kids."
            />
            <SuccessStoryCard
              before="Track Driver"
              image="/testimonial_LA.png"
              name="John Doe"
              now="Full Stack Developer"
              quote="The time commitment was another big thing because I didn't have to quit my job or anything. I could keep working those 40 hours I was, and then also try to fit it into my schedule while I was watching my kids."
            />
            <SuccessStoryCard
              before="Track Driver"
              image="/testimonial_LA.png"
              name="John Doe"
              now="Full Stack Developer"
              quote="The time commitment was another big thing because I didn't have to quit my job or anything. I could keep working those 40 hours I was, and then also try to fit it into my schedule while I was watching my kids."
            />
          </div>

          <BookACallReminder text="Ready to start with one of the highest-rated bootcamps in the India? Book a call today!" />
          <FreeBonusCourse />

          <MoneyBackGuaranteeBannerLaptop />
          <MoneyBackGuaranteeBannerMobile />

          <BookACallForm />

          <FAQSection />

          {/* end scrollable  */}
        </div>
      </div>
    </div>
  );
}

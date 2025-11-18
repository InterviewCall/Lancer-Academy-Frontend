import BookACallForm from "@/components/BookACallForm";
import BookACallReminder from "@/components/BookACallReminder";
import CareerCoachingBanner from "@/components/CareerCoachingBanner";
import Certificate from "@/components/Certificate";
import { PercentageBadge } from "@/components/FAQOptions";
import FAQSection from "@/components/FAQSection";
import FlexCard from "@/components/FlexCard";
import Footer from "@/components/Footer";
import FreeBonusCourse from "@/components/FreeBonusCourse";
import GetExperiemce from "@/components/GetExperience";
import GuaranteeBar from "@/components/GuaranteeBar";
import HeroSection from "@/components/HeroSection";
import {
  MoneyBackGuaranteeBannerLaptop,
  MoneyBackGuaranteeBannerMobile,
} from "@/components/MoneyBackGuaranteeBanner";

import { FaRegEye } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import StatsAfterCourse from "@/components/StatsAfterCourse";
import SuccessStoryBanner from "@/components/SuccessStoryBanner";
import SuccessStoryCard from "@/components/SuccessStoryCard";
import SyllabusModules from "@/components/SyllabusModules";
import TutorSection from "@/components/TutorSection";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import CourseTypeCard from "@/components/CourseTypeCard";
import {
  BookOpen,
  Calendar,
  CheckCircle,
  CirclePause,
  CircleUser,
  Clock,
  HandCoins,
  HeartHandshake,
  Notebook,
  UserStar,
} from "lucide-react";
import { FaLink } from "react-icons/fa6";
import AIToolsSection from "@/components/AiToolsSection";

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
      <div className="flex-1 flex justify-center h-full bg-red-50 z-[1]">
        <div className="w-80/100 h-full flex flex-col items-center text-black bg-red-50">
          <HeroSection />

          <GuaranteeBar />
          <div className="w-9/10 "></div>

          <div className="w-[80%] relative lg:w-full my-10">
            <div className="absolute w-full top-75/100 flex items-center justify-center">
              {/* <div className="text-center rounded-lg bg-gray-300 hover:bg-gray-400 text-black hover:cursor-pointer px-5 py-3 text-sm font-semibold">
                All numbers come from our 2024 graduate outcomes report
              </div> */}
            </div>
            <Image
              src={"/courseStats_3.svg"}
              alt="Example"
              width={100}
              height={100}
              className="w-full h-auto lg:block hidden"
            />

            <Image
              src={"/courseStatsMobile_3.svg"}
              alt="Example"
              width={100}
              height={100}
              className="w-full h-full lg:hidden block"
            />
            <div className="absolute hover:cursor-pointer bottom-[5%] sm:bottom-[10%] flex items-center justify-center w-full">
              <button className="rounded-2xl hidden sm:flex justify-center items-center gap-x-3 hover:cursor-pointer hover:bg-gray-300 bg-gray-200 px-7 py-2 font-[500] text-md  text-lg">
                <div>
                  All numbers are from the latest Lancrs Academy Graduate
                  Outcomes Report
                </div>{" "}
                <FaLink />
              </button>
              <button className="rounded-lg flex sm:hidden justify-between items-center gap-x-3 hover:cursor-pointer hover:bg-gray-300 bg-gray-200 px-5 py-3 font-semibold text-sm">
                <div>2024 graduate outcomes report</div>
                <FaLink />
              </button>
            </div>
          </div>

          <div className="w-full tracking-tighter text-center mt-10 mb-5 rounded-4xl bg-transparent pt-20 pb-0 px-5 sm:px-10">
            <div className="text-5xl sm:text-6xl font-bold mb-3 sm:mb-2">
              Become a Software Engineer
            </div>

            <div className="text-5xl sm:text-6xl font-bold mb-3 sm:mb-5">
              with Lancrs Academy
            </div>

            <div className="w-full flex justify-center">
              <div className="w-8/10 flex flex-col sm:flex-row sm:items-start items-center justify-center sm:justify-start text gap-x-15 my-10 text-center">
                <div className="text-lg font-semibold w-2/3 sm:w-5/10 my-5 flex flex-col items-center justify-start">
                  <FaCircleCheck />
                  <div>Our guarantee:</div>
                  <div> job in tech or 100% </div>
                  <div> money back*</div>
                </div>
                <div className="text-lg font-semibold w-2/3 sm:w-5/10 my-5 flex flex-col items-center">
                  <FaCircleCheck />
                  <div>No IT, CS, or engineering </div>
                  <div> background required</div>
                </div>
                <div className="text-lg font-semibold w-2/3 sm:w-5/10 my-5 flex flex-col items-center">
                  <FaCircleCheck />
                  <div>4.8/5 rating across</div>
                  <div>1,500+ student reviews</div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center text-sm mb-10 text-gray-600">
              <div className="w-8/10">
                *Get a relevant tech job within 6 months of graduation or
                receive a full tuition refund after completing your Career
                Services requirements and making a good-faith effort in your job
                search. Full details are provided in our{" "}
                <u>Terms & Conditions</u> .
              </div>
            </div>
          </div>

          {/* <div className="w-7/10">
            <Image
              alt=""
              src={"/stats.svg"}
              height={100}
              width={100}
              className="w-full h-auto"
            />
          </div> */}

          <StatsAfterCourse />

          <FlexCard />

          <div className="my-10 w-full text-center text-5xl font-bold">
            <div className="w-full flex justify-center">
              <div>
                <div>Select the pace that fits your life</div>
                <div>and goals—both tracks</div>
                <div>
                  start at <span className="text-[#3AA65E]">₹39,999</span>{" "}
                </div>
              </div>
            </div>{" "}
            <div className="my-8 justify-center items-end sm:items-stretch sm:grid grid-cols-2 space-y-3 sm:space-y-0 gap-3">
              {/* <Image
                className="w-full h-fit"
                alt=""
                src={"/courseType1.svg"}
                width={100}
                height={100}
              /> */}

              <CourseTypeCard
                recommended={true}
                title="Advanced Track"
                items={[
                  { icon: Calendar, text: "4 months" },
                  { icon: Clock, text: "40 hours/week" },
                  {
                    icon: CheckCircle,
                    iconColor: "text-green-600",
                    text: '<span class="text-green-600 font-medium">Structured</span> weekly deadlines with live mentor sessions',
                  },
                  // {
                  //   icon: GraduationCap,
                  //   text: "Best if you want a fast, intensive path into software engineering",
                  //   subpoints: [

                  //     ,
                  //     ,
                  //     ,

                  //   ],
                  // },
                  {
                    icon: Notebook,
                    text: "Weekly projects and accelerated skill-building",
                  },
                  { icon: CirclePause, text: "2 one-week breaks included" },
                  {
                    icon: CircleUser,
                    text: "Capstone: Build a real production-grade project for Lancrs / InterviewCall / WorkR",
                  },
                  {
                    icon: HandCoins,
                    text: "Intensive 1:1 job preparation and personalized coaching",
                  },
                  {
                    icon: HeartHandshake,
                    text: "One dedicated instructor guiding and mentoring your group",
                  },
                  { icon: BookOpen, text: "Learn at your own pace" },
                ]}
              />

              <CourseTypeCard
                title="Intermediate Track"
                items={[
                  { icon: Calendar, text: "7 months" },
                  { icon: Clock, text: "12-15 hours/week" },
                  {
                    icon: CheckCircle,
                    iconColor: "text-green-600",
                    text: '<span class="text-green-600 font-medium">Flexible</span> schedule to fit your life',
                  },
                  // {
                  //   icon: GraduationCap,
                  //   text: "Best if you are working or studying full time",
                  //   subpoints: [
                  //     ,
                  //     ,
                  //     ,
                  //     ,
                  //     ,
                  //     // 'Career prep begins <span class="text-red-500 font-medium">three months in</span>',
                  //     // "Weekly live sessions and regular office hours",
                  //   ],
                  // },
                  {
                    icon: Notebook,
                    text: "Flexible deadlines with full human mentor support",
                  },
                  {
                    icon: CirclePause,
                    text: "Biweekly projects designed for working professionals",
                  },
                  { icon: UserStar, text: "Up to 6 weeks of optional breaks" },
                  {
                    icon: HandCoins,
                    text: "Optional externship-style project for real-world experience",
                  },
                  {
                    icon: HeartHandshake,
                    text: "Personalized 1:1 career coaching during job search",
                  },
                  { icon: BookOpen, text: "Learn at your own pace" },
                ]}
              />

              {/* <Image
                className="w-full h-auto"
                alt=""
                src={"/courseType2.svg"}
                width={100}
                height={100}
              /> */}
            </div>
          </div>

          <div className="w-full rounded-2xl flex justify-center gap-10 relative">
            <div className="absolute  w-full top-85/100 flex items-center justify-around">
              {/* <div className="text-center rounded-lg bg-gray-300 hover:bg-gray-400 text-black hover:cursor-pointer px-5 py-3 text-sm font-semibold">
                Tell me more
              </div>
              <div className="text-center rounded-lg bg-gray-300 hover:bg-gray-400 text-black hover:cursor-pointer px-5 py-3 text-sm font-semibold">
                Take a closer look
              </div>
              <div className="mr-15 text-center rounded-lg bg-gray-300 hover:bg-gray-400 text-black hover:cursor-pointer px-5 py-3 text-sm font-semibold">
                Wow! Whats that?
              </div> */}
            </div>
            <Image
              className="w-full h-auto lg:block hidden"
              alt=""
              src={"/howtogetnewcareer4.svg"}
              width={100}
              height={100}
            />

            <Image
              className="w-full h-auto lg:hidden block"
              alt=""
              src={"/howtogetnewcareerMobile2.svg"}
              width={100}
              height={100}
            />
          </div>

          <AIToolsSection />

          <div className="font-semibold text-4xl my-10 w-full text-center">
            Our grads get great jobs at top startups and leading tech companies
          </div>

          <div className="flex flex-wrap justify-center w-full my-10 gap-6 sm:gap-10">
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
                src={"/onlinetrainingandsupport_3.svg"}
                height={100}
                width={100}
                className="w-full h-auto lg:block hidden"
              />

              <Image
                alt=""
                src={"/onlinetrainingandsupportMobile_2.svg"}
                height={100}
                width={100}
                className="w-full h-auto lg:hidden block bg-transparent"
              />
            </div>
          </div>

          <div className="w-full text-center my-10 rounded-4xl bg-white pt-10 px-2 sm:px-10 sm:p-10 sm:pb-0 pb-0 flex flex-col items-center">
            <div className="font-[600] text-5xl mb-2 w-full ">
              <div>
                <div>All-in-one flexible learning</div>
                <div>experience</div>
              </div>
            </div>
            <div className="mb-5 w-9/10 sm:w-6/10 font-[400] text-lg">
              Learn core concepts, practice real coding, build industry-grade
              projects, book 1-on-1 mentor sessions, and get personalized
              feedback — all in one place.
            </div>

            <div>
              <button className="rounded-lg flex justify-between items-center gap-x-3 hover:cursor-pointer hover:bg-gray-300 bg-gray-200 px-5 py-3 font-semibold text-md">
                <FaRegEye size={20} />
                <div className="hidden sm:block">
                  See how you’ll learn like a real software engineer
                </div>
                <div className="block sm:hidden">Learn to code like a pro</div>
              </button>
            </div>

            <div className="relative overflow-x-clip mt-10 w-full h-44 sm:h-fit sm:w-9/10 rounded-2xl flex justify-center gap-10">
              <Image
                alt=""
                src={"/allinone.svg"}
                height={100}
                width={100}
                className=" absolute sm:static bottom-0 w-auto sm:w-full h-40 sm:h-auto max-w-none"
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
          <div className="w-7/10 flex flex-col items-center text-5xl sm:text-6xl font-bold my-10  sm:leading-20 tracking-tighter">
            <div className="flex items-center justify-center">
              <span>1.1K+</span>
              <span className="sm:px-5 h-10 sm:h-16 w-10 sm:w-16 ">
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
                <PercentageBadge value="80%" textSize="3xl" />
              </div>
              <div className="sm:block hidden ">From a non STEM </div>
              <div className="block sm:hidden"> from </div>
            </div>
            <div className="sm:hidden block">a non stem</div>
            <div>background</div>
          </div>
          <SuccessStoryBanner
            image="/testimonial_LA.png"
            name="John Doe"
            quote="
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus architecto vel dolorum, quia eum deleniti quisquam animi ."
          />
          <div className="flex sm:grid sm:grid-cols-3 gap-4 overflow-x-auto sm:overflow-visible max-w-full sm:max-w-65/100 scrollbar-hide">
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
          <div className="hidden sm:block text-center my-20 font-bold text-2xl sm:text-6xl">
            <div>4.8/5 across 1,200+ reviews</div>
            <div>on trusted platforms</div>
          </div>

          <div className="block sm:hidden text-center my-20 font-bold text-3xl leading-6.5">
            <div>4.8/5 across </div>
            <div>1,200+ reviews on</div>
            <div>trusted platforms</div>
          </div>

          <BookACallReminder text="Ready to start with one of the highest-rated bootcamps in the India? Book a call today!" />
          <FreeBonusCourse />

          <MoneyBackGuaranteeBannerLaptop />
          <MoneyBackGuaranteeBannerMobile />

          <BookACallForm />

          <FAQSection />

          <Footer />

          {/* end scrollable  */}
        </div>
      </div>
    </div>
  );
}

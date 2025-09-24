import Carousel from "@/components/Carousel";
import Image from "next/image";

const techLogos = [
  { id: 1, src: "/techLogo/bash.svg" },
  { id: 2, src: "/techLogo/bem.svg" },
  { id: 3, src: "/techLogo/certbot.svg" },
  { id: 4, src: "/techLogo/chromeDevtools.svg" },
  { id: 5, src: "/techLogo/css.svg" },
  { id: 6, src: "/techLogo/eslint.svg" },
  { id: 7, src: "/techLogo/figma1.svg" },
  { id: 8, src: "/techLogo/git.svg" },
  { id: 9, src: "/techLogo/github.svg" },
  { id: 10, src: "/techLogo/html.svg" },
  { id: 11, src: "/techLogo/javascript.svg" },
  { id: 12, src: "/techLogo/jest.svg" },
  { id: 13, src: "/techLogo/mongoDb.svg" },
  { id: 14, src: "/techLogo/nginx.svg" },
  { id: 15, src: "/techLogo/nodejsandexpressjs.svg" },
  { id: 16, src: "/techLogo/pm2.svg" },
  { id: 17, src: "/techLogo/postman.svg" },
  { id: 18, src: "/techLogo/prettier.svg" },
  { id: 19, src: "/techLogo/react.svg" },
  { id: 20, src: "/techLogo/webpack.svg" },
];

export default function Page() {
  return (
    <div className="flex flex-col w-full h-full border">
      <div className="bg-white text-black flex items-center justify-between p-1 ">
        <div className="flex items-center gap-4 ">
          <div>
            <Image alt="" src={'/lancersFullLogo.png'} height={90} width={90} className="w-full h-auto" />
          </div>
          <div className="rounded-full border px-3 py-1 flex items-center gap-2 font-semibold text-sm border-gray-400 shadow-2xl">
            <div>Programs</div>
          </div>
        </div>
        <div className="flex items-center gap-4 font-light text-sm">
          <div>Intro</div>
          <div>How we teach</div>
          <div>Curriculum </div>
          <div>Reviews</div>
          <div>Tuition</div>
          <div>FAQ</div>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-3 py-2 bg-black text-white rounded-md">
            Book a call{" "}
          </button>
        </div>
      </div>
      <div className="flex-1 h-full overflow-y-hidden bg-red-100">
        <div className="w-full h-full overflow-y-scroll flex flex-col items-center text-black border">
          <div className="flex items-start justify-center my-10 gap-5 w-8/10">
            <div className="basis-2/5">
            <Image alt="" src={'/HeroSecitionImage.png'} width={100} height={100} className="w-full h-auto" />
            </div>
            <div className="basis-3/5 ">
              <div className="flex items-center gap-2 mb-2">
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
              <div className="text-8xl font-semibold my-10">
                Software Engineering Bootcamp
              </div>
              <div>
                Join our Software Engineering Bootcamp part-time or full-time to
                learn a remote-friendly job that pays{" "}
                <span className="font-semibold"> ~$75,000 to start</span>
              </div>
              <div className="my-10">
                <button className="px-10  py-2 bg-black text-white rounded-md mt-5">
                  Book a call
                </button>
              </div>
            </div>
          </div>

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

          <div className="w-7/10 text-center my-10 rounded-4xl bg-red-50 pt-20 pb-10 px-10">
            <div className="text-6xl font-semibold mb-5">
              Become a software engineer with Triple Ten
            </div>
            <div className="flex items-center justify-center text gap-x-15 my-10 text-center">
              <div className="text-lg font-semibold">
                Our guarantee: job in tech or 100% money back*
              </div>
              <div className="text-lg font-semibold">
                No IT or STEM background needed
              </div>
              <div className="text-lg font-semibold">
                4.8/5 rating across 1k+ reviews
              </div>
            </div>
            <div className="text-sm text-gray-600">
              *Get a relevant job in 10 months or your tuition back when you
              complete our included Career Services package and make a
              good-faith effort to find a job. Details in our Terms of Use.
            </div>
          </div>

          <div className="w-8/10 text-center my-10 rounded-4xl bg-white p-10 flex flex-col items-center">
            <div className="text-3xl text-center font-semibold mb-5">
              You after lancrs academy
            </div>

            <div className="bg-white grid grid-cols-[4fr_2fr_2fr] gap-4">
              <div className=" p-4">
                <div className=" flex items-center justify-center gap-4">
                  <div>
                    <Image alt="" src={"/pfp.svg"} width={100} height={100} />
                  </div>
                  <div>
                    <div className="text-xl font-semibold">
                      Software Engineer
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <div>Linked in </div>
                      <div>Github</div>
                    </div>
                  </div>
                </div>
                <div className="text-start my-5">Hard skills</div>
                <div className="flex flex-wrap items-stretch gap-1 text-xs font-medium">
                  {techLogos.map((logo) => (
                    <div key={logo.id} className="">
                      <Image alt="" src={logo.src} width={80} height={80} />
                    </div>
                  ))}
                </div>
              </div>
              <div className=" py-4 text-start text-sm">
                <div className="mb-5">Education</div>
                <div className="font-semibold text-base">
                  Lancrs academy software engineering bootcamp
                </div>
                <div className="mb-5">Jan-Sept 2025</div>
                <div className="mb-3">Soft Skills</div>
                <div className="flex flex-wrap gap-2 text-xs font-medium">
                  <div className="bg-gray-300 rounded-md px-2 py-1 ">
                    {" "}
                    Problem Solving
                  </div>
                  <div className="bg-gray-300 rounded-md px-2 py-1 ">
                    {" "}
                    Time management
                  </div>
                  <div className="bg-gray-300 rounded-md px-2 py-1 ">
                    {" "}
                    Project Management
                  </div>
                  <div className="bg-gray-300 rounded-md px-2 py-1 ">
                    {" "}
                    Adaptability
                  </div>

                  <div className="bg-gray-300 rounded-md px-2 py-1 text-sm">
                    {" "}
                    Teamwork
                  </div>
                </div>
              </div>
              <div className=" p-4 text-start">
                <div className="font-medium mb-2">Expected Salary</div>
                <div className="font-semibold mb-5">$75,000</div>
                <div className="font-medium mb-2 mt-16 text-sm">Projects</div>
                <div className="font-semibold">Web Marketplace</div>
                <div className="text-gray-500 text-sm">
                  740+ hours of coding in Javascript, ReactJs, NodeJs, HTML5,
                  CSS3, BEM
                </div>
              </div>
            </div>
          </div>

          <div className="my-10 w-5/10 text-center text-4xl font-bold">
            Select the pace that fits your life and goals
            <div className="my-8">
              <Image
                className="w-full h-auto"
                alt=""
                src={"/courseVariation.svg"}
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
          <div className="w-7/10 my-10">
            <Image
              alt=""
              src={"/allcompanies.svg"}
              height={100}
              width={100}
              className="w-full h-auto"
            />
          </div>

          <div className="w-full flex items-center justify-center">
            <div className="w-6/10 flex items-center justify-center">
              <Image
                alt=""
                src={"/onlinetrainingandsupport.svg"}
                height={100}
                width={100}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="w-6/10 text-center my-10 rounded-4xl bg-white p-10 pb-0 flex flex-col items-center">
            <div className="font-semibold text-3xl mb-2 w-8/10">
              All in one flexible learning experience
            </div>
            <div className="mb-5 w-7/10 font-light text-xs">
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

          <div className="w-8/10 text-center my-10 rounded-4xl bg-white p-10 flex flex-col items-center">
            <div className="font-semibold text-3xl mb-2 w-8/10">
              One on one tutoring from industry professionals
            </div>
            <div className="mb-5 w-7/10 font-light text-xs">
              Learn directly from the pros with one on one mentoring sessions,
              daily office hours and a deep webinar library
            </div>
            <div>
              <button className="rounded-lg bg-gray-200 px-5 py-3 font-semibold text-sm">
                Take a look in how ours tutor can help
              </button>
            </div>
            <div className="flex justify-between w-full mt-10">
              <div className="basis-4/5  overflow-hidden rounded-2xl ">
                <Carousel />{" "}
              </div>
              <div className="basis-1/5 text-start font-semibold text-sm">
                {" "}
                Backed by experience: Our tutors have 5+ years on experience in
                their field and mentorship training from Lancrs academy
              </div>
            </div>
          </div>

          {/* end scrollable  */}
        </div>
      </div>
    </div>
  );
}

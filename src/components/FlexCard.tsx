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

export default function FlexCard() {
  return (
    <div className="w-9/10 text-center my-10 rounded-4xl bg-white p-15 flex flex-col items-center">
      <div className="text-5xl text-center font-semibold mb-5">
        You after lancrs academy
      </div>

      <div className="bg-white sm:grid sm:grid-cols-[4fr_2fr_2fr] gap-4">
        <div className=" p-4">
          <div className=" flex items-center justify-start gap-4">
            <div>
              <Image alt="" src={"/pfp.svg"} width={110} height={110} />
            </div>
            <div className="mx-3">
              <div className="text-2xl font-semibold">Software Engineer</div>
              <div className="flex items-center justify-center gap-3">
                <div>Linked in </div>
                <div>Github</div>
              </div>
            </div>
          </div>
          <div className="text-start my-5 mt-10">Hard skills</div>
          <div className="flex flex-wrap gap-1 text-xs font-medium">
            {techLogos.map((logo) => (
              <div key={logo.id} className="h-8">
                <Image
                  alt=""
                  src={logo.src}
                  width={110}
                  height={110}
                  className="w-auto h-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className=" py-4 text-start text-sm">
          <div className="mb-1">Education</div>
          <div className="font-semibold text-lg">
            Lancrs academy software engineering bootcamp
          </div>
          <div className="mb-5">Jan-Sept 2025</div>
          <div className="mb-3 mt-14">Soft Skills</div>
          <div className="flex flex-wrap gap-2 text-sm font-medium h-8 items-center">
            <div className="bg-gray-200 rounded-md px-2 py-1 ">
              {" "}
              Problem Solving
            </div>
            <div className="bg-gray-200 rounded-md px-2 py-1 ">
              {" "}
              Time management
            </div>
            <div className="bg-gray-200 rounded-md px-2 py-1 ">
              {" "}
              Project Management
            </div>
            <div className="bg-gray-200 rounded-md px-2 py-1 ">
              {" "}
              Adaptability
            </div>

            <div className="bg-gray-200 rounded-md px-2 py-1 text-sm">
              {" "}
              Teamwork
            </div>
          </div>
        </div>
        <div className=" p-4 text-start">
          <div className="font-medium mb-2">Expected Salary</div>
          <div className="font-semibold mb-5">$75,000</div>
          <div className="font-medium mb-2 mt-24 text-sm">Projects</div>
          <div className="font-semibold">Web Marketplace</div>
          <div className="text-gray-500 text-sm">
            740+ hours of coding in Javascript, ReactJs, NodeJs, HTML5, CSS3,
            BEM
          </div>
        </div>
      </div>
    </div>
  );
}

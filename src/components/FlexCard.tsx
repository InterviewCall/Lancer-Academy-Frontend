import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const techSkills = [
  { Id: 1, skillName: "Bash", skillImg: "/skillLogo/skill-bash.svg" },
  {
    Id: 2,
    skillName: "Chrome DevTools",
    skillImg: "/skillLogo/skill-chromeDevtools.svg",
  },
  { Id: 3, skillName: "CSS", skillImg: "/skillLogo/skill-css.svg" },
  { Id: 4, skillName: "ESLint", skillImg: "/skillLogo/skill-eslint.svg" },
  { Id: 5, skillName: "Figma", skillImg: "/skillLogo/skill-figma.svg" },
  { Id: 6, skillName: "Git", skillImg: "/skillLogo/skill-git.svg" },
  { Id: 7, skillName: "GitHub", skillImg: "/skillLogo/skill-github.svg" },
  { Id: 8, skillName: "HTML", skillImg: "/skillLogo/skill-html.svg" },
  {
    Id: 9,
    skillName: "JavaScript",
    skillImg: "/skillLogo/skill-javascript.svg",
  },
  { Id: 10, skillName: "Jest", skillImg: "/skillLogo/skill-jest.svg" },
  { Id: 11, skillName: "JWT", skillImg: "/skillLogo/skill-jwt.svg" },
  { Id: 12, skillName: "MongoDB", skillImg: "/skillLogo/skill-mongoDb.svg" },
  { Id: 13, skillName: "MySQL", skillImg: "/skillLogo/skill-mysql.svg" },
  { Id: 14, skillName: "Node.js", skillImg: "/skillLogo/skill-node.svg" },
  { Id: 15, skillName: "Postman", skillImg: "/skillLogo/skill-postman.svg" },
  { Id: 16, skillName: "React", skillImg: "/skillLogo/skill-react.svg" },
  {
    Id: 17,
    skillName: "Responsive Design",
    skillImg: "/skillLogo/skill-responsiveDesgin.svg",
  }, // typo preserved
  { Id: 18, skillName: "REST", skillImg: "/skillLogo/skill-rest.svg" },
  { Id: 19, skillName: "Webpack", skillImg: "/skillLogo/skill-webpack.svg" },
  { Id: 20, skillName: "CI/CD", skillImg: "/skillLogo/skill-cicd.svg" },
];

export default function FlexCard() {
  return (
    <div className="w-full">
      <div className="w-full text-center my-10 rounded-2xl bg-white p-8 md:p-7 lg:px-10 flex flex-col items-center">
        <div className="text-3xl sm:text-5xl text-start sm:text-center font-semibold mb-5">
          You after lancrs academy
        </div>
        {/* large and above */}
        <div className="grid-cols-1 md:hidden bg-white lg:grid lg:grid-cols-[4fr_2fr_2fr] gap-4">
          <div className=" sm:p-4">
            <div className=" flex items-center justify-start gap-4">
              <div>
                <Image alt="" src={"/pfp1.svg"} width={110} height={110} />
              </div>
              <div className="sm:mx-3">
                <div className="text-lg sm:text-2xl font-semibold">
                  Software Engineer
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="flex items-center justify-start gap-1">
                    {" "}
                    <FaLinkedin /> <div>LinkedIn</div>{" "}
                  </div>
                  <div className="flex items-center justify-start gap-1">
                    <FaGithub /> <div> Github</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:hidden text-start text-xl font-medium mt-10 sm:mt-0 mb-2 flex items-center gap-x-2">
              <div className="md:text-3xl text-sm">Expected Salary:</div>{" "}
              <div className="md:text-3xl text-xl">₹6,00,000 - ₹12,00,000 </div>
            </div>

            <div className="text-start my-5 mt-10">Hard skills</div>
            <div className="flex flex-wrap gap-1 text-xs font-medium">
              {techSkills.map((skill) => (
                <div key={skill.Id} className="h-8">
                  <SkillButton
                    skillName={skill.skillName}
                    skillImg={skill.skillImg}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className=" py-4 text-start text-sm">
            <div className="mb-1 mt-5 sm:mt-0">Education</div>
            <div className="font-semibold text-lg">
              Lancrs Academy - Full Stack & AI Engineering Program
            </div>
            <div className="mb-5">Jan-Sept 2025</div>
            <div className="mb-3 mt-10 sm:mt-14">Soft Skills</div>
            <div className="flex flex-wrap gap-2 text-sm font-medium items-center">
              <div className="bg-gray-200 rounded-md px-2 py-1 ">
                {" "}
                Problem Solving
              </div>
              <div className="bg-gray-200 rounded-md px-2 py-1 ">
                {" "}
                Communication
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
          <div className="mt-10 sm:mt-0 sm:p-4 text-start">
            <div className="hidden sm:block font-medium mt-10 sm:mt-0 mb-2">
              Expected Salary
            </div>
            <div className="hidden sm:block font-semibold mb-5">
              {" "}
              ₹6,00,000 - ₹12,00,000
            </div>
            <div className="font-medium mb-2 mt-10 sm:mt-24 text-sm">
              Projects
            </div>
            <div className="font-semibold">AI-Enhanced Web Platform</div>
            <div className="text-gray-500 text-sm">
              900+ hours of hands-on development in JavaScript, React.js, Node.js,
              MySQL, REST APIs, Auth, Deployment
            </div>
            <div className="font-semibold mt-2">
              AI Resume Optimizer {"(Full-Stack)"}
            </div>
            <div className="text-gray-500 text-sm">
              Frontend + Backend + AI scoring engine + Dashboard
            </div>
          </div>
        </div>
        {/* {medium and above } */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-[3fr_2fr]">

            <div>
              <div className=" flex items-center justify-start gap-4">
                <div>
                  <Image alt="" src={"/pfp1.svg"} width={110} height={110} />
                </div>
                <div className="sm:mx-3">
                  <div className="text-lg sm:text-2xl font-semibold">
                    Software Engineer
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex items-center justify-start gap-1">
                      {" "}
                      <FaLinkedin /> <div>LinkedIn</div>{" "}
                    </div>
                    <div className="flex items-center justify-start gap-1">
                      <FaGithub /> <div> Github</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-start my-5 mt-10">Hard skills</div>
              <div className="flex flex-wrap gap-1 text-xs font-medium">
                {techSkills.map((skill) => (
                  <div key={skill.Id} className="h-8">
                    <SkillButton
                      skillName={skill.skillName}
                      skillImg={skill.skillImg}
                    />
                  </div>
                ))}
              </div>

            </div>
            <div>
              <div className="hidden sm:block font-medium mt-10 sm:mt-0 mb-2">
                Expected Salary
              </div>
              <div className="hidden sm:block font-semibold mb-5">
                {" "}
                ₹6,00,000 - ₹12,00,000
              </div>
              <div className="mb-3 mt-10 sm:mt-14">Soft Skills</div>
              <div className="flex flex-wrap gap-2 text-sm font-medium items-center">
                <div className="bg-gray-200 rounded-md px-2 py-1 ">
                  {" "}
                  Problem Solving
                </div>
                <div className="bg-gray-200 rounded-md px-2 py-1 ">
                  {" "}
                  Communication
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
          </div>
          <div className="grid grid-cols-[1fr_5fr] text-start mt-5 ">
            <div className="font-semibold mt-3">Projects</div>
            <div>
              <div className="font-semibold">AI-Enhanced Web Platform</div>
              <div className="text-gray-500 text-sm">
                900+ hours of hands-on development in JavaScript, React.js, Node.js,
                MySQL, REST APIs, Auth, Deployment
              </div>
              <div className="font-semibold mt-2">
                AI Resume Optimizer {"(Full-Stack)"}
              </div>
              <div className="text-gray-500 text-sm">
                Frontend + Backend + AI scoring engine + Dashboard
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function SkillButton({
  skillName,
  skillImg,
}: {
  skillName: string;
  skillImg: string;
}) {
  return (
    <div className="rounded-lg bg-[#F2F1EE] flex items-center justify-center px-2 py-1.5 font-[450] text-sm gap-2">
      <Image
        alt=""
        src={skillImg}
        height={100}
        width={100}
        className="h-5 w-5"
      />
      <div>{skillName}</div>
    </div>
  );
}

"use client";
import { PiFilePdfBold } from "react-icons/pi";
import ExpandableModule from "./ExpandableModule";
import { useState } from "react";
import { FaBell, FaLightbulb, FaRocket } from "react-icons/fa6";
import { courseCurriculam } from "@/utits/content";

const advancedCourseContent = [
  {
    title: "Data Structures & Algorithms",
    time: "8 weeks",
    content: [
      {
        subHeading:
          "Build the problem-solving foundation required for real engineering work and technical interviews.You’ll learn arrays, recursion, sorting, graphs, DP, and more",
        subPoints: [
          "Pattern Visualizer",
          "Backtracking Simulator",
          "Linked List",
          "Tree & Graph Explorers DP Playground",
        ],
      },
      
    ],
  },
  {
    title: "Full-Stack Development",
    time: "10 weeks",
    content: [
      {
        subHeading:
          "Master real-world web development by building production-grade apps:",
        subPoints: [
          "React, JS, Tailwind",
          "Node.js, Express",
          "MySQL + Sequelize",
          "Authentication",
          "API Design",
          "Deployment",
        ],
      },
      { subHeading: "Deployment Projects include:", subPoints: ["WorkR Job Board", "InterviewCall Mentor Dashboard", "Resume Parsing API", "User Auth System", "Full Deployment Pipeline"] },
    ],
  },{
    title: " Core Computer Science",
    time: "2 weeks",
    content: [{
      subHeading: "Gain the engineering fundamentals every real developer needs:",
      subPoints: ["Operating systems", "DBMS", "Networks", "OOPs"]
    }]
  },{
    title: "System Design",
    time: "4 weeks ",
    content: [{
      subHeading: "Learn to design scalable systems used in top tech companies:",
      subPoints: ["HLD + LLD", "Microservices", "Design Patterns", "SOLID", "Case study: WorkR Screening Platform"]
    }]
  },{
    title: "AI Integration",
    time: "4 weeks",
    content: [{
      subHeading: "Learn how modern engineers build AI-enhanced applications:",
      subPoints: ["Prompt engineering", "AI API Integration", "Embeddings + scoring models", "Speech analysis & AI interview simulation"]
    },{
      subHeading: "Projects include:",
      subPoints: ["AI Resume Summary Generator ", "Candidate Fit Score Engine"," AI Interview Simulator"]
    }]
  },{
    title: "Capstone",
    time: "2 weeks",
    content: [{
      subHeading: "Build a production-ready, fully integrated full-stack + AI application, such as:",
      subPoints: ["Resume Analyzer 2.0","AI Screening Platform","AI Interview Coach","Mentor Dashboard 2.0"]
    }]
  }
];



export default function SyllabusModules() {
  const [courseState, setCourseState] = useState(0);
  // const [courseContent, setCourseContent] = useState("Advanced");

  return (
    <div id="curriculam" className="w-full my-10 rounded-xl px-3 sm:px-10 py-15 space-y-1">
      <div className="text-center font-semibold text-5xl max-md:text-3xl">
        Software Engineering Curriculum
      </div>
      <div className="grid sm:grid-cols-3 gap-y-10 my-10 font-semibold text-xl px-10">
        <div className="flex flex-col items-center ">
          <FaRocket />
          <div>7 months of career</div>
          <div>-focused training</div>
        </div>
        <div className="flex flex-col items-center ">
          <FaBell />
          <div>Updated every</div>
          <div>2 weeks</div>
        </div>
        <div className="flex flex-col items-center ">
          <FaLightbulb />
          <div>Designed directly with </div>
          <div>employer insights</div>
        </div>
      </div>
      {

      }

      {/* <div className="w-full flex justify-center my-5">
        <div className="grid grid-cols-2 gap-x-1  rounded-lg px-1 py-0.5 bg-white">
          <div
            className={
              "rounded-md px-2 py-1.5 text-center basis-0.5 hover:cursor-pointer" +
              (courseState ? " " : " bg-green-300")
            }
            onClick={() => {
              setCourseState(0);
            }}
          >
            Advanced Course
          </div>
          <div
            className={
              "rounded-md px-2 py-1.5  text-center basis-0.5 hover:cursor-pointer " +
              (courseState ? " bg-green-300" : " ")
            }
            onClick={() => {
              setCourseState(1);
            }}
          >
            Intermediate Course
          </div>
        </div>
      </div> */}
      {courseState === 0 ? (
        <div className="space-y-2">
          {advancedCourseContent.map((module, index)=>(
            <ExpandableModule key={index} title={module.title} time={module.time} content={module.content} />
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {advancedCourseContent.map((module, index)=>(
            <ExpandableModule key={index} title={module.title} time={module.time} content={module.content} />
          ))}
        </div>
      )}
      <div className="flex items-center justify-end">
        <button onClick={() => window.open(courseCurriculam, "_blank")} className="flex items-center gap-x-2 justify-center rounded-xl bg-gray-200 hover:bg-gray-300 hover:cursor-pointer px-3 py-2 my-2 font-semibold">
          <PiFilePdfBold size={25} />
          <div>Download PDF</div>
        </button>
      </div>
    </div>
  );
}

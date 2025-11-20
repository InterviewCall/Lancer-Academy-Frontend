"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useReducer, useState } from "react";

const projectContent = [
  {
    id: 1,
    src: "/projects/project-1.svg",
    heading: "CodexTrack – AI DSA practice platform",
    content:
      "A focused web app that helps learners build strong problem-solving habits. CodexTrack lets users solve DSA questions, run code against hidden test cases, and track progress topic-wise. An integrated AI assistant generates hints, explains edge cases, and suggests follow-up problems. Leaderboards, streaks, and weekly goals keep learners accountable while giving them a clear, data-driven view of their readiness for product-company interviews.",
    className: "w-full h-auto",
  },
  {
    id: 2,
    src: "/projects/project-2.svg",
    heading: "WorkR Lite – job listings and referral portal",
    content:
      "A streamlined version of a real hiring platform that connects candidates, referrers, and recruiters. WorkR Lite allows companies to post roles, candidates to apply, and employees to share referral links with live status tracking. Recruiters get a clean dashboard to filter applicants, review profiles, and manage the pipeline. Built to mirror real-world ATS workflows, this project demonstrates end-to-end system design, robust APIs, and production-style user flows that employers instantly recognize.",
    className: "w-full h-auto",
  },
  {
    id: 3,
    src: "/projects/project-3.svg",
    heading: "InterviewCall AI Prep Suite – resume and interview assistant",
    content:
      "A career-prep tool that uses AI to help candidates get ready for interviews. Users upload their resumes, and the system parses skills, experience, and keywords to generate an ATS-style score and a list of gaps to fix. The app then creates tailored interview questions by role and seniority level, plus suggested answers and follow-up prompts. Candidates can save sessions, track improvements, and export an AI-optimized resume version to apply for roles with more confidence.",

    className: "w-full h-auto",
  },
  {
    id: 4,
    src: "/projects/project-4.svg",
    heading: "Lancrs Commerce – smart e-commerce app",
    content:
      "A full e-commerce experience where users browse products, add items to cart, and complete checkout with Razorpay test payments. Admins can manage inventory, prices, and order statuses from a separate dashboard. An AI recommendation engine analyzes browsing and purchase history to surface “You may also like” suggestions in real time. This project showcases complete full-stack skills: secure auth, payments, order workflows, and practical AI integration inside a familiar, production-style product.",

    className: "w-full h-auto",
  },
];

export default function ProjectCarousel() {
  // counterReducer.ts
  const [totalCount] = useState(projectContent ? projectContent.length : 0);
  const counterReducer = (state: number, action: { type: string }): number => {
    switch (action.type) {
      case "increment":
        return (state + 1) % totalCount;
      case "decrement":
        return state - 1 < 0 ? totalCount - 1 : state - 1;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <div className=" sm:flex w-full rounded-xl md:bg-gray-100 my-10 py-5">
      <div className="sm:basis-3/5 w-full sm:w-9/10 h-[50vh] sm:h-[70vh] flex items-center justify-center rounded-xl">
        <Image
          alt=""
          src={projectContent[count].src}
          width={50}
          height={50}
          className={projectContent[count].className}
        />
      </div>
      <div className="sm:basis-2/5 py-7 px-3 flex flex-col justify-between">
        <div>
          <div className="font-medium text-2xl ">
            {projectContent[count].heading}
          </div>
          <div className="w-full sm:w-9/10">
            {projectContent[count].content}
          </div>
        </div>

        <div className="mt-15 flex items-center justify-center sm:justify-start gap-x-2">
          <div
            onClick={() => {
              dispatch({ type: "decrement" });
            }}
            className="hover:cursor-pointer hover:bg-gray-300 w-fit p-3 px-5 rounded-lg bg-gray-200"
          >
            <ArrowLeft />
          </div>
          <div
            onClick={() => {
              dispatch({ type: "increment" });
            }}
            className="hover:cursor-pointer hover:bg-gray-300 w-fit p-3 px-5 rounded-lg bg-gray-200"
          >
            <ArrowRight />
          </div>
          <div className="">
            {count + 1}/{totalCount}
          </div>
        </div>
      </div>
    </div>
  );
}

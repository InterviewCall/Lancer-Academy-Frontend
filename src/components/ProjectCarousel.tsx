"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useReducer, useState } from "react";

const projectContent = [
  {
    id: 1,
    src: "/projects/project1.png",
    heading: "AI-Powered Chatbot",
    content:
      "An intelligent assistant built with React and FastAPI, capable of handling real-time queries and learning from user interactions.",
    className: "w-1/3 h-auto",
  },
  {
    id: 2,
    src: "/projects/project2.jpg",
    heading: "EduData Dashboard",
    content:
      "A dynamic dashboard that visualizes student performance, admission trends, and institutional metrics using interactive charts.",
    className: "w-2/3 h-auto",
  },
  {
    id: 3,
    src: "/projects/project3.png",
    heading: "Image Classifier",
    content:
      "A deep learning model trained to identify plant species from images, with a clean UI for uploading and viewing predictions.",

    className: "w-1/3 h-auto",
  },
  {
    id: 4,
    src: "/projects/project4.jpg",
    heading: "Network Visualizer",
    content:
      "A graph-based tool that helps users explore OSI and TCP/IP layers through animated simulations and protocol breakdowns.",

    className: "w-2/3 h-auto",
  },
  {
    id: 5,
    src: "/projects/project5.jpg",
    heading: "Network Visualizer",
    content:
      "A graph-based tool that helps users explore OSI and TCP/IP layers through animated simulations and protocol breakdowns.",

    className: "w-2/3 h-auto",
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
    <div className=" flex w-full rounded-xl bg-gray-100 my-10 py-5">
      <div className="basis-3/5 w-9/10  h-96 flex items-center justify-center rounded-xl">
        <Image
          alt=""
          src={projectContent[count].src}
          width={50}
          height={50}
          className={projectContent[count].className}
        />
      </div>
      <div className="basis-2/5 py-7 flex flex-col justify-between">
        <div>
          <div className="font-medium text-2xl">
            {projectContent[count].heading}
          </div>
          <div className="w-6/10">{projectContent[count].content}</div>
        </div>

        <div className="mt-15 flex items-center gap-x-2">
          <div
            onClick={() => {
              dispatch({ type: "decrement" });
            }}
            className="w-fit p-3 px-5 rounded-lg bg-gray-200"
          >
            <ArrowLeft />
          </div>
          <div
            onClick={() => {
              dispatch({ type: "increment" });
            }}
            className="w-fit p-3 px-5 rounded-lg bg-gray-200"
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

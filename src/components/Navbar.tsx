"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <div className="bg-white text-black flex items-center justify-between p-1 px-5 sm:px-2">
      <div className="flex items-center gap-4 ">
        <div>
          <Image
            alt=""
            src={"/lancersFullLogo.png"}
            height={90}
            width={90}
            className="w-full h-auto"
          />
        </div>
        <div className="rounded-full border px-3 py-1 hidden sm:flex items-center gap-2 font-semibold text-sm border-gray-400 shadow-2xl">
          <div>Programs</div>
        </div>
      </div>
      <div className="hidden sm:flex items-center gap-4 font-light text-sm">
        <div>Intro</div>
        <div>How we teach</div>
        <div>Curriculum </div>
        <div>Reviews</div>
        <div>Tuition</div>
        <div>FAQ</div>
      </div>
      <div className="flex items-center gap-4">
        <button className="hidden sm:block px-3 py-2 bg-black text-white rounded-md">
          Book a call{" "}
        </button>
        {isNavbarOpen ? (
          <IoMdClose
            className="block sm:hidden h-4 w-4 "
            onClick={() => setIsNavbarOpen((prev) => !prev)}
          />
        ) : (
          <FiMenu
            className="block sm:hidden h-4 w-4 "
            onClick={() => setIsNavbarOpen((prev) => !prev)}
          />
        )}
      </div>
      {isNavbarOpen && (
        <div className="absolute border z-15 bg-white h-full w-full top-0 right-0">
        <div className="flex flex-col w-full h-full">
          <div className="flex items-center justify-between p-2 px-5 ">
            <div>
              <Image
                alt=""
                src={"/lancersFullLogo.png"}
                height={90}
                width={90}
                className="w-full h-auto"
              />
            </div>
            <IoMdClose
              className="block sm:hidden h-4 w-4 "
              onClick={() => setIsNavbarOpen((prev) => !prev)}
            />
          </div>
          <div className="flex-1 h-full overflow-y-hidden mx-5">
            <div className="overflow-y-scroll h-full bg-transparent text-black px-6 py-4 space-y-4">
              <div className="border-b border-gray-300 pb-3">
                <h2 className="text-xl font-bold">
                  Software Engineering Bootcamp
                </h2>
              </div>

              <ul className="space-y-2 text-base font-medium pl-5">
                <li>Intro</li>
                <li>How we teach</li>
                <li>Curriculum</li>
                <li>Reviews</li>
                <li>Tuition</li>
                <li>FAQ</li>
              </ul>

              <div className="border-b border-gray-300 pt-4 pb-3">
                <h2 className="text-xl font-bold">Programs</h2>
              </div>

              <ul className="space-y-2 text-base font-medium pl-5">
                <li>AI and Machine Learning</li>
                <li>Web Development</li>
                <li>Data Science</li>
                <li>Cybersecurity</li>
                <li>Cloud Computing</li>
                <li>DevOps</li>
              </ul>

              <div className="pt-4">
                <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

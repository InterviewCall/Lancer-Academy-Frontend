"use client";

import { handleClickBookACallButton } from "@/utits/onClickHandlers";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="fixed z-[10]  w-full flex sm:pl-3 sm:pr-1 pt-2">
      <div
      className={
        "text-black  w-[90%] flex items-center justify-between px-1 rounded-xl " +
        (isScrolled ? `bg-white shadow-lg ${isNavbarOpen ? " " : " hidden "} sm:flex` : "bg-transparent ") +
        (isNavbarOpen ? " h-[100vh] sm:h-auto top-0 sm:top-2 " : " top-2 ")
      }
    >
      <div className="flex items-center gap-4 pl-2 py-1">
        <div>
          <Image
            alt=""
            src={"/lancersFullLogo.png"}
            height={90}
            width={90}
            className="w-full h-auto"
          />
        </div>
        {/* <div className="rounded-full border px-3 py-1 hidden sm:flex items-center gap-2 font-semibold text-sm border-gray-400 shadow-2xl">
          <div>Programs</div>
        </div> */}
      </div>
      <div className="hidden sm:flex items-center gap-4 font-light text-sm pl-20 ">
        {['Intro', 'How we teach', 'Curriculum', 'Reviews', 'Tuition', 'FAQ'].map((item, index) => (
                    <div key={index} className="cursor-pointer hover:bg-[#dcdcdc] p-2 hover:rounded-lg">{item}</div>
                  ))}
        {/* <div>Intro</div>
        <div>How we teach</div>
        <div>Curriculum </div>
        <div>Reviews</div>
        <div>Tuition</div>
        <div>FAQ</div> */}
      </div>
      <div className=" items-center opacity-0">
        <button
          onClick={() => {
            setIsNavbarOpen(false);
            handleClickBookACallButton();
          }}
          className="hidden hover:cursor-pointer sm:block px-3 py-2 bg-black text-white rounded-md"
        >
          Book a call
        </button>
        {isNavbarOpen ? (
          <IoMdClose
            className="block sm:hidden h-4 w-4 hover:cursor-pointer"
            onClick={() => setIsNavbarOpen((prev) => !prev)}
          />
        ) : (
          <FiMenu
            className="block sm:hidden h-4 w-4 hover:cursor-pointer"
            onClick={() => setIsNavbarOpen((prev) => !prev)}
          />
        )}
      </div>
      {isNavbarOpen && (
        <div className="absolute sm:hidden z-15 bg-white h-full w-full top-0 right-0">
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
                className="block sm:hidden h-4 w-4 hover:cursor-pointer"
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
                  {['Intro', 'How we teach', 'Curriculum', 'Reviews', 'Tuition', 'FAQ'].map((item, index) => (
                    <li key={index} className="cursor-pointer">{item}</li>
                  ))}
                  {/* <li>Intro</li>
                  <li>How we teach</li>
                  <li>Curriculum</li>
                  <li>Reviews</li>
                  <li>Tuition</li>
                  <li>FAQ</li> */}
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
                  <button
                    onClick={() => {
                      setIsNavbarOpen(false);
                      handleClickBookACallButton(1.1);
                    }}
                    className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition hover:cursor-pointer"
                  >
                    Book a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

    <div className="w-full sm:w-auto flex justify-end">
      <div className={"flex rounded-lg p-4 sm:p-0 items-center " + (isScrolled ? " bg-white sm:bg-transparent shadow-lg " : " bg-transparent ")}>
        <button
          onClick={() => {
            setIsNavbarOpen(false);
            handleClickBookACallButton();
          }}
          className="hidden hover:cursor-pointer sm:block py-3 px-4 bg-[linear-gradient(180deg,#3A3A3A_0%,#1A1A1A_80%)] text-[17px] font-semibold text-white rounded-xl"
        >
          Book a call
        </button>
        {isNavbarOpen ? (
          <IoMdClose
            className="block text-black sm:hidden h-4 w-4 hover:cursor-pointer"
            onClick={() => setIsNavbarOpen((prev) => !prev)}
          />
        ) : (
          <FiMenu
            className="block text-black sm:hidden h-4 w-4 hover:cursor-pointer"
            onClick={() => setIsNavbarOpen((prev) => !prev)}
          />
        )}
      </div>
    </div>
    </div>
  );
}
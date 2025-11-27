"use client";

import { courseCurriculam } from '@/utits/content'
import { Eye } from 'lucide-react'
import React from 'react'

const ShowSyllabusButton = () => {
  return (
    <div className="flex justify-center max-md:w-[80%] max-md:h-[4rem] w-[25rem] h-[5rem] mx-auto">
        <button onClick={() => window.open(courseCurriculam, '_blank')} className="bg-[linear-gradient(180deg,#3A3A3A_0%,#1A1A1A_80%)] w-full text-white gap-x-3 flex items-center justify-center rounded-lg text-base sm:text-xl hover:cursor-pointer  font-medium px-5 sm:px-5  py-2 sm:py-3  mt-3 sm:mt-2">
          <div className='text-2xl max-md:text-xl font-semibold'>Show Syllabus</div>
          <Eye
            size={26}
            className="w-6 sm:w-6 md:w-7 h-7 sm:h-6 md:h-7 text-white font-semibold"
          />
        </button>
      </div>
  )
}

export default ShowSyllabusButton
"use client";

import { courseCurriculam } from '@/utits/content'
import { Eye } from 'lucide-react'
import React from 'react'

const ShowSyllabusButton = () => {
  return (
    <div className="flex justify-start">
        <button onClick={() => window.open(courseCurriculam, '_blank')} className="bg-gray-200 gap-x-3 flex items-center justify-center rounded-lg text-base sm:text-xl hover:cursor-pointer hover:bg-gray-300 font-medium px-5 sm:px-5  py-2 sm:py-3  mt-3 sm:mt-6">
          <div>Show Syllabus</div>
          <Eye
            size={26}
            className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-gray-600"
          />
        </button>
      </div>
  )
}

export default ShowSyllabusButton
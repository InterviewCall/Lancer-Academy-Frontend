import { BsLightningChargeFill } from "react-icons/bs";

export default function FreeBonusCourse(){
    return (
        <div className="w-8/10 sm:w-6/10 sm:flex items-center justify-around gap-x-5 my-10">
            <div className="w-full text-4xl font-[520] p-5 ">
              Free bonus course for new students
            </div>
            <div className=" w-full relative px-5 py-9 rounded-xl bg-white">
              <div className="absolute flex items-center justify-center gap-x-2 bg-red-400 -top-5 right-5 p-2 rounded-md">
                <BsLightningChargeFill />
                <div>Free</div>
              </div>
              <div className="font-medium text-xl">Computer Literacy</div>
              <div className="mt-3">
                Free bonus course for new students“Not a tech person”? Don’t
                know a browser from an OS? Take this course to get up to speed!
                Learn how to use a computer and industry-standard apps so you’re
                ready to break into tech.
              </div>
            </div>
          </div>
    )
}
import { BsLightningChargeFill } from "react-icons/bs";

export default function FreeBonusCourse() {
  return (
    <div className=" w-full sm:flex items-center justify-around gap-x-5 my-10">
      <div className="w-full text-5xl font-[520] p-5 ">
        Free bonus course for new students
      </div>
      <div className=" w-full relative px-5 py-9 rounded-xl bg-white">
        <div className="absolute flex items-center justify-center gap-x-2 bg-red-400 -top-5 right-5 p-2 rounded-md">
          <BsLightningChargeFill />
          <div>Free</div>
        </div>
        <div className="font-medium text-2xl">Computer Literacy Essentials</div>
        <div className="mt-3">
          New to tech? Not comfortable with computers yet?
          This short starter course helps you get fully up to speed before the main program begins.
          Learn the basics of using a computer, navigating the internet, and working with everyday tools — so you feel confident and ready to start your Software Engineering journey.
        </div>
      </div>
    </div>
  )
}
import { advisorImage } from "@/utits/externalUrls";
import Image from "next/image";
import { Rhombus } from "./DesignDivs";

export default function GetDiscount() {
    return (
        <div className="relative my-15 w-full py-15 flex flex-col items-center rounded-3xl text-white font- text-5xl tracking-tight bg-black">
                <Rhombus background="#000000" />
                <Image alt="" src={advisorImage} width={150} height={150} className="h-full w-auto my-10"/>
            <div>
                Book a call with an advisor 
            </div>
            <div className="hidden lg:block">
                by November 25th and get 12.5% off your
            </div>
            <div className="hidden lg:block">
                tuition.
            </div>
            <div className="lg:hidden md:block hidden">
                by November 25th and get 
            </div>
            <div className="lg:hidden md:block hidden">
                12.5% off your tuition.
            </div>
            <button className="rounded-xl mt-10 px-7  py-3 text-xl tracking-normal bg-green-300 text-black font-semibold mb-10 hover:cursor-pointer hover:bg-green-400">
                Claim Offer
            </button>

        </div>
    )
}
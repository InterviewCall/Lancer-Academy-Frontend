import { advisorImage } from "@/utits/externalUrls";
import Image from "next/image";
import { Rhombus } from "./DesignDivs";

export default function GetDiscount() {
    return (
        <div className="relative my-15 w-full py-15 flex flex-col items-center md:rounded-3xl text-white font- text-5xl tracking-tight bg-[#1a1a1a]">
            
            <div className="absolute -top-[4%]">
                <svg className="cta-block__decoration" width="72" height="23" viewBox="0 0 72 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 23C21.4525 23 31.7687 7.26072 34.9167 1.27403C35.3384 0.472241 36.6616 0.472241 37.0833 1.27403C40.2313 7.26072 50.5475 23 72 23H0Z" fill="#1a1a1a"></path>
                </svg>
            </div>

            <Rhombus background="#000000" />
            <Image alt="" src={advisorImage} width={150} height={150} className="h-full w-auto my-10"/>
            <div className="max-md:text-3xl max-md:px-7 text-center">
                Book a call with an advisor by April 30th and get 12.5% off your tuition.
            </div>
            {/* <div>
                by November 25th and get 12.5% off your
            </div>
            <div >
                tuition.
            </div>
            <div>
                by November 25th and get 
            </div>
            <div >
                12.5% off your tuition.
            </div> */}
            <a href="#bookACallForm" className="rounded-xl mt-10 px-7 max-md:px-20  py-3 text-xl tracking-normal bg-[#71cb8c] text-[#1a1a1a] font-semibold mb-10 hover:cursor-pointer hover:bg-green-400">
                Claim Offer
            </a>

        </div>
    )
}
import { Hand, Heart } from "lucide-react";
import {
  MoneyBackBannerImageLaptop,
  MoneyBackBannerImageMobile,
} from "./MoneyBackBannerImage";

export function MoneyBackGuaranteeBannerLaptop() {
  return (
    <div className="hidden bg-white sm:flex items-center justify-center w-8/10 my-10 relative sm:rounded-tr-[100px] sm:rounded-bl-[100px]">
      <div className="sm:absolute w-full -top-15 left-0 rounded-tl-2xl overflow-hidden">
        {/* <Image
                alt=""
                src={"/g2.svg"}
                width={100}
                height={100}
                className="w-full h-auto"
              /> */}
        <MoneyBackBannerImageLaptop />
      </div>
      <div className="w-full  sm:flex p-16">
        <div className="sm:basis-1/3"></div>
        <div className="sm:basis-2/3">
          <div className="text-4xl font-medium ">
            We believe that you’ll get into tech in 10 months. In fact, we put
            money on it.
          </div>

          <div className="flex items-center justify-evenly gap-x-3 my-3">
            <div>
              <div className="font-semibold text-lg">1</div>
              Graduate and complete our included career prep and coaching
              programs
            </div>
            <div>
              <div className="font-semibold text-lg">2</div>Apply to relevant
              jobs and stay in touch with your career coach
            </div>
            <div>
              <div className="font-semibold text-lg">3</div>If you don’t have a
              job after 300 days, we will refund 100% of your tuition
            </div>
          </div>
          <div className="flex items-center justify-end  w-full text-xs">
            <div></div>
            <div className="w-4/10 px-3 py-2 rounded-md bg-red-100">
              <Hand />
              The TripleTen money-back guarantee is legally binding. For
              details, please see our Terms of use
            </div>
          </div>
          <div className="bg-red-300 rounded-lg p-2 w-fit">
            <Heart />
          </div>
          <div className="flex items-center ">
            <div className="basis-1/3 font-medium text-xl">
              We also have fair refund policy
            </div>
            <div className="basis-2/3 text-xs">
              After starting our Software Engineering bootcamp, you have 2 weeks
              to withdraw with a 100% refund. After that, you can get a partial
              refund on a transparent schedule. Check our Terms of Use for more
              info.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MoneyBackGuaranteeBannerMobile() {
  return (
    <div className="sm:hidden  bg-white relaive items-center justify-center w-8/10 my-10 relative rounded-tr-[50px] rounded-bl-[50px] ">
      <div className="absolute top-[27%] -left-20 w-screen z-9 ">
        <div className="relative bg-[#ff9363] -rotate-12 text-center text-black font-semibold pl-72 px-8 py-2 h-10 text-sm sm:text-base w-full">
          Money Back Guarantee
          {/* Right-side V cut */}
          <div className="bg-[#ff9363] absolute right-0 top-0 h-full w-4 rotate-180 border-t-[20px] border-b-[20px] border-l-[30px] border-t-transparent border-b-transparent border-l-red-50"></div>
          {/* <div className="absolute right-0 top-0 h-full w-4 bg-[#1e1e1e] clip-path-[polygon(100%_0,0%_50%,100%_100%)]"></div> */}
        </div>
      </div>
      <div className="w-full p-16">
        <div className=""></div>
        <div className="w-full">
          <div className="text-4xl font-medium ">
            We believe that you’ll get into tech in 10 months. In fact, we put
            money on it.
          </div>
          <div className=" w-full -top-15 left-0 rounded-tl-2xl overflow-hidden">
            <MoneyBackBannerImageMobile />
          </div>

          <div className="items-center justify-evenly gap-x-3 my-3">
            <div>
              <div className="font-semibold text-lg">1</div>
              Graduate and complete our included career prep and coaching
              programs
            </div>
            <div>
              <div className="font-semibold text-lg">2</div>Apply to relevant
              jobs and stay in touch with your career coach
            </div>
            <div>
              <div className="font-semibold text-lg">3</div>If you don’t have a
              job after 300 days, we will refund 100% of your tuition
            </div>
          </div>
          <div className="flex items-center justify-end  w-full text-xs">
            <div></div>
            <div className="w-6/10 px-3 py-2 rounded-md bg-red-100">
              <Hand />
              The TripleTen money-back guarantee is legally binding. For
              details, please see our Terms of use
            </div>
          </div>
          <div className="bg-red-300 rounded-lg p-2 w-fit">
            <Heart />
          </div>
          <div className=" items-center ">
            <div className=" font-medium text-xl">
              We also have fair refund policy
            </div>
            <div className=" text-xs">
              After starting our Software Engineering bootcamp, you have 2 weeks
              to withdraw with a 100% refund. After that, you can get a partial
              refund on a transparent schedule. Check our Terms of Use for more
              info.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

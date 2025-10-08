import Image from "next/image";
import { TiTick } from "react-icons/ti";

export function MoneyBackBannerImageLaptop() {
  return (
    <div className="relative w-full">
      <div className="absolute top-10 left-0 w-full z-9 border-0">
        <div className="relative bg-[#ff9363] gap-x-3 flex items-center justify-end rounded-tl-2xl text-center text-black font-semibold  px-8 py-2 h-16 text-sm sm:text-base w-full">
          <div className="w-1/2 flex items-center justify-start gap-x-5 text-xl font-semibold">
          <TiTick size={30}/>
            Money Back Guarantee
          </div>
          {/* Right-side V cut */}
          <div className="bg-[#ff9363] absolute -right-0 top-0 h-full w-16 rotate-180 border-t-[30px] border-b-[30px] border-l-[35px] border-t-transparent border-b-transparent border-l-red-50 border-0"></div>
          {/* <div className="absolute right-0 top-0 h-full w-4 bg-[#1e1e1e] clip-path-[polygon(100%_0,0%_50%,100%_100%)]"></div> */}
        </div>
      </div>

      <div className="z-10 relative">
        <Image
          alt=""
          src={"/g2v2.svg"}
          width={300}
          height={300}
          className="z-10"
        />
      </div>
    </div>
  );
}

export function MoneyBackBannerImageMobile() {
  return (
    <div className="relative w-full">
      

      <div className="z-10 relative">
        <Image
          alt=""
          src={"/g2v2.svg"}
          width={300}
          height={300}
          className="z-10"
        />
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Certificate(){
    return (
        <div className="flex flex-col items-center max-md:my-36">
            <div className="mt-30 px-2 sm:px-0 sm:w-6/10 text-center text-3xl sm:text-5xl font-medium">
              Will you be certified?
            </div>
            <div className="sm:my-3 mb-5 w-8/10 sm:w-6/10 text-center text-3xl sm:text-4xl font-medium">
              {"Absolutely! Your certificate will shine on your resume and LinkedIn :-)"}
            </div>
            <Image
              alt=""
              src={"/certificate.svg"}
              width={100}
              height={100}
              className="w-2/3 max-md:w-[85%]  h-auto"
            />
          </div>
    )
}
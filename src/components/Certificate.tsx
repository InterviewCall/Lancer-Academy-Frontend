import Image from "next/image";

export default function Certificate(){
    return (
        <div className="flex flex-col items-center">
            <div className="mt-30 sm:w-6/10 text-center text-5xl font-medium">
              Will you be certified?
            </div>
            <div className="my-3 w-8/10 sm:w-5/10 text-center text-4xl font-medium">
              {"Of course! It’ll look great on your resume and LinkedIn :-)"}
            </div>
            <Image
              alt=""
              src={"/certificate.svg"}
              width={100}
              height={100}
              className="w-2/3 sm:w-1/2 h-auto"
            />
          </div>
    )
}
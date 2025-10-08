import { PiFilePdfBold } from "react-icons/pi";
import ExpandableModule from "./ExpandableModule";

export default function SyllabusModules(){
    return (
        <div className="w-95/100 sm:w-6/10 my-10 space-y-1">
            <ExpandableModule />
            <ExpandableModule />
            <ExpandableModule />
            <ExpandableModule />
            <div className="flex items-center justify-end">
              <button className="flex items-center gap-x-2 justify-center rounded-xl bg-gray-200 hover:bg-gray-300 hover:cursor-pointer px-3 py-2 my-2 font-semibold">
                <PiFilePdfBold size={25} />
                <div>Download PDF</div>
              </button>
            </div>
          </div>
    )
}
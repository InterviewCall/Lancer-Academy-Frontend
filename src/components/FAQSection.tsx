import FAQOptions, { FAQDivider } from "./FAQOptions";
import { faqData } from "@/utits/content";

export default function FAQSection() {
  return (
    <div id="faq" className="w-full my-10 max-md:my-2">
      <div className=" items-center justify-between p-3">
        <div className="text-5xl sm:text-6xl font-semibold">FAQ</div>
      </div>

      <div className="px-3">
        <div className="w-full h-[1px] bg-black"></div>
      </div>
      <div className="my-5 ">
        {faqData.map((faq, index) => (
          <FAQOptions key={index} heading={faq.heading} content={faq.content} />
        ))}
          </div>
    </div>
  );
}

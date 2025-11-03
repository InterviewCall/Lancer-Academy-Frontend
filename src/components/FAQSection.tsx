import FAQOptions from "./FAQOptions";
import { faqData } from "@/utits/content";

export default function FAQSection() {
  return (
    <div className="w-full sm:w-5/10 my-10">
      <div className=" items-center justify-between p-3">
        <div className="text-5xl sm:text-6xl font-semibold">FAQ</div>
        
      </div>
      <div className="my-5">
        {faqData.map((faq, index) => (
          <FAQOptions key={index} heading={faq.heading} content={faq.content} />
        ))}
          </div>
    </div>
  );
}

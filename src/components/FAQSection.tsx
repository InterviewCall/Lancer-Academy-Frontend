import { ArrowRight } from "lucide-react";
import FAQOptions from "./FAQOptions";

export default function FAQSection() {
  return (
    <div className="w-full sm:w-6/10 my-10">
      <div className="flex items-center justify-between p-3">
        <div className="text-3xl sm:text-5xl font-semibold">FAQ</div>
        <div className="rounded-lg bg-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg hover:cursor-pointer flex items-center justify-evenly">
          <div>Complete FAQ</div>
          <div className="mx-2">
            <ArrowRight />
          </div>
        </div>
      </div>
      <div className="my-5">
        <FAQOptions
        startingDivider={true}
          heading="Lorem ipsum dolor sit amet."
          content="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro ullam ut ipsa repellat voluptatem error maiores blanditiis! Maiores asperiores debitis obcaecati illo unde! Pariatur quas voluptate sunt, ipsam ut corporis sapiente architecto itaque vel aperiam quo libero eum commodi impedit aliquam suscipit a aliquid natus vero accusamus perferendis aut!"
        />
        <FAQOptions
          heading="Lorem ipsum dolor sit amet."
          content="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro ullam ut ipsa repellat voluptatem error maiores blanditiis! Maiores asperiores debitis obcaecati illo unde! Pariatur quas voluptate sunt, ipsam ut corporis sapiente architecto itaque vel aperiam quo libero eum commodi impedit aliquam suscipit a aliquid natus vero accusamus perferendis aut!"
        />
        <FAQOptions
          heading="Lorem ipsum dolor sit amet."
          content="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro ullam ut ipsa repellat voluptatem error maiores blanditiis! Maiores asperiores debitis obcaecati illo unde! Pariatur quas voluptate sunt, ipsam ut corporis sapiente architecto itaque vel aperiam quo libero eum commodi impedit aliquam suscipit a aliquid natus vero accusamus perferendis aut!"
        />
        <FAQOptions
          heading="Lorem ipsum dolor sit amet."
          content="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro ullam ut ipsa repellat voluptatem error maiores blanditiis! Maiores asperiores debitis obcaecati illo unde! Pariatur quas voluptate sunt, ipsam ut corporis sapiente architecto itaque vel aperiam quo libero eum commodi impedit aliquam suscipit a aliquid natus vero accusamus perferendis aut!"
        />
        <FAQOptions
          heading="Lorem ipsum dolor sit amet."
          content="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro ullam ut ipsa repellat voluptatem error maiores blanditiis! Maiores asperiores debitis obcaecati illo unde! Pariatur quas voluptate sunt, ipsam ut corporis sapiente architecto itaque vel aperiam quo libero eum commodi impedit aliquam suscipit a aliquid natus vero accusamus perferendis aut!"
        />
      </div>
    </div>
  );
}

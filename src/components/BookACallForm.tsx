"use client";

import Image from "next/image";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { advisorImage } from "@/utits/externalUrls";
import { Rhombus } from "./DesignDivs";
import { FaCircleCheck } from "react-icons/fa6";
export default function BookACallForm() {
  return (
    <div className=" bg-[#b8e9c8] shadow-2xl  py-10 md:rounded-2xl my-36 max-md:my-16 relative">
      <div
        id="book-a-call"
        className=" w-full flex sm:grid sm:grid-cols-2 sm:gap-10 sm:px-8 flex-col items-center sm:items-stretch sm:justify-evenly"
      >
        <Rhombus background="#b8e9c8" />
        <div className="sm:basis-2/5 h-fit">
          <div className="h-4/10 sm:h-2/10 my-5 flex justify-start max-md:justify-center">
            <Image
              alt=""
              src={advisorImage}
              width={100}
              height={100}
              className="h-full w-auto"
            />
          </div>
          <div className="text-4xl sm:text-5xl mb-10 text-center sm:text-start w-full sm:w-9/10 font-semibold">
            Book a call with an advisor by November 25th to take 12.5% off your
            tuition!
          </div>
          <div className="hidden sm:flex items-start justify-between space-x-5 font-semibold text-lg">
            <div>
              <div>
                <FaCircleCheck />
              </div>
              <div>Guarantee: Job or 100% money back</div>
            </div>
            <div>
              <div>
                <FaCircleCheck />
              </div>

              <div>No IT or STEM background needed</div>
            </div>
            <div>
              <div>
                <FaCircleCheck />
              </div>

              <div>Fully flexible with personal support</div>
            </div>
          </div>
        </div>
        <div className="max-md:px-3">
          <div className="sm:basis-2/5 md:rounded-2xl rounded-lg mt-8 sm:mt-0 bg-white">
          {" "}
          <ContactForm />{" "}
        </div>
        </div>
        
        <div className="flex flex-col mt-10 sm:hidden items-stretch text-center justify-between space-y-5 font-semibold text-lg">
          <div>
            <div className="flex items-center justify-center mt-5 mb-2">
              <FaCircleCheck />
            </div>
            <div>Guarantee: Job or 100% money back</div>
          </div>
          <div>
            <div className="flex items-center justify-center my-5 mb-2">
              <FaCircleCheck />
            </div>

            <div>No IT or STEM background needed</div>
          </div>
          <div>
            <div className="flex items-center justify-center my-5 mb-2">
              <FaCircleCheck />
            </div>

            <div>Fully flexible with personal support</div>
          </div>
        </div>
      </div>
      <div className="text-gray-800 font-semibold text-sm mt-10 text-center">
        This enrollment benefit applies to the Software Engineering, AI &
        Full-Stack program.
      </div>

      <div className="text-gray-800 font-semibold text-sm text-center">
        Available only for new learners who complete their career call and
        finish the admission steps within the enrollment window.
      </div>
    </div>
  );
}

export const BookACallFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Enter a valid 10-digit phone number"),
  agree: z.boolean().optional(),
});

export type BookACallFormType = z.infer<typeof BookACallFormSchema>;

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookACallFormType>({
    resolver: zodResolver(BookACallFormSchema),
  });

  const onSubmit = (data: BookACallFormType) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" p-8 rounded-2xl h-full flex flex-col justify-between"
    >
      {/* Full Name */}
      <div className="space-y-4">
        <div>
          <input
            placeholder="Full name"
            id="fullName"
            {...register("fullName", { required: "Full name is required" })}
            className="border border-gray-400 p-2 w-full rounded-xl"
          />
          {errors.fullName && (
            <p className="text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            placeholder="Email"
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="border border-gray-400 p-2 w-full rounded-xl"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <input
            placeholder="Phone"
            id="phone"
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit phone number",
              },
            })}
            className="border border-gray-400 p-2 w-full rounded-xl"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Checkbox */}
        <div>
          <label className="flex items-start">
            <input
              type="checkbox"
              {...register("agree", { required: "You must agree to continue" })}
              className="m-2 text-xs"
            />
            I consent to marketing calls and text messages, including those made
            with an autodialed or artificial voice messages. Message and data
            rates may apply. Message frequency varies. Unsubscribe anytime per
            our Privacy Policy. Consent is not a condition of purchase.
          </label>
          {errors.agree && (
            <p className="text-red-500">{errors.agree.message}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 hover:cursor-pointer mt-5 sm:mt-1 rounded-lg w-full"
        >
          Continue
        </button>
      </div>
    </form>
  );
}

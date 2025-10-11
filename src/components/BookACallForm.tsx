"use client";

import Image from "next/image";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { TiTick } from "react-icons/ti";
import { advisorImage } from "@/utits/externalUrls";
import { Rhombus } from "./DesignDivs";
export default function BookACallForm() {
  return (
    <div id="book-a-call" className="relative w-9/10 sm:flex items-stretch justify-evenly bg-[#d35723] shadow-2xl  p-6 py-10 rounded-2xl my-10">
      <Rhombus background="#d35723" />
      <div className="sm:basis-2/5 ">
        <div className="h-2/10 mb-5">
          <Image
            alt=""
            src={advisorImage}
            width={100}
            height={100}
            className="h-full w-auto"
          />
        </div>
        <div className="text-6xl mb-10 w-9/10 font-semibold">
          Book a call with advisor by 23rd October
        </div>
        <div className="flex items-start justify-between space-x-5 font-semibold text-lg">
          <div>
            <div>
              <TiTick />
            </div>
            <div>Guarantee: Job or 100% money back</div>
          </div>
          <div>
            <div>
              <TiTick />
            </div>

            <div>No IT or STEM background needed</div>
          </div>
          <div>
            <div>
              <TiTick />
            </div>

            <div>Flexible program with personal support</div>
          </div>
        </div>
      </div>
      <div className="sm:basis-2/5 rounded-2xl mt-8 sm:mt-0 bg-white">
        {" "}
        <ContactForm />{" "}
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
      className="space-y-4 p-8 rounded-2xl"
    >
      {/* Full Name */}
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
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
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
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
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
          rates may apply. Message frequency varies. Unsubscribe anytime per our
          Privacy Policy. Consent is not a condition of purchase.
        </label>
        {errors.agree && <p className="text-red-500">{errors.agree.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 hover:cursor-pointer rounded-lg w-full"
      >
        Continue
      </button>
    </form>
  );
}

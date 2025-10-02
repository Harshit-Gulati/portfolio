"use client";

import React, { useState } from "react";
import { SectionHeading } from "./section-heading";
import { Subheading } from "./subheading";
import { toast } from "sonner";
import { enquiryMessage } from "@/utils/discord";
import { validateEmail } from "@/utils/form";
import { motion } from "motion/react";

export const Enquire = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!email || !validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await enquiryMessage(email);

      if (res.success) {
        toast.success("Email sent successfully!");
        setEmail("");
      } else toast.error("Email could not be sent!");
    } catch (err) {
      toast.error("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-8">
      <SectionHeading className="mx-4">Get in touch</SectionHeading>
      <Subheading>
        I&apos;m currently looking for oppurtunities. Drop in your email and I
        will get back to you.
      </Subheading>
      <motion.div
        className="m-4 max-w-full"
        initial={{ opacity: 0, y: 5, filter: "blur(2px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <input
          value={email}
          type="email"
          placeholder="maninthehat@gmail.com"
          className="shadow-custom focus:ring-primary max-w-full rounded-md py-2 pr-24 pl-2 focus:ring-2 focus:outline-none dark:focus:ring-neutral-400"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="relative -ml-[70px] h-10 w-[70px] rounded-md border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-neutral-700 shadow-[0px_4px_8px_0px_var(--color-neutral-100)_inset] transition-colors hover:bg-neutral-200 disabled:hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-[0px_4px_8px_0px_var(--color-neutral-700)_inset] dark:hover:bg-neutral-900 disabled:dark:hover:bg-neutral-800"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading && <Spinner />}
          <span className={loading ? "opacity-0" : ""}>Send</span>
        </button>
      </motion.div>
    </div>
  );
};

const Spinner = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      repeat: Infinity,
      duration: 1,
      ease: "linear",
    }}
    className="absolute top-1/2 left-1/2 flex size-5 -translate-x-1/2 -translate-y-1/2 text-neutral-700 dark:text-neutral-200"
  >
    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 1v1.8A5.2 5.2 0 1 1 2.8 8H1a7 7 0 1 0 7-7" />
    </svg>
  </motion.div>
);

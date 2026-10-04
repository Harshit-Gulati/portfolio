"use client";

import { ContactFormData } from "@/types/form";
import { contactFormMessage } from "@/utils/discord";
import { validateEmail } from "@/utils/form";
import { useState } from "react";
import { toast } from "sonner";
import { IconCheck, IconLoader2, IconSend } from "@tabler/icons-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    if (!email.trim() || !validateEmail(email)) {
      toast.error("Please provide a valid email address.");
      return;
    }
    if (!message.trim()) {
      toast.error("Please include a message.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await contactFormMessage(formData);
      if (res.success) {
        setIsSubmitted(true);
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message. Please try again or email directly.");
      }
    } catch {
      toast.error("An unexpected error occurred. Please try emailing directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-md border border-neutral-200/80 bg-neutral-50/40 p-8 text-center sm:p-12 dark:border-neutral-800/80 dark:bg-neutral-900/30">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-50 text-emerald-600 shadow-xs dark:bg-emerald-950/40 dark:text-emerald-400">
          <IconCheck size={24} />
        </div>
        <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-neutral-100">
          Message sent!
        </h3>
        <p className="mt-2 max-w-sm text-xs leading-relaxed text-neutral-600 sm:text-sm dark:text-neutral-400">
          Thank you for reaching out. Your note has been delivered and I will get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-6 rounded-md border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-800 shadow-xs transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-md border border-neutral-200/80 bg-neutral-50/40 p-6 sm:p-8 dark:border-neutral-800/80 dark:bg-neutral-900/30"
    >
      <div>
        <h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Send a message
        </h3>
        <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
          Fill out the details below and I&apos;ll get back to you directly.
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="name"
          className="text-xs font-medium text-neutral-700 dark:text-neutral-300"
        >
          Your Name
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
          type="text"
          placeholder="e.g. Alex Smith"
          required
          className="w-full rounded-md border border-neutral-200/90 bg-white/80 px-3.5 py-2 text-sm text-neutral-900 shadow-2xs transition-colors placeholder:text-neutral-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500/30 disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950/60 dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:focus:border-indigo-400 dark:focus:bg-neutral-950"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="email"
          className="text-xs font-medium text-neutral-700 dark:text-neutral-300"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          type="email"
          placeholder="e.g. alex@example.com"
          required
          className="w-full rounded-md border border-neutral-200/90 bg-white/80 px-3.5 py-2 text-sm text-neutral-900 shadow-2xs transition-colors placeholder:text-neutral-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500/30 disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950/60 dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:focus:border-indigo-400 dark:focus:bg-neutral-950"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-xs font-medium text-neutral-700 dark:text-neutral-300"
        >
          Message
        </label>
        <textarea
          rows={5}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          placeholder="Tell me about your project, idea, or role..."
          required
          className="w-full resize-none rounded-md border border-neutral-200/90 bg-white/80 px-3.5 py-2 text-sm text-neutral-900 shadow-2xs transition-colors placeholder:text-neutral-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500/30 disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950/60 dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:focus:border-indigo-400 dark:focus:bg-neutral-950"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 px-4 py-2.5 text-xs font-medium text-white shadow-xs transition-all hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
      >
        {isSubmitting ? (
          <>
            <IconLoader2 size={15} className="animate-spin" />
            <span>Sending message...</span>
          </>
        ) : (
          <>
            <IconSend
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
};

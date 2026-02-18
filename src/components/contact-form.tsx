"use client";

import { ContactFormData } from "@/types/form";
import { contactFormMessage } from "@/utils/discord";
import { validateEmail } from "@/utils/form";
import { useState } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message || !validateEmail(email)) {
      toast.error("Please fill all the fields correctly.");
      return;
    }

    const res = await contactFormMessage(formData);

    if (res.success) toast.success("Message sent successfully!");
    else toast.error("Message could not be sent!");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto my-8"
    >
      <div className="mx-auto flex max-w-lg flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Jarad Higgins"
            className="shadow-custom focus:ring-primary rounded-md px-2 py-1 focus:ring-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="jarad@projectmayhem.com"
            className="shadow-custom focus:ring-primary rounded-md px-2 py-1 focus:ring-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Message
          </label>
          <textarea
            rows={5}
            id="message"
            name="message"
            onChange={handleChange}
            placeholder="Hi, really liked your work. Keep it up."
            className="shadow-custom focus:ring-primary resize-none rounded-md px-2 py-1 focus:ring-2 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="rounded-md border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-neutral-700 shadow-[0px_4px_8px_0px_var(--color-neutral-100)_inset] transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-[0px_4px_8px_0px_var(--color-neutral-700)_inset] dark:hover:bg-neutral-900"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

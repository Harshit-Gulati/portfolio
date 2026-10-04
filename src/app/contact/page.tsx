import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { FadeIn } from "@/components/ui/fade-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Harshit Gulati for software engineering, high-performance systems work, or technical collaboration.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="overflow-visible px-4 pt-20 pb-20 md:pt-28">
        <Heading className="grainy-text mb-4 text-3xl md:text-5xl">
          Get in touch
        </Heading>
        <Subheading className="mb-10 max-w-xl">
          Whether you have an interesting systems engineering problem, an
          opportunity, or want to discuss low-latency software - I&apos;d love to
          hear from you.
        </Subheading>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <ContactInfo />
          </FadeIn>
          <FadeIn className="lg:col-span-7">
            <ContactForm />
          </FadeIn>
        </div>
      </Container>
    </div>
  );
}

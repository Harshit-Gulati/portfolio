import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { Timeline } from "@/components/timeline";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 pt-10 md:px-8 md:pt-20 md:pb-1">
        <Scales />
        <Heading>Contact Me</Heading>
        <Subheading>I&apos;m open to freelance/full time offers.</Subheading>
        <ContactForm />
      </Container>
    </div>
  );
}

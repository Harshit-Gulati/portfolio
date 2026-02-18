import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { Timeline } from "@/components/about/timeline";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="overflow-visible px-4 pt-20 md:pt-28">
        <Heading className="grainy-text mb-4 text-3xl md:text-5xl">
          Contact Me
        </Heading>
        <Subheading className="mb-4">I&apos;m open to freelance/full time offers.</Subheading>
        <ContactForm />
      </Container>
    </div>
  );
}

import { Container } from "@/components/container";
import { Scales } from "@/components/scales";

export default function Blog({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start justify-start">
      <Container className="px-4 pt-10 md:px-8 md:pt-20">
        <Scales />
        {children}
      </Container>
    </div>
  );
}

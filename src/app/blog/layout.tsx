import { Container } from "@/components/container";
import { Scales } from "@/components/scales";

export default function Blog({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

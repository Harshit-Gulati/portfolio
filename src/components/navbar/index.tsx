import { Container } from "../container";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";

export const Navbar = () => {
  return (
    <Container className="pt-10 md:pt-0">
      <DesktopNavbar />
      <MobileNavbar />
    </Container>
  );
};

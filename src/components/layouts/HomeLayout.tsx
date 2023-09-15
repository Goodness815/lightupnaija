import { ReactNode } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Navbar navLinks={true} />
      {children}
      <Footer />
    </>
  );
}

export default HomeLayout;

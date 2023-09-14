import { ReactNode } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default HomeLayout;

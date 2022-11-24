import "../styles/globals.css";
import type { ReactNode } from "react";
import { Inter } from "@next/font/google";
import Navbar from "../components/sections/navbar";

const inter = Inter();

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="en" className="bg-background-dark text-typography-light">
      <head />
      <body className={inter.className}>
        <div className="grid grid-cols-[auto,1fr]">
          <aside>
            <Navbar />
          </aside>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default Layout;

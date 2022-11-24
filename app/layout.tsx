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
        <div className="grid tablet:grid-cols-[auto,1fr]">
          <aside className="hidden tablet:block">
            <Navbar />
          </aside>
          <main className="px-6 tablet:px-0">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default Layout;

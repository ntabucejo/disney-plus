import "../styles/globals.css";
import type { ReactNode } from "react";
import { Inter } from "@next/font/google";
import Navbar from "../components/sections/navbar";

const inter = Inter({
  subsets: ["latin"],
});

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
          <div>
            <main className="min-h-screen overflow-hidden tablet:overflow-visible">
              {children}
            </main>
            <footer className="mt-12"></footer>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;

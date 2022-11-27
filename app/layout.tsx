import "../styles/globals.css";
import type { ReactNode } from "react";
import { Inter } from "@next/font/google";
import Sidebar from "../components/sections/sidebar";
import Bottombar from "../components/sections/bottombar";

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
            <Sidebar />
          </aside>
          <main className="min-h-screen overflow-hidden tablet:overflow-visible">
            {children}
          </main>
          <Bottombar />
        </div>
      </body>
    </html>
  );
};

export default Layout;

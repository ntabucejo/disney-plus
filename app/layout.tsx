import "../styles/globals.css";
import type { ReactNode } from "react";
import { Inter } from "@next/font/google";

const inter = Inter();

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="en" className="bg-background-dark text-typography-light">
      <head />
      <body className={inter.className}>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default Layout;

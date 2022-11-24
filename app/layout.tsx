import "../styles/globals.css";
import type { ReactNode } from "react";
import { Inter } from "@next/font/google";

const inter = Inter();

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

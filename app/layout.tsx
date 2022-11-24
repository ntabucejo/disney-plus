import "../styles/globals.css";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head />
      <body>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

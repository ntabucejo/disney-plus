import "../styles/globals.css";
import type { ReactNode } from "react";
import { Inter } from "@next/font/google";
import Providers from "../components/wrappers/providers";
import useAuth from "../hooks/use-auth";
import Access from "../components/sections/access";
import Image from "next/image";
import Navbar from "../components/sections/navbar";

const inter = Inter({
  subsets: ["latin"],
});

type Props = {
  children: ReactNode;
};

const Layout = async ({ children }: Props) => {
  const { session } = await useAuth();

  return (
    <html lang="en" className="bg-background-dark text-typography-light">
      <head />
      <body className={inter.className}>
        <Providers>
          {session ? (
            <div className="grid tablet:grid-cols-[auto,1fr]">
              <aside className="hidden tablet:block">
                <Navbar.Vertical />
              </aside>
              <main className="min-h-screen overflow-hidden tablet:overflow-visible">
                {children}
              </main>
              <Navbar.Horizontal />
            </div>
          ) : (
            <main className="relative grid h-screen w-screen items-center">
              <div className="absolute -z-10 h-full w-full">
                <Image
                  src="/assets/images/disney-plus-background.png"
                  alt="Disney Background"
                  fill
                  sizes="100vh"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark to-transparent" />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark to-transparent" />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark to-transparent" />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark to-transparent" />
              </div>
              <Access />
            </main>
          )}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;

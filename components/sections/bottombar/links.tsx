"use client";

import { MinusSmallIcon } from "@heroicons/react/24/outline";
import NextLink from "next/link";
import type { ReactNode } from "react";
import useActiveSegment from "../../../hooks/use-active-segment";

type Props = {
  children: ReactNode;
};

const Links = ({ children }: Props) => {
  return (
    <>
      <ul className="absolute -top-10 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-xs backdrop-blur">
        <Link href="/movies" to="Movies" />
        <MinusSmallIcon className="w-4 rotate-90" />
        <Link href="/series" to="Series" />
        <MinusSmallIcon className="w-4 rotate-90" />
        <Link href="/originals" to="Originals" />
      </ul>
      <ul className="rounded-t4 flex items-center justify-evenly gap-4 rounded-tl bg-black/80 p-4 backdrop-blur">
        {children}
      </ul>
    </>
  );
};

export default Links;

const Link = ({ href, to }: { href: string; to: string }) => {
  const isActive = useActiveSegment(href);

  return (
    <li>
      <NextLink
        href={href}
        className={`${isActive ? "opacity-100" : "opacity-fade"}`}>
        {to}
      </NextLink>
    </li>
  );
};

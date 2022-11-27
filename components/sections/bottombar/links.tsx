import { MinusSmallIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Links = ({ children }: Props) => {
  return (
    <>
      <ul className="absolute -top-10 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-xs backdrop-blur">
        <li>
          <Link href="/movies">Movies</Link>
        </li>
        <MinusSmallIcon className="w-4 rotate-90" />
        <li>
          <Link href="/movies">Series</Link>
        </li>
        <MinusSmallIcon className="w-4 rotate-90" />
        <li>
          <Link href="/movies">Originals</Link>
        </li>
      </ul>
      <ul className="rounded-t4 flex items-center justify-evenly gap-4 rounded-tl bg-black/80 p-4 backdrop-blur">
        {children}
      </ul>
    </>
  );
};

export default Links;

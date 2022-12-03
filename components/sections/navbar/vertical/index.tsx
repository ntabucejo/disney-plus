"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "./link";
import Links from "./links";
import {
  MagnifyingGlassIcon,
  HomeIcon,
  TvIcon,
  FilmIcon,
  SparklesIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import NextLink from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const list = [
  {
    id: 0,
    href: "/profile",
    Icon: UserIcon,
    to: "Profile",
  },
  {
    id: 1,
    href: "/search",
    Icon: MagnifyingGlassIcon,
    to: "Search",
  },
  {
    id: 2,
    href: "/",
    Icon: HomeIcon,
    to: "Home",
  },
  {
    id: 3,
    href: "/series",
    Icon: TvIcon,
    to: "Series",
  },
  {
    id: 4,
    href: "/movies",
    Icon: FilmIcon,
    to: "Movies",
  },
  {
    id: 5,
    href: "/originals",
    Icon: SparklesIcon,
    to: "Originals",
  },
];

const Vertical = () => {
  const [isOnHovered, setIsOnHovered] = useState(false);
  const segment = useSelectedLayoutSegment();
  const isHiddenLogo = segment === "search" || segment === "profile";

  return (
    <>
      <div
        className={`${
          isOnHovered ? "opacity-100" : "opacity-0"
        } transition-smooth pointer-events-none fixed z-40 h-screen w-screen bg-gradient-to-r from-background-dark to-transparent`}
      />
      <nav className="sticky top-0 z-50 flex h-screen flex-col">
        <NextLink
          href="https://github.com/ntabucejo/disney-plus"
          className="py-12 px-4">
          <Image
            alt="Disney Plus Logo"
            src="/assets/images/disney-plus-logo.png"
            priority
            width={68}
            height={36}
            sizes="100px"
            className={`${
              isHiddenLogo ? "opacity-0" : "opacity-100"
            } transition-smooth h-[36px] w-[68px] object-contain`}
          />
        </NextLink>
        <Links setIsOnHovered={setIsOnHovered}>
          {list.map(({ id, href, to, Icon }) => (
            <Link
              key={id}
              id={id}
              href={href}
              to={to}
              Icon={Icon}
              isOnHovered={isOnHovered}
              setIsOnHovered={setIsOnHovered}
            />
          ))}
        </Links>
      </nav>
    </>
  );
};

export default Vertical;

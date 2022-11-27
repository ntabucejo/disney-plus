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

const list = [
  {
    id: 0,
    href: "#",
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

const Navbar = () => {
  const [isOnHovered, setIsOnHovered] = useState(false);

  return (
    <>
      <div
        className={`${
          isOnHovered ? "opacity-100" : "opacity-0"
        } transition-smooth pointer-events-none fixed z-40 h-screen w-screen bg-gradient-to-r from-background-dark to-transparent`}
      />
      <nav className="sticky top-0 z-50 flex h-screen flex-col">
        <div className="py-8 px-4">
          <Image
            alt="Disney Plus Logo"
            src="/assets/images/disney-plus-logo.svg"
            priority
            width={68}
            height={36}
            className="object-contain"
          />
        </div>
        <Links setIsOnHovered={setIsOnHovered}>
          {list.map(({ id, href, to, Icon }) => (
            <Link
              key={id}
              id={id}
              href={href}
              to={to}
              Icon={Icon}
              isOnHovered={isOnHovered}
            />
          ))}
        </Links>
      </nav>
    </>
  );
};

export default Navbar;

"use client";

import NextLink from "next/link";
import { ComponentType } from "react";
import { motion } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";

type Props = {
  href: string;
  to: string;
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  isOnHovered: boolean;
};

const Link = ({ href, to, Icon, isOnHovered }: Props) => {
  const segment = useSelectedLayoutSegment();
  const isActive = href === "/" ? true : href === segment ? true : false;

  return (
    <motion.li whileHover={{ scale: 1.1, x: "5px" }}>
      <NextLink
        href={href}
        className={`${
          isActive ? "opacity-100" : "opacity-fade"
        } }group relative flex items-center p-4 hover:opacity-100`}>
        <Icon
          className={`${
            isActive ? "fill-white" : ""
          } mx-auto h-6 w-6 group-hover:fill-white group-hover:text-white`}
        />
        {isOnHovered ? (
          <span
            className={`${
              isActive ? "text-white" : ""
            } absolute ml-16 grid h-full w-full items-center text-lg group-hover:text-white`}>
            {to}
          </span>
        ) : null}
      </NextLink>
    </motion.li>
  );
};

export default Link;

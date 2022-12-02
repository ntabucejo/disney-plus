"use client";

import NextLink from "next/link";
import type { ComponentType, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import useActiveSegment from "../../../../hooks/use-active-segment";

type Props = {
  id: number;
  href: string;
  to: string;
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  isOnHovered: boolean;
  setIsOnHovered: Dispatch<SetStateAction<boolean>>;
};

const Link = ({ id, href, to, Icon, isOnHovered, setIsOnHovered }: Props) => {
  const isActive = useActiveSegment(href);

  const handleCollapseSidebar = () => {
    setTimeout(() => {
      setIsOnHovered(false);
    }, 1000);
  };

  return (
    <motion.li
      onClick={handleCollapseSidebar}
      whileHover={{ scale: 1.1, x: "5px" }}
      whileTap={{ scale: 0.95 }}>
      <NextLink
        href={href}
        className={`
          ${isActive ? "opacity-100" : "opacity-fade"}
          ${href === "#" ? "cursor-not-allowed" : ""} 
         group relative flex items-center p-4 hover:opacity-100`}>
        <Icon
          className={`${
            isActive ? "fill-white" : ""
          } z-30 mx-auto h-6 w-6 group-hover:fill-white group-hover:text-white`}
        />
        <div className="absolute inset-y-0 left-0 z-20 w-2/3 bg-background-dark" />
        <span
          style={{
            transitionDuration: `${(id + 1) * 50}ms`,
          }}
          className={`
          ${isActive ? "text-white" : ""} 
          ${isOnHovered ? "ml-16 opacity-100" : "left-0 opacity-0"}
           transition-smooth absolute z-10 grid h-full w-full items-center text-lg group-hover:text-white`}>
          {to}
        </span>
      </NextLink>
    </motion.li>
  );
};

export default Link;

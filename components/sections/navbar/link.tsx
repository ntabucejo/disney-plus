import NextLink from "next/link";
import { ComponentType } from "react";
import { motion } from "framer-motion";

type Props = {
  href: string;
  to: string;
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  isOnHovered: boolean;
};

const Link = ({ href, to, Icon, isOnHovered }: Props) => {
  return (
    <motion.li whileHover={{ scale: 1.1, x: "5px" }}>
      <NextLink href={href} className="group relative flex items-center p-4">
        <Icon className="mx-auto h-6 w-6 group-hover:fill-white group-hover:text-white" />
        {isOnHovered ? (
          <span className="absolute ml-16 grid h-full w-full items-center text-lg group-hover:text-white">
            {to}
          </span>
        ) : null}
      </NextLink>
    </motion.li>
  );
};

export default Link;

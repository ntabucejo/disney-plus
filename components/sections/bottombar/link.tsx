"use client";

import NextLink from "next/link";
import type { ComponentType } from "react";
import useActiveSegment from "../../../hooks/use-active-segment";

type Props = {
  href: string;
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
};

const Link = ({ href, Icon }: Props) => {
  const isActive = useActiveSegment(href);

  return (
    <NextLink href={href}>
      <Icon
        className={`${
          isActive ? "fill-typography-light opacity-100" : "opacity-fade"
        } h-6 w-6`}
      />
    </NextLink>
  );
};

export default Link;

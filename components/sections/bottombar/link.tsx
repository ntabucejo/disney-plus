import NextLink from "next/link";
import type { ComponentType } from "react";

type Props = {
  href: string;
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
};

const Link = ({ href, Icon }: Props) => {
  return (
    <NextLink href={href}>
      <Icon className="h-6 w-6" />
    </NextLink>
  );
};

export default Link;

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant: "primary" | "secondary" | "tertiary";
};

const Content = ({ children, variant }: Props) => {
  let style = "";

  switch (variant) {
    case "primary":
      style = "tablet:-mt-[250px] laptop:-mt-[450px] desktop:-mt-[600px]";
      break;
    case "secondary":
      break;
    case "tertiary":
      break;
  }

  return (
    <div
      className={`${style} transition-smooth space-y-12 overflow-x-hidden pb-12 pr-4`}>
      {children}
    </div>
  );
};

export default Content;
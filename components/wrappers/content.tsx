import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant: "primary" | "secondary" | "tertiary";
};

const Content = ({ children, variant }: Props) => {
  let style = "";

  switch (variant) {
    case "primary":
      style =
        "-mt-[100px] tablet:-mt-[250px] laptop:-mt-[450px] desktop:-mt-[600px]";
      break;
    case "secondary":
      break;
    case "tertiary":
      break;
  }

  return (
    <div
      className={`${style} transition-smooth space-y-6 overflow-x-hidden px-4 tablet:space-y-12 tablet:px-0 [&>.content]:space-y-4 [&>.content]:tablet:space-y-12`}>
      {children}
    </div>
  );
};

export default Content;

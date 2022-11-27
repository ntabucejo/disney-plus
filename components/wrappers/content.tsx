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
        "-mt-[100px] tablet:-mt-[500px] laptop:-mt-[650px] desktop:-mt-[800px] content";
      break;
    case "secondary":
      style = "pt-4 tablet:pr-6 tablet:pt-8 space-y-4 tablet:space-y-8";
      break;
    case "tertiary":
      break;
  }

  return (
    <div
      className={`${style} transition-smooth px-4 pb-12 overflow-x-hidden tablet:px-0`}>
      {children}
    </div>
  );
};

export default Content;

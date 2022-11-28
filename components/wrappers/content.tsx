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
        "-mt-[100px] tablet:-mt-[400px] laptop:-mt-[650px] desktop:-mt-[800px] content";
      break;
    case "secondary":
      style = "bg-background-dark pt-6";
      break;
    case "tertiary":
      style = "pt-4 tablet:pt-8 space-y-4 tablet:space-y-8";
      break;
  }

  return (
    <div
      className={`${style} transition-smooth px-2 pb-28 overflow-x-hidden tablet:px-0 tablet:pb-12`}>
      {children}
    </div>
  );
};

export default Content;

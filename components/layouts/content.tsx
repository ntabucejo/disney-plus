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
        "-mt-[100px] tablet:-mt-[400px] laptop:-mt-[650px] desktop:-mt-[800px]";
      break;
    case "secondary":
      style = "bg-background-dark pt-6 tablet:pt-12";
      break;
    case "tertiary":
      style = "pt-4 tablet:pt-8";
      break;
  }

  return (
    <div
      className={`${style} spacer transition-smooth px-2 pb-28 overflow-x-hidden tablet:px-0`}>
      {children}
    </div>
  );
};

export default Content;

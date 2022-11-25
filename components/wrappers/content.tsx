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
        "-mt-[100px] tablet:-mt-[400px] laptop:-mt-[650px] desktop:-mt-[850px]";
      break;
    case "secondary":
      break;
    case "tertiary":
      break;
  }

  return (
    <div
      className={`${style} transition-smooth content px-4 overflow-x-hidden tablet:px-0`}>
      {children}
    </div>
  );
};

export default Content;

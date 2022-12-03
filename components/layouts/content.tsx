import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  isSpacerOnly?: boolean;
};

const Content = ({ children, variant, isSpacerOnly = false }: Props) => {
  let style = "";

  switch (variant) {
    // With media logo
    case "primary":
      style =
        "-mt-[100px] tablet:-mt-[400px] laptop:-mt-[650px] desktop:-mt-[800px]";
      break;
    // Stack section
    case "secondary":
      style = "bg-background-dark pt-6 tablet:pt-12 pb-28 tablet:pb-12";
      break;
    // Example search with custom padding top, Also if there is no cover/logo or content on top
    case "tertiary":
      style = "pt-4 tablet:pt-8 pb-28 tablet:pb-12";
      break;
  }

  // Only apply when primary is passed
  if (isSpacerOnly) {
    return (
      <div className="relative space-y-6 bg-background-dark pb-28 tablet:space-y-12 tablet:pb-12">
        {children}
      </div>
    );
  }

  return (
    <div
      className={`${style} transition-smooth space-y-6 px-2 overflow-x-hidden tablet:space-y-12 tablet:px-0`}>
      {children}
    </div>
  );
};

export default Content;

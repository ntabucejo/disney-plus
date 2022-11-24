import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Content = ({ children }: Props) => {
  return (
    <div className="transition-smooth tablet:-mt-[250px] laptop:-mt-[450px] desktop:-mt-[600px]">
      {children}
    </div>
  );
};

export default Content;

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Content = ({ children }: Props) => {
  return (
    <div className="transition-smooth tablet:-mt-[200px] laptop:-mt-[400px] desktop:-mt-[600px]">
      {children}
    </div>
  );
};

export default Content;

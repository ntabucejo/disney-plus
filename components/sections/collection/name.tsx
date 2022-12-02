import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Name = ({ children }: Props) => {
  return <span className="font-semibold tablet:text-2xl">{children}</span>;
};

export default Name;

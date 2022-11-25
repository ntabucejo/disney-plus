import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Explore = ({ children }: Props) => {
  return (
    <section className="relative bg-background-dark pb-12 overflow-x-hidden">
      <div className="space-y-6 tablet:space-y-12">{children}</div>
    </section>
  );
};

export default Explore;

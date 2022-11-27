import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Browse = ({ children }: Props) => {
  return (
    <section className="space-y-3 tablet:space-y-4">
      <ul className="grid gap-x-2 gap-y-8 tablet:grid-cols-[repeat(2,1fr)] tala:grid-cols-[repeat(3,1fr)] laptop:grid-cols-[repeat(4,1fr)] desktop:grid-cols-[repeat(5,1fr)]">
        {children}
      </ul>
    </section>
  );
};

export default Browse;

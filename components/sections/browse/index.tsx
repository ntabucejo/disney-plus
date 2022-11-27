import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

const Browse = ({ children, title }: Props) => {
  return (
    <section className="space-y-3 pb-12 tablet:space-y-4">
      <strong className="tablet:text-2xl">{title}</strong>
      <ul className="grid gap-x-2 gap-y-8 tablet:grid-cols-[repeat(2,1fr)] tala:grid-cols-[repeat(3,1fr)] laptop:grid-cols-[repeat(4,1fr)] desktop:grid-cols-[repeat(5,1fr)]">
        {children}
      </ul>
    </section>
  );
};

export default Browse;

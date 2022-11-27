import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isOnQuery: boolean;
};

const Browse = ({ children, isOnQuery }: Props) => {
  if (!isOnQuery) {
    return (
      <section>
        {/* Show on tablet */}
        <ul className="hidden gap-2 tablet:grid tablet:grid-cols-[repeat(4,1fr)] tala:grid-cols-[repeat(5,1fr)] laptop:grid-cols-[repeat(6,1fr)] desktop:grid-cols-[repeat(8,1fr)]">
          {children}
        </ul>
        {/* Show on mobile */}
        <ul className="space-y-2 tablet:hidden">{children}</ul>
      </section>
    );
  }

  return (
    <section>
      <ul className="grid grid-cols-[repeat(2,1fr)] gap-x-2 gap-y-4 tala:grid-cols-[repeat(3,1fr)] laptop:grid-cols-[repeat(4,1fr)] desktop:grid-cols-[repeat(5,1fr)]">
        {children}
      </ul>
    </section>
  );
};

export default Browse;

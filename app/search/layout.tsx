import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="transition-smooth space-y-12 px-4 pt-4 tablet:pr-6 tablet:pt-6 tablet:pl-0">
      <form className="flex items-center gap-4 rounded bg-card-dark px-5 py-3">
        <MagnifyingGlassIcon className="h-6 w-6" />
        <input
          type="text"
          placeholder="Search Movies and Series "
          className="h-full w-full bg-transparent focus:outline-none"
        />
      </form>
      {children}
    </div>
  );
};

export default Layout;

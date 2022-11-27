import type { ReactNode } from "react";
import Searchbar from "../../components/sections/searchbar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="transition-smooth space-y-6 px-4 pt-4 tablet:pr-6 tablet:pt-6 tablet:pl-0">
      <Searchbar />
      {children}
    </div>
  );
};

export default Layout;

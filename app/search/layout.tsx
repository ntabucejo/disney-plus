import type { ReactNode } from "react";
import Searchbar from "../../components/sections/searchbar";
import Content from "../../components/wrappers/content";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="transition-smooth space-y-4 pt-4 tablet:pr-6 tablet:pt-6">
      <Content variant="secondary">
        <Searchbar />
        {children}
      </Content>
    </div>
  );
};

export default Layout;

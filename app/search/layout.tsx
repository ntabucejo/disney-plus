import type { ReactNode } from "react";
import Searchbar from "../../components/sections/searchbar";
import Content from "../../components/wrappers/content";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Content variant="tertiary">
      <Searchbar />
      {children}
    </Content>
  );
};

export default Layout;

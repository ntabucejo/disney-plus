import type { ReactNode } from "react";
import Collection from "../../components/sections/collection";
import Searchbar from "../../components/sections/searchbar";
import Content from "../../components/layouts/content";
import api from "../../library/api";

type Props = {
  children: ReactNode;
};

const Layout = async ({ children }: Props) => {
  const popularSearch = await api.get.medias.group({
    name: "top-rated",
    type: "movies",
    page: Math.floor(Math.random() * 20) + 5,
  });

  return (
    <Content variant="tertiary">
      <Searchbar />
      <Collection.Portrait name="Popular Searches" medias={popularSearch} />
      {children}
    </Content>
  );
};

export default Layout;

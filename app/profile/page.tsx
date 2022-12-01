import Cover from "../../components/sections/cover";
import Explore from "../../components/sections/explore";
import Collection from "../../components/sections/explore/collection";
import User from "../../components/sections/user";
import Content from "../../components/wrappers/content";
import api from "../../library/api";

const Page = async () => {
  const popularMovies = await api.get.medias.group({
    name: "popular",
    type: "movies",
    page: 1,
  });
  const popularSeries = await api.get.medias.group({
    name: "popular",
    type: "series",
    page: 1,
  });

  return (
    <>
      <Cover company="disney-plus" />
      <Content variant="secondary">
        {/* @ts-ignore */}
        <User />
        <Explore>
          <Collection title="Movies for you" medias={popularMovies} />
          <Collection title="Series for you" medias={popularSeries} />
        </Explore>
      </Content>
    </>
  );
};

export default Page;

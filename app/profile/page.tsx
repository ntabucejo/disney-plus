import Collection from "../../components/sections/collection";
import Cover from "../../components/sections/cover";
import User from "../../components/sections/user";
import Content from "../../components/wrappers/content";
import shuffleMedias from "../../helpers/shuffle-medias";
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

  const popularMedias = shuffleMedias([...popularMovies, ...popularSeries]);

  return (
    <>
      <Cover company="disney-plus" />
      <Content variant="secondary">
        {/* @ts-ignore */}
        <User />
        <Collection.Landscape title="Just for you" medias={popularMedias} />
      </Content>
    </>
  );
};

export default Page;

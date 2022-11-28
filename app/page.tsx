import Billboard from "../components/sections/billboard";
import Showcase from "../components/sections/showcase";
import Franchise from "../components/sections/franchise";
import Content from "../components/wrappers/content";
import Explore from "../components/sections/explore";
import api from "../library/api";
import Collection from "../components/sections/explore/collection";
import shuffleMedias from "../helpers/shuffle-medias";

const Page = async () => {
  const spotlightMedia = await api.get.media.spotlight({ type: "all" });
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
  // New to Disney+
  const nowPlayingMovies = await api.get.medias.group({
    name: "now-playing",
    type: "movies",
    page: 1,
  });
  const airingTodaySeries = await api.get.medias.group({
    name: "airing-today",
    type: "series",
    page: 1,
  });
  const newToDisneyPlusMedias = shuffleMedias([
    ...nowPlayingMovies,
    ...airingTodaySeries,
  ]);
  // Featured Marvel
  const ironManMedias = await api.get.medias.search({
    query: "iron man",
  });
  const avengersMedias = await api.get.medias.search({
    query: "avengers",
  });
  const spiderManMedias = await api.get.medias.search({
    query: "spider man",
  });
  const featuredMarvelMedias = shuffleMedias([
    ...ironManMedias,
    ...avengersMedias,
    ...spiderManMedias,
  ]);
  const pixarMedias = await api.get.medias.search({
    query: "pixar",
  });
  const disneyMedias = await api.get.medias.search({
    query: "disney",
  });
  const starwarsMedias = await api.get.medias.search({
    query: "star wars",
  });

  return (
    <>
      {/* @ts-ignore */}
      <Billboard media={spotlightMedia} />
      <Content variant="primary">
        {/* @ts-ignore */}
        <Showcase media={spotlightMedia} isMediaSelected={false} />
        <div className="content bg-background-dark">
          <Franchise />
          <Explore>
            <Collection title="New to Disney+" medias={newToDisneyPlusMedias} />
            <Collection title="Featured Marvel" medias={featuredMarvelMedias} />
            <Collection title="Disney Originals" medias={disneyMedias} />
            <Collection title="Popular Movies" medias={popularMovies} />
            <Collection title="Popular Series" medias={popularSeries} />
            <Collection title="Featured Starwars" medias={starwarsMedias} />
            <Collection title="Best of Pixar" medias={pixarMedias} />
          </Explore>
        </div>
      </Content>
    </>
  );
};

export default Page;

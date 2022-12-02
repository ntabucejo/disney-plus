import Fade from "../../components/elements/fade";
import Billboard from "../../components/sections/billboard";
import Collection from "../../components/sections/collection";
import Showcase from "../../components/sections/showcase";
import Content from "../../components/wrappers/content";
import shuffleMedias from "../../helpers/shuffle-medias";
import api from "../../library/api";

const Page = async () => {
  const spotlightMedia = await api.get.media.spotlight({ type: "movies" });
  const popularMovies = await api.get.medias.group({
    name: "popular",
    type: "movies",
    page: 1,
  });
  const upcomingMovies = await api.get.medias.group({
    name: "upcoming",
    type: "movies",
    page: 1,
  });
  const topRatedMovies = await api.get.medias.group({
    name: "top-rated",
    type: "movies",
    page: 1,
  });
  const nowPlayingMovies = await api.get.medias.group({
    name: "now-playing",
    type: "movies",
    page: 1,
  });
  // Trending Movies
  const trendingMoviesToday = await api.get.medias.trending({
    type: "movies",
    time: "day",
  });
  const trendingMoviesThisWeek = await api.get.medias.trending({
    type: "movies",
    time: "week",
  });
  const trendingMedias = shuffleMedias([
    ...trendingMoviesToday,
    ...trendingMoviesThisWeek,
  ]);

  return (
    <>
      {/* @ts-ignore */}
      <Billboard media={spotlightMedia} />
      <Content variant="primary">
        {/* @ts-ignore */}
        <Showcase media={spotlightMedia} isMediaSelected={false} />
        <div className="content relative bg-background-dark">
          <Fade />
          <Collection.Portrait name="Trending Movies" medias={trendingMedias} />
          <Collection.Portrait name="Now Showing" medias={nowPlayingMovies} />
          <Collection.Portrait name="Upcoming Movies" medias={upcomingMovies} />
          <Collection.Portrait name="Popular Movies" medias={popularMovies} />
          <Collection.Portrait
            name="Top Rated Movies"
            medias={topRatedMovies}
          />
        </div>
      </Content>
    </>
  );
};

export default Page;

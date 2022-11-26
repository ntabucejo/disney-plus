import Billboard from "../components/sections/billboard";
import Showcase from "../components/sections/showcase";
import Franchise from "../components/sections/franchise";
import Content from "../components/wrappers/content";
import Explore from "../components/sections/explore";
import api from "../library/api";
import Collection from "../components/sections/explore/collection";

const Page = async () => {
  const media = await api.get.media.spotlight({ type: "all" });

  const trendingMoviesToday = await api.get.medias.trending({
    type: "movies",
    time: "day",
  });
  const trendingMoviesThisWeek = await api.get.medias.trending({
    type: "movies",
    time: "week",
  });
  const popularMovies = await api.get.medias.group({
    name: "popular",
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
  const upcomingMovies = await api.get.medias.group({
    name: "upcoming",
    type: "movies",
    page: 1,
  });
  const trendingSeriesToday = await api.get.medias.trending({
    type: "series",
    time: "day",
  });
  const trendingSeriesThisWeek = await api.get.medias.trending({
    type: "series",
    time: "week",
  });
  const popularSeries = await api.get.medias.group({
    name: "popular",
    type: "series",
    page: 2,
  });
  const topRatedSeries = await api.get.medias.group({
    name: "top-rated",
    type: "series",
    page: 1,
  });
  const onTheAirSeries = await api.get.medias.group({
    name: "on-the-air",
    type: "series",
    page: 1,
  });
  const airingTodaySeries = await api.get.medias.group({
    name: "airing-today",
    type: "series",
    page: 1,
  });

  return (
    <>
      {/* @ts-ignore */}
      <Billboard media={media} />
      <Content variant="primary">
        {/* @ts-ignore */}
        <Showcase media={media} />
        <div className="content bg-background-dark">
          <Franchise />
          <Explore>
            <Collection
              title="Trending Movies Today"
              medias={trendingMoviesToday}
            />
            <Collection
              title="Trending This Week"
              medias={trendingMoviesThisWeek}
            />
            <Collection title="Now Playing" medias={nowPlayingMovies} />
            <Collection title="Upcoming Movies" medias={upcomingMovies} />
            <Collection title="Popular Movies" medias={popularMovies} />
            <Collection title="Top Rated Series" medias={topRatedSeries} />
            <Collection
              title="Trending Series Today"
              medias={trendingSeriesToday}
            />
            <Collection
              title="Trending Series This Week"
              medias={trendingSeriesThisWeek}
            />
            <Collection title="Top Rated Movies" medias={topRatedMovies} />
            <Collection title="Series On The Air" medias={onTheAirSeries} />
            <Collection title="Popular Series" medias={popularSeries} />
            <Collection
              title="Airing Series Today"
              medias={airingTodaySeries}
            />
          </Explore>
        </div>
      </Content>
    </>
  );
};

export default Page;

import Fade from "../../components/elements/fade";
import Billboard from "../../components/sections/billboard";
import Explore from "../../components/sections/explore";
import Collection from "../../components/sections/explore/collection";
import Showcase from "../../components/sections/showcase";
import Content from "../../components/wrappers/content";
import api from "../../library/api";

const Page = async () => {
  const media = await api.get.media.spotlight();

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

  return (
    <>
      {/* @ts-ignore */}
      <Billboard media={media} />
      <Content variant="primary">
        {/* @ts-ignore */}
        <Showcase media={media} />
        <div className="content relative bg-background-dark">
          <Fade />
          <Explore>
            <Collection title="Trending Today" medias={trendingMoviesToday} />
            <Collection
              title="Trending This Week"
              medias={trendingMoviesThisWeek}
            />
            <Collection title="Now Playing" medias={nowPlayingMovies} />
            <Collection title="Upcoming" medias={upcomingMovies} />
            <Collection title="Popular" medias={popularMovies} />
            <Collection title="Top Rated" medias={topRatedMovies} />
          </Explore>
        </div>
      </Content>
    </>
  );
};

export default Page;

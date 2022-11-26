import Billboard from "../components/sections/billboard";
import Showcase from "../components/sections/showcase";
import Franchise from "../components/sections/franchise";
import Content from "../components/wrappers/content";
import Explore from "../components/sections/explore";
import api from "../library/api";
import Collection from "../components/sections/explore/collection";

const Page = async () => {
  const media = await api.get.media.spotlight();

  const popularMovies = await api.get.medias.group({
    name: "popular",
    type: "movie",
    page: 1,
  });
  const topRatedMovies = await api.get.medias.group({
    name: "top-rated",
    type: "movie",
    page: 2,
  });
  const nowPlayingMovies = await api.get.medias.group({
    name: "now-playing",
    type: "movie",
    page: 3,
  });
  const trendingMoviesToday = await api.get.medias.trending({
    type: "movie",
    time: "day",
  });
  const trendingMoviesThisWeek = await api.get.medias.trending({
    type: "movie",
    time: "week",
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
            <Collection title="Trending Today" medias={trendingMoviesToday} />
            <Collection
              title="Trending This Week"
              medias={trendingMoviesThisWeek}
            />
            <Collection title="Now Playing" medias={nowPlayingMovies} />
            <Collection title="Popular" medias={popularMovies} />
            <Collection title="Top Rated" medias={topRatedMovies} />
          </Explore>
        </div>
      </Content>
    </>
  );
};

export default Page;

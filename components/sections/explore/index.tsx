import { use } from "react";
import api from "../../../library/api";
import Collection from "./collection";

const Explore = () => {
  const popularMovies = use(api.get.movies.group({ name: "popular", page: 1 }));
  const topRatedMovies = use(
    api.get.movies.group({ name: "top-rated", page: 2 })
  );
  const nowPlayingMovies = use(
    api.get.movies.group({ name: "now-playing", page: 3 })
  );
  const trendingToday = use(api.get.movies.trending({ time: "day" }));
  const trendingThisWeek = use(api.get.movies.trending({ time: "week" }));

  return (
    <section className="relative bg-background-dark pb-12">
      <div className="space-y-12">
        <Collection title="Trending Today" movies={trendingToday.slice(0, 8)} />
        <Collection
          title="Trending This Week"
          movies={trendingThisWeek.slice(0, 8)}
        />
        <Collection title="Now Playing" movies={nowPlayingMovies.slice(0, 8)} />
        <Collection title="Popular" movies={popularMovies.slice(0, 8)} />
        <Collection title="Top Rated" movies={topRatedMovies.slice(0, 8)} />
      </div>
    </section>
  );
};

export default Explore;

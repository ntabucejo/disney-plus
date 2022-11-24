import { use } from "react";
import api from "../../../library/api";
import Collection from "./collection";

const Explore = () => {
  const popularMovies = use(api.get.movies({ group: "popular", page: 1 }));
  const topRatedMovies = use(api.get.movies({ group: "top-rated", page: 1 }));

  return (
    <section className="relative bg-background-dark pb-12">
      <div className="space-y-12">
        <Collection title="Popular" movies={popularMovies.slice(0, 8)} />
        <Collection title="Top Rated" movies={topRatedMovies.slice(0, 8)} />
      </div>
    </section>
  );
};

export default Explore;

import type { Movie } from "../../../types";
import Card from "./card";

type Props = {
  title: string;
  movies: Movie[];
};

const Collection = ({ title, movies }: Props) => {
  return (
    <div className="space-y-4">
      <strong className="tablet:text-2xl">{title}</strong>
      <ul className="grid grid-flow-col gap-2 tablet:grid-cols-[repeat(4,1fr)] laptop:grid-cols-[repeat(6,1fr)] desktop:grid-cols-[repeat(8,1fr)]">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`
            ${index < 3 ? "" : "hidden"}
            ${index < 4 ? "tablet:block" : "hidden"} 
            ${index < 6 ? "laptop:block" : "hidden"}  
            ${index < 8 ? "desktop:block" : "hidden"}`}>
            <Card movie={movie} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Collection;

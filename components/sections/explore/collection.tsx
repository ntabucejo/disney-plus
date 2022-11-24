import type { Movie } from "../../../types";
import Card from "./card";

type Props = {
  title: string;
  movies: Movie[];
};

const Collection = ({ title, movies }: Props) => {
  return (
    <div className="space-y-4">
      <strong className="text-2xl">{title}</strong>
      <ul className="grid grid-cols-[repeat(8,1fr)] gap-2 overflow-x-auto">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default Collection;

import Image from "next/image";
import type { Movie } from "../../../types";

type Props = {
  movie: Movie;
};

const Card = ({ movie }: Props) => {
  return (
    <li className={`relative aspect-[79/105] overflow-hidden rounded`}>
      <Image
        src={movie.image.poster!}
        fill
        alt="Cover"
        className="object-cover"
      />
    </li>
  );
};

export default Card;

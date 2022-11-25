import Image from "next/image";
import type { Media } from "../../../types";

type Props = {
  movie: Media;
};

const Card = ({ movie }: Props) => {
  return (
    <li
      className={`relative aspect-[79/105] w-28 overflow-hidden rounded tablet:w-auto`}>
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

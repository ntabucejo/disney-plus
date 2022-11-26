import Image from "next/image";
import type { Media } from "../../../types";

type Props = {
  media: Media;
};

const Card = ({ media }: Props) => {
  return (
    <li
      className={`relative aspect-[79/105] w-28 overflow-hidden rounded tablet:w-auto`}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${media.image.poster!}`}
        fill
        alt="Cover"
        className="object-cover"
      />
    </li>
  );
};

export default Card;

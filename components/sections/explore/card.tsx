import Image from "next/image";
import Link from "next/link";
import type { Media } from "../../../types";

type Props = {
  media: Media;
};

const Card = ({ media }: Props) => {
  return (
    <Link
      href={`/${media.type}/${media.id}`}
      className="relative block aspect-[79/105] w-28 overflow-hidden rounded tablet:w-auto">
      <Image
        src={`https://image.tmdb.org/t/p/w500${media.image.poster!}`}
        fill
        alt="Cover"
        className="object-cover"
      />
    </Link>
  );
};

export default Card;

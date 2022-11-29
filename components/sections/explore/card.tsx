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
      <div className="absolute inset-0 animate-pulse bg-card-dark" />
      <Image
        src={`https://image.tmdb.org/t/p/w500${media.image.poster!}`}
        fill
        sizes="350px"
        alt={media.title!}
        blurDataURL={`https://image.tmdb.org/t/p/w500${media.image.poster!}`}
        placeholder="blur"
        className="transition-smooth object-cover hover:brightness-[130%]"
      />
    </Link>
  );
};

export default Card;

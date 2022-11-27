import Image from "next/image";
import Link from "next/link";
import humanizeRuntime from "../../../helpers/humanize-runtime";
import api from "../../../library/api";
import type { Media } from "../../../types";

type Props = {
  media: Media;
  isOnQuery: boolean;
};

const Card = async ({ media, isOnQuery }: Props) => {
  const type = media.type! as string;
  const id = media.id;
  const measure = await api.get.media.measure({ type, id });

  if (!isOnQuery) {
    return (
      <>
        {/* Show on tablet */}
        <li>
          <Link href={`/${media.type}/${media.id}`}>
            <div className="relative hidden aspect-[79/105] overflow-hidden rounded tablet:block">
              <Image
                src={`https://image.tmdb.org/t/p/w500${media.image.poster!}`}
                alt={media.title!}
                fill
                className="transition-smooth object-cover hover:brightness-[130%]"
              />
            </div>
          </Link>
        </li>
        {/* Show on mobile */}
        <li className="tablet:hidden">
          <Link
            href={`/${media.type}/${media.id}`}
            className="group flex items-center gap-4">
            <div className="relative aspect-video w-24 flex-none overflow-hidden rounded">
              <Image
                src={`https://image.tmdb.org/t/p/w500${media.image.backdrop!}`}
                alt={media.title!}
                fill
                className="transition-smooth object-cover group-hover:brightness-[130%]"
              />
            </div>
            <p className="text-xs font-semibold">{media.title}</p>
          </Link>
        </li>
      </>
    );
  }

  return (
    <li>
      <Link href={`/${media.type}/${media.id}`} className="space-y-2">
        <div className="group relative aspect-video overflow-hidden rounded">
          <Image
            src={`https://image.tmdb.org/t/p/w500${media.image.backdrop!}`}
            alt={media.title!}
            fill
            className="transition-smooth object-cover group-hover:brightness-[130%]"
          />
        </div>
        <div className="relative z-10 pr-4 pb-2">
          <p className="text-xs font-semibold tablet:text-base">
            {media.title}
          </p>
          <small className="font-semibold text-gray-500">
            {media.releasedAt?.slice(0, 4)
              ? media.releasedAt?.slice(0, 4)
              : "New"}{" "}
            •{" "}
            {type === "movies"
              ? humanizeRuntime(measure)
              : `${measure} Seasons`}
          </small>
        </div>
      </Link>
    </li>
  );
};

export default Card;

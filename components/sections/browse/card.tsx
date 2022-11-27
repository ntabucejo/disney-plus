import Image from "next/image";
import Link from "next/link";
import humanizeRuntime from "../../../helpers/humanize-runtime";
import api from "../../../library/api";
import type { Media } from "../../../types";

type Props = {
  media: Media;
};

const Card = async ({ media }: Props) => {
  const type = media.type! as string;
  const id = media.id;
  const measure = await api.get.media.measure({ type, id });

  return (
    <>
      {/* Show on tablet */}
      <li className="hidden space-y-2 tablet:block">
        <Link href={`/${media.type}/${media.id}`}>
          <div className="group relative aspect-video overflow-hidden rounded">
            <Image
              src={`https://image.tmdb.org/t/p/w500${media.image.backdrop!}`}
              alt={media.title!}
              fill
              className="transition-smooth object-cover group-hover:brightness-[130%]"
            />
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background-dark to-transparent" />
          </div>
          <div className="relative z-10 -mt-6 px-4 pb-2">
            <p className="font-semibold">{media.title}</p>
            <small>
              <p className="font-semibold">
                {media.releasedAt?.slice(0, 4)
                  ? media.releasedAt?.slice(0, 4)
                  : "New"}{" "}
                •{" "}
                {type === "movies"
                  ? humanizeRuntime(measure)
                  : `${measure} Seasons`}
              </p>
            </small>
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
};

export default Card;

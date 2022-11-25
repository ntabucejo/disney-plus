import { MinusSmallIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { use } from "react";
import api from "../../../library/api";
import type { Media } from "../../../types";
import Button from "../../elements/button";
import convertLanguage from "../../../helpers/convert-language";

type Props = {
  media: Media;
};

const Showcase = ({ media }: Props) => {
  const logo = use(api.get.media.logo({ type: "movie", id: media.id }))!;
  const language = convertLanguage(media.language!.original!);

  return (
    <section className="space-y-4 tablet:max-w-md">
      <div className="relative aspect-video w-full">
        <Image
          src={logo.image!}
          alt={media.title!}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex items-center gap-1 text-xs tablet:gap-2 tablet:text-base">
        <p className="font-semibold">
          {media.releasedAt?.slice(0, 4)} • 1h 59m • {language?.en.name} •
        </p>
        <div className="rounded bg-rated-dark px-2 py-0.5 font-semibold tablet:py-0">
          PG
        </div>
      </div>
      <p className="text-sm tablet:hidden desktop:block desktop:text-base">
        {media.overview!.slice(0, 100)}
      </p>
      <ul className="flex items-center gap-2 text-xs font-semibold tablet:text-base">
        <li>Fantasy</li>
        <MinusSmallIcon className="h-6 w-6 rotate-90" />
        <li>Family</li>
        <MinusSmallIcon className="h-6 w-6 rotate-90" />
        <li>Comedy</li>
      </ul>
      <div className="flex gap-4">
        <Button variant={{ name: "primary", type: "play" }} />
        <Button variant={{ name: "primary", type: "save" }} />
      </div>
    </section>
  );
};

export default Showcase;

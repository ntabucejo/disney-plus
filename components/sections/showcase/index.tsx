import Image from "next/image";
import api from "../../../library/api";
import type { Media } from "../../../types";
import Button from "../../elements/button";
import convertLanguage from "../../../helpers/convert-language";
import humanizeRuntime from "../../../helpers/humanize-runtime";

type Props = {
  media: Media;
};

const Showcase = async ({ media }: Props) => {
  const logo = await api.get.media.logo({ type: "movie", id: media.id });
  const measure = await api.get.media.measure({ type: "movie", id: media.id });
  const language = convertLanguage(media.language!.original!);

  return (
    <section className="space-y-6 tablet:max-w-md">
      {/* Logo */}
      <div className="relative tablet:aspect-square">
        <div
          style={{ aspectRatio: logo?.aspectRatio }}
          className="relative bottom-0 w-full tablet:absolute">
          <Image
            src={logo!.image!}
            alt={media.title!}
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
      <div className="space-y-4">
        {/* Details */}
        <div className="flex items-center gap-1 text-xs tablet:gap-2 tablet:text-base">
          <p className="font-semibold">
            {media.releasedAt?.slice(0, 4)} • {humanizeRuntime(measure)} •{" "}
            {language?.en.name ? language?.en.name : "English"} •
          </p>
          <div className="rounded bg-rated-dark px-2 py-0.5 font-semibold tablet:py-0">
            {media.isForAdult ? "18+" : "PG"}
          </div>
        </div>
        {/* Overview */}
        <div className="overflow-y-auto scrollbar-none tablet:max-h-[72px]">
          <p className="text-sm tablet:text-base">{media.overview!}</p>
        </div>
      </div>
      {/* Actions */}
      <div className="flex gap-4">
        <Button variant={{ name: "primary", type: "play" }} />
        <Button variant={{ name: "primary", type: "save" }} />
      </div>
    </section>
  );
};

export default Showcase;

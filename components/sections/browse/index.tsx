import type { Media } from "../../../types";
import Card from "./card";

type Props = {
  title: string;
  medias: Media[];
  variant: "primary" | "secondary";
};

const Browse = ({ title, medias, variant }: Props) => {
  if (variant !== "primary") {
    return (
      <section className="space-y-3 tablet:space-y-4">
        <strong className="tablet:text-2xl">{title}</strong>
        {/* Show on tablet */}
        <ul className="hidden gap-2 tablet:grid tablet:grid-cols-[repeat(3,1fr)] tala:grid-cols-[repeat(4,1fr)] laptop:grid-cols-[repeat(5,1fr)] desktop:grid-cols-[repeat(7,1fr)]">
          {medias.map((media) => (
            // @ts-ignore
            <Card key={media.id} media={media} variant={variant} />
          ))}
        </ul>
        {/* Show on mobile */}
        <ul className="space-y-2 tablet:hidden">
          {medias.map((media) => (
            // @ts-ignore
            <Card key={media.id} media={media} variant={variant} />
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section className="space-y-3 tablet:space-y-4">
      <strong className="tablet:text-2xl">{title}</strong>
      <ul className="grid grid-cols-[repeat(2,1fr)] gap-x-2 gap-y-4 tala:grid-cols-[repeat(3,1fr)] laptop:grid-cols-[repeat(4,1fr)] desktop:grid-cols-[repeat(5,1fr)]">
        {medias.map((media) => (
          // @ts-ignore
          <Card key={media.id} media={media} variant={variant} />
        ))}
      </ul>
    </section>
  );
};

export default Browse;

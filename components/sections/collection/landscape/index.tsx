import type { Media } from "../../../../types";
import Name from "../name";
import Card from "./card";

type Props = {
  name: string;
  medias: Media[];
  isOnlyGrid?: boolean;
};

const Landscape = ({ name, medias, isOnlyGrid = false }: Props) => {
  return (
    <section className="space-y-3 tablet:space-y-4">
      <Name>{name}</Name>
      <ul
        className={`${
          isOnlyGrid ? "grid" : "hidden tablet:grid"
        } grid-cols-[repeat(2,1fr)] gap-x-2 gap-y-4 tala:grid-cols-[repeat(3,1fr)] laptop:grid-cols-[repeat(4,1fr)] desktop:grid-cols-[repeat(5,1fr)]`}>
        {medias.map((media) => (
          // @ts-ignore
          <Card key={media.id} media={media} isOnlyGrid={isOnlyGrid} />
        ))}
      </ul>
      <ul className={`${isOnlyGrid ? "hidden" : ""} space-y-2 tablet:hidden`}>
        {medias.map((media) => (
          // @ts-ignore
          <Card key={media.id} media={media} isOnlyGrid={isOnlyGrid} />
        ))}
      </ul>
    </section>
  );
};

export default Landscape;

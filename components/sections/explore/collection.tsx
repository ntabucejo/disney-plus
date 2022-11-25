import type { Media } from "../../../types";
import Card from "./card";

type Props = {
  title: string;
  medias: Media[];
};

const Collection = ({ title, medias }: Props) => {
  return (
    <div className="space-y-3 tablet:space-y-4">
      <strong className="tablet:text-2xl">{title}</strong>
      {/* Show on tablet */}
      <ul className="hidden grid-flow-col gap-2 tablet:grid tablet:grid-cols-[repeat(4,1fr)] laptop:grid-cols-[repeat(6,1fr)] desktop:grid-cols-[repeat(8,1fr)]">
        {medias.map((media, index) => (
          <div
            key={media.id}
            className={`
            ${index < 3 ? "" : "hidden"}
            ${index < 4 ? "tablet:block" : "hidden"} 
            ${index < 6 ? "laptop:block" : "hidden"}  
            ${index < 8 ? "desktop:block" : "hidden"}`}>
            <Card media={media} />
          </div>
        ))}
      </ul>
      {/* Show on mobile */}
      <ul className="flex gap-1 overflow-x-scroll scrollbar-hide tablet:hidden">
        {medias.map((media) => (
          <div key={media.id}>
            <Card media={media} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Collection;

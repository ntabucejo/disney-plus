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
      <ul className="relative hidden grid-flow-col gap-2 tablet:-mr-[20%] tablet:grid tablet:grid-cols-[repeat(4,1fr)] laptop:-mr-[12%] laptop:grid-cols-[repeat(6,1fr)] desktop:-mr-[8%] desktop:grid-cols-[repeat(8,1fr)]">
        {medias.map((media, index) => (
          <div
            key={media.id}
            className={`
            ${index < 3 ? "" : "hidden"}
            ${index < 4 ? "tablet:block" : "hidden"} 
            ${index < 6 ? "laptop:block" : "hidden"}  
            ${index < 8 ? "desktop:block" : "hidden"} 
            relative`}>
            <Card media={media} />
          </div>
        ))}
        <div className="transition-smooth absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background-dark to-transparent opacity-0 hover:opacity-100" />
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

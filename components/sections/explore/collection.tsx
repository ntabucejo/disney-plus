import { ChevronRightIcon } from "@heroicons/react/24/solid";
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
      <div className="relative">
        <ul className="hidden grid-flow-col gap-2 tablet:-mr-[19%] tablet:grid tablet:grid-cols-[repeat(4,1fr)] tala:-mr-[15%] tala:grid-cols-[repeat(5,1fr)] laptop:-mr-[12%] laptop:grid-cols-[repeat(6,1fr)] desktop:-mr-[8%] desktop:grid-cols-[repeat(8,1fr)]">
          {medias.map((media, index) => (
            <div
              key={media.id}
              className={`
            ${index < 3 ? "" : "hidden"}
            ${index < 4 ? "tablet:block" : "hidden"} 
            ${index < 5 ? "tala:block" : "hidden"} 
            ${index < 6 ? "laptop:block" : "hidden"}  
            ${index < 8 ? "desktop:block" : "hidden"} 
            relative`}>
              <Card media={media} />
            </div>
          ))}
        </ul>
        <div className="transition-smooth group absolute inset-y-0 right-0 z-10 grid cursor-pointer items-center overflow-hidden rounded-tl rounded-bl bg-gradient-to-l from-background-dark to-transparent tablet:w-[11%] tala:w-[8.1%] laptop:w-[6.8%] desktop:w-[5.55%]">
          <div className="transition-smooth absolute inset-0 bg-gradient-to-l from-background-dark to-transparent opacity-0 group-hover:opacity-100" />
          <ChevronRightIcon className="transition-smooth absolute right-[10%] h-6 w-6 text-white opacity-0 group-hover:opacity-100" />
        </div>
      </div>
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

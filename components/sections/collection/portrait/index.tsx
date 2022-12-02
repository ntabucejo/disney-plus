"use client";

import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import useWindowSize from "../../../../hooks/use-window-size";
import type { Media } from "../../../../types";
import Card from "./card";

type Props = {
  title: string;
  medias: Media[];
};

const Portrait = ({ title, medias }: Props) => {
  const [collection, setCollection] = useState(medias);
  const [isOnOrigin, setIsOnOrigin] = useState(true);
  const { width } = useWindowSize();

  const handlePagination = () => {
    if (isOnOrigin) {
      if (width >= 1280) {
        setCollection(medias.slice(6, medias.length));
      } else if (width >= 1024) {
        setCollection(medias.slice(4, medias.length));
      } else if (width >= 840) {
        setCollection(medias.slice(3, medias.length));
      } else if (width >= 640) {
        setCollection(medias.slice(2, medias.length));
      }
      setIsOnOrigin(false);
    } else {
      setCollection(medias);
      setIsOnOrigin(true);
    }
  };

  useEffect(() => {
    if (isOnOrigin) {
      if (width >= 1280) {
        setCollection(medias.slice(0, 8));
      } else if (width >= 1024) {
        setCollection(medias.slice(0, 6));
      } else if (width >= 840) {
        setCollection(medias.slice(0, 5));
      } else if (width >= 640) {
        setCollection(medias.slice(0, 4));
      }
    }
  }, [width, isOnOrigin, medias]);

  return (
    <div className="space-y-3 tablet:space-y-4">
      <strong className="tablet:text-2xl">{title}</strong>
      {/* Show on tablet */}
      <div className="group relative">
        <ul
          className={`${
            isOnOrigin
              ? "tablet:-mr-[19%] tala:-mr-[15%] laptop:-mr-[12%] desktop:-mr-[8%]"
              : "tablet:-ml-[19%] tala:-ml-[15%] laptop:-ml-[12%] desktop:-ml-[8%]"
          } hidden grid-flow-col gap-2 tablet:grid tablet:grid-cols-[repeat(4,1fr)] tala:grid-cols-[repeat(5,1fr)] laptop:grid-cols-[repeat(6,1fr)] desktop:grid-cols-[repeat(8,1fr)]`}>
          {collection.map((media, index) => (
            <li
              key={media.id}
              className={`
                ${index < 3 ? "" : "hidden"}
                ${index < 4 ? "tablet:block" : "hidden"} 
                ${index < 5 ? "tala:block" : "hidden"} 
                ${index < 6 ? "laptop:block" : "hidden"}  
                ${index < 8 ? "desktop:block" : "hidden"} 
                relative`}>
              <Card media={media} />
            </li>
          ))}
        </ul>
        <div
          onClick={handlePagination}
          className={`${
            isOnOrigin ? "right-0 bg-gradient-to-l" : "left-0 bg-gradient-to-r"
          } transition-smooth absolute inset-y-0 z-10 grid items-center overflow-hidden from-background-dark to-transparent tablet:w-[11%] tala:w-[8.1%] laptop:w-[6.8%] desktop:w-[5.55%]`}>
          <div
            className={`${
              isOnOrigin ? "bg-gradient-to-l" : "bg-gradient-to-r"
            } transition-smooth absolute inset-0 from-background-dark to-transparent opacity-0 group-hover:opacity-100`}
          />
          <ChevronRightIcon
            className={`${
              isOnOrigin ? "right-[10%]" : "left-[10%] rotate-180"
            } transition-smooth absolute h-6 w-6 stroke-2 text-white opacity-0 transition-opacity group-hover:opacity-100`}
          />
        </div>
      </div>
      {/* Show on mobile */}
      <ul className="flex gap-1 overflow-x-scroll scrollbar-hide tablet:hidden">
        {medias.map((media) => (
          <li key={media.id}>
            <Card media={media} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portrait;

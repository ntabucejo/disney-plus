import type { Media } from "../types";

const shuffleMedias = (medias: Media[]) => {
  let currentIndex = medias.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [medias[currentIndex], medias[randomIndex]] = [
      medias[randomIndex],
      medias[currentIndex],
    ];
  }

  return medias;
};

export default shuffleMedias;

import type { Media } from "../types";

const shuffleMedias = (medias: Media[]) => {
  let currentIndex = medias.length,
    randomIndex;

  // Randomize medias array
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [medias[currentIndex], medias[randomIndex]] = [
      medias[randomIndex],
      medias[currentIndex],
    ];
  }

  const uniqueIds: any = [];

  // Filter out duplicates medias
  return medias.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.id);
    if (!isDuplicate) {
      uniqueIds.push(element.id);
      return true;
    }
    return false;
  });
};

export default shuffleMedias;

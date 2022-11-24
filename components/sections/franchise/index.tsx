import React from "react";
import Card from "./card";

const Franchise = () => {
  const list = [
    {
      id: 1,
      name: "Disney",
      image: "disney-logo",
      video: "disney-opening",
    },
    {
      id: 2,
      name: "Pixar",
      image: "pixar-logo",
      video: "pixar-opening",
    },
    {
      id: 3,
      name: "Marvel",
      image: "marvel-logo",
      video: "marvel-opening",
    },
    {
      id: 4,
      name: "Starwars",
      image: "starwars-logo",
      video: "starwars-opening",
    },
    {
      id: 5,
      name: "National Geographic",
      image: "national-geographic-logo",
      video: "national-geographic-opening",
    },
    {
      id: 6,
      name: "Star",
      image: "star-logo",
      video: "star-opening",
    },
  ];
  return (
    <section className="pr-4">
      <ul className="grid grid-cols-[repeat(6,1fr)] gap-2 overflow-auto">
        {list.map(({ id, name, image, video }) => (
          <Card key={id} name={name} image={image} video={video} />
        ))}
      </ul>
    </section>
  );
};

export default Franchise;

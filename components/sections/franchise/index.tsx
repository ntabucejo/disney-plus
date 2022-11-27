import React from "react";
import Fade from "../../elements/fade";
import Card from "./card";

const Franchise = () => {
  const list = [
    {
      id: 1,
      name: "disney",
      image: "disney-logo",
      video: "disney-opening",
    },
    {
      id: 2,
      name: "pixar",
      image: "pixar-logo",
      video: "pixar-opening",
    },
    {
      id: 3,
      name: "marvel",
      image: "marvel-logo",
      video: "marvel-opening",
    },
    {
      id: 4,
      name: "starwars",
      image: "starwars-logo",
      video: "starwars-opening",
    },
    {
      id: 5,
      name: "national-geographic",
      image: "national-geographic-logo",
      video: "national-geographic-opening",
    },
    {
      id: 6,
      name: "star",
      image: "star-logo",
      video: "star-opening",
    },
  ];

  return (
    <section className="relative bg-background-dark tablet:pr-4">
      <Fade />
      <ul className="grid grid-cols-[repeat(3,1fr)] gap-1 overflow-auto tablet:grid-cols-[repeat(6,1fr)] tablet:gap-2">
        {list.map(({ id, name, image, video }) => (
          <Card key={id} name={name} image={image} video={video} />
        ))}
      </ul>
    </section>
  );
};

export default Franchise;

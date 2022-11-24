import React from "react";
import Card from "./card";

const Franchise = () => {
  return (
    <section className="pr-4">
      <ul className="grid grid-cols-[repeat(6,1fr)] gap-2 overflow-x-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </section>
  );
};

export default Franchise;

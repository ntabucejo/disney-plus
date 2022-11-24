import React from "react";
import Card from "./card";

const Franchise = () => {
  return (
    <section className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr] gap-2 overflow-x-auto">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default Franchise;

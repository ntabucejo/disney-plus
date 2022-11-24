import Card from "./card";

const Collection = () => {
  return (
    <div className="space-y-4">
      <strong className="text-lg">Movie Title</strong>
      <ul className="grid grid-cols-[repeat(8,1fr)] gap-2 overflow-x-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  );
};

export default Collection;

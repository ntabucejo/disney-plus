import Image from "next/image";

const Card = () => {
  return (
    <li className="relative aspect-[79/105] h-full w-full overflow-hidden rounded">
      <Image
        src="https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
        fill
        alt="Cover"
        className="object-cover"
      />
    </li>
  );
};

export default Card;

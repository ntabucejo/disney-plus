import Image from "next/image";

const Card = () => {
  return (
    <li className="grid aspect-video items-center rounded bg-zinc-900">
      <div className="relative mx-auto h-1/2 w-1/2">
        <Image
          src="/assets/images/disney-plus-logo.svg"
          fill
          alt="Franchise"
          className="object-contain"
        />
      </div>
    </li>
  );
};

export default Card;

import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  image: string;
  video: string;
};

const Card = ({ image, video, name }: Props) => {
  return (
    <li>
      <Link
        href={`/originals/${name}`}
        className="group relative grid aspect-video cursor-pointer items-center overflow-hidden rounded">
        <div className="pointer-events-none relative z-20 mx-auto h-1/2 w-1/2">
          <Image
            src={`/assets/images/${image}.png`}
            fill
            sizes="500px"
            alt={name}
            className="object-contain"
            priority
          />
        </div>
        <div className="transition-smooth absolute inset-0 z-10 hidden bg-card-dark hover:bg-transparent tablet:block" />
        <video className="absolute h-full brightness-50" autoPlay loop muted>
          <source src={`/assets/videos/${video}.mp4`} type="video/mp4" />
        </video>
      </Link>
    </li>
  );
};

export default Card;

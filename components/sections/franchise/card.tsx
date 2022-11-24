import Image from "next/image";

type Props = {
  name: string;
  image: string;
  video: string;
};

const Card = ({ image, video, name }: Props) => {
  return (
    <li className="group relative grid aspect-video cursor-pointer items-center overflow-hidden rounded">
      <div className="pointer-events-none relative z-20 mx-auto h-1/2 w-1/2">
        <Image
          src={`/assets/images/${image}.png`}
          fill
          alt={name}
          className="object-contain"
        />
      </div>
      <div className="transition-smooth absolute inset-0 z-10 bg-card-dark hover:bg-transparent" />
      <video className="absolute h-full brightness-50" autoPlay loop muted>
        <source src={`/assets/videos/${video}.mp4`} type="video/mp4" />
      </video>
    </li>
  );
};

export default Card;

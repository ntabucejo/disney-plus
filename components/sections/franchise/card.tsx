import Image from "next/image";

type Props = {
  name: string;
  image: string;
  video: string;
};

const Card = ({ image, video, name }: Props) => {
  return (
    <li className="group relative z-20 grid aspect-video cursor-pointer items-center overflow-hidden rounded">
      <div className="transition-smooth absolute inset-0 bg-zinc-900 hover:bg-transparent" />
      <div className="pointer-events-none relative mx-auto h-1/2 w-1/2">
        <Image
          src={`/assets/images/${image}.png`}
          fill
          alt={name}
          className="object-contain"
        />
      </div>
      <video
        className="absolute -z-10 h-full brightness-50"
        autoPlay
        loop
        muted>
        <source src={`/assets/videos/${video}.mp4`} type="video/mp4" />
      </video>
    </li>
  );
};

export default Card;

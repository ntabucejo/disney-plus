import Image from "next/image";

type Props = {
  company: string;
  isNoImage?: boolean;
};

const Cover = ({ company, isNoImage }: Props) => {
  return (
    <section className="relative -z-10 grid aspect-[16/4.6] w-full items-center">
      <video className="absolute w-full brightness-110" autoPlay loop muted>
        <source
          src={`/assets/videos/${company}-opening.mp4`}
          type="video/mp4"
        />
      </video>
      {isNoImage ? (
        <div className="relative z-20 mx-auto aspect-video w-[35%]">
          <Image
            src={`/assets/images/${company}-logo.png`}
            alt="Originals"
            fill
            sizes="35%"
            className="object-contain"
          />
        </div>
      ) : null}

      <div className="absolute inset-0 z-10 hidden bg-gradient-to-r from-background-dark to-transparent tablet:block" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark to-transparent" />
    </section>
  );
};

export default Cover;

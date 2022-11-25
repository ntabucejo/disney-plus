import Image from "next/image";

type Props = {
  image: string;
};

const Billboard = ({ image }: Props) => {
  return (
    <section className="sticky -z-10 aspect-video max-h-screen w-full tablet:top-0">
      <Image src={image} fill alt="Showcase" className="object-cover" />
      <div className="absolute inset-0 z-10 hidden bg-gradient-to-r from-background-dark to-transparent tablet:block" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark to-transparent" />
    </section>
  );
};

export default Billboard;

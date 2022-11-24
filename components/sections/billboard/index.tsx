import Image from "next/image";

const Billboard = () => {
  return (
    <section className="sticky top-0 -z-10 aspect-video max-h-screen w-full">
      <Image
        src="https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
        fill
        alt="Showcase"
        className="object-cover"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background-dark to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark to-transparent" />
    </section>
  );
};

export default Billboard;

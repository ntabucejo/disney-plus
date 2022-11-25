type Props = {
  src: string;
};

const Playback = ({ src }: Props) => {
  return (
    <iframe
      className="h-full w-full scale-150"
      src={`${src}/?autoplay=1&mute=1&loop=1&controls=0`}></iframe>
  );
};

export default Playback;

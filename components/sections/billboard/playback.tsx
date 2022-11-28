type Props = {
  src: string;
};

const Playback = ({ src }: Props) => {
  return (
    <iframe
      src={`${src}/?autoplay=1&mute=1&loop=1&controls=0`}
      title="Playback"
      className="h-full w-full scale-150 brightness-110"></iframe>
  );
};

export default Playback;
